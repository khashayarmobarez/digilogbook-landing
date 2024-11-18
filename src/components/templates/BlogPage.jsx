import Image from 'next/image';

import MailIcon from '@/Assets/Icons/MailIcon';

// comps
import CommentSection from '@/components/module/blogs/CommentSection';


const BlogPage = ({blogData}) => {
    return (
        <div className='w-[90%] flex flex-col mt-10 md:pt-[20px] md:w-[60%]'>

            <h1 className=' text-xl md:text-2xl font-semibold text-accentNormal'>{blogData.title}</h1>

            <p className=' text-base md:text-lg mt-2 md:mt-4 '>{blogData.authorName}</p>

            <Image src={blogData.image.path} alt={'image'} width={100} height={80} className='w-full h-40 lg:h-80 rounded-3xl border mt-5 md:mt-8 object-cover' />

            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-xs my-4'>

                    <div className='flex justify-start items-center gap-x-2'>
                        <span className='w-4 h-4'>
                                <MailIcon color={'var(--neutral-dark)'} />
                        </span>
                        <p>{blogData.timeToReadInMinutes} دقیقه مطالعه</p>
                    </div>

                    <div className='flex justify-start items-center gap-x-2'>
                        <span className='w-4 h-4'>
                                <MailIcon color={'var(--neutral-dark)'} />
                        </span>
                        <p>{blogData.createDate} بارگزاری</p>
                    </div>

                    <div className='flex justify-start items-center gap-x-2'>
                        <span className='w-4 h-4'>
                                <MailIcon color={'var(--neutral-dark)'} />
                        </span>
                        <p>{blogData.blogComments.length} نظر</p>
                    </div>

                    <div className='flex justify-start items-center gap-x-2'>
                            <span className='w-4 h-4'>
                                    <MailIcon color={'var(--neutral-dark)'} />
                            </span>
                            <p>{blogData.blogVisitCount} بازدید</p>
                    </div>

            </div>

            <div className='w-full mb-10'>
                    {
                    blogData.blogSections.map(section => 
                        <div className='w-full flex flex-col items-start' key={section.order}>
                            <h1>{section.title}</h1>
                            {
                                section.image &&
                                    <Image src={section.image.path} alt={section.image.name} width={100} height={100} className='w-full h-40 rounded-3xl object-cover mt-1 md:mt-2' />
                            }
                            <p className=''>{section.htmlContent}</p>
                            <br/>
                        </div>
                    )
                    }
                    {/* <p>{blogData.blogSections[0].htmlContent}</p> */}
            </div>

            {/* <CommentSection blogId={blogData.id} /> */}

        </div>
    );
};

export default BlogPage;