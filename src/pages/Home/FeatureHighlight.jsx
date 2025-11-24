import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { features } from "../../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummyImg from "../../assets/buyphone.png"

const FeatureSlider = () => {
     const isMobile = window.innerWidth < 1000;

     const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 5000,
          swipeToSlide: true,
          cssEase: "linear",
          pauseOnHover: true,
          arrows: !isMobile
     };
     return (
          <section className="w-full bg-white sm:mt-28" id="features">
               <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-textBlue text-center mb-12">
                         Powerful Features Built for You
                    </h2>

                    <div className="slider-container">
                         {/* SLIDER CONTAINER */}
                         <Slider {...settings}>
                              {features.map((f, index) => (
                                   <div
                                        key={index}
                                        className="min-w-full flex items-center justify-center p-1 snap-center bg-white rounded-3xl overflow-hidden h-fit"
                                   >
                                        <div className="flex flex-col md:flex-row">
                                             {/* IMAGE – Balanced ratio */}
                                             <div className="w-full md:w-[50%] md:ml-4 flex justify-center items-center">
                                                  <img
                                                       src={dummyImg}
                                                       alt={f.title}
                                                       className="w-full sm:w-[400px] h-full md:w-[350px] md:h-[380px] object-cover"
                                                  />
                                             </div>

                                             {/* TEXT – Rich content */}
                                             <div className="w-full md:w-1/2 p-10 min-h-[600px] sm:min-h-fit flex flex-col justify-start sm:justify-center bg-gradient-to-br from-[#c6d6fa66] via-white to-[#FFFF8866] rounded-2xl">

                                                  <p className="text-sm uppercase tracking-wide text-primaryPurple font-semibold mb-3">
                                                       Featured Capability
                                                  </p>

                                                  <h3 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                                                       {f.title}
                                                  </h3>

                                                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                                       {f.desc}
                                                  </p>

                                                  {/* Bullet Points */}
                                                  <ul className="grid grid-cols-1 gap-3 text-gray-700 mb-6">
                                                       {f.bullets?.map((b, i) => (
                                                            <li key={i} className="flex items-center gap-2">
                                                                 <div className="w-2 h-2 bg-primaryPurple rounded-full"></div>
                                                                 {b}
                                                            </li>
                                                       ))}
                                                  </ul>

                                                  {/* CTA BUTTON */}
                                                  {/* <button
                                                       className="self-start px-6 py-3 bg-primaryBlue text-white rounded-xl shadow hover:bg-hoverBlue transition font-medium">
                                                       Learn More
                                                  </button> */}
                                             </div>

                                        </div>
                                   </div>
                              ))}
                         </Slider>
                    </div>

               </div>
          </section>
     );
};

export default FeatureSlider;
