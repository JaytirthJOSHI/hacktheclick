import Image from "next/image"; // tsk jenin this is simi cool acc im surprized lmao

type ClickerProps = 
{
    onClick:() => void;
};

export default function Clicker ({onClick}: ClickerProps) 
{
return (
    <button onClick={onClick}>
    <image src="/GUAC.jpg" alt="festive guacamol and some other cool stuff fr fr just tust me" width={512} height={512}/>
    </button>
);
};