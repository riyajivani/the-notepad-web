import React, { useState } from "react";
import { Check } from "lucide-react";
import { plans } from '../../constants/index'
import { faqs } from '../../constants/index'
import { Plus, Minus } from "lucide-react";
import { useScrollToSection } from '../../hooks/useScrollToSection'

const Pricing = () => {
  useScrollToSection();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      {/* pricing */}
      <section className="w-full flex flex-col items-center bg-[linear-gradient(to_bottom,#c6d6fa40_100%,white_50%)] md:bg-[linear-gradient(to_bottom,#c6d6fa40_65%,white_50%)]" id="pricing-hero">
        <h2 className="text-3xl sm:text-4xl  font-bold pt-24 text-center text-textBlue mb-3">
          Choose the <span className="text-primaryRed">plan</span> that fits you
        </h2>
        <p className="text-center text-gray-600">
          Upgrade anytime — all plans include core features.
        </p>

        <div className="flex flex-col md:flex-row gap-24 md:gap-8 p-6 md:p-20 mt-12 md:mt-2 items-center justify-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative w-full max-w-[300px] rounded-2xl pb-8 shadow-xl transition-all duration-300 bg-white hover:-translate-y-2 ${plan.highlight ? "scale-110 shadow-2xl" : ""}`}>

              {/* Price bubble */}
              <div className="absolute text-center px-5 py-4 z-20 -top-12 left-1/2 -translate-x-1/2 bg-white border border-gray-200 text-textBlue font-bold text-lg rounded-full shadow-md">
                {plan.price} <br />
                <span className="text-sm text-black/40">/mo</span>
              </div>

              {/* V Header */}
              <div
                className={`relative h-36 bg-gradient-to-r ${plan.gradient} text-white flex flex-col items-center justify-center p-2`}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
                }}
              >
                <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                <p className="text-sm opacity-80 mt-1 text-center">{plan.tagline}</p>
              </div>
              {/* polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%) */}

              {plan.highlight && (
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-primaryOrange text-textBlue font-bold text-xs px-3 py-1 rounded-full shadow">
                  MOST POPULAR
                </div>
              )}

              <ul className="px-8 py-4 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800">
                    <Check size={18} className="text-primaryPurple" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>


      {/* Frequently asked question */}
      <section className="max-w-4xl mx-auto px-6 py-20" id="pricing-faq">
        <h2 className="text-3xl sm:text-4xl text-textBlue font-bold text-center mb-12">Frequently Asked <span className="text-primaryRed"> Questions </span></h2>

        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-300 border-l-4 border-l-textBlue rounded-xl p-5 shadow-sm bg-white cursor-pointer"
              onClick={() => toggle(i)}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-lg font-bold text-black break-words leading-snug max-w-[80%] ${openIndex === i ? "line-clamp-none" : "line-clamp-2"}`}>{item.q}</h3>
                {openIndex === i ? <Minus size={22} /> : <Plus size={22} />}
              </div>

              {openIndex === i && (
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
