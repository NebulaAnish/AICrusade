import { useState } from 'react';
import { Button } from '@/components/ui/button';
import cn from 'classnames';

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;

interface SideBarPropsI {
    active: number;
    handleButtonClick: (index: number) => void;
    buttons: string[];
}

const Sidebar = ({active, handleButtonClick, buttons}: SideBarPropsI) => {
  return (
    <div className="flex flex-col min-h-screen max-w-[25%] bg-zinc-300 sticky">
        <div className="text-3xl self-center pt-5">
            <p>GridGuardian</p>
        </div>
        <div className="flex flex-col gap-3">
        {buttons.map((button, index) => (
            <div className="p-8 self-center" key={button}>
                <Button className="w-[10rem] p-3 " onClick={() => handleButtonClick(index)} variant={cn({"secondary": index === active}) as ButtonVariant}>{button}</Button>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Sidebar;
