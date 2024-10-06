'use client';
import Image from "next/image";
import { ThemeContext } from '@/utils/ThemeContext';
import { useContext } from 'react';

// comps
import Introduction from '@/components/Landing/Introduction';

export default function Home() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <main className="">
      
      <Introduction />
      
      {/* <div>
        <p>Current theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div> */}
    </main>
  );
}
