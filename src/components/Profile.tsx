import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-lime-50"
    >
      <div>
        <div className="mb-8 flex justify-center">
          <Image src="/icon.jpg" alt="Profile Icon" width={200} height={200} />
        </div>

        <div>
          <p className="text-2xl font-bold mb-4 text-[#27515c]">
            ウエハラ シンタロウ
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
