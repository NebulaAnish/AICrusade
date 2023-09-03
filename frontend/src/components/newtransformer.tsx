'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ResponsiveContainer } from 'recharts';
import MapComponent from './map';

const fields = ['Installation date', 'Transformer Type', 'Transformer Model'];
const fieldNames = ['createdAt', 'type', 'model'];

type FormData = {
    createdAt: string;
    type: string;
    model: string;
};

const TransformerForm = () => {
    const [formData, setFormData] = useState<FormData>({
        createdAt: '',
        type: '',
        model: '',
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(formData);
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
            <div className="flex w-[50rem]  h-fit flex-col rounded bg-zinc-300 drop-shadow-xl justify-center items-center relative top-[5rem] left-[10rem] transform-[translate(-50%, -50%)]">
                <div className="h-[50vh] w-[100%]">
                    <MapComponent
                        center={[85, 27.1]}
                        transformers={[]}
                        containerStyle={{ height: '100%', width: '100%' }}
                    />
                </div>
                <div className="flex h-fit w-[100%] flex-col justify-center items-center ">
                    <form className="min-w-100" onSubmit={handleSubmit}>
                        {fields.map((field, index) => (
                            <div className="px-3 py-2 mt-1 w-[40rem]" key={field}>
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
