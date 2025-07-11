import Link from "next/link";
import Image from "next/image";

const HeroHome = () => {
  return (
    <div className="bg-gradient-to-r from-[#146fb9] to-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Modern Web Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              Nextconnecthub brings to you realistic, competitive, and
              cutting-edge web solution-based services to your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" passHref>
                <button className="bg-white cursor-pointer text-[#146fb9] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Our Services
                </button>
              </Link>
              <Link href="/getInTouch" passHref>
                <button className="border-2 cursor-pointer border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
          <div className="relative ">
            <div className="rounded-lg">
              <Image
                // className="rotate-90 rounded-lg" // Add your rotation here
                src="/HomePhoto.png"
                alt="Description"
                width={500} // Required: image width in px
                height={300} // Required: image height in px
                priority // (optional) Loads image with high priority (for above-the-fold images)
                quality={75} // (optional) Image quality (1-100, default 75)
                // placeholder="blur" // (optional) Shows a blur while loading (requires blurDataURL or static image)
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
