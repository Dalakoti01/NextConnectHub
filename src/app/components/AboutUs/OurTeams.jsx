import { CheckCircle, Clock, MessageSquare } from "lucide-react";
import Image from "next/image";

const OurTeams = () => {
  const leaders = [
  {
    initials: 'SK',
    name: 'Samarth Khatri',
    title: 'Chief Executive Officer',
    description:
      'Samarth leads our company vision and strategic direction, driving innovation while building partnerships that shape the future of our industry. His entrepreneurial spirit and leadership expertise guide our mission to deliver exceptional web development solutions to businesses of all sizes.',
    founder: true,
    image: '/samarthPhoto.jpg', // e.g., '/images/samarth.jpg'
  },
  {
    initials: 'KD',
    name: 'Karan Dalakoti',
    title: 'Chief Technology Officer',
    description:
      'Karan architects our technological foundation and drives technical innovation across all platforms. His expertise in cutting-edge technologies and system architecture ensures we stay ahead of industry trends while maintaining robust, scalable solutions.',
    founder: true,
    image: '/photoKaran1.jpg', // e.g., '/images/karan.jpg'
  },
];
     const teamMembers = [
    {
      name: "Anurag Gupta",
      role: "Senior Frontend Developer ",
      description: "Anurag brings over 6 years of experience in web development with expertise in MERN stack and NextJs Technologies.",
      image: "/shikharPhoto.jpg"
    },
    {
      name: "Himanshu Sharma",
      role: "Senior Backend Developer",
      description: "Himanshu is our senior backend developer who has experience of more than 4 years . He has in depth experience of technologies like nodejs,spring boot etc",
      image: "/tanmayPhoto.jpg"
    },
    {
      name: "Roshan Singh",
      role: "Senior UI/UX Developer",
      description: "Roshan Specializes in UI/UX Design. He has industry experience of more than 6 years in this field",
      image: "/ashishPhoto.jpg"
    },
    {
      name: "Our Interns",
      role: "Frontend Developers,Backend Developer , Wordpress Developers and UI/UX Designers",
      description: "We have a team of more than 15 interns Currently Working with us on different projects and technologies",
      image: "/interns.jpg"
    }
  ];

  const philosophyItems = [
    {
      icon: CheckCircle,
      title: "UODDM",
      description: "UODDM is a modern framework that follows a structured set of steps to deliver a modern, tech-enabled web application—from understanding client requirements to final deployment."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time; that is why we complete projects on time, without compromising on quality."
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "We keep you updated at every step, so you know how far the project has reached. Open and transparent communication is our priority"
    }
  ];
  return (
    <div>
        <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
         

         <section className="py-16 w-full bg-gray-50">
      <h2 className="text-3xl w-full font-bold text-center text-gray-900 mb-12">
        Our Leadership
      </h2>
      <div className="flex w-full   flex-col md:flex-row justify-center  items-center gap-14 ">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="relative max-w-md w-full border border-blue-200 rounded-lg px-10 py-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {leader.founder && (
              <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-br-md rounded-tl-md">
                FOUNDER
              </span>
            )}

            <div className="flex justify-center mb-4">
              {leader.image ? (
                <Image
                  src={leader.image}
                  alt={`${leader.name} photo`}
                  width={80}
                  height={80}
                  className="rounded-full object-cover h-20  shadow-inner"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xl font-semibold shadow-inner">
                  {leader.initials}
                </div>
              )}
            </div>

            <h3 className="text-center text-lg font-semibold text-gray-900">{leader.name}</h3>
            <p className="text-center text-blue-600 text-sm font-semibold uppercase mb-3">
              {leader.title}
            </p>
            <p className="text-sm text-gray-600 text-center">{leader.description}</p>
          </div>
        ))}
      </div>
    </section>

     <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl flex justify-center transition-shadow duration-300">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    <Image
                     src={member.image}
                  alt={`${member.name} a core member of our technical team.`}
                  width={80}
                  height={80}
                  className="rounded-full object-cover w-full h-full shadow-inner"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {philosophyItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            <p className="text-base md:text-lg">
             At NEXTCONNECTHUB, we believe that technology should be accessible to 
every business - small or big. We build websites that not just looks good, but 
are easy to use and perform great.
            </p>
            <br />
            <p className="text-base md:text-lg">
             We work together with our clients, understand their unique needs and deliver 
solutions that exceed their expectations. Because our success is linked to your 
success — and we'll be with you every day to achieve your online goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeams