import Link from "next/link";
import React from "react";
import Image from "next/image";

const InfoPage = () => {
  return (
    <section
      id="info"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-cyan-50"
    >
      <Image
        src="/toppageImg.png"
        alt="top page image"
        width={150}
        height={150}
      />
      <div className="max-w-xl w-full text-center space-y-6 pt-12">
        <div className="flex flex-col gap-4 justify-center">
          <Link
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#27515c] px-6 font-semibold text-lg relative group transition duration-300 ease-out hover:text-[#5394e7]"
          >
            <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300">
              おたより
            </span>
          </Link>

          <Link
            href="https://youtube.com/channel/UCFOWXeiF9qJ-qe7EsTLd7Hg?si=tbdhK3jp56tl22NY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#27515c] px-6 font-semibold text-lg relative group transition duration-300 ease-out hover:text-[#f12315]"
          >
            <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300">
              YouTube
            </span>
          </Link>

          <Link
            href="https://stand.fm/channels/657094b97376b3f936e79489?fbclid=PAQ0xDSwLMgsRleHRuA2FlbQIxMAABp7TZJS8imTTpLG9FO74gn_gu4v4D9QsoIZeISZaMZSQeDSbrJe1UnbslrKTq_aem_GHdQTr88Tep-5mt2uxrQhQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#27515c] px-6 font-semibold text-lg relative group transition duration-300 ease-out"
          >
            <span className="group-hover:translate-y-[-2px] inline-block transition-transform duration-300 hover:text-[#418a57]">
              stand.fm
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
