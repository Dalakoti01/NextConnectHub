import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment integration and inventory management.",
    image: "/EcommercePortfolio.jpg",
    category: "E-Commerce",
    link: "https://ecom-virid-eight.vercel.app/",
  },
  {
    id: 2,
    title: "Corporate Website",
    description:
      "Modern corporate website with custom CMS and blog functionality.",
    image: "/CorporateWebsite.jpg",
    category: "Corporate",
    link: "https://agra-tax-navigator.vercel.app/",
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description:
      "Property listing website with advanced search and filtering options.",
    image: "/RealEstatePortfolio.jpg",
    category: "Real Estate",
    link: "https://realestate-portal-tdta.onrender.com",
  },
  {
    id: 4,
    title: "Education Platform",
    description:
      "Online learning management system with video courses and assessments.",
    image: "/EducationPortfolio.jpg",
    category: "Education",
    link: "https://edu-bharat.vercel.app/",
  },
  {
    id: 5,
    title: "Restaurant Website",
    description:
      "Restaurant website with online reservation system and menu management.",
    image: "/RestrauntImage.jpg",
    category: "Restaurant",
    link: "https://elegant-restaurant-website-with-fixed.onrender.com/",
  },
  {
    id: 6,
    title: "Healthcare Portal",
    description:
      "Patient management system with appointment scheduling functionality.",
    image: "/HealthcarePortfolio.jpg",
    category: "Healthcare",
    link: "https://healthcare-fjsn.onrender.com/",
  },
  {
    id: 7,
    title: "Travel Agency Website",
    description:
      "Travel booking website with tour packages and customer reviews.",
    image: "/TravelAgency.jpg",
    category: "Travel",
    link: "https://travel-by-samarth.vercel.app/",
  },
  {
    id: 8,
    title: "Fitness Application",
    description:
      "Workout tracking app with personalized fitness plans and progress monitoring.",
    image: "/FitnessPortfolio.jpg",
    category: "Fitness",
    link: "https://fitnessapp-1fbr.onrender.com/",
  },
  {
    id: 9,
    title: "Event Management System",
    description:
      "Event planning and management platform with ticket sales functionality.",
    image: "/EventManagement.jpg",
    category: "Events",
    link: "https://event-management-samarth.vercel.app/",
  },
  {
    id: 10,
    title: "Portfolio Website",
    description:
      "Professional portfolio website for a photography business with gallery features.",
    image: "/PortfolioWebsite.jpg",
    category: "Portfolio",
    link: "https://portfolio-taxwise.vercel.app/",
  },
  {
    id: 11,
    title: "Blog Platform",
    description:
      "Content management system for bloggers with social media integration.",
    image: "/BlogWebsite.jpg",
    category: "Blog",
    link: "https://blog-by-samarth.vercel.app/",
  },
  {
    id: 12,
    title: "Job Portal",
    description:
      "Job listing and application management system for recruiters and job seekers.",
    image: "/JobPortal.jpg",
    category: "Job Portal",
    link: "https://jobportal-vwpr.onrender.com/",
  },
  {
    id: 13,
    title: "Software Requirement Specification",
    description:
      "Community platform with user profiles, messaging, and content sharing.",
    image: "/SoftwareRequirementSpecification.jpg",
    category: "Social",
    link: "https://srs-project-tau.vercel.app/",
  },
  {
    id: 14,
    title: "News Website",
    description:
      "News aggregation and publishing platform with categories and search functionality.",
    image: "/NewsWebsite.jpg",
    category: "News",
    link: "https://newsapp-2trq.onrender.com/",
  },
  {
    id: 15,
    title: "Marketplace Platform",
    description:
      "Multi-vendor marketplace with product listings and secure transactions.",
    image: "/MarketplaceWebsite.jpg",
    category: "Marketplace",
    link: "",
  },
];

// Server Component
const Testimonials = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#146fb9] to-blue-950 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Take a look at some of our recent projects and see how we've
              helped our clients achieve their goals.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <Image
                      className="object-fit  object-fill"
                      alt="testimonials image"
                      src={item.image}
                      height={400}
                      width={400}
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item?.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Demo
                        </button>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item?.link && (
                    <Link
                      href={item?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 flex items-center gap-1">
                        View Demo
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and see how
              we can help you achieve your online goals.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://calendly.com/nextconnecthub/nextconnecthub"
            >
              <button className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
