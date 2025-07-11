import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

// Server Component: No client-side hooks or state
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About Us", href: "/aboutUs" },
  { label: "Contact Us", href: "/getInTouch" },
  { label: "Freelance Marketplace", href: "/freelanceMarketPlace" },
];

export default function Footer() {
  return (
    <div className="w-full bg-blue-950 text-white px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between">

        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <div className="flex items-center ">
            <h1 className="text-lg font-bold">NEXTCONNECT</h1>
            <h1 className="text-lg font-bold text-[#146fb9]">HUB</h1>
          </div>
          <p className="text-sm">
Modern, fast and budget-friendly web development services 
for every type of company – small or large          </p>
          <p className="text-xs">
            © 2025 KHATRI & DALAKOTI SOLUTIONS PRIVATE LIMITED. All rights reserved.
          </p>
          <div className='flex gap-5 text-sm'>
            <Link className='hover:underline' href={"/Terms&Condition"}>Terms & Conditions</Link>
            <Link className='hover:underline' href={"/privacy-policy"}>Privacy Policy</Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h1 className="font-semibold">Quick Links</h1>
          <div className="flex flex-col gap-2 text-sm">
            {quickLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-pointer hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>e
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h1 className="font-semibold">Contact Us</h1>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nextconnecthub@gmail.com&su=Inquiry&body=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-2 text-sm"
          >
            <Mail size={20} />
            <p>contactatsamarth@gmail.com</p>
          </a>
          <div className="flex cursor-pointer items-center gap-2 text-sm">
            <Phone size={20} />
            <p>+91 7895833851</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={20} />
            <p>KHATRI & DALAKOTI SOLUTIONS PRIVATE LIMITED</p>
          </div>
        </div>

      </div>
    </div>
  );
}