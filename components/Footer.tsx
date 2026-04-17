import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "./data/navigation";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          <div className="col-span-1 md:col-span-1 relative flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="GoU-RRMS Logo" 
                  width={40} 
                  height={40} 
                  className="h-8 md:h-10 w-auto"
                />
                <div className="text-sm text-primary">
                  <p className="text-xs">OPM Partnership</p>
                  <p className="text-xs">Co-ordination &</p>
                  <p className="text-xs">Monitoring System</p>
                </div>
              </div>
              <div className="text-sm mb-4 md:mb-0">
                <p>A comprehensive system for Co-ordinating and monitoring OPM Partnerships in Uganda.</p>
              </div>
            </div>
            <p suppressHydrationWarning className="text-sm mt-4 md:mt-0 md:absolute md:bottom-0">
              © {new Date().getFullYear()} Government of Uganda
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>8 AM - 5 PM</li>
              <li>Monday - Friday</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>4th Floor, Office of the Prime</li>
              <li>Minister Building, Sir Apollo</li>
              <li>Kaggwa Road, P.O. Box 341,</li>
              <li>Kampala</li>
              <li>Email: refugeepartnership@opm.go.ug</li>
            </ul>
          </div>
            <div className="col-span-1 md:col-span-1 mt-4 text-sm text-gray-400 flex flex-col items-start md:items-start">
              <Link href="https://twitter.com/CRRFUganda" className="text-gray-400 hover:text-white inline-flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                @GoU-RRMS
              </Link>
            </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8">
        </div>
      </div>
    </footer>
  );
}