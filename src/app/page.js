"use client"; // Ensure this is at the top of your file

import { useState } from 'react';

import { Body } from '@/components/Body';
import { Body1 } from '@/components/Body1';
// import { Body2 } from '@/components/Body2';
import { Body3 } from '@/components/Body3';
import { Header } from '@/components/Header';
import { AllBlogs } from '@/components/AllBlog';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : ""} >
      <div className="w-full min-h-[100vh] bg-white">
        
        <Header toggleTheme={handleClick} isDark={isDark} />
        <Body />
        <Body1 />
        <AllBlogs />
      
     
     
        {/* <Body2 /> */}
        <Body3 />
      </div>
    </div>
  );
}

