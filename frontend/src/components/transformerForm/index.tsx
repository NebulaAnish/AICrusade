'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { ResponsiveContainer } from 'recharts';
import MapComponent from '../map';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from '../searchBar';
import useAxios from '@/hooks/useAxios';

const fields = [
    { title: 'Installation date', name: 'createdAt', type: 'date' },
    { title: 'Transformer Type', name: 'type', type: 'text' },
    { title: 'Transformer Model', name: 'model', type: 'text' },
];

type FormData = {
    location: string;
    latitude: number;
    longitude: number;
    createdAt: string;
    type: string;
    model: string;
};

const TransformerForm = () => {
    const [formData, setFormData] = useState<FormData>({
        location: '',
        latitude: 0,
        longitude: 0,
        createdAt: '',
        type: '',
        model: '',
    });
    const [center, setCenter] = useState<[number, number]>([85, 27.1]);
    const [mapSelected, setMapSelected] = useState<boolean>(false);

    const token = process.env.MAPBOX_ACCESS_TOKEN;

    const getPlaceName = async (lat: number, lng: number) => {
        try {
            const res = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${token}`
            );
            const data = await res.json();
            return data.features[0].place_name;
        } catch (err) {
            toast.error(`${err}`)
        }
    };

    const handleClick = (map: any, e: any) => {
        const { lng, lat } = e.lngLat;
        setCenter([lng, lat]);
        getPlaceName(lat, lng).then((location) => {
            setFormData((prevFormData) => ({
                ...prevFormData,
                latitude: lat as number,
                longitude: lng as number,
                location: location,
            }));
        });
        setMapSelected(true);
    };

    const axios = useAxios();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!mapSelected) {
            toast.error('Please select location');
            return;
        }
        if (!formData.createdAt) {
            toast.error('Please select installed date');
            return;
        }

        if (!formData.model || !formData.type) {
            toast.error('Please enter all data');
            return;
        }
        const location = await getPlaceName(formData.latitude, formData.longitude);
        setFormData({ ...formData, location });

        axios
            .post('transformers/', {
                installed_at: getPythonDate(new Date(formData.createdAt)),
                manufacture_type: formData.type,
                transformer_type: formData.model,
                latitude: formData.latitude.toFixed(3),
                longitude: formData.longitude.toFixed(3),
                location,
            })
            .then((res) => {
                console.log(res.data);
                toast.success('Transformer added successfully');
            });
    };

    const handleCenterChange = (center: [number, number], name: string) => {
        const centerRev: [number, number] = center.reverse() as [number, number];
        const locationName = name;
        setCenter(centerRev);
        setFormData({
            ...formData,
            location: locationName,
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getPythonDate = (date: Date): string => {
        const jsDate = new Date(date);
        const isoString = jsDate.toISOString();
        const python_date = isoString.substring(0, 10);
        return python_date;
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className="flex w-[40rem]  h-fit flex-col rounded bg-zinc-300 drop-shadow-xl justify-center items-center relative top-[1rem] left-[10rem]">
                <Toaster />

                <div className="h-[50vh] w-[100%]">
                    <SearchBar onLocationSelect={handleCenterChange} className="absolute z-40 w-[100%]" />
                    <MapComponent
                        handleClick={(map, e) => handleClick(map, e)}
                        center={center}
                        transformers={[]}
                        containerStyle={{ height: '100%', width: '100%', zIndex: '0' }}
                        mapSelected={true}
                        selectedLocation={{ latitude: formData.latitude, longitude: formData.longitude }}
                    />
                </div>
                <div className="flex h-fit w-[100%] flex-col justify-center items-center ">
                    <form className="min-w-100" onSubmit={handleSubmit}>
                        {fields.map((field, index) => (
                            <div className="px-3 py-2 mt-1 w-[32rem]" key={field.title}>
                                <Input
                                    name={field.name}
                                    placeholder={field.title}
                                    onChange={handleChange}
                                    type={field.type}
                                    required
                                />
                            </div>
                        ))}
                        <div className="p-3 ">
                            <Button className="w-fill-available" type="submit">
                                Confirm
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </ResponsiveContainer>
    );
};

export default TransformerForm;
