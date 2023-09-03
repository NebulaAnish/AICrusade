import cn from 'classnames';
import { useState, FormEvent, ChangeEvent } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ResponsiveContainer } from 'recharts';

const fields = ["Installation date", "Transformer Type", "Transformer Model"];
const fieldNames = ["createdAt", "type", "model"];

type FormData = {
    createdAt: string;
    type: string;
    model: string;
}

const TransformerForm = () => {
    const [formData, setFormData] = useState<FormData>({
        createdAt: '',
        type: '',
        model: '',
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(formData)
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
    <div className='flex h-fit flex-col rounded bg-zinc-300 drop-shadow-xl justify-center items-center relative top-5 left-5'>
    <div className="h-[50vh] w-[50vw]">
        placeholder
    </div>
    <div className="flex h-fit w-[100%] flex-col justify-center items-center ">
        <form onSubmit={handleSubmit}>
            {fields.map((field, index) => (
                <div className="px-3 py-1 w-[60vw]" key={field}>
                    <Input
                        name={fieldNames[index]} 
                        placeholder={field}
                        onChange={handleChange}
                        required
                    />
                </div>
            ))}
            <div className="p-3 ">
                <Button className="w-fill-available" type='submit' >Confirm</Button>
            </div>
        </form>
    </div>
    </div>
    </ResponsiveContainer>
  );
};

export default TransformerForm;
