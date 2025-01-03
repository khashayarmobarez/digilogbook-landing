import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const BlogsBlogBoxes = ({blogsData}) => {
    return (
        <ul className='w-full grid grid-cols-1 gap-4 md:grid-cols-2'>
          {blogsData.map((blog) => (
            <li key={blog.id} className='border border-1 border-neutralDark flex flex-col items-center justify-center p-4 rounded-3xl'>
              <Link href={`/blogs/blog/${blog.id}`} className='w-full'>
                <div className='w-full text-start flex flex-col items-start gap-y-1 text-neutralDark'>
                  <Image src={blog.image.path} alt={'image'} width={100} height={80} className='w-full h-56 rounded-3xl' />
                  <h2 className='text-xl font-semibold text-accentNormal mt-4'>{blog.title}</h2>
                  <p className='md:text-lg'>{blog.authorName}</p>
                  <p className='text-right text-base my-3'>{blog.blogSections[0].htmlContent.slice(0, 130)} ...</p>

                  <div className='w-full flex flex-col gap-y-6 xl:flex-row items-center mt-2 xl:justify-between'>
                    <div className='w-full flex justify-between xl:w-[61%]'>
                      <div className='flex items-center justify-center gap-x-2'>
                        <AccessTimeOutlinedIcon fontSize='8px' />
                        <p className='text-xs'>در {blog.timeToReadInMinutes} دقیقه بخوانید</p>
                      </div>
                      <div className='flex items-center justify-center gap-x-2'>
                        <CalendarTodayOutlinedIcon fontSize='8px' />
                        <p className='text-xs'>تاریخ: {blog.createDate}</p>
                      </div>
                    </div>
                    <div className='gap-x-2 rounded-3xl link link-hover flex text-lg text-accentNormal items-center'>
                      <ArrowForwardIcon />
                      <p>خواندن مقاله</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
    );
};

export default BlogsBlogBoxes;