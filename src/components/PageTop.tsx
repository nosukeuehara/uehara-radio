"use client";
import Image from "next/image";

const PageTop = () => {
  return (
    <section className="bg-amber-200 w-full h-screen flex flex-col items-center justify-center relative">
      {/* メインロゴ */}
      <div className="relative w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] animate-fade-in-up">
        <Image
          src="/uehararadioImg.png"
          alt="ウエハラレィディオのメインロゴ"
          fill
          className="object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 320px, (min-width: 640px) 240px, 240px"
          priority
          quality={90}
        />
      </div>

      {/* スクロールダウン矢印 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-1000">
        <div
          className="flex flex-col items-center space-y-2 text-[#27515c] hover:text-[#be7d41] transition-colors duration-300 group"
          aria-label="下にスクロール"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <span className="text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
        </div>
      </div>

      <h1 className="sr-only">
        ウエハラレィディオ - ウエハラ シンタロウの公式サイト
      </h1>
    </section>
  );
};

export default PageTop;
