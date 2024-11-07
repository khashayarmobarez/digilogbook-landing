'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from "@mui/material";

import usersIcon from '@/Assets/Icons/users.svg';
import bookIcon from '@/Assets/Icons/book.svg';
import clipboardIcon from '@/Assets/Icons/clipboard.svg';
import locationIcon from '@/Assets/Icons/location.svg';

const Options = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [allAnimated, setAllAnimated] = useState(false); // Track when all animations are complete
    const isDesktop = useMediaQuery('(min-width:720px)');

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Detect when all sections have passed their animation ranges
    useEffect(() => {
        // Check if scroll position is past the last section's animation
        const lastAnimationEnd = 7900; // Adjust based on when animations should end
        if (scrollPosition >= lastAnimationEnd) {
            setAllAnimated(true);
        } else {
            setAllAnimated(false);
        }
    }, [scrollPosition]);

    const optionSections = [
        { icon: bookIcon, title: "دسترسی به تمامی سیلابس ها", content: "شما میتوانید با استفاده از دیجی لاگ بوک به همه ی سیلابس های آموزشی تمامی مقاطع در هر ارگان دسترسی داشته باشید که با استفاده از این قابلیت میتوانید برای خود برنامه های بلند مدت و کوتاه مدت بچینید" },
        { icon: usersIcon, title: "تقسیم بندی سرفصل های عملی و تئوری", content: "دیجی لاگ بوک این امکان را به شما میدهد که علاوه بر لاگ کردن فعالیت های عملی خود مانند پروازها و تمرینات زمینی ، بتوانید کلاس های تئوری را مطابق با سرفصل های مقطع خود نیز لاگ کنید" },
        { icon: clipboardIcon, title: "ثبت لاگ با تاییدیه ی مربی", content: "چرا باید لاگ بوک داشته باشیم ؟ در هنگام یادگیری پرواز، هر خلبان ملزم به نوشتن یادداشتی از ساعات پرواز خود در یک لاگ بوک به منظور ثبت  تجربه خود است." },
        { icon: locationIcon, title: "امکان محاسبه ساعات پرواز", content: "در دیجی لاگ بوک شما میتوانید مسیر پیشرفت خود را بررسی کنید و با مرور لاگ های خود نسبت به نقاط قوت و ضعف خود آگاهی بیشتری پیدا کنید همچنین شما میتوانید تعداد پرواز های انجام شده ، میزان ساعت پرواز ، میزان ساعت مربیگری ، تعداد هنرجویان خود و درصد پیشرفت هر هنرجو را به راحتی مشاهده کنید که در روند برنامه ریزی ، بررسی و آنالیز پیشرفت شما بسیار کمک کننده است." }
    ];

    return (
        <div className="flex flex-col w-full h-[3400px] md:h-auto">
            <div className={`fixed md:relative inset-0 flex flex-col md:flex-row items-center text-neutralLight transition-all duration-700 ${allAnimated ? 'relative bottom-0' : ''}`}>
                {optionSections.map((section, index) => {
                    const startRange = 5000 + index * 500;
                    const endRange = index === 3 ? (startRange + 1400) : (startRange + 2000);

                    const isVisible = isDesktop
                        ? '' 
                        : scrollPosition >= startRange && scrollPosition < endRange;
                    
                    const translateClass = isDesktop 
                        ? '' 
                        : (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[700px] opacity-0');

                    // Set all items to relative positioning at the end of animations
                    const finalPositionClass = allAnimated ? 'relative' : (isVisible ? 'z-10 fixed' : 'relative');

                    return (
                        <div 
                            key={index}
                            className={`w-full flex flex-col items-center justify-center text-center gap-y-14 h-[100dvh] px-10 md:w-1/4 md:h-[75dvh] transition-all duration-500 ease-in-out 
                            ${translateClass} ${finalPositionClass}`}
                            style={{ background: `var(--primary-${['normal', 'normal-active', 'dark-hover', 'darker'][index]})` }}
                        >
                            <Image src={section.icon} alt="icon" width={70} height={70} />
                            <p className="text-accentNormal text-lg">{section.title}</p>
                            <p className="text-base">{section.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Options;
