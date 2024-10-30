'use client'
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Swal from 'sweetalert2';

import phoneIcon from '@/Assets/Icons/phone.svg';
import EmailIcon from "@/Assets/Icons/emailLight.svg";
import Image from "next/image";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

// Dependencies
import { useState } from "react";

// assets
import Logo from "@/Assets/Logos/DigilogbookMainLogo.svg";
import InputWithButton from "@/components/module/Inputs/InputWithButton";

const Footer = () => {

    const pathname = usePathname();

    const [input, setInput] = useState('');

    const EmailInputHandler = (e) => {
        setInput(e.target.value);
    }
    const handleEmailClick = (e) => {
        e.preventDefault();
        window.location.href = 'mailto:info@digilogbook.ir';
    };

    const handlePhoneClick = (e) => {
        e.preventDefault();
        window.location.href = 'tel:09965089408';
    };

    const showEmptyAlert = () => {
        Swal.fire({ 
            icon: "error",
            title: "اماده نیست!",
            text: "تیم ما در حال توسعه این بخش است و به زودی اماده میشود",
            confirmButtonText: 'مشکلی نیست'
        });
    }

    return (
        <footer className="footer bg-primaryDarkHover text-neutral-content p-6 flex flex-col-reverse md:flex-row md:items-center">

            <div className="flex flex-col w-full items-center justify-between md:items-center md:pr-10 md:mt-4">
                <nav className="w-full flex flex-col">
                    <Link href={'/'} className="link link-hover">خانه</Link>
                    <hr className="my-3 border-t border-neutral-content w-[80vw] md:w-[80%] " />
                    <Link href={'/blogs/1'} className="link link-hover" >
                        بلاگ
                    </Link>
                    <hr className="my-3 border-t border-neutral-content w-[80vw] md:w-[80%] " />
                    <Link href={'/aboutUs'} className="link link-hover" >درباره ما</Link>
                    <hr className="my-3 border-t border-neutral-content w-[80vw] md:w-[80%] " />
                    <Link href={'/contactUs'} className="link link-hover" >تماس با ما</Link>
                    <hr className="my-3 border-t border-neutral-content w-[80vw] md:w-[80%] " />
                </nav>
                <nav className="flex justify-center gap-x-8 w-full items-center my-4 md:justify-between md:pl-[10vw]">
                    <a href="#" onClick={handleEmailClick} className="link link-hover flex gap-x-2 justify-center items-center">
                        <Image src={EmailIcon} alt="logo" width={20} height={20} />
                        <p className="mt-1">info@digilogbook.ir</p>
                    </a>
                    <a href='#' onClick={handlePhoneClick} className="link link-hover flex gap-x-2 justify-center items-center">
                        <Image src={phoneIcon} alt="logo" width={20} height={20} />
                        <p className="mt-1">09965089408</p>
                    </a>
                </nav>
            </div>

            <div className="w-full flex flex-col items-center justify-between">
                {
                    pathname !== '/' ?
                        <div className=" w-full md:w-[50%] h-auto rounded-3xl flex flex-col items-center justify-between py-4 px-4 gap-y-4">
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
                        :
                        <div className="h-16 md:h-20" />
                }
                <div className="flex gap-x-16 w-full justify-center">
                    <Link onClick={showEmptyAlert} href={'/'} className="link link-hover bg-primaryNormalActive shadow-xl rounded-full p-4 hover:bg-primaryNormalHover">
                        <InstagramIcon sx={{color: 'var(--accent-normal)'}} />
                    </Link>
                    <Link onClick={showEmptyAlert} href={'/'} className="link link-hover bg-primaryNormalActive shadow-xl rounded-full p-4 hover:bg-primaryNormalHover">
                        <TelegramIcon sx={{color: 'var(--accent-normal)'}} />
                    </Link>
                    <Link onClick={showEmptyAlert} href={'/'} className="link link-hover bg-primaryNormalActive shadow-xl rounded-full p-4 hover:bg-primaryNormalHover">
                        <XIcon sx={{color: 'var(--accent-normal)'}} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;