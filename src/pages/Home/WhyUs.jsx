import {
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Target,
} from "lucide-react";

const benefits = [
  {
    icon: <CheckCircle size={32} className="text-primaryPurple" />,
    title: "Built for Real-Life Productivity",
    desc: "We streamline the messy, everyday workflow so you can focus on what truly moves the needle.",
  },
  {
    icon: <Sparkles size={32} className="text-primaryPurple" />,
    title: "Effortless, Zero-Learning-Curve Experience",
    desc: "Clean layouts, intuitive actions, and a flow that just makes sense—with no friction.",
  },
  {
    icon: <ShieldCheck size={32} className="text-primaryPurple" />,
    title: "Fast, Secure, and Reliable by Design",
    desc: "Your data stays protected with enterprise-grade security, and the app remains lightning fast.",
  },
  {
    icon: <Target size={32} className="text-primaryPurple" />,
    title: "Crafted for People Who Actually Get Things Done",
    desc: "We obsess over tiny UX details because the smallest optimizations create the biggest productivity wins.",
  }
];

const WhyChooseUs = () => {
  return (
     // 
    <section className="w-full py-20 bg-primaryBlue mt-28" id="why-us">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-textBlue text-center mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-16">
          Our Purpose is to make note-taking effortless, fast, and delightful every day.
        </p>

        {/* Benefit Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="mb-4">{b.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
