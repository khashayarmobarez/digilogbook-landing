import MailIcon from '@/Assets/Icons/MailIcon';
import CommentSection from '@/components/module/blogs/CommentSection';
import { Api_BASE_URL } from '@/utils/resuableVars';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// comps
import BlogPage from '@/components/templates/BlogPage';


// Fetch blog details by ID
async function fetchBlogData(blogId) {

  try {
    const res = await fetch(`${Api_BASE_URL}/Blog/GetBlog?Id=${blogId}`);
    if (!res.ok) throw new Error('Failed to fetch data');
    const data = await res.json();
    console.log(data.data.blogSections)
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

        <BlogPage blogData={data.data} />
        
    </article>
);
}
