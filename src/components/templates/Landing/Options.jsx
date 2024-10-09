'use client'
//  digilogbook options 
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from "@mui/material";

// assets
import usersIcon from '@/Assets/Icons/users.svg';
import bookIcon from '@/Assets/Icons/book.svg';
import clipboardIcon from '@/Assets/Icons/clipboard.svg';
import locationIcon from '@/Assets/Icons/location.svg';

gsap.registerPlugin(ScrollTrigger);

const Options = () => {

    const isDesktop = useMediaQuery('(min-width:720px)');
    const containerRef = useRef(null);

    // useEffect(() => {
    //     const sections = gsap.utils.toArray('.option-section'); // Select all sections
    //     const ctx = gsap.context(() => {
    //         sections.forEach((section, index) => {
    //             gsap.fromTo(section, 
    //                 {
    //                     opacity: 0, // Starting state
    //                     y: 50,      // Start from 50 pixels down
    //                 }, 
    //                 {
    //                     opacity: 1, // Ending state
    //                     y: -450,       // End at its original position
    //                     scrollTrigger: {
    //                         trigger: section, // Trigger each section individually
    //                         start: `top center`, // Start animation when the top hits 90% of the viewport
    //                         end: 'bottom center', // End when the top of the section hits the center of the viewport
    //                         onEnter: () => gsap.to(section, { opacity: 1, y: 0 }), // Animate on enter
    //                         onLeave: () => gsap.to(section, { opacity: 0, y: -50 }), // Optional: Animate out on leave
    //                         once: true, // Only trigger the animation once
    //                         markers: true, // Optional: Shows markers for debugging
    //                     },
    //                 }
    //             );
    //         });
    //     }, containerRef); // Bind the context to the container ref
    
    //     return () => ctx.revert(); // Clean up the context on unmount
    // }, []);

    return (
    <div className="flex flex-col w-full md:-mt-20 ">
        <div className="w-full flex flex-col md:flex-row items-center text-neutralLight"
        ref={containerRef}>
            <div
            className="option-section w-full flex flex-col items-center justify-center text-center gap-y-14 h-[100dvh] bg-primaryNormal px-10 md:w-1/4 md:h-[120dvh]"
            >
                <Image src={bookIcon} alt="icon" width={70} height={70} />
                <p className="text-accentNormal text-lg">دسترسی به تمامی سیلابس ها</p>
                <p className="text-base">شما میتوانید با استفاده از دیجی لاگ بوک به همه ی سیلابس های آموزشی تمامی مقاطع در هر ارگان دسترسی داشته باشید که با استفاده از این قابلیت میتوانید برای خود برنامه های بلند مدت و کوتاه مدت بچینید
                </p>
            </div>

            <div
            className="option-section w-full flex flex-col items-center justify-center text-center gap-y-14 h-[100dvh] bg-primaryNormalActive px-10 md:w-1/4 md:h-[120dvh]"
            >
                <Image src={usersIcon} alt="icon" width={70} height={70} />
                <p className="text-accentNormal text-lg">تقسیم بندی سرفصل های عملی و تئوری</p>
                <p className="text-base">دیجی لاگ بوک این امکان را به شما میدهد که علاوه بر لاگ کردن فعالیت های عملی خود مانند پروازها و تمرینات زمینی ، بتوانید کلاس های تئوری را مطابق با سرفصل های مقطع خود نیز لاگ کنید 
                </p>
            </div>

            <div
            className="option-section w-full flex flex-col items-center justify-center text-center gap-y-14 h-[100dvh] bg-primaryDarkHover px-10 md:w-1/4 md:h-[120dvh]"
            >
                <Image src={clipboardIcon} alt="icon" width={70} height={70} />
                <p className="text-accentNormal text-lg">دسترسی به تمامی سیلابس ها</p>
                <p className="text-base">چرا باید لاگ بوک داشته باشیم ؟<br/>
                    در هنگام یادگیری پرواز، هر خلبان ملزم به نوشتن یادداشتی از ساعات پرواز خود در یک لاگ بوک به منظور ثبت  تجربه خود است.
                </p>
            </div>

            <div
            className="option-section w-full flex flex-col items-center justify-center text-center gap-y-14 h-[100dvh] bg-primaryDarker px-10 md:w-1/4 md:h-[120dvh]"
            >
                <Image src={locationIcon} alt="icon" width={70} height={70} />
                <p className="text-accentNormal text-lg">امکان محاسبه ساعات پرواز</p>
                <p className="text-base">چرا باید لاگ بوک داشته باشیم ؟<br/>
                    در هنگام یادگیری پرواز، هر خلبان ملزم به نوشتن یادداشتی از ساعات پرواز خود در یک لاگ بوک به منظور ثبت  تجربه خود است.
                </p>
            </div>
        </div>
        <div className='w-full flex flex-col items-center gap-y-12 mt-20 md:bg-primaryLightHover md:flex-row md:justify-center md:p-8 md:w-[90%] md:self-center md:rounded-3xl md:gap-x-[10vw]'>
            <p className='text-neutralDark text-lg md:text-3xl font-bold'>
                برای مشاهده قابلیت‌های بیشتر همراه ما باشید...
            </p>
            {
                !isDesktop &&
                <button className="btn w-48 btn-outline rounded-3xl text-base border-accentNormal text-accentNormal hover:text-neutralDark"
                onClick={() => window.open('https://digilogbook.ir/signUpLogin', '_blank')}>
                    ورود / ثبت نام
                </button>
            }
            {
                isDesktop &&
                <div className="flex flex-row justify-center items-center md:gap-x-8 ">
                    <button className="btn w-48 h-12 bg-accentNormal rounded-3xl p-3 text-base text-primaryDarkHover hover:text-neutralLight hover:bg-primaryNormalHover border-none"
                    onClick={() => window.open('https://digilogbook.ir/signUpLogin', '_blank')}>
                        شروع کنید
                    </button>
                    <button className="btn w-48 btn-outline rounded-3xl text-base border-accentNormal text-accentNormal hover:text-neutralDark"
                    onClick={() => window.open('https://digilogbook.ir/signUpLogin', '_blank')}>
                        ورود
                    </button>
                </div>
            }
        </div>
    </div>
    );
};

export default Options;