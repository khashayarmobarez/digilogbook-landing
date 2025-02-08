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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {

    const pathname = usePathname();

    const [input, setInput] = useState('');

    const EmailInputHandler = (e) => {
        setInput(e.target.value);
    }
    const handleEmailClick = (e) => {
        e.preventDefault();
        window.location.href = 'mailto:info@digilogbook.app';
    };

    const handlePhoneClick = (e) => {
        e.preventDefault();
        window.location.href = 'tel:09965089408';
    };

    const showEmptyAlert = () => {
        Swal.fire({ 
            icon: "error",
            title: "Not Ready!",
            text: "Our team is developing this section and it will be ready soon",
            confirmButtonText: 'No problem'
        });
    }

    return (
        <footer className="footer bg-primaryDarkHover text-neutral-content p-6 flex flex-col-reverse md:grid md:grid-cols-10 md:flex-row md:items-center">

            <div className=" invisible md:visible col-span-1"></div>

            <div className="flex flex-col w-full items-center justify-between md:items-center md:pr-0 md:mt-4 md:col-span-4">
                <nav className="w-full flex flex-col">
                        <div className="w-full flex gap-x-4">
                            <ArrowForwardIcon />
                            <Link href={'/'} className="link link-hover">
                                Home
                            </Link>
                        </div>
                    <hr className="my-3 border-t border-neutral-content w-full " />
                        <div className="w-full flex gap-x-4">
                            <ArrowForwardIcon />
                            <Link href={'/blogs/1'} className="link link-hover" >
                                Blog
                            </Link>
                        </div>
                    <hr className="my-3 border-t border-neutral-content w-full " />
                        <div className="w-full flex gap-x-4">
                            <ArrowForwardIcon />
                            <Link href={'/aboutUs'} className="link link-hover" >
                                About Us
                            </Link>
                        </div>
                    <hr className="my-3 border-t border-neutral-content w-full " />
                        <div className="w-full flex gap-x-4">
                            <ArrowForwardIcon />
                            <Link href={'/contactUs'} className="link link-hover" >
                                Contact Us
                            </Link>
                        </div>
                    <hr className="my-3 border-t border-neutral-content w-full " />
                </nav>
                <nav className="flex justify-center gap-x-8 w-full items-center my-4 md:justify-between md:pl-[8vw]">
                    <a href="#" onClick={handleEmailClick} className="link link-hover flex gap-x-2 justify-center items-center">
                        <Image src={EmailIcon} alt="logo" width={20} height={20} />
                        <p className="mt-1">info@digilogbook.app</p>
                    </a>
                    <a href='#' onClick={handlePhoneClick} className="link link-hover flex gap-x-2 justify-center items-center">
                        <Image src={phoneIcon} alt="logo" width={20} height={20} />
                        <p className="mt-1">09965089408</p>
                    </a>
                </nav>
            </div>

            <div className=" invisible md:visible col-span-1 "></div>

            <div className="w-full flex flex-col items-center justify-between md:col-span-4">
                {
                    pathname !== '/' ?
                        <div className=" w-full md:w-[50%] h-auto rounded-3xl flex flex-col items-center justify-between py-4 px-4 gap-y-4">
                            <Image src={Logo} alt="logo" width={170} height={170} />
                            <p className="font-bold">Subscribe to Newsletter</p>
                            <p className="">We do not send spam, so don&apos;t worry</p>
                            <InputWithButton
                                id={'Email'}
                                // onSubmit={sendCodeHandler}
                                icon={EmailIcon}
                                buttonText={'Send'}
                                placeH={'Enter your email'}
                                onChange={EmailInputHandler}
                                value={input}
                            />
                        </div>
                        :
                        <div className="h-16 md:h-20" />
                }
                <div className="flex gap-x-8 w-full justify-center">
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