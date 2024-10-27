
import UserIcon from "@/Assets/Icons/UserIcon";


const InputWithIcon = ({icon, placeHolder, value, onChange, containerClassName, inputClassName}) => {
    return (
        <label className={`input border-primaryDarker border-1 rounded-2xl flex items-center gap-2 bg-primaryLight ${containerClassName}`}>
            <span className="w-5 flex h-full justify-center items-center">
                {icon || <UserIcon color={'var(--neutral-dark)'} /> }
            </span>
            <input type="text" value={value} onChange={onChange} className={`grow ${inputClassName}`} placeholder={placeHolder || 'none'} />
        </label>
    );
};

export default InputWithIcon;