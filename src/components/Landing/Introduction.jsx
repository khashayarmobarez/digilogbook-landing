// Introduction.js

import bg from '@/../public/pics/testWebBackground.png';
import digilogbookNoFeatherLogo from '@/Assets/Logos/DigiLogbookNoFeatherLogo.png';
import Image from 'next/image';

const Introduction = () => {
    return (
        <div className='introductionContainer'>
            <div className='scrollingBackground'></div>
            <div className='z-10 w-full flex flex-col justify-center items-center -mt-20'>
                <div className="logoContainer">
                    <Image
                        src={digilogbookNoFeatherLogo}
                        alt="DigiLogBook Logo"
                        layout="responsive"
                        width={300}
                        height={300}
                    />
                </div>
                <p className='text-neutralLight font-extrabold text-xl mt-10 text-center md:text-4xl'>سامانه ثبت اطلاعات و پروازهای روزانه</p>
                <p className='text-neutralLight text-sm w-4/5 mt-4 text-center md:text-xl md:w-3/6 md:mt-8'>
                دیجی لاگ بوک به شما کمک می‌کند تا پیشرفت خود را به طور دقیق دنبال کنید و با مشاهده میزان ساعات پروازی خود و انواع تجهیزات پروازی استفاده شده و چالش‌هایی که با آنها روبرو شده‌اید ، می‌توانید ارزیابی دقیقی از توانایی‌ها و نیازهای آموزشی خود داشته باشد 
                </p>
                <button className="btn btn-accent">Accent</button>
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
        </div>
    );
};

export default Introduction;
