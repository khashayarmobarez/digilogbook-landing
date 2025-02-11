import Blogs from "@/components/templates/blogs/Blogs";

export default async function Index({ params }) {

  return (
    <Blogs params={params} />
  );
  
}
