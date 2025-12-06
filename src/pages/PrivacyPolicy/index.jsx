import React, { useState } from "react";
import { privacyPolicy } from "../../constants";
import bglight from '../../assets/bglight.png'
import { useScrollToSection } from '../../hooks/useScrollToSection'

const PrivacyPolicy = () => {
  useScrollToSection();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = privacyPolicy[activeIndex];

  const goNext = () => setActiveIndex((i) => Math.min(i + 1, privacyPolicy.length - 1));
  const goPrev = () => setActiveIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="px-6 w-full bg-no-repeat bg-fixed z-0" style={{ backgroundImage: `url(${bglight})` }}>

      {/* <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" /> */}

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-textBlue text-center pt-24 pb-10">
          Privacy Policy
        </h2>

        <div className="flex flex-col md:flex-row justify-center w-full gap-6 pb-24">

          {/* Sidebar */}
          <aside
            className="hidden md:block w-full md:w-[30%] bg-[#c6d6fa20] border border-[#c6d6fa] overflow-y-auto md:max-h-[80vh] lg:max-h-[60vh]  rounded-xl sidebar-scroll">
            <ul className="py-6 space-y-2">
              {privacyPolicy.map((item, index) => (
                <li
                  key={item.title}
                  onClick={() => setActiveIndex(index)}
                  className={`
                  cursor-pointer text-[15px] font-medium py-2 px-4 mr-5 
                  transition-colors duration-200
                  ${activeIndex === index
                      ? "bg-primaryBlue text-black font-semibold border-r-4 border-black mr-5"
                      : "text-gray-700 hover:bg-white/40"
                    }
                `}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main content */}
          <section
            className="relative w-full md:w-[60%] bg-white border border-gray-200 rounded-2xl shadow-sm px-10 p-4">
            {/* Sticky header */}
            <div className="sticky top-0 bg-white py-3 mb-2 z-10 border-b border-gray-200">
              <h2 className="text-lg md:text-2xl font-bold text-textBlue">{active.title}</h2>
            </div>

            {/* Content Fade */}
            <div className="animate-fadeIn overflow-y-auto max-h-[300px] min-h-[300px] md:max-h-[200px] md:min-h-[200px]">
              <p className="leading-relaxed text-[15px] whitespace-pre-line text-gray-700">
                {active.content}
              </p>

              {active.points && (
                <ul className="list-disc pl-6 space-y-1">
                  {active.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {active.subSections && active.subSections.map((ss, i) => (
                <div key={i} className="mt-6">
                  <h4 className="font-semibold text-[#0E265A] mb-2">{ss.subTitle}</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    {ss.points?.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer Info */}
            <p className="text-xs text-gray-400 text-right mb-4 mt-8">
              Last updated on {new Date().toLocaleDateString()}
            </p>

            {/* Prev / Next Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={goPrev}
                disabled={activeIndex === 0}
                className="px-4 py-2 text-sm rounded-md border disabled:opacity-30
              hover:bg-primaryBlue transition"
              >
                ◀ Previous
              </button>

              <span className="text-gray-500 text-sm">
                {activeIndex + 1} / {privacyPolicy.length}
              </span>

              <button
                onClick={goNext}
                disabled={activeIndex === privacyPolicy.length - 1}
                className="px-4 py-2 text-sm rounded-md border disabled:opacity-30
              hover:bg-primaryBlue transition"
              >
                Next ▶
              </button>
            </div>

            {/* Tiny progress indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-b-xl">
              <div
                className="h-full bg-black transition-all"
                style={{ width: `${((activeIndex + 1) / privacyPolicy.length) * 100}%` }}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
