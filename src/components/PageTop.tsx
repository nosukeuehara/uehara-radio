import React from "react";
import Image from "next/image";

const PageTop = () => {
  return (
    <section className="bg-amber-200 w-full h-screen flex items-center justify-center">
      <div className="relative w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
        <Image
          src="/uehararadioImg.png"
          alt="ウエハラレィディオのメインロゴ"
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 320px, (min-width: 640px) 240px, 240px"
          priority
          quality={90}
        />
      </div>
      <h1 className="sr-only">
        ウエハラレィディオ - ウエハラ シンタロウの公式サイト
      </h1>
    </section>
  );
};

export default PageTop;
