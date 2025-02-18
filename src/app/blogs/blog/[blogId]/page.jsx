import BlogDetailsPage from "@/components/templates/blogs/BlogsDetailPage";
import { Api_BASE_URL } from "@/utils/resuableVars";


// Main blog details component
export default async function Index({ params }) {

  return (
    <BlogDetailsPage params={params} />
  );
  
}

export const generateMetadata = async ({ params }) => {

  const { blogId } = params

  const res = await fetch(`${Api_BASE_URL}/Blog/GetBlog?blogId=${blogId}`);
  const data = await res.json();


  return {
    title: `${data.data.title} | Digilogbook`,
    description: data.data.blogSections[0].htmlContent,
  };

};