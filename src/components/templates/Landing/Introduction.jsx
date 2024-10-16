'use client'
// Introduction.js
import { useEffect, useState } from 'react';
import bg from '@/../public/pics/testWebBackground.png';
import digilogbookNoFeatherLogo from '@/Assets/Logos/DigilogbookNoFeatherLogo.png';
import Image from 'next/image';
import 'animate.css';

const Introduction = () => {
    const [loading, setLoading] = useState(true);
    const [showSecondAnimation, setShowSecondAnimation] = useState(false);

    // use effect to set setShowSecondAnimation to true after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondAnimation(true);
        }, 800);
    }, []);

    useEffect(() => {
        // Set a timer for 3 seconds to simulate loading
        const timer = setTimeout(() => {
            setLoading(false); // Update loading state
        }, 100);

        // Clear timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col w-full items-center min-h-screen py-40 md:py-40">
                <span className="loading loading-infinity loading-lg text-accentNormal"></span>
            </div>
        );
    }

    return (
        <section className='introductionContainer'>
            <div className='scrollingBackground'></div>
            <div className='z-10 w-full flex flex-col justify-center items-center -mt-20'>
                {/* <div className="logoContainer animate__animated animate__zoomInDown animate__slow"> */}
                <div className="logoContainer animate__animated animate__slideInUp">
                    <Image
                        src={digilogbookNoFeatherLogo}
                        alt="DigiLogBook Logo"
                        layout="responsive"
                        width={300}
                        height={300}
                    />
                </div>
                <div className={`w-full flex flex-col items-center transition-all duration-1000  ${showSecondAnimation ? ' opacity-100' : 'opacity-0'}`}>
                    <figcaption className='text-neutralLight font-extrabold text-xl mt-10 text-center md:text-4xl '>سامانه ثبت اطلاعات و پروازهای روزانه</figcaption>
                    <p className='text-neutralLight text-sm w-4/5 mt-4 text-center md:text-xl md:w-3/6 md:mt-8'>
                        دیجی لاگ بوک به شما کمک می‌کند تا پیشرفت خود را به طور دقیق دنبال کنید و با مشاهده میزان ساعات پروازی خود و انواع تجهیزات پروازی استفاده شده و چالش‌هایی که با آنها روبرو شده‌اید ، می‌توانید ارزیابی دقیقی از توانایی‌ها و نیازهای آموزشی خود داشته باشد 
                    </p>
                    <button className="btn btn-outline btn-accentNormal text-neutralLight w-5/6 rounded-3xl mt-8 text-base md:w-1/4">شروع کنید</button>
                </div>
            </div>
            <style jsx>{`
                .introductionContainer {
                    width: 100%;
                    height: 95vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                }

                .scrollingBackground {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200%;
                    height: 100%;
                    background-image: url(${bg.src});
                    background-size: auto 100%;
                    background-repeat: repeat-x;
                    animation: scrollBackground 180s linear infinite;
                }

                .logoContainer {
                    width: 70vw; /* Set logo size based on viewport width */
                    max-width: 300px;
                    height: auto;
                }

                @keyframes scrollBackground {
                    0% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 1800% 0;
                    }
                }

                @media screen and (min-width: 768px) {
                    .logoContainer {
                        width: 80vw; /* Adjust for desktop */
                        max-width: 500px;
                    }

                    @keyframes scrollBackground {
                        0% {
                            background-position: 0 0;
                        }
                        100% {
                            background-position: -200% 0;
                        }
                    }

                    .scrollingBackground {
                        animation: scrollBackground 60s linear infinite;
                    }
                }
            `}</style>
        </section>
    );
};

export default Introduction;
