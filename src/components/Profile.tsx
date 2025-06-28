import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-lime-50"
    >
      <div className="text-center max-w-lg">
        <div className="mb-8 flex justify-center">
          <Image
            src="/icon.jpg"
            alt="ウエハラ シンタロウのプロフィール写真"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
            quality={85}
            sizes="200px"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#27515c]">
            ウエハラ シンタロウ
          </h2>
          <div className="text-lg text-[#27515c] space-y-4 leading-relaxed">
            <p>ポッドキャスト・YouTube・stand.fmで活動中。</p>
            <p>日々の出来事やリスナーからのおたよりを配信しています。</p>
            <p>みなさまからのおたよりもお待ちしております。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
