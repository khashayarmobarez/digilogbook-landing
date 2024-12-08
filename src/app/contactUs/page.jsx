import Link from "next/link";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Image from "next/image";

// assets
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PhoneIcon from "@/Assets/Icons/PhoneIcon";
import MailIcon from "@/Assets/Icons/MailIcon";
import TicketIcon from "@/Assets/Icons/TicketIcon";
import { UserIcon } from "lucide-react";
import UserOpinion from "@/components/module/contactUs/UserOpinion";
import TelegramIcon from "@/components/icons/TelegramIcon";


const ContactUs = () => {
    return (
        <div className="w-full flex justify-center py-10">
            <div className="w-[90%] flex flex-col justify-start items-center md:w-full md:grid md:grid-cols-12 md:justify-between">
                
                {/* test comment */}
                <div className="w-full flex flex-col items-start md:pt-4  md:col-span-3 md:col-start-3">

                    <h1 className="text-lg font-semibold text-accentNormal md:text-3xl ">تماس با ما</h1>

                    <a href="tel:09965089408" className="w-full flex justify-start text-start items-center gap-x-6 link link-hover mt-5 md:mt-16">
                        <span className="w-6">
                            <PhoneIcon color={'var(--neutral-dark)'}  />
                        </span>
                        <p>09965089408</p>
                    </a>

                    <div className="w-full h-[2px] bg-neutralLightActive my-4 rounded-full"></div>

                    <a href="mailto: info@digilogbook.app" className="w-full flex justify-start text-start items-center gap-x-6 link link-hover ">
                        <span className="w-6">
                            <MailIcon color={'var(--neutral-dark)'}  />
                        </span>
                        <p>info@digilogbook.app</p>
                    </a>

                    <div className="w-full h-[2px] bg-neutralLightActive my-4 rounded-full"></div>

                    <a href="/" className="w-full flex justify-start text-start items-center gap-x-6 link link-hover ">
                        <span className="w-6">
                            <TicketIcon color={'var(--neutral-dark)'}  />
                        </span>
                        <p>تیکت</p>
                    </a>

                    <div className="w-full h-[2px] bg-neutralLightActive my-4 rounded-full"></div>

                    <a href="https://t.me/digilogbook" target="_blank" rel="noopener noreferrer" 
                    className="w-full flex justify-start text-start items-center gap-x-6 link link-info ">
                        <span className="w-6">
                            <TelegramIcon />
                        </span>
                        <p>digilogbook</p>
                    </a>

                    <div className="w-full h-[2px] bg-neutralLightActive my-4 rounded-full"></div>

                    <div 
                    className="w-full flex justify-start text-start items-center gap-x-6 link link-info ">
                        <InstagramIcon sx={{color: 'var(--neutral-dark)'}} />
                        <p>digilogbook</p>
                    </div>

                    <div className="w-full h-[2px] bg-neutralLightActive my-4 rounded-full"></div>

                    <div  className="w-full flex justify-start text-start items-center gap-x-6 link link-info ">
                        <XIcon sx={{color: 'var(--neutral-dark)'}} />
                        <p>digilogbook</p>
                    </div>

                    <div className="w-full h-[2px] bg-neutralLightActive my-4 rounded-full"></div>

                    

                </div>

                <div className="w-full mt-4 md:-mb-16 md:col-span-4 md:col-start-7">

                    <UserOpinion className={''} />

                </div>


            </div>
        </div>
    );
};

export default ContactUs;