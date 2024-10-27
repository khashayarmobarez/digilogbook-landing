'use client'
// Dependencies
import { useState } from "react";

// assets
import Logo from "@/Assets/Logos/DigilogbookMainLogo.svg";
import InputWithButton from "@/components/module/Inputs/InputWithButton";
import Image from "next/image";
import EmailIcon from "@/Assets/Icons/email.svg";

import Swal from 'sweetalert2';




const ContactUsBox = () => {

    const [input, setInput] = useState('');

    const showAlert = () => {
        
        if(input.length > 5) {
            Swal.fire({
              title: 'ثبت شد!',
              text: 'ایمیل شما با موفقیت ثبت شد.',
              icon: 'success',
              confirmButtonText: 'باشه'
            });
            setInput('');
        } else {
            Swal.fire({
              icon: "error",
              title: "ایمیلتون را وارد نکردین",
              text: "لطفا ایمیل خود را وارد کنید",
              confirmButtonText: 'مشکلی نیست'
            });
        }
      
    };

    const EmailInputHandler = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="w-full flex flex-col items-center -mb-28 md:-mb-48 md:-mr-[5vw]">
            <div className="  bg-primaryLightHover phone-1 w-[90%] h-[333px] rounded-3xl flex flex-col items-center justify-between py-10 px-4 md:w-1/3 md:self-end md:mx-10 z-20">
                <Image src={Logo} alt="logo" width={170} height={170} />
                <p className="font-bold">عضویت در خبرنامه</p>
                <p className="">ما هرزنامه ارسال نمی کنیم، پس نگران نباشید</p>
                <InputWithButton
                    id={'Email'}
                    onSubmit={showAlert}
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