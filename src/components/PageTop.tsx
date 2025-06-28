import React from "react";
import Image from "next/image";

const PageTop = () => {
  return (
    <div className="bg-blue-400 w-full h-screen flex items-center justify-center">
      <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
        <Image
          src="/toppageImg.png"
          alt="top page image"
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 320px, (min-width: 640px) 240px, 160px"
        />
      </div>
    </div>
  );
};

export default PageTop;
