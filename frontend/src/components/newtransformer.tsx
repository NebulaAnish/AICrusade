'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ResponsiveContainer } from 'recharts';
import MapComponent from './map';
import SearchBar from './searchbar';

const fields = ['Installation date', 'Transformer Type', 'Transformer Model'];
const fieldNames = ['createdAt', 'type', 'model'];

type FormData = {
    name: string;
    latitude: number;
    longitude: number;
    createdAt: string;
    type: string;
    model: string;
};

const TransformerForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        latitude: 0,
        longitude: 0,
        createdAt: '',
        type: '',
        model: '',
    });
    const [center, setCenter] = useState<[number, number]>([85, 27.1]);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleCenterChange = (center: [number, number], name: string) => {
        const centerRev:[number, number] = center.reverse() as [number, number];
        const locationName = name;
        setCenter(centerRev);
        setFormData((prevFormData) => ({
            ...prevFormData,
            name: locationName,
            latitude: centerRev[0],
            longitude: centerRev[1],
        }));
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className="flex w-[40rem]  h-fit flex-col rounded bg-zinc-300 drop-shadow-xl justify-center items-center relative top-[1rem] left-[10rem]">
                <div className="h-[50vh] w-[100%]">
                    <SearchBar onLocationSelect={handleCenterChange} className='absolute z-40 w-[100%]' />
                    <MapComponent
                        center={center}
                        transformers={[]}
                        containerStyle={{ height: '100%', width: '100%', zIndex: '0'}}
                    />
                </div>
                <div className="flex h-fit w-[100%] flex-col justify-center items-center ">
                    <form className="min-w-100" onSubmit={handleSubmit}>
                        {fields.map((field, index) => (
                            <div className="px-3 py-2 mt-1 w-[32rem]" key={field}>
                                <Input name={fieldNames[index]} placeholder={field} onChange={handleChange} required />
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
