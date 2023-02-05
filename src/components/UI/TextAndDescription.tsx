import {FC} from 'react';

interface TextAndDescriptionProps{
    title: string
    description: string
}

export const TextAndDescription: FC<TextAndDescriptionProps> = ({title, description}) => {
    return (
        <div>
            <div className={"font-title text-5xl"}>{title}</div>
            <div className={"mt-7 w-3/4 text-gray-500"}>{description}</div>
        </div>
    );
}
