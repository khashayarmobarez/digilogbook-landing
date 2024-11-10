import { Api_BASE_URL } from '@/utils/resuableVars';
import { fakeApi } from '@/utils/FakeApiBackup';

// comps
import BlogsBlogBoxes from '@/components/module/blogs/BlogsBlogBoxes';
import Pagination from '@/components/module/blogs/Pagination';

export default async function BlogsPage({ params }) {
  const pageNumber = parseInt(params.pageNumber) || 1;
  const pageSize = 4;

  // Initialize blogs and totalPagesCount to use in try-catch
  let blogs = [];
  let totalPagesCount = 1;

  try {
    const res = await fetch(
      `${Api_BASE_URL}/Blog/GetBlogs?pageSize=${pageSize}&pageNumber=${pageNumber}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    blogs = data.data;
    totalPagesCount = data.totalPagesCount;
  } catch (error) {
    console.error("API fetch failed, using fallback data:", error);
    blogs = fakeApi.data;
    totalPagesCount = fakeApi.totalPagesCount;
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[90%] flex flex-col gap-y-10 my-16 md:w-[60%]'>

        <h1 className='text-lg text-accentNormal md:text-3xl font-semibold'>بلاگ و مقالات</h1>

        <BlogsBlogBoxes blogsData={blogs} />

        <Pagination pageNumber={pageNumber} totalPages={totalPagesCount} />

      </div>
    </div>
  );
}
