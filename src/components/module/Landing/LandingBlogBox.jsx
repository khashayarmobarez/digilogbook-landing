import Image from "next/image";

import watchIcon from '@/Assets/Icons/watch.svg'
import calenderIcon from '@/Assets/Icons/calender.svg'
import arrowIcon from '@/Assets/Icons/arrowGreen.svg'
import Link from "next/link";



const LandingBlogBox = ({blog}) => {

    const { title, authorName, image, createDate, id, blogSections, timeToReadInMinutes, blogVisitCount} = blog;
    return (
        <article className='w-full h-full bg-primaryNormal rounded-3xl flex flex-col items-center justify-center gap-y-8 p-4 md:p-8 text-primaryLight
        md:flex-row md:justify-between md:w-[100%] md:h-full md:mt-0 md:gap-x-8'
        style={{boxShadow:'inset 0 0 2px 1px rgba(255, 255, 255, 0.2)'}}>
            <div className="w-full h-[14rem]
            md:h-full md:px-0 md:w-[80%]">
                <img src={image?.path} alt={image?.name || 'picture'} className="w-full h-full rounded-3xl" />
            </div>
            <div className='w-full h-auto flex flex-col items-center justify-between  md:h-full '>

                <div className='w-full flex flex-col items-start text-start justify-center gap-y-4 md:gap-y-0 text-neutralLightActive'>
                    <h1 className=" font-bold text-start">{title}</h1>
                    <p>{authorName}</p>
                </div>

                <p className="mt-8 md:-mt-[30%]">{blogSections[0].htmlContent}</p>

                <div className='w-full flex flex-col items-center justify-between gap-y-4 mt-8 md:flex-row md:justify-center'>
                    <div className='w-full h-full flex items-center justify-between text-xs text-neutralLightActive md:w-[58%]'>
                        <div className='w-full flex items-center justify-start gap-x-1 '>
                            <Image src={watchIcon} alt="icon" />
                            <p>در {timeToReadInMinutes} دقیقه بخوانید</p>
                        </div>
                        <div className='w-full flex items-center justify-end gap-x-1'>
                            <Image src={calenderIcon} alt="icon" />
                            <p>تاریخ: {createDate}</p>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center gap-x-2 text-accentNormal text-lg md:w-[42%] md:justify-end'>
                        <Image src={arrowIcon} alt="icon" />
                        <Link href={`https://digilogbook.ir/blogs/blog/${id}`} className="link link-hover" passHref target="_blank">خواندن مقاله</Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                h1 {
                    font-size: 20px;
                    weight: 700;
                    color: var(--accent-normal);
                }

                @media (min-width: 768px) {
                    h1 {
                        font-size: 26px;
                    }
                }
            `}</style>
        </article>
    );
};

export default LandingBlogBox;