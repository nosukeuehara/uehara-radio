import React from "react";
import Link from "next/link";
import {NavItem} from "@/types";

type PageNavHeaderProps = {
  contents: NavItem[];
};

const PageNavHeader: React.FC<PageNavHeaderProps> = ({contents}) => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-screen hidden md:block bg-transparent z-50">
      <nav className="max-w-[1280px] mx-auto flex gap-20 items-center justify-center px-6 py-8">
        {contents.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[#27515c] text-xl font-bold transition-colors hover:text-[#be7d41]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default PageNavHeader;
