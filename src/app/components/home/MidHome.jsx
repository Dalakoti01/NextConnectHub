import { Code, Palette, Bot, Monitor, Database, CreditCard, Check, Star } from "lucide-react";

// This is a Next.js Server Component (no client-side hooks or state)
const services = [
  {
    icon: Code,
    title: "MERN Stack Websites And NextJs Wesites",
    description: `We build fast, secure, and mobile-friendly websites using React 
Node js, Express, MongoDB  and NexJs . We provide fast and secure database support up to 
512MB – so your website always runs smoothly`,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: `We design beautiful, easy-to-use interfaces with your users in mind – 
keeping people coming back to your website again and again`,
  },
  {
    icon: Bot,
    title: "AI Chatbot Integration",
    description: `We improve user experience by deploying smart 
chatbots on your website – so every visitor gets an instant response.`,
  },
  {
    icon: Monitor,
    title: "WordPress Development",
    description: `If you prefer WordPress, we can build you a site 
exactly the way you need it, with custom designs and themes.`,
  },
  {
    icon: Database,
    title: "SEO that really works",
    description: `We make your website completely SEO-friendly in one go — so even Google loves your site 
Higher rankings = more traffic = more clients.
`,
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: `We integrate trusted payment gateways like Razorpay 
into your website – making it easy and secure to take online payments.`,
  },
];

const pricingPlans = [
  {
    name: "Basic Package",
    price: "₹15,000",
    popular: false,
    features: [
      "Up to 10 pages",
      "Responsive Design",
      "3 months free maintenance",
      "Database up to 512MB",
      "Basic SEO setup",
    ],
  },
  {
    name: "Standard Package",
    price: "₹45,000",
    popular: true,
    features: [
      "Up to 30 pages",
      "Responsive Design",
      "3 months free maintenance",
      "Free Database up to 512MB",
      "Payment gateway integration",
      "Advanced SEO setup",
    ],
  },
  {
    name: "Enterprise Package",
    price: "Custom",
    popular: false,
    features: [
      "No Page Limit.",
      "Responsive Design",
      "3 months free maintenance",
      "Free Database up to 512MB",
      "Payment gateway integration",
      "AI Chatbot integration",
      "Comprehensive SEO setup",
    ],
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "E-commerce Business Owner",
    text: "NEXTCONNECTHUB delivered our e-commerce website on time and within budget. The team was professional and responsive throughout the project.",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    text: "The UI/UX design service provided by NEXTCONNECTHUB transformed our website. Our user engagement has increased significantly since the redesign.",
    avatar: "PS",
  },
];

export default function MidHome() {
  return (
    <>
      {/* Services Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You think we bring it to life in the digital world – design, development, or 
branding, we give every idea an online identity that stands out
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the package that suits your business needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  plan.popular
                    ? "ring-2 ring-blue-500 transform scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#146fb9] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {plan.price}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://calendly.com/nextconnecthub/nextconnecthub"
                >
                  <button
                    className={`w-full cursor-pointer py-4 px-6 rounded-lg font-bold transition-colors duration-200 ${
                      plan.popular
                        ? "bg-[#146fb9] text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Trust not just our words but the 
experiences of our clients. Their feedback is our true identityfor it. See what our clients have to
              say about our work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}