import MailIcon from '@/Assets/Icons/MailIcon';
import CommentSection from '@/components/module/blogs/CommentSection';
import { Api_BASE_URL } from '@/utils/resuableVars';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Fetch blog details by ID
async function fetchBlogData(blogId) {

  try {
    const res = await fetch(`${Api_BASE_URL}/Blog/GetBlog?Id=${blogId}`);
    if (!res.ok) throw new Error('Failed to fetch data');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch blog data:', error);
    return null; // Return null if fetching fails
  }
  
}

// Generate static paths for the first few blog posts
export async function generateStaticParams() {
  try {
    const res = await fetch(`${Api_BASE_URL}/Blog/GetBlogs?pageSize=6&pageNumber=1`);
    if (!res.ok) throw new Error('Failed to fetch data');
    const { data: blogs } = await res.json();

    // Map the first few blogs for static generation
    return blogs.slice(0, 6).map((blog) => ({
      blogId: blog.id.toString(),
    }));
  } catch (error) {
    console.error('Failed to fetch initial blog list:', error);
    return []; // Return an empty array if fetching fails
  }
}

// Main blog details component
export default async function BlogDetailsPage({ params }) {

  const { blogId } = params;
  const data = await fetchBlogData(blogId);

  // Show 404 page if the blog data isn’t found
  if (!data) {
    notFound(); // Redirect to the 404 page if data is null
    return null;
  }

return (
    <article className='w-full flex justify-center min-h-[70dvh]'>
            <div className='w-[90%] flex flex-col pt-12 md:w-[60%]'>

                    <h1 className=' text-xl md:text-2xl font-semibold text-accentNormal'>{data.data.title}</h1>

                    <p className=' text-base md:text-lg  '>{data.data.authorName}</p>

                    <Image src={data.data.image.path} alt={'image'} width={100} height={80} className='w-full h-56 lg:h-80 rounded-3xl border mt-4' />

                    <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-xs my-6'>

                            <div className='flex justify-center items-center gap-x-2'>
                                    <span className='w-4 h-4'>
                                         <MailIcon color={'var(--neutral-dark)'} />
                                    </span>
                                    <p>{data.data.timeToReadInMinutes} دقیقه مطالعه</p>
                            </div>

                            <div className='flex justify-center items-center gap-x-2'>
                                    <span className='w-4 h-4'>
                                         <MailIcon color={'var(--neutral-dark)'} />
                                    </span>
                                    <p>{data.data.createDate} بارگزاری</p>
                            </div>

                            <div className='flex justify-center items-center gap-x-2'>
                                    <span className='w-4 h-4'>
                                         <MailIcon color={'var(--neutral-dark)'} />
                                    </span>
                                    <p>{data.data.blogComments.length} نظر</p>
                            </div>

                            <div className='flex justify-center items-center gap-x-2'>
                                    <span className='w-4 h-4'>
                                         <MailIcon color={'var(--neutral-dark)'} />
                                    </span>
                                    <p>{data.data.blogVisitCount} بازدید</p>
                            </div>

                    </div>

                    <div className='w-full mb-10'>
                          {
                            data.data.blogSections.map(section => 
                              <div className='w-full flex flex-col items-start' key={section.order}>
                                <h1>{section.title}</h1>
                                <p className=''>{section.htmlContent}</p>
                                <br/>
                              </div>
                            )
                          }
                            {/* <p>{data.data.blogSections[0].htmlContent}</p> */}
                    </div>

                    {/* <CommentSection blogId={data.data.id} /> */}

            </div>
    </article>
);
}
