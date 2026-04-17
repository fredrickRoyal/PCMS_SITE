interface NavItem {
  text: string;
  href: string;
}

export const navigationLinks: NavItem[] = [
  { text: "Home", href: "/" },
  { text: "About the System", href: "/about" },
  { text: "Refugee Management", href: "/refugee-management" },
  { text: "Policy/Regulations", href: "/policies" },
  { text: "Statistics", href: "/statistics" },
  { text: "Publications", href: "/publications" },
  { text: "Partner with us", href: "/partner" }
];