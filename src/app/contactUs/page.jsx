import Link from "next/link";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Image from "next/image";

// assets
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PhoneIcon from "@/Assets/Icons/PhoneIcon";
import MailIcon from "@/Assets/Icons/MailIcon";
import TicketIcon from "@/Assets/Icons/TicketIcon";
import { UserIcon } from "lucide-react";
import UserOpinion from "@/components/module/contactUs/UserOpinion";


const ContactUs = () => {
    return (
        <div className="w-full flex justify-center py-10">
            <div className="w-[90%] flex flex-col justify-start items-center md:flex-row md:justify-between">
                
                <div className="w-full flex flex-col items-start pt-4 md:w-[40vw] md:px-[8vw]">

                    <h1 className="text-lg font-semibold text-accentNormal md:text-3xl">تماس با ما</h1>

                    <a href="tel:09965089408" className="w-full flex justify-start text-start items-center gap-x-4 link link-hover mt-6 md:mt-16">
                        <span className="w-6">
                            <PhoneIcon color={'var(--neutral-dark)'}  />
                        </span>
                        <p>09965089408</p>
                    </a>

                    <div className="w-full h-[2px] bg-[#CACACA] my-5 bg-neutralDark rounded-full"></div>

                    <a href="mailto: info@digilogbook.ir" className="w-full flex justify-start text-start items-center gap-x-4 link link-hover ">
                        <span className="w-6">
                            <MailIcon color={'var(--neutral-dark)'}  />
                        </span>
                        <p>info@digilogbook.ir</p>
                    </a>

                    <div className="w-full h-[2px] bg-[#CACACA] my-5 bg-neutralDark rounded-full"></div>

                    <a href="/" className="w-full flex justify-start text-start items-center gap-x-4 link link-hover ">
                        <span className="w-6">
                            <TicketIcon color={'var(--neutral-dark)'}  />
                        </span>
                        <p>تیکت</p>
                    </a>

                    <div className="w-full h-[2px] bg-[#CACACA] my-5 bg-neutralDark rounded-full"></div>

                    <a href="https://t.me/digilogbook" target="_blank" rel="noopener noreferrer" 
                    className="w-full flex justify-start text-start items-center gap-x-4 link link-info ">
                        <TelegramIcon sx={{color: 'var(--neutral-dark)'}} />
                        <p>@digilogbook</p>
                    </a>

                    <div className="w-full h-[2px] bg-[#CACACA] my-5 bg-neutralDark rounded-full"></div>

                    <div 
                    className="w-full flex justify-start text-start items-center gap-x-4 link link-info ">
                        <InstagramIcon sx={{color: 'var(--neutral-dark)'}} />
                        <p>@digilogbook</p>
                    </div>

                    <div className="w-full h-[2px] bg-[#CACACA] my-5 bg-neutralDark rounded-full"></div>

                    <div  className="w-full flex justify-start text-start items-center gap-x-4 link link-info ">
                        <XIcon sx={{color: 'var(--neutral-dark)'}} />
                        <p>@digilogbook</p>
                    </div>

                    <div className="w-full h-[2px] bg-[#CACACA] my-5 bg-neutralDark rounded-full"></div>

                    

                </div>

                <div className="md:w-[40vw] md:pl-[8vw]">
                    <UserOpinion />

                </div>


            </div>
        </div>
    );
};

export default ContactUs;