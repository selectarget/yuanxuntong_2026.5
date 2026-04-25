"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  {
    label: "业务领域",
    href: "/services/wind",
    children: services.slice(0, 5).map(s => ({ label: s.title, href: s.link }))
  }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isPathActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isNavItemActive = (href: string, children?: { href: string }[]) => {
    if (isPathActive(href)) {
      return true;
    }

    if (!children) {
      return false;
    }

    return children.some((child) => isPathActive(child.href));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/85 text-[#0c2b57] backdrop-blur-xl shadow-[0_4px_24px_rgb(0_0_0_/_4%)]">
      <div className="site-shell">
        <div className="flex h-[4.75rem] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/images/logo-black.png"
              alt="山东源讯通电力科技有限公司"
              width={174}
              height={30}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-end gap-10 md:flex">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => {
                const itemActive = isNavItemActive(item.href, item.children);

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => item.children && setDropdownOpen(true)}
                    onMouseLeave={() => item.children && setDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-1.5 py-6 text-[15px] font-semibold transition-colors duration-300",
                        itemActive ? "text-[#1a63c4]" : "text-[#0c2b57] hover:text-[#1a63c4]"
                      )}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", dropdownOpen && "rotate-180 text-[#1a63c4]", itemActive && "text-[#1a63c4]")} />
                      )}
                      <span
                        className={cn(
                          "absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-t-full bg-[#1a63c4] transition-all duration-300",
                          itemActive ? "w-[120%]" : "w-0 group-hover:w-[120%]"
                        )}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {item.children && (
                      <div
                        className={cn(
                          "absolute top-full left-1/2 -mt-1 w-[220px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border/40 bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_rgb(0_0_0_/_10%)] transition-all duration-300",
                          dropdownOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"
                        )}
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block rounded-xl px-4 py-3 text-[14px] font-medium transition-all duration-200 hover:bg-[#f4f8ff] hover:text-[#1a63c4]",
                                isPathActive(child.href) ? "bg-[#f4f8ff] text-[#1a63c4]" : "text-[#475569]"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            {/* CTA Button */}
            <div className="flex shrink-0 items-center pl-2">
              <Link href="/contact" className="group flex h-10 items-center gap-2 rounded-full bg-[#1a63c4] px-6 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1554a0] hover:shadow-[0_8px_20px_rgb(26_99_196_/_30%)]">
                联系专家
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="p-2 text-[#0c2b57] transition-colors hover:text-[#1a63c4] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 top-[4.75rem] w-full overflow-hidden border-t border-border/50 bg-white/95 backdrop-blur-2xl shadow-2xl transition-all duration-300 md:hidden",
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="site-shell space-y-2 py-6">
          {navItems.map((item) => {
            const itemActive = isNavItemActive(item.href, item.children);

            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200",
                    itemActive ? "bg-[#f4f8ff] text-[#1a63c4]" : "text-[#475569] hover:bg-gray-50 hover:text-[#0c2b57]"
                  )}
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 pt-1 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:text-[#1a63c4]",
                          isPathActive(child.href) ? "text-[#1a63c4]" : "text-gray-500"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="px-2 pt-4">
            <Link
              href="/contact"
              className="flex w-full justify-center rounded-xl bg-[#0c2b57] py-3.5 text-sm font-bold text-white shadow-lg transition-transform active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              联系专家
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
