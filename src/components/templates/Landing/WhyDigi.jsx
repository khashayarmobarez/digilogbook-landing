'use client'
// why digilogbook
import { useEffect, useState } from 'react';   
// import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import styles from '@/styles/WhyDigi.module.scss';
import { useMediaQuery } from "@mui/material";

const WhyDigi = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const isDesktop = useMediaQuery('(min-width:720px)');

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const listItems = [
        "در دسترس نبودن همیشگی آن یا فراموشی",
        "زمان بر بودن نوشتن درست آن",
        "امکان خطا در نوشتن و جمع بندی",
        "زمان بر بودن بررسی و آنالیز پروازها",
        "و موارد دیگر..."
    ];

    return (
        <div className='w-full flex flex-col items-center justify-around py-10 gap-y-20 md:py-32'>

            <div className={`w-[90%] min-h-10 flex flex-col gap-y-8 md:w-7/12 md:bg-primaryLightHover md:p-8 transition-all `}>

            {
            ((scrollPosition > 300 && isDesktop) || (scrollPosition > 300 && !isDesktop)) ?
                <>
                    <BoxReveal boxColor={"var(--accent-normal)"} duration={0.5}>
                        <p className={`text-neutralDark font-bold text-xl md:text-3xl `}>
                            چرا باید <span className='text-accentNormal'>لاگ بوک</span> داشته باشیم ؟
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"var(--accent-normal)"} duration={0.5}>
                        <p className='text-neutralDark'>
                            در هنگام یادگیری پرواز، هر خلبان ملزم به نوشتن یادداشتی از ساعات پرواز خود در یک لاگ بوک به منظور ثبت  تجربه خود است. بسیاری از خلبانان خیلی زود از نوشتن  لاگ بوک خود منصرف میشوند ، چرا که بعد از مدتی این کار بیهوده به نظر میرسد ، اما این یک اشتباه است. پس چرا نگه داشتن  لاگ بوک ایده خوبی است؟
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"var(--accent-normal)"} duration={0.5}>
                        <button className="btn w-40 h-12 bg-accentNormal rounded-3xl p-3 text-primaryDarkHover hover:text-neutralLight hover:bg-primaryNormalHover border-none self-center md:self-end"
                        onClick={() => window.open('https://digilogbook.ir/whyUs', '_blank')}>
                            مطالعه بیشتر
                        </button>
                    </BoxReveal>
                </>
                :
                <div className='w-full h-64 md:h-48'></div>
            }

            </div>

            <div className='w-[90%] min-h-10 flex flex-col gap-y-8 md:w-7/12 '>

                <p className={`text-neutralDark font-bold text-xl md:text-3xl md:text-center ${scrollPosition > 600 ? 'animate__animated animate__bounceInUp' : 'invisible'}`}>
                    چرا بسیاری از خلبانان خیلی زود از نوشتن <span className='text-accentNormal'>لاگ بوک</span> خود منصرف میشوند ؟
                </p>

                <ul className="flex flex-col gap-y-6 min-h-[30rem]">
                    {listItems.map((text, index) => (
                        <li
                            key={index}
                            className={` ${styles.itemConstClass}
                                ${(scrollPosition >= 650 + ((index + 1) * 100) && scrollPosition < 650 + ((index + 2) * 100)) ? 
                                    styles.activeItem 
                                    : 
                                    scrollPosition >= 650 + ((index + 2) * 100) ?
                                        styles.normalVisibleItem
                                        :
                                        styles.invisibleItem
                                } flex gap-x-4`}
                        >
                            <span className="number">{index + 1}</span>
                            <p>{text}</p>
                            <div/>
                        </li>
                    ))}
                </ul>

            </div>

            <p className={`w-[90%] flex justify-center text-center bg-primaryNormalHover p-6 text-neutralLight rounded-3xl font-bold text-xl -mt-20 md:mt-0 md:text-3xl ${scrollPosition > 1300 ? 'animate__animated animate__flipInX' : 'invisible'}`}>
                با دیجی لاگ بوک شما میتوانید<br/> 
                لاگ خود را راحت تر و سریع تر توسط تلفن همراه خود ثبت کنید و در هر زمان و مکان به آن دسترسی داشته باشید
            </p>

        </div>
    );
};

export default WhyDigi;