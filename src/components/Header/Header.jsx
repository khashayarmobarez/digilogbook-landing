'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "@/Assets/Logos/DigiLogBookMainLogo.svg";
import { useMediaQuery } from "@mui/material";

// assets
import homeIcon from '@/Assets/Icons/home.svg';
import penIcon from '@/Assets/Icons/pen.svg';
import usersIcon from '@/Assets/Icons/users.svg';
// import attentionIcon from '@/Assets/Icons/attention.svg';
import phoneIcon from '@/Assets/Icons/phone.svg';
import { useRouter } from "next/navigation";


const Header = () => {

    const isDesktop = useMediaQuery('(min-width:720px)');
    const logoSize = isDesktop ? 140 : 100;
    const router = useRouter();

    
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const toggleNavbar = () => {
        setNavbarIsOpen(!navbarIsOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarIsOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !burgerRef.current.contains(event.target)
            ) {
                setNavbarIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navbarIsOpen]);

    const NavItems = () => (
        <ul className="flex flex-col md:flex-row gap-y-6 md:gap-x-20 justify-center items-start text-sm">
            <li className="text-white flex gap-x-2"
            onClick={() => router.push('/')}>
                {!isDesktop && <Image alt="icon" src={homeIcon} />}
                <p>صفحه اصلی</p>
            </li>
            <li className="text-white flex gap-x-2"
            onClick={() => window.open('https://digilogbook.ir/blogs', '_blank')}>
                {!isDesktop && <Image alt="icon" src={penIcon} />}
                <p>بلاگ</p>
            </li>
            <li className="text-white flex gap-x-2"
            onClick={() => window.open('https://digilogbook.ir/aboutUs', '_blank')}>
                {!isDesktop && <Image alt="icon" src={usersIcon} />}
                <p>درباره ما</p>
            </li>
            {/* <li className="text-white flex gap-x-2"
            onClick={() => window.open('https://digilogbook.ir/contactUs', '_blank')}>
                {!isDesktop && <Image alt="icon" src={attentionIcon} />}
                <p>راهنما</p>
            </li> */}
            <li className="text-white flex gap-x-2"
            onClick={() => window.open('https://digilogbook.ir/contactUs', '_blank')}>
                {!isDesktop && <Image alt="icon" src={phoneIcon} />}
                <p>تماس با ما</p>
            </li>
        </ul>
    );

    const AuthButtons = () => (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-x-8">
            <button className="btn w-32 h-12 bg-accentNormal rounded-3xl p-3"
            onClick={() => window.open('https://digilogbook.ir/signUpLogin', '_blank')}>
                شروع کنید
            </button>
            <button className="btn btn-active btn-link text-accentNormal"
            onClick={() => window.open('https://digilogbook.ir/signUpLogin', '_blank')}>
                ورود
            </button>
        </div>
    );

    return (
        <header className="w-full">
            <nav className="bg-primaryDarkHover h-14 md:h-20 w-full flex justify-between items-center px-4 md:px-8">
                <div className="flex w-full h-full gap-x-12 items-center">
                    <Image src={Logo} alt='logo' width={logoSize} height={logoSize} />
                    {isDesktop && <NavItems />}
                </div>

                {isDesktop ? (
                    <AuthButtons />
                ) : (
                    <label className="burger z-50" htmlFor="burger" ref={burgerRef}>
                        <input type="checkbox" id="burger" checked={navbarIsOpen} onChange={toggleNavbar} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                )}
            </nav>

            {!isDesktop && (
                <div className={`fixed inset-0 w-full flex justify-end z-40 transform ${navbarIsOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className="flex flex-col w-2/3  bg-primaryDarkHover h-full justify-center items-center gap-y-8 p-4 rounded-r-3xl"
                    ref={menuRef} >
                        <NavItems />
                        <AuthButtons />
                    </div>
                </div>
            )}

            <style jsx>{`
                .burger {
                    position: relative;
                    width: 24px;
                    height: 18px;
                    background: transparent;
                    cursor: pointer;
                    display: block;
                }

                .burger input {
                    display: none;
                }

                .burger span {
                    display: block;
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    background: #eeeeee;
                    border-radius: 9px;
                    opacity: 1;
                    left: 0;
                    transform: rotate(0deg);
                    transition: .25s ease-in-out;
                }

                .burger span:nth-of-type(1) {
                    top: 0px;
                    transform-origin: left center;
                }

                .burger span:nth-of-type(2) {
                    top: 50%;
                    transform: translateY(-50%);
                    transform-origin: left center;
                }

                .burger span:nth-of-type(3) {
                    top: 100%;
                    transform-origin: left center;
                    transform: translateY(-100%);
                    width: 50%;
                }

                .burger input:checked ~ span:nth-of-type(1) {
                    transform: rotate(45deg);
                    top: 0px;
                    left: 5px;
                }

                .burger input:checked ~ span:nth-of-type(2) {
                    width: 0%;
                    opacity: 0;
                }

                .burger input:checked ~ span:nth-of-type(3) {
                    transform: rotate(-45deg);
                    top: 17px;
                    left: 5px;
                    width: 100%;
                }

                @media screen and (min-width: 768px) {
                    .burger {
                        display: none;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;