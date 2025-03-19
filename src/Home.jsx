import React from 'react';
import Logo from './assets/IMG_20250319_200040_568 - Copy.svg';
import Construction from './assets/IMG_20250319_200040_719 - Copy.svg';

function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#1C1C1C] text-white text-center px-6 sm:px-8 pt-2 pb-6">
      
      {/* Logo - Responsive Spacing */}
      <div className="w-full flex justify-center mt-2 md:justify-start md:pl-10 mb-[30px] sm:mb-[40px] md:mb-[50px]">
        <img src={Logo} className="w-[150px] sm:w-[250px] md:w-[269.91px] h-auto" alt="gridograph logo" />
      </div>

      {/* Construction Image - Responsive Width */}
      <div className="mb-2 sm:mb-4 md:mb-6">
        <img src={Construction} className="w-[300px] sm:w-[400px] md:w-[565.49px] h-auto" alt="gridograph construction" />
      </div>

      {/* Responsive Heading - Split Words on Small Screens */}
      <h5 className="text-5xl sm:text-5xl md:text-[73px] font-bold mt-2 sm:mt-4 md:mt-6 leading-none">
        {/* Show "WEBSITE UNDER" as block (stacked) on small screens */}
        <span className="text-[#D07A1D] font-[Staatliches] block sm:block md:inline">WEBSITE UNDER</span>
        {/* Show "CONSTRUCTION" on a new line only on sm screens */}
        <span className="font-[Staatliches] ml-3 block sm:block md:inline">CONSTRUCTION</span>
      </h5>

      {/* Contact Us Button */}
      <a href="https://www.instagram.com/gridograph/" target="_blank" rel="noopener noreferrer">
        <button className="mt-3 sm:mt-5 md:mt-6 bg-[#D07A1D] text-white px-4 sm:px-6 py-2 font-semibold hover:bg-orange-500 transition">
          Contact Us
        </button>
      </a>

      {/* Tagline - Responsive Margin */}
      <div className="mt-6 sm:mt-8 mb-2 text-base sm:text-lg">
        YOUR WALL, YOUR STORY, <span className="text-[#D07A1D]">PERFECTLY FRAMED</span>
      </div>
    </div>
  );
}

export default Home;
