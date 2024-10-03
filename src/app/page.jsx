'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/utils/ThemeContext';
import Image from "next/image";

export default function Home() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="">
      <main className=" text-2xl font-bold">
        سامانه ثبت اطلاعات و پروازهای روزانه
      </main>
      
      {/* <div>
        <p>Current theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div> */}
    </div>
  );
}
