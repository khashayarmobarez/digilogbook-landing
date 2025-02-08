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
              title: 'Registered!',
              text: 'Your email has been successfully registered.',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            setInput('');
        } else {
            Swal.fire({
              icon: "error",
              title: "You didn't enter your email",
              text: "Please enter your email",
              confirmButtonText: 'No problem'
            });
        }
      
    };

    const EmailInputHandler = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="w-full flex flex-col items-center -mb-28 md:-mb-52 md:-mr-[5.5vw]">
            <div className="  bg-primaryLightHover phone-1 w-[90%] h-[333px] rounded-3xl flex flex-col items-center justify-between py-14 px-6 md:w-1/3 lg:w-1/4 md:self-end md:mx-10 z-20 text-center">
                <Image src={Logo} alt="logo" width={170} height={170} />
                <p className="font-bold">Subscribe to Newsletter</p>
                <p className=" ">We do not send spam, so do not worry</p>
                <InputWithButton
                    id={'Email'}
                    onSubmit={showAlert}
                    icon={EmailIcon}
                    buttonText={'Send'}
                    placeH={'Enter your email'}
                    onChange={EmailInputHandler}
                    value={input}
                />
            </div>
        </div>
    );
};

export default ContactUsBox;
