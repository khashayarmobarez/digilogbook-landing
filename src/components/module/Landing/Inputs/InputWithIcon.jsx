
import UserIcon from "@/Assets/Icons/UserIcon";


const InputWithIcon = ({icon, placeHolder}) => {
    return (
        <label className="input border-primaryDarker border-1 rounded-2xl flex items-center gap-2 bg-primaryLight">
            <span className="w-5 flex h-full justify-center items-center">
                {icon || <UserIcon color={'var(--neutral-dark)'} /> }
            </span>
            <input type="text" className="grow" placeholder={placeHolder || 'none'} />
        </label>
    );
};

export default InputWithIcon;