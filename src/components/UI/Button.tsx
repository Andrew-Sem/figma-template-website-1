import {FC} from 'react';

interface ButtonProps{
    title: string
    className?:string
}

export const Button: FC<ButtonProps> = ({title, className}) => {
    return (
        <button className={"min-h-[44px] min-w-[44px] px-2.5 rounded-full text-cyan-600 bg-cyan-500/30 flex items-center justify-center text-base " + className}>
            {title}
        </button>
    );
}
