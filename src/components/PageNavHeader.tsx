import React from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type PageNavHeaderProps = {
  contents: NavItem[];
};

const PageNavHeader: React.FC<PageNavHeaderProps> = ({ contents }) => {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-screen hidden md:block bg-transparent z-50">
      <nav className="max-w-[1280px] mx-auto flex gap-20 items-center justify-center px-6 py-4">
        {contents.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-lg font-bold text-amber-200 hover:text-blue-700 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default PageNavHeader;
