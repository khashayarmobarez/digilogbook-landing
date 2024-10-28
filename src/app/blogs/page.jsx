// import { useRouter } from 'next/navigation';
import Link from 'next/link';

// vars 
import { Api_BASE_URL } from '@/utils/resuableVars';
import Image from 'next/image';

export async function generateStaticParams() {
    // Set your page size and determine total pages dynamically
    const pageSize = 10;
    const totalPages = await getTotalPages(pageSize);
  
    // Generate static paths for each page number
    return Array.from({ length: totalPages }, (_, i) => ({
      pageNumber: (i + 1).toString(),
    }));
}

async function getTotalPages(pageSize) {
    const res = await fetch(`${Api_BASE_URL}/Blog/GetBlogs?pageSize=${pageSize}&pageNumber=1`);
    const data = await res.json();
    return Math.ceil(data.totalCount / pageSize);
}

function Pagination({ pageNumber, totalPages }) {
    return (
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <Link key={i} href={`/blogs?pageNumber=${i + 1}`}>
            <p className={i + 1 === pageNumber ? 'active' : ''}>{i + 1}</p>
          </Link>
        ))}
      </div>
    );
}


const Blogs = async ({ params }) => {

    const pageNumber = parseInt(params.pageNumber) || 1;
    const pageSize = 10;


    // Fetch paginated blog data with revalidation
    const res = await fetch(
        `${Api_BASE_URL}/Blog/GetBlogs?pageSize=${pageSize}&pageNumber=${pageNumber}`,
        { next: { revalidate: 3600 } } // Revalidate every hour
    );

    const { data, totalCount } = await res.json();

    console.log(data)

    return (
        <div className="w-full flex justify-center">
            <div className="w-[90%] my-6 gap-y-6 min-h-[45dvh]">

                <h1 className='text-xl'>بلاگ و مقالات</h1>

                <ul className='grid grid-cols-1 md:grid-cols-2'>
                    {data.map((blog) => (
                        <li key={blog.id} className='w-full'>
                            <Link href={`/blogs/${blog.id}`} className='w-full h-full'>
                            <Image />
                            <h1>
                            {blog.title}
                            </h1>
                            </Link>
                        </li>
                    ))}
                </ul>

                <Pagination pageNumber={pageNumber} totalPages={Math.ceil(totalCount / pageSize)} />

            </div>
        </div>
    );
};

export default Blogs;


