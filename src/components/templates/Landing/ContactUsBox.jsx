
// Dependencies
import { useState } from "react";

// assets
import Logo from "@/Assets/Logos/DigilogbookMainLogo.svg";
import InputWithButton from "@/components/module/Inputs/InputWithButton";
import Image from "next/image";
import EmailIcon from "@/Assets/Icons/email.svg";


const ContactUsBox = () => {

    const [input, setInput] = useState('');

    const EmailInputHandler = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="w-full flex justify-center ">
            <div className="bg-primaryLightHover phone-1 w-[90%] h-[333px] rounded-3xl flex flex-col items-center justify-between py-8">
                <Image src={Logo} alt="logo" width={170} height={170} />
                <p className="font-bold">عضویت در خبرنامه</p>
                <p className="">ما هرزنامه ارسال نمی کنیم، پس نگران نباشید</p>
                <InputWithButton
                    id={'Email'}
                    // onSubmit={sendCodeHandler}
                    icon={EmailIcon}
                    buttonText={'ارسال'}
                    placeH={'ایمیل خود را وارد کنید'}
                    onChange={EmailInputHandler}
                    value={input}
                />
            </div>
        </div>
    );
};

export default ContactUsBox;