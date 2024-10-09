'use client';
import Image from "next/image";
import { ThemeContext } from '@/utils/ThemeContext';
import { useContext } from 'react';

// comps
import Introduction from '@/components/templates/Landing/Introduction';
import WhyDigi from "@/components/templates/Landing/WhyDigi";
import Options from "@/components/templates/Landing/Options";
import ArticleSlider from "@/components/templates/Landing/ArticleSlider";

export default function Home() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className="pb-10">

      <Introduction />
      <WhyDigi />      
      <Options />
      <ArticleSlider />
      {/* <div>
        <p>Current theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div> */}
    </main>
  );
}
