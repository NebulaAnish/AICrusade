import cn from 'classnames';
import { FormEvent } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const fields = ["Installation date", "Transformer Type", "Transformer Model"];

const TransformerForm = () => {

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
      };

  return (
    <div className='flex h-fit flex-col rounded bg-zinc-300 drop-shadow-xl justify-center items-center px-[1rem] relative top-10 left-10'>
    <div className="h-[50vh] w-[65vw]">
        placeholder
    </div>
    <div className="flex h-fit w-[100%] flex-col justify-center items-center ">
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div className="px-3 py-1 w-[60vw]" key={field}>
                    <Input placeholder={field} />
                </div>
            ))}
            <div className="p-3 ">
                <Button className="w-fill-available" type='submit' >Confirm</Button>
            </div>
        </form>
    </div>
    </div>
  );
};

export default TransformerForm;
