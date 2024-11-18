import Image from "next/image";

import watchIcon from '@/Assets/Icons/watch.svg'
import calenderIcon from '@/Assets/Icons/calender.svg'
import arrowIcon from '@/Assets/Icons/arrowGreen.svg'
import Link from "next/link";



const LandingBlogBox = ({blog}) => {

    const { title, authorName, image, createDate, id, blogSections, timeToReadInMinutes, blogVisitCount} = blog;
    return (
        <article className='w-[90vw] h-auto bg-primaryNormal rounded-3xl flex flex-col items-center justify-center gap-y-8 py-4 text-primaryLight -mt-2
        md:flex-row md:w-[80vw] md:h-[30rem]'>
            <div className="w-full h-[14rem] px-4
            md:h-full md:py-2 md:px-8 md:w-[80%]">
                <img src={image?.path} alt={image?.name || 'picture'} className="w-full h-full rounded-3xl" />
            </div>
            <div className='w-full h-auto flex flex-col items-center justify-between px-4  md:h-full '>

                <div className='w-full flex flex-col items-start text-start justify-center gap-y-4 text-neutralLightActive'>
                    <h1 className=" font-bold text-start">{title}</h1>
                    <p>{authorName}</p>
                </div>

                <p className="mt-8 md:-mt-[30%] md:pl-10">{blogSections[0].htmlContent}</p>

                <div className='w-full flex flex-col items-center justify-between gap-y-4 mt-8 md:flex-row'>
                    <div className='w-full flex items-center justify-between text-xs text-neutralLightActive'>
                        <div className='w-full flex items-center justify-start gap-x-1 '>
                            <Image src={watchIcon} alt="icon" />
                            <p>در {timeToReadInMinutes} دقیقه بخوانید</p>
                        </div>
                        <div className='w-full flex items-center justify-end gap-x-1'>
                            <Image src={calenderIcon} alt="icon" />
                            <p>تاریخ: {createDate}</p>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center gap-x-1 text-accentNormal text-lg md:w-[40%]'>
                        <Image src={arrowIcon} alt="icon" />
                        <Link href={`https://app.digilogbook.ir/blog/${id}`} className="link link-hover" passHref target="_blank">خواندن مقاله</Link>
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