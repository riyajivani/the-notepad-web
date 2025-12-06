import Button from '../../common/Button'
import phoneImg from '../../assets/buyphone.png'

const HighlightCTA = () => {
     return (
          <section className="w-full py-20 bg-white" id="cta">
               <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-bold text-textBlue text-center mb-3">
                         Elevate Your <span className="text-primaryRed">Note-Taking</span>
                    </h2>

                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
                         A clean, simple workspace designed to help you capture ideas faster and stay organized effortlessly.
                    </p>

                    <div className="relative w-full rounded-3xl bg-gradient-to-br from-[#ffff8820] to-[#F5E8FF] shadow-md p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">

                         {/* LEFT CONTENT */}
                         <div className="flex-1 flex flex-col items-center md:block">
                              <span className="inline-block bg-primaryPurple/15 text-primaryPurple px-2 py-1 rounded-full text-sm font-semibold mb-4">
                                   Capture More
                              </span>

                              <h2 className="text-center md:text-left text-3xl md:text-4xl md:max-w-[50%] font-extrabold text-gray-900 mb-4">
                                   Your ideas deserve a better home.
                              </h2>

                              <p className="text-gray-700 text-lg text-center md:text-left leading-relaxed mb-8 md:max-w-[45%]">
                                   Whether it's tasks, journals, creative sparks, or quick reminders —
                                   keep everything neatly organized and instantly accessible inside one smart notepad.
                              </p>

                              <Button className="px-8 py-4 bg-primaryBlue rounded-xl text-lg font-semibold shadow-md hover:shadow-lg flex items-center gap-4 transition">
                                   <img width={24} src="data:image/png;base64,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" alt="google-play-store-new"/>
                                   <p className='text-sm '>Start Taking Better Notes</p>
                              </Button>
                         </div>

                         {/* RIGHT CONTENT */}
                         <img alt='' src={phoneImg} width={430} className='md:absolute md:bottom-2 md:right-10' />

                    </div>
               </div>
          </section>
     );
};

export default HighlightCTA;
