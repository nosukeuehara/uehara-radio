import Link from "next/link";
import React from "react";
import Image from "next/image";

const InfoPage = () => {
  return (
    <section
      id="info"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-cyan-50"
    >
      <div className="mb-8">
        <Image
          src="/uehararadioImg.png"
          alt="ウエハラレィディオのロゴ"
          width={150}
          height={150}
          quality={85}
          sizes="150px"
        />
      </div>

      <div className="max-w-xl w-full text-center space-y-6 pt-12">
        <h2 className="text-2xl font-bold text-[#27515c] mb-8">各種リンク</h2>

        <nav
          className="flex flex-col gap-6 justify-center"
          aria-label="外部リンク"
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdY-dAAallkhSZFAIWmoOCMJzMUV4UIdWt-9D9iDybJWzfHqw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#27515c] px-6 py-3 font-semibold text-lg relative group transition duration-300 ease-out hover:text-[#5394e7]"
            aria-label="おたより投稿フォームを開く"
          >
            <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300">
              おたより
            </span>
          </Link>

          <Link
            href="https://youtube.com/channel/UCFOWXeiF9qJ-qe7EsTLd7Hg?si=tbdhK3jp56tl22NY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#27515c] px-6 py-3 font-semibold text-lg relative group transition duration-300 ease-out hover:text-[#f12315]"
            aria-label="YouTubeチャンネルを開く"
          >
            <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300">
              YouTube
            </span>
          </Link>

          <Link
            href="https://stand.fm/channels/657094b97376b3f936e79489?fbclid=PAQ0xDSwLMgsRleHRuA2FlbQIxMAABp7TZJS8imTTpLG9FO74gn_gu4v4D9QsoIZeISZaMZSQeDSbrJe1UnbslrKTq_aem_GHdQTr88Tep-5mt2uxrQhQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#27515c] px-6 py-3 font-semibold text-lg relative group transition duration-300 ease-out"
            aria-label="stand.fmチャンネルを開く"
          >
            <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300 hover:text-[#418a57]">
              stand.fm
            </span>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default InfoPage;
