import Blogs from "@/components/templates/blogs/Blogs";

export default async function Index({ params }) {

  return (
    <Blogs params={params} />
  );
  
}


export const generateMetadata = () => {
  return {
    title: "Blogs | Digilogbook",
    description: "Read insightful articles and updates on the Digilogbook blog. Stay informed with the latest trends, tips, and news in the digital flight logging industry.",
  };
};
