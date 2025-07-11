import { BookOpen, Lightbulb } from "lucide-react";
import Link from "next/link";

const BottomAbout = () => {
  return (
    <div>
      {/* Our Work Culture Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#146fb9] to-blue-950 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Work Culture
          </h2>
          <p className="text-center text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            At NEXTCONNECTHUB, we don't just write code - we build dreams.
Here every team member is like a family, where every idea is heard and every 
effort is valued. We believe that great work happens only when the environment 
is friendly, fearless and full of curiosity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Innovation Hub</h3>
              </div>
              <p className="opacity-90 leading-relaxed">
                Here "why not?" is asked more than "why".
We give our team full freedom to explore - new technologies, new methods, 
new experiments. Sometimes the best solutions come from where someone has 
"thought and seen".
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Continuous Learning</h3>
              </div>
              <p className="opacity-90 leading-relaxed">
                We believe that every human being can learn something new every day.
That is why we maintain regular workshops, internal learning sessions, and an 
open culture - where there is no punishment for a "mistake", but an opportunity 
to grow.
Here growth is not just professional, but personal too.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and see how we can help bring your 
            vision to life.
          </p>
          <Link href="/getInTouch">
            <button className="bg-[#146fb9] cursor-pointer hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomAbout;