'use client'
import Image from "next/image";
import Logo from "@/Assets/Logos/DigiLogBookMainLogo.svg";
import { useMediaQuery } from "@mui/material";

const Header = () => {
    // Use media query to check if the screen is desktop or smaller
    const isDesktop = useMediaQuery('(min-width:720px)');

    // Set logo size based on screen size (desktop or mobile)
    const logoSize = isDesktop ? 140 : 100; // 100px for desktop, 60px for mobile

    return (
        <div className="w-full flex flex-col h-14 md:h-20">
            <div className="navbar bg-primaryDarkHover h-full w-full flex justify-between items-center px-2 md:px-8">

                <div className="flex w-full h-full gap-x-8">
                    {/* Adjust logo size based on screen width */}
                    <Image src={Logo} alt='logo' width={logoSize} height={logoSize} />
                    {
                        isDesktop &&
                        <ul className="flex gap-x-20 h-full text-sm justify-center items-center">
                            <li className="text-white">صفحه اصلی</li>
                            <li className="text-white">بلاگ</li>
                            <li className="text-white">درباره ما</li>
                            <li className="text-white">راهنما</li>
                            <li className="text-white">تماس با ما</li>
                        </ul>
                    }   
                </div>

                {
                    isDesktop &&
                        <div className="flex justify-end gap-x-8 w-full items-center ">
                            <button className="btn btn-active btn-link text-accentNormal">ورود</button>
                            <button className="btn w-32 h-12 bg-accentNormal rounded-3xl p-3"> شروع کنید</button>
                        </div>
                }

            </div>
        </div>
    );
};

export default Header;
