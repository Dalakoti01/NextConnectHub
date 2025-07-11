import Image from "next/image";
import HeroHome from "./components/home/HeroHome";
import MidHome from "./components/home/MidHome";
import ContactForm from "./components/ContactForm";

export const metadata = {
  metadataBase: new URL("https://nextconnecthub.com"),
  title: "Home | NextConnectHub",
  description:
    "We empower businesses with modern web solutions that drive results.At NextConnectHub, we craft high-performance websites and implement proven SEO stratergies.",
  keywords:
    "Web Development, SEO Services, SEO Agency, Next.js, MERN Stack, React.js,UODDM, Business Growth, UI/UX Design, AI Chatbot, Payment Integration, WordPress Development",
  openGraph: {
    title: "Home | NextConnectHub",
    description:
      "We empower businesses with modern web solutions that drive results.At NextConnectHub, we craft high-performance websites and implement proven SEO stratergies.",
    images: [
      {
        url: "https://nextconnecthub.com/imagelogo.png",
        width: 1200,
        height: 630,
        alt: "Next Connect Hub Logo",
      },
    ],
    url: "https://nextconnecthub.com",
  },
  twitter: {
    title: "NextConnectHub",
    description:
      "We empower businesses with modern web solutions that drive results.At NextConnectHub, we craft high-performance websites and implement proven SEO stratergies.",
    images: ["https://nextconnecthub.com/imagelogo.png"],
    card: "summary_large_image",
    creator: "Karan Dalakoti",
  },
};


export default function Home() {
  
  return (
    <div>
      <HeroHome/>
      <MidHome/>
      <ContactForm className={`bg-gray-50`}/>
    </div>
  );
}
