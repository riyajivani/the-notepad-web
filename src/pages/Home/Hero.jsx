// import React from "react";
// import { Link } from "react-router-dom";
// import background from "../../assets/phone.png";
// import smallBackground from "../../assets/smphone.png";

// const Hero = () => {
//   return (
//     <section
//       className="w-full h-[100vh] bg-cover bg-no-repeat"
//       style={{ backgroundImage: `url(${background})` }}
//       id="hero"
//     >
//       <div className="flex flex-col max-w-4xl pl-40 pt-16">
//         {/* TEXT BLOCK */}
//         <h1 className="text-4xl md:text-5xl font-bold text-textBlue mb-2 mt-16">
//           {" "}
//           All Your Notes.{" "}
//         </h1>
//         <h1 className="text-4xl md:text-5xl font-bold text-primaryPink mb-6">
//           {" "}
//           One Smart App.{" "}
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-2">
//           {" "}
//           From offline mode to rich text, reminders, tags, and calendar —
//           <br /> everything you need to stay organized lives in one place.
//         </p>

//         <p className="text-md font-semibold text-gray-800 mb-8">
//           {" "}
//           All core features are free — no paywalls.{" "}
//         </p>

//         {/* BUTTONS */}
//         <div className="flex flex-wrap gap-4 mb-14">
//           <Link
//             to="#"
//             className="px-6 py-3 bg-primaryBlue text-gray-900 rounded-xl font-medium shadow-sm hover:shadow-md transition active:scale-95"
//           >
//             Get it on Google Play
//           </Link>
//           <Link
//             to="#features"
//             className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-800 hover:bg-gray-100 transition active:scale-95"
//           >
//             See Features
//           </Link>
//         </div>

//         {/* IMAGE / GIF SECTION */}
//         {/* <div className="w-full h-[300px] md:h-[420px] bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center border border-gray-200"> <span className="text-gray-400">Your app preview image / GIF goes here</span> </div> */}
//       </div>
//     </section>
//   );
// };
// export default Hero;


import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/homepage.png";
import smallBackground from "../../assets/smphone.png";
import { useScrollNavigation } from "../../utils/scrollUtils";
import { ROUTES } from "../../constants/routespath";

const Hero = () => {
  return (
    <>
      {/* DESKTOP / LARGE SCREENS */}
      <section
        className="hidden lg:flex w-full h-[85vh] xl:h-[100vh] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
        id="hero"
      >
        <Content />
      </section>

      {/* MEDIUM & SMALL SCREENS */}
      <section
        className="lg:hidden w-full h-[90vh] sm:h-[100vh  ] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${smallBackground})` }}
        id="hero"
      >
        <Content />
      </section>
    </>
  );
};

const Content = () => {
  const { scrollToSection } = useScrollNavigation();

  const handleNavClick = (sectionId, targetPath = "/") => {
    scrollToSection(sectionId, targetPath);
  };
  return (
    <div className="flex flex-col max-w-4xl pt-20 sm:pt-8 px-6 sm:px-10 lg:pl-40 items-center text-center lg:items-start lg:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-textBlue mb-2 mt-8 lg:mt-16">
        All Your Notes.
      </h1>

      <h1 className="text-4xl md:text-5xl font-bold text-primaryPink mb-6">
        One Smart App.
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-4 md:mb-6 leading-relaxed">
        From offline mode to rich text, reminders, tags, and calendar —
        <br className="hidden sm:block" />
        everything you need to stay organized lives in one place.
      </p>

      <p className="text-md font-semibold text-gray-800 mb-8">
        All core features are free — no paywalls.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 w-[70%] sm:w-fit">
        <Link
          to="#"
          className="flex items-center gap-2 px-6 py-3 bg-primaryBlue text-gray-900 rounded-xl font-medium shadow-sm hover:shadow-md transition active:scale-95 ">
         <img width={18} src="data:image/png;base64,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" alt="google-play-store-new"/>
          Get it on Google Play
        </Link>

        <div
          onClick={() => handleNavClick("features", ROUTES.DEFAULT.path)}
          className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-800 hover:bg-gray-100 transition active:scale-95">
          See Features
        </div>
      </div>
    </div>)
};

export default Hero;
