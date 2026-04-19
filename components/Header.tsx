"use client";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Children, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navitems = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Partnership Management",
      link: "/refugee-management",
    },
    {
      label: "Policy & Regulations",
      link: "/policy",
    },
    {
      label: "Stakeholders",
      link: "/stakeholders",
    },
    // {
    //   label: "Settlements",
    //   link: "/settlements",
    // },
    {
      label: "Publications",
      link: "/publications/reports",
      children: [
        {
          label: "Videos",
          link: "/publications/reports",
        },
        {
          label: "Research Submissions",
          link: "/publications/research-submissions",
        },
        {
          label: "Research Study Reports",
          link: "/publications/research-study-reports",
        },
      ],
    },
    // {
    //   label: "Partner with us",
    //   link: "/partner",
    //   children: [
    //     {
    //       label: "Apply for partnership",
    //       link: "/partner/apply-partnership",
    //     },
    //     {
    //       label: "Requirements for partnershipl",
    //       link: "/partner/partner-requirements",
    //     },
    //   ],
    // },

    {
      label: "Contact Us",
      link: "/contact",
    },

  ];
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
        <Link href="/" className="group transition-opacity hover:opacity-90">
          <div className="flex items-center gap-3 md:gap-4">
            <Image
              src="/logo.png"
              alt="GoU-RRMS Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="hidden sm:block w-px h-10 md:h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1"></div>
            <div className="flex flex-col justify-center font-extrabold uppercase tracking-widest">
              <span className="text-xs md:text-[15px] leading-tight text-gray-900">
                Partnership
              </span>
              <span className="text-xs md:text-[15px] leading-tight text-[#eab308]">
                Coordination &
              </span>
              <span className="text-xs md:text-[15px] leading-tight text-red-600">
                Monitoring System
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navitems.map((nav, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => nav.children && setActiveDropdown(nav.label)}
              onMouseLeave={() => {
                setTimeout(() => {
                  const dropdownContainer = document.querySelector(
                    ".dropdown-container:hover"
                  );
                  if (!dropdownContainer) {
                    setActiveDropdown(null);
                  }
                }, 100);
              }}
            >
              <Link
                href={nav.link}
                className={`text-sm font-medium ${pathname === nav.link
                  ? "text-destructive border-b-2 border-destructive"
                  : "text-gray-900 hover:text-destructive"
                  }`}
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
                      className={`block px-4 py-2 text-sm ${pathname === child.link
                        ? "text-destructive bg-gray-50"
                        : "text-gray-900 hover:bg-gray-50 hover:text-destructive"
                        }`}
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
          {/* <Link
            href="http://143.198.243.102:4400/Login"
            className="hidden md:block px-6 md:px-8 py-2 text-black rounded-lg text-sm font-medium hover:bg-yellow-600"
          >
            Contact Us
          </Link> */}
          <div className="hidden md:flex relative group items-center">
            <Link
              href="https://app.partnerships.opm.go.ug/Login"
              className="px-6 md:px-7 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700 hover:shadow-md transition-all shadow-sm"
            >
              Login
            </Link>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 w-64 bg-gray-900 border border-gray-800 text-gray-100 text-xs leading-relaxed text-center rounded-xl shadow-2xl p-3 top-full left-1/2 transform -translate-x-1/2 mt-3 pointer-events-none z-[100]">
              If your organisation is already profiled or onboarded on the system, login.
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-gray-800"></div>
            </div>
          </div>
          <div className="hidden md:flex relative group items-center">
            <Link
              href="https://app.partnerships.opm.go.ug/RegisterPartner"
              className="px-6 md:px-7 py-2.5 bg-[#eab308] text-black rounded-full text-sm font-semibold hover:bg-[#dca807] hover:shadow-md transition-all shadow-sm"
            >
              Sign up
            </Link>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 w-64 bg-gray-900 border border-gray-800 text-gray-100 text-xs leading-relaxed text-center rounded-xl shadow-2xl p-3 top-full left-1/2 transform -translate-x-1/2 mt-3 pointer-events-none z-[100]">
              If your organisation has not yet been onboarded or profiled on the system, signup.
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-gray-800"></div>
            </div>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
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
              className={`py-2 border-b border-gray-100 text-sm font-medium ${pathname === nav.link
                ? "text-primary"
                : "text-gray-900 hover:text-primary"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {nav.label}
            </Link>
          ))}
          <Link
            href="https://app.partnerships.opm.go.ug/Login"
            title="If your organisation is already profiled or onboarded on the system, login."
            className="mt-4 px-6 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700 hover:shadow-md transition-all shadow-sm text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            href="https://app.partnerships.opm.go.ug/RegisterPartner"
            title="If your organisation has not yet been onboarded or profiled on the system, signup."
            className="mt-3 px-6 py-2.5 bg-[#eab308] text-black rounded-full text-sm font-semibold hover:bg-[#dca807] hover:shadow-md transition-all shadow-sm text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign up
          </Link>
        </nav>
      </div>

      {/* 100% Width Theme Banner */}
      <div className="w-full bg-emerald-900/80 backdrop-blur-md border-t border-emerald-800 py-2 md:py-2.5 px-4 shadow-md inset-x-0 relative z-40">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="text-[#eab308] font-bold uppercase tracking-widest text-[11px] md:text-[13px] mr-2">
              Theme:
            </span>
            <span className="text-emerald-50 font-medium text-[12px] md:text-[14px] leading-tight">
              Empowering coordinated, high-impact partnerships and strengthening whole-of-society contributions by Non-State Actors to national development.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
