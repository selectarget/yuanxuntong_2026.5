// Website content types for besteny.com clone

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  ctaText: string;
  ctaHref: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  phone: string;
  phone2?: string;
  address: string;
  email?: string;
}
