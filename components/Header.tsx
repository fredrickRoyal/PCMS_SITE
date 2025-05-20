"use client"
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navitems = [
    {
      label: "About",
      link:"/about"
    },
    {
      label: "Refugee Management",
      link:"/refugee-management"
    },
    {
      label: "Policy & Regulations",
      link:"/policy"
    },
    {
      label: "Stakeholders",
      link:"/stakeholders"
    },
    {
      label: "Settlements",
      link:"/settlements"
    },
    {
      label: "Publications",
      link:"/publications/reports",
      children: [
        {
          label: "Reports",
          link:"/publications/reports"
        },
        {
          label: "Research Submissions",
          link:"/publications/research-submissions"
        },
        {
          label: "Research Study Reports",
          link:"/publications/research-study-reports"
        }
      ]
    },
    {
      label: "Partner with us",
      link:"/partner"
    }
  ]
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 md:py-8 flex items-center justify-between">
        <Link href={"/"}>
        <div className="flex items-center gap-2 md:gap-4">
          <Image 
            src="/logo.png" 
            alt="GoU-RRMS Logo" 
            width={40} 
            height={40} 
            className="h-8 md:h-10 w-auto"
          />
          <div className="text-xs md:text-sm">
            <p className="text-gray-600 text-[10px] md:text-xs">The Government of Uganda</p>
            <p className="text-gray-600 text-[10px] md:text-xs">Refugee Response</p>
            <p className="text-gray-600 text-[10px] md:text-xs">Monitoring System</p>
          </div>
        </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navitems.map((nav,index) =>(
            <div 
              key={index}
              className="relative group"
              onMouseEnter={() => nav.children && setActiveDropdown(nav.label)}
              onMouseLeave={() => {
                setTimeout(() => {
                  const dropdownContainer = document.querySelector('.dropdown-container:hover');
                  if (!dropdownContainer) {
                    setActiveDropdown(null);
                  }
                }, 100);
              }}
            >
              <Link 
                href={nav.link} 
                className={`text-sm font-medium ${pathname === nav.link ? 'text-primary border-b-2 border-primary' : 'text-gray-900 hover:text-primary'}`}
                onClick={() => !nav.children && setActiveDropdown(null)}
              >
                {nav.label}
              </Link>
              {nav.children && activeDropdown === nav.label && (
                <div className="dropdown-container absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-2 z-50">
                  {nav.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.link}
                      className={`block px-4 py-2 text-sm ${pathname === child.link ? 'text-primary bg-gray-50' : 'text-gray-900 hover:bg-gray-50 hover:text-primary'}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden md:block px-6 md:px-8 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-yellow-600"
          >
            Login
          </Link>
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />
      
      <div className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-gray-200">
          <button 
            className="p-2 float-right" 
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          {navitems.map((nav, index) => (
            <Link 
              key={index} 
              href={nav.link} 
              className={`py-2 border-b border-gray-100 text-sm font-medium ${pathname === nav.link ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {nav.label}
            </Link>
          ))}
          <Link 
            href="/login" 
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-yellow-600 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}