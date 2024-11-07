'use client';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useMediaQuery } from "@mui/material";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import usersIcon from '@/Assets/Icons/users.svg';
import bookIcon from '@/Assets/Icons/book.svg';
import clipboardIcon from '@/Assets/Icons/clipboard.svg';
import locationIcon from '@/Assets/Icons/location.svg';

gsap.registerPlugin(ScrollTrigger);

const Options = () => {
    const isDesktop = useMediaQuery('(min-width:720px)');
    const containerRef = useRef(null);
    const optionsRef = useRef([]);
    
    const optionSections = [
        { icon: bookIcon, title: "دسترسی به تمامی سیلابس ها", content: "شما میتوانید با استفاده از دیجی لاگ بوک به همه ی سیلابس های آموزشی تمامی مقاطع در هر ارگان دسترسی داشته باشید که با استفاده از این قابلیت میتوانید برای خود برنامه های بلند مدت و کوتاه مدت بچینید" },
        { icon: usersIcon, title: "تقسیم بندی سرفصل های عملی و تئوری", content: "دیجی لاگ بوک این امکان را به شما میدهد که علاوه بر لاگ کردن فعالیت های عملی خود مانند پروازها و تمرینات زمینی ، بتوانید کلاس های تئوری را مطابق با سرفصل های مقطع خود نیز لاگ کنید" },
        { icon: clipboardIcon, title: "ثبت لاگ با تاییدیه ی مربی", content: "چرا باید لاگ بوک داشته باشیم ؟ در هنگام یادگیری پرواز، هر خلبان ملزم به نوشتن یادداشتی از ساعات پرواز خود در یک لاگ بوک به منظور ثبت  تجربه خود است." },
        { icon: locationIcon, title: "امکان محاسبه ساعات پرواز", content: "در دیجی لاگ بوک شما میتوانید مسیر پیشرفت خود را بررسی کنید و با مرور لاگ های خود نسبت به نقاط قوت و ضعف خود آگاهی بیشتری پیدا کنید همچنین شما میتوانید تعداد پرواز های انجام شده ، میزان ساعت پرواز ، میزان ساعت مربیگری ، تعداد هنرجویان خود و درصد پیشرفت هر هنرجو را به راحتی مشاهده کنید که در روند برنامه ریزی ، بررسی و آنالیز پیشرفت شما بسیار کمک کننده است." }
    ];

    useEffect(() => {
        // Only run the animation if all refs are assigned
        if (optionsRef.current.every(el => el !== null)) {
            // Pin the container to stop scrolling while the animations play
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top+=300 center', // Start later in the viewport
                end: 'top-=700 center', // Lower pinning height
                pin: true,
                pinSpacing: false,
            });
    
            // Animate each option with a staggered delay
            const animations = optionsRef.current.map((el, index) => {
                return gsap.fromTo(
                    el,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        delay: index * 0.1 + 0.1,  // Additional 0.5s delay for later start
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            });
    
            // Clean up animations on component unmount
            return () => {
                animations.forEach(anim => anim.kill());
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, [optionsRef.current]);

    return (
        <div className={`flex flex-col w-full`} ref={containerRef}>
            <div className="w-full flex flex-col md:flex-row items-center text-neutralLight">
                {optionSections.map((section, index) => (
                    <div key={index}
                    ref={el => optionsRef.current[index] = el}
                    className="optionSection w-full flex flex-col items-center justify-start text-center pt-[30dvh] md:pt-[22dvh] gap-y-10 h-[100dvh] px-10 md:w-1/4 md:h-[640px]"
                    style={{background: `var(--primary-${['normal', 'normal-active', 'dark-hover', 'darker'][index]})`}}>
                        <Image src={section.icon} alt="icon" width={70} height={70} />
                        <p className="text-accentNormal text-lg">{section.title}</p>
                        <p className="text-base">{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Options;