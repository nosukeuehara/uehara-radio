import Link from "next/link";

const InfoPage = () => {
  return (
    <section
      id="letter"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-emerald-100"
    >
      <div className="w-full max-w-xl pt-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#27515c] mb-10">募集中</h2>
          <div className=" text-lg text-[#27515c] text-center mb-10 space-y-5">
            <p>まずはありがとう</p>
            <p>みんなからお便り待ってるよ</p>
          </div>
          <div className="flex justify-center flex-col">
            <div className="transform animate-fade-in-up animation-delay-1000">
              <div
                className="flex flex-col items-center text-[#27515c]"
                aria-label="お便りはここから"
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
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdY-dAAallkhSZFAIWmoOCMJzMUV4UIdWt-9D9iDybJWzfHqw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#27515c] text-lg"
            >
              <span className=" text-8xl inline-block group-hover:-translate-y-0.5 group transition duration-300 ease-out hover:text-[#be7d41]">
                ✉
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
