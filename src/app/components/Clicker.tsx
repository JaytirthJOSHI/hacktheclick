"use client";
import Image from "next/image";
import { useState } from "react"; // tsk jenin this is simi cool acc im surprized lmao

type ClickerProps = {
    onClick: () => void;
};

export default function Clicker({ onClick }: ClickerProps) 
{
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => 
        {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 150);
        
        onClick();
    };

    return (
        <button 
            onClick={handleClick}
            className={`
                hover:scale-110 
                transition-transform 
                duration-200 
                active:scale-95
                ${isClicked ? 'scale-90' : ''}
            `}
        >
            <Image 
                src="/guac_img_geminimade_tee_hee.png" 
                alt="festive guacamol and some other cool stuff fr fr just tust me" 
                width={512} 
                height={512}
                className="transition-transform"
            />
        </button>
    );
}