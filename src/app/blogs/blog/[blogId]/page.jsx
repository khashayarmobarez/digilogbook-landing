import BlogDetailsPage from "@/components/templates/blogs/BlogsDetailPage";


// Main blog details component
export default async function Index({ params }) {

  return (
    <BlogDetailsPage params={params} />
  );
  
}
