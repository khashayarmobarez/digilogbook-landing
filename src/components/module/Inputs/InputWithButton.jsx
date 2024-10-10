

// mui

import Image from "next/image";


const InputWithButton = ({icon, buttonText, placeH, Type, onSubmit, value, onChange, id, isLoading}) => {

    return (
            <div className={` flex relative w-[100%] h-12 px-2`}>
                <span> 
                    <Image
                    src={icon}
                    alt="icon"
                    className="absolute w-5 h-5 top-3 right-4"
                    />
                </span>
                <input
                    value={value}
                    onChange={onChange}
                    id={id}
                    placeholder={placeH}
                    className={`w-[100%] text-xs font-medium pr-8 rounded-r-2xl rounded-l-none bg-primaryLight border border-primaryLightActive`}
                />
                <button disabled={isLoading} onClick={onSubmit} className={` ${isLoading && 'opacity-50'} 
                w-24 h-12 flex items-center justify-center rounded-l-2xl px-2 text-sm whitespace-nowrap backdrop-blur-lg bg-primaryLightHover`}>
                    <p className="bg-primaryLightHover">{buttonText}</p> 
                </button>
            </div>           
    );
};

export default InputWithButton;