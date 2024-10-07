// why digilogbook
import { useEffect, useState } from 'react';    

const WhyDigi = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

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
        <div className='w-full flex flex-col items-center justify-around py-10 gap-y-20 md:py-36'>

            <div className='w-[90%] min-h-10 flex flex-col gap-y-8 md:w-7/12 md:bg-primaryLightHover md:p-8'>

                <p className='text-neutralDark font-bold text-xl md:text-3xl '>
                    چرا باید <span className='text-accentNormal'>لاگ بوک</span> داشته باشیم ؟
                </p>

                <p className='text-neutralDark'>
                    در هنگام یادگیری پرواز، هر خلبان ملزم به نوشتن یادداشتی از ساعات پرواز خود در یک لاگ بوک به منظور ثبت  تجربه خود است. بسیاری از خلبانان خیلی زود از نوشتن  لاگ بوک خود منصرف میشوند ، چرا که بعد از مدتی این کار بیهوده به نظر میرسد ، اما این یک اشتباه است. پس چرا نگه داشتن  لاگ بوک ایده خوبی است؟
                </p>

                <button className="btn w-40 h-12 bg-accentNormal rounded-3xl p-3 text-primaryDarkHover hover:text-neutralLight hover:bg-primaryNormalHover border-none self-center md:self-end"
                onClick={() => window.open('https://digilogbook.ir/whyUs', '_blank')}>
                    مطالعه بیشتر
                </button>

            </div>

            <div className='w-[90%] min-h-10 flex flex-col gap-y-8 md:w-7/12 '>

                <p className='text-neutralDark font-bold text-xl md:text-3xl md:text-center'>
                    چرا بسیاری از خلبانان خیلی زود از نوشتن <span className='text-accentNormal'>لاگ بوک</span> خود منصرف میشوند ؟
                </p>

                <ul className="animated-list">
                    {listItems.map((text, index) => (
                        <li
                            key={index}
                            className={`${scrollPosition >= 700 + (index * 100) ? 'activeItem' : 'invisible'} flex gap-x-4`}
                        >
                            <span className="number">{index + 1}</span>
                            <p>{text}</p>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default WhyDigi;