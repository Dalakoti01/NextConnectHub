
const HeroAbout = () => {
  return (
    <div>
         <div className="bg-gradient-to-r from-[#146fb9] to-blue-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Learn more about NEXTCONNECTHUB and the team behind our success.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-6">
            <p className="text-base md:text-lg">
              NEXTCONNECTHUB is the web development arm of KHATRI & DALAKOTI SOLUTIONS PRIVATE LIMITED, founded in 2020 
              with a mission to provide high-quality, affordable web development services to businesses of all sizes.
            </p>
            <p className="text-base md:text-lg">
              What started as a partnership between two tech enthusiasts has grown into a dedicated team of developers, designers, and 
              digital strategists committed to helping businesses succeed online.
            </p>
            <p className="text-base md:text-lg">
              Our journey began when founders Samarth Khatri and Karan Dalakoti recognized a gap in the market for web development 
              services that were both technically excellent and affordably priced. They combined their expertise in development and 
              design to create solutions that help businesses establish a strong online presence without breaking the bank.
            </p>
            <p className="text-base md:text-lg">
              Today, NEXTCONNECTHUB has successfully delivered over 100 projects across various industries, from e-commerce and 
              education to healthcare and finance. Our commitment to quality, transparency, and client satisfaction remains at the core of 
              everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAbout