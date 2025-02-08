'use client'
// why digilogbook
import Link from 'next/link';
import { useEffect, useState } from 'react';   
// import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import styles from '@/styles/WhyDigi.module.scss';
import { useMediaQuery } from "@mui/material";

// assets
import EastRoundedIcon from '@mui/icons-material/EastRounded';

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
        "Not always being available or forgetting",
        "Time-consuming to write it correctly",
        "Possibility of errors in writing and summarizing",
        "Time-consuming to review and analyze flights",
        "And other reasons..."
    ];

    return (
        <div className='w-full flex flex-col items-center justify-around py-10 gap-y-20 md:pt-32 md:pb-20'>

            <div className={`w-[90%] min-h-10 flex flex-col gap-y-8 md:w-7/12 md:bg-primaryLightHover md:p-8 transition-all `}>

            {
            ((scrollPosition > 300 && isDesktop) || (scrollPosition > 300 && !isDesktop)) ?
                <>
                    <BoxReveal boxColor={"var(--accent-normal)"} duration={0.5}>
                        <p className={`text-neutralDark font-bold text-xl md:text-3xl `}>
                            Why should we have a <span className='text-accentNormal'>logbook</span>?
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"var(--accent-normal)"} duration={0.5}>
                        <p className='text-neutralDark'>
                            During flight training, every pilot is required to write a note of their flight hours in a logbook to record their experience. Many pilots soon give up writing their logbook because it seems pointless after a while, but this is a mistake. So why is keeping a logbook a good idea?
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"var(--accent-normal)"} duration={0.5}>
                        <Link href={'/whyLogbook'} className=" w-40 h-12 flex gap-x-2 self-center md:self-end text-accentNormal text-[18px]">
                            <EastRoundedIcon />
                            <p className='hover:underline underline-offset-2'>Read more</p>
                        </Link>
                    </BoxReveal>
                </>
                :
                <div className='w-full h-64 md:h-48'></div>
            }

            </div>

            <div className='w-[90%] min-h-10 flex flex-col gap-y-8 md:w-7/12 '>

                <p className={`text-neutralDark font-bold text-xl md:text-3xl md:text-center ${scrollPosition > 600 ? 'animate__animated animate__fadeIn animate__slow' : 'invisible'}`}>
                    Why do many pilots soon give up writing their <span className='text-accentNormal'>logbook</span>?
                </p>

                <ul className="flex flex-col gap-y-6 min-h-[30rem]">
                    {listItems.map((text, index) => (
                        <li
                            key={index}
                            className={` ${styles.itemConstClass} py-4 px-8
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

            <p className={`w-[90%] text-center bg-primaryNormalHover p-6 text-neutralLight rounded-3xl font-bold text-base -mt-24 md:-mt-10 md:text-3xl ${scrollPosition > 1300 ? 'animate__animated animate__fadeIn' : 'invisible'}`}>
                With <span className='text-accentNormal'>Digi Logbook</span> you can record your log more easily and quickly using your mobile phone and access it anytime, anywhere.
            </p>

        </div>
    );
};

export default WhyDigi;