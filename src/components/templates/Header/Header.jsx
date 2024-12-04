'use client'
import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import Logo from "@/Assets/Logos/DigilogbookMainLogo.svg";
import { useMediaQuery } from "@mui/material";
import 'animate.css';

// assets
import homeIcon from '@/Assets/Icons/home.svg';
import penIcon from '@/Assets/Icons/pen.svg';
import usersIcon from '@/Assets/Icons/users.svg';
// import attentionIcon from '@/Assets/Icons/attention.svg';
import phoneIcon from '@/Assets/Icons/phone.svg';
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";


const Header = () => {

    const isDesktop = useMediaQuery('(min-width:720px)');
    const logoSize = isDesktop ? 140 : 120;
    const router = useRouter();
    const pathname = usePathname();

    // cookies
    const isUserLoggedIn = Cookies.get('userIsLoggedInCrossPlatforms');

    console.log(isUserLoggedIn);

    
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
        <nav className="flex flex-col md:w-[50%] md:flex-row gap-y-6 justify-center items-start text-sm md:justify-between">
            <li className={`btn btn-ghost hover:bg-none hover:underline decoration-2 underline-offset-8 hover:text-neutralLight active:text-accentNormal font-light  flex gap-x-2
            ${pathname === '/' ? 'underline underline-offset-8 text-accentNormal' : 'text-white'} `}>
                {!isDesktop && <Image alt="icon" src={homeIcon} />}
                <Link href={'/'} className="md:w-full md:h-full flex justify-center items-center">صفحه اصلی</Link>
            </li>
            <li className={`btn btn-ghost hover:bg-none hover:underline decoration-2 underline-offset-8 hover:text-neutralLight active:text-accentNormal font-light  flex gap-x-2
                ${pathname.includes('/blogs') ? 'underline underline-offset-8 text-accentNormal' : 'text-white'}`}>
                {!isDesktop && <Image alt="icon" src={penIcon} />}
                <Link href={'/blogs/1'} className="md:w-full md:h-full flex justify-center items-center">بلاگ</Link>
            </li>
            <li className={`btn btn-ghost hover:bg-none hover:underline decoration-2 underline-offset-8 hover:text-neutralLight active:text-accentNormal font-light  flex gap-x-2
                ${pathname.includes('/aboutUs') ? 'underline underline-offset-8 text-accentNormal' : 'text-white'}`}>
                {!isDesktop && <Image alt="icon" src={phoneIcon} />}
                <Link href={'/aboutUs'} className="md:w-full md:h-full flex justify-center items-center">درباره ما</Link>
            </li>
            {/* <li className={`btn btn-ghost hover:bg-none hover:underline decoration-2 underline-offset-8 hover:text-neutralLight active:text-accentNormal font-light  flex gap-x-2
            ${pathname.includes('/guide') ? 'underline underline-offset-8 text-accentNormal' : 'text-white'}`}>
                {!isDesktop && <Image alt="icon" src={attentionIcon} />}
                <Link href={'/'} className="md:w-full md:h-full flex justify-center items-center">راهنما</Link>
            </li> */}
            <li className={`btn btn-ghost hover:bg-none hover:underline decoration-2 underline-offset-8 hover:text-neutralLight active:text-accentNormal font-light  flex gap-x-2
                ${pathname.includes('/contactUs') ? 'underline underline-offset-8 text-accentNormal' : 'text-white'}`}>
                {!isDesktop && <Image alt="icon" src={phoneIcon} />}
                <Link href={'/contactUs'} className="md:w-full md:h-full flex justify-center items-center">تماس با ما</Link>
            </li>
        </nav>
    );

    const AuthButtons = () => (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-x-8">
            {
                isUserLoggedIn ?
                <button className="btn w-32 h-12 bg-accentNormal border-none rounded-3xl p-3 text-neutralLight hover:text-neutralLight hover:bg-accentNormalActive"
                onClick={() => router.push('https://app.digilogbook.ir/profile')}>
                    وارد شوید
                </button>
                :
                <>
                    <button className="btn btn-ghost text-accentNormal rounded-2xl"
                    onClick={() => router.push('https://app.digilogbook.ir/login')}>
                        ورود
                    </button>
                    <button className="btn w-32 h-12 bg-accentNormal border-none rounded-3xl p-3 text-neutralLight hover:text-neutralLight hover:bg-accentNormalActive"
                    onClick={() => router.push('https://app.digilogbook.ir/signUp')}>
                        شروع کنید
                    </button>
                </>
            }
        </div>
    );

    return (
        <header className="w-full" style={{boxShadow:'var(--shadow-all)'}}>
            <nav className="bg-primaryDarkHover h-14 md:h-20 w-full flex justify-between items-center px-4 md:px-8">
                <div className="flex w-[70%] h-full gap-x-4 lg:gap-x-8 items-center">
                    <Image src={Logo} alt='logo' width={logoSize} height={logoSize} className="btn btn-ghost -mr-4"
                    onClick={() => router.push('/')} />
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