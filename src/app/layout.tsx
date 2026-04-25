import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "山东源讯通电力科技有限公司 - 风电场检测、光伏电站检测、储能电站检测",
  description: "山东源讯通电力科技有限公司专业从事风电场检测、光伏电站检测、储能电站检测、新能源电池检测、仿真建模等服务。",
  icons: {
    icon: "/seo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
