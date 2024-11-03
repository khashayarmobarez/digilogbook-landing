
import Image from "next/image";
import { ThemeContext } from '@/utils/ThemeContext';
// import { useContext } from 'react';

// comps
import Introduction from '@/components/module/Landing/Introduction';
import WhyDigi from "@/components/module/Landing/WhyDigi";
import Options from "@/components/module/Landing/Options";
import ArticleSlider from "@/components/module/Landing/ArticleSlider";
import BrandsMarquee from "@/components/module/Landing/BrandsMarquee";

// react query
import ContactUsBox from "@/components/module/Landing/ContactUsBox";
import JoinUs from "@/components/module/Landing/JoinUs";

async function getBlogs() {
  const pageSize = 10;
  const pageNumber = 1;
  
  try {
      const res = await fetch(`https://api.digilogbook.ir/api/Blog/GetBlogs?pageSize=${pageSize}&pageNumber=${pageNumber}`, {
          next: { revalidate: 3600 }, // Revalidate every hour (for ISR)
      });
      if (!res.ok) throw new Error('Failed to fetch data');
      return await res.json();
  } catch (error) {
      console.error('Error fetching data:', error);
      return null; // Fallback in case of an error
  }
}

export default async function Home() {

  // const { theme, toggleTheme } = useContext(ThemeContext);
  const blogsData = await getBlogs();

  return (
    <>
        <main className="pb-10">

          <Introduction />
          <WhyDigi />      
          <Options />
          <JoinUs />
          <ArticleSlider blogsData={blogsData} />
          {/* <BrandsMarquee /> */}
          <ContactUsBox />
          {/* <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
          </div> */}
        </main>
    </>
  );
}
