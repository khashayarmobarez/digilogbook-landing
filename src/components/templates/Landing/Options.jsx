'use client'
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useMediaQuery } from "@mui/material";

// gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// assets
import usersIcon from '@/Assets/Icons/users.svg';
import bookIcon from '@/Assets/Icons/book.svg';
import clipboardIcon from '@/Assets/Icons/clipboard.svg';
import locationIcon from '@/Assets/Icons/location.svg';

gsap.registerPlugin(ScrollTrigger);

const Options = () => {
    const isDesktop = useMediaQuery('(min-width:720px)');
    const containerRef = useRef(null);
    const optionsRef = useRef([]);

    // useGSAP(() => {
    //     if (isDesktop) {
    //         const sections = optionsRef.current;
    
    //         // Pin the entire container until all sections have been animated
    //         ScrollTrigger.create({
    //             trigger: containerRef.current,
    //             start: 'top top',
    //             end: `+=${sections.length * 30}%`, // Adjust end based on the number of sections
    //             pin: true, // Pin the container
    //             pinSpacing: true, // Don't add extra space for pinning
    //         });
    
    //         sections.forEach((section, index) => {
    //             gsap.fromTo(section, 
    //                 {
    //                     y: '50%', // Start slightly down
    //                     opacity: 0,
    //                 },
    //                 {
    //                     y: '0%', // Animate to normal position
    //                     opacity: 1,
    //                     duration: 1.5, // Duration for animation
    //                     scrollTrigger: {
    //                         trigger: containerRef.current, // Pin the entire container
    //                         start: `top+=${index * 5}% start`, // Stagger the start based on index
    //                         end: `+=25%`, // Each section takes up 25% of the scroll space
    //                     },
    //                 }
    //             );
    //         });
    //     }
    // }, { scope: containerRef, dependencies: [isDesktop] });

    const optionSections = [
        { icon: bookIcon, title: "دسترسی به تمامی سیلابس ها", content: "شما میتوانید با استفاده از دیجی لاگ بوک به همه ی سیلابس های آموزشی تمامی مقاطع در هر ارگان دسترسی داشته باشید که با استفاده از این قابلیت میتوانید برای خود برنامه های بلند مدت و کوتاه مدت بچینید" },
        { icon: usersIcon, title: "تقسیم بندی سرفصل های عملی و تئوری", content: "دیجی لاگ بوک این امکان را به شما میدهد که علاوه بر لاگ کردن فعالیت های عملی خود مانند پروازها و تمرینات زمینی ، بتوانید کلاس های تئوری را مطابق با سرفصل های مقطع خود نیز لاگ کنید" },
        { icon: clipboardIcon, title: "ثبت لاگ با تاییدیه ی مربی", content: "چرا باید لاگ بوک داشته باشیم ؟ در هنگام یادگیری پرواز، هر خلبان ملزم به نوشتن یادداشتی از ساعات پرواز خود در یک لاگ بوک به منظور ثبت  تجربه خود است." },
        { icon: locationIcon, title: "امکان محاسبه ساعات پرواز", content: "در دیجی لاگ بوک شما میتوانید مسیر پیشرفت خود را بررسی کنید و با مرور لاگ های خود نسبت به نقاط قوت و ضعف خود آگاهی بیشتری پیدا کنید همچنین شما میتوانید تعداد پرواز های انجام شده ، میزان ساعت پرواز ، میزان ساعت مربیگری ، تعداد هنرجویان خود و درصد پیشرفت هر هنرجو را به راحتی مشاهده کنید که در روند برنامه ریزی ، بررسی و آنالیز پیشرفت شما بسیار کمک کننده است." }
    ];

    return (
        <div className={`flex flex-col w-full `}>
            <div className="w-full flex flex-col md:flex-row items-center text-neutralLight"
                 ref={containerRef}>
                {optionSections.map((section, index) => (
                    <div key={index}
                         ref={el => optionsRef.current[index] = el}
                         className="optionSection w-full flex flex-col items-center justify-center text-center gap-y-14 h-[100dvh] px-10 md:w-1/4 md:h-[75dvh]"
                         style={{background: `var(--primary-${['normal', 'normal-active', 'dark-hover', 'darker'][index]})`}}>
                        <Image src={section.icon} alt="icon" width={70} height={70} />
                        <p className="text-accentNormal text-lg">{section.title}</p>
                        <p className="text-base">{section.content}</p>
                    </div>
                ))}
            </div>
            {/* Rest of your component (buttons section) remains unchanged */}
        </div>
    );
};

export default Options;