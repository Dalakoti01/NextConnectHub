"use client"
import { Users, Code, CheckCircle, Globe, Smartphone, Palette, ShoppingCart, BarChart3, FileText, Search, Lock, HeadphonesIcon, Star } from 'lucide-react';
import ToastButton from '../FreelanceMarketplace/ToastButton'

const FreelancerMarketPlace = () => {
  const services = [
    { name: 'Web Development', icon: Globe },
    { name: 'Mobile App Development', icon: Smartphone },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'WordPress Development', icon: Globe },
    { name: 'E-commerce Solutions', icon: ShoppingCart },
    { name: 'Digital Marketing', icon: BarChart3 },
    { name: 'Content Creation', icon: FileText },
    { name: 'SEO Optimization', icon: Search }
  ];

  const features = [
    {
      icon: Users,
      title: 'Vetted Professionals',
      description: 'Our freelancers undergo rigorous screening and are thoroughly vetted to ensure they meet our high standards of quality and professionalism.'
    },
    {
      icon: Code,
      title: 'Specialized Skills',
      description: 'Find experts in niche technologies, frameworks, or design styles to match your exact project requirements.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'All projects and freelancers work delivered through our platform with a satisfaction guarantee.'
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: 'Access Expert Freelancers',
      description: `Our network consists of only carefully vetted developers, designers, and digital 
marketing pros — who will understand your project and deliver the perfect 
result.`
    },
    {
      icon: BarChart3,
      title: 'Transparent Pricing',
      description: 'No hidden charges, no surprises. You pay the price Freelancers quote — simple and honest'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'We thoroughly review every job so that you get the high standards we promise.'
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Your money is safe! Payment is released only when the work satisfies you 100%.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'From project start to completion, we are always there for you — for questions, guidance, or help.'
    },
    {
      icon: Star,
      title: 'Specialized Skills',
      description: 'Do you need specific technology or specific expertise? Here you will find all kinds of experts, exactly according to your needs.'
    }
  ];

 
  return (
    <div className='w-full h-full'>
      

      <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#146fb9] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            AnyoneCanConnect Freelance Marketplace
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Connect with skilled freelancers from our network for your specific project needs.
          </p>
          {/* <button onClick={() => toast.success("Coming Soon")} className="bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Explore the Marketplace
          </button> */}
          <ToastButton label='Explore The MarketPlace' className='bg-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300'/>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              About AnyoneCanConnect
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              AnyoneCanConnect is our sister platform that connects businesses with skilled freelancers from our network. 
              Whether you need a specific component for your website or a complete digital marketing strategy, you'll find 
              the right talent on our marketplace.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Services Available on the Marketplace
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              From web development to digital marketing, find experts in various fields to help with your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center border">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {service.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Marketplace
            </h2>
            <p className="text-lg text-gray-600">
              AnyoneCanConnect offers numerous advantages for businesses looking to hire freelance talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     

      
    </div>
    
    </div>
  )
}

export default FreelancerMarketPlace