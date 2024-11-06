import Image from "next/image";

import watchIcon from '@/Assets/Icons/watch.svg'
import calenderIcon from '@/Assets/Icons/calender.svg'
import arrowIcon from '@/Assets/Icons/arrowGreen.svg'
import Link from "next/link";



const BlogBox = ({blog}) => {

    const { title, authorName, image, createDate, id, blogSections, timeToReadInMinutes, blogVisitCount} = blog;
    return (
        <article className='w-[80vw] h-[36rem] bg-primaryNormal rounded-3xl flex flex-col items-center justify-between py-6 text-primaryLight
        md:flex-row md:h-[30rem]'>
            <div className="w-full h-[14rem] px-4
            md:h-full md:py-2 md:px-8 md:w-[80%]">
                <img src={image?.path} alt={image?.name || 'picture'} className="w-full h-full"  />
            </div>
            <div className='w-full h-[18rem] flex flex-col items-center justify-between px-4 pt-2 md:h-full '>

                <div className='w-full flex flex-col items-start justify-center gap-y-1 text-neutralLightActive'>
                    <h1 className="">{title}</h1>
                    <p>{authorName}</p>
                </div>

                <p className="md:-mt-[30%] md:pl-10">{blogSections[0].htmlContent}</p>

                <div className='w-full flex flex-col items-center justify-between gap-y-6 mt-4 md:flex-row'>
                    <div className='w-full flex items-center justify-between text-xs text-neutralLightActive'>
                        <div className='w-full flex items-center justify-center gap-x-1'>
                            <Image src={watchIcon} alt="icon" />
                            <p>در {timeToReadInMinutes} دقیقه بخوانید</p>
                        </div>
                        <div className='w-full flex items-center justify-center gap-x-1'>
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

export default BlogBox;