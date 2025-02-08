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
        { icon: bookIcon, title: "Access to all syllabuses", content: "With Digilogbook, you can access all educational syllabuses for all levels in any organization. This feature allows you to plan long-term and short-term programs for yourself." },
        { icon: usersIcon, title: "Division of practical and theoretical topics", content: "Digilogbook allows you to log not only your practical activities such as flights and ground exercises but also your theoretical classes according to your level's syllabus." },
        { icon: clipboardIcon, title: "Log registration with instructor approval", content: "Why should we have a logbook? During flight training, every pilot is required to write a note of their flight hours in a logbook to record their experience." },
        { icon: locationIcon, title: "Flight hours calculation capability", content: "In Digilogbook, you can review your progress and become more aware of your strengths and weaknesses by reviewing your logs. You can also easily see the number of flights performed, flight hours, instructor hours, number of students, and the progress percentage of each student, which is very helpful in planning, reviewing, and analyzing your progress." }
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
                    className="optionSection w-full flex flex-col items-center justify-start text-center pt-[30dvh] md:pt-[22dvh] h-[100dvh] px-10 md:w-1/4 md:h-[640px]"
                    style={{background: `var(--primary-${['normal', 'normal-active', 'dark-hover', 'darker'][index]})`}}>
                        <Image src={section.icon} alt="icon" width={100} height={100} className='w-16 h-16 ' />
                        <p className="text-accentNormal text-lg mt-11">{section.title}</p>
                        <p className="text-base mt-9">{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Options;