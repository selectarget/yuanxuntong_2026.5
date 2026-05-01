// Website content data for besteny.com clone

import type { NavItem, HeroSlide, ServiceItem, CaseStudy, StatItem, FooterSection, ContactInfo } from "@/types";
import { partnerLogos as generatedPartnerLogos } from "@/lib/partner-logos.generated";
import { heroBannerImages } from "@/lib/hero-banners.generated";

export const navigation: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "公司介绍", href: "/about" },
  { label: "业务领域", href: "/services/wind" },
  { label: "新闻中心", href: "#" },
  { label: "联系我们", href: "/contact" },
];

const heroTextPresets = [
  {
    title: "诚信经营、开拓创新",
    subtitle: "Professional Integrity, Endless Innovation",
    ctaText: "了解详情",
    ctaHref: "#services",
  },
  {
    title: "做一流的智慧能源检测服务商",
    subtitle: "Top-tier Smart Energy Testing Provider",
    ctaText: "了解更多",
    ctaHref: "#about",
  },
  {
    title: "科学公正、准确高效、严谨细致、可靠满意",
    subtitle: "Scientific, Fair, Accurate, Efficient, and Reliable",
    ctaText: "查看能力",
    ctaHref: "#services",
  },
];

const heroFallback = {
  title: "智慧能源检测与技术服务",
  subtitle: "Professional Grid-Connection Testing Services",
  ctaText: "了解更多",
  ctaHref: "#services",
};

export const heroSlides: HeroSlide[] = heroBannerImages.map((image, index) => {
  const preset = heroTextPresets[index] ?? heroFallback;
  return {
    id: String(index + 1),
    image,
    ...preset,
  };
});

export const partnerLogos = generatedPartnerLogos;

export const aboutContent = {
  title: "关于我们",
  subtitle: "ABOUT US",
  description: `山东源讯通电力科技有限公司成立于2017年，位于美丽的泉城济南，是一家专注于新能源产业和检测服务的国家高新技术企业、专精特新中小企业、科技型中小企业。同时也是集研发、生产、销售、服务、运维、集成于一体的综合性电力科技企业。

公司拥有雄厚的科研开发和试验测试能力，多年来深耕电力行业一线，积累了丰富的试验检测、智慧运维、系统集成与调试实战经验。我们始终致力于参与建设以新能源为主体的新型电力系统，坚持为客户提供优质、安全、可靠、专业的电力产品及服务。`,
  stats: [
    { value: "10+", label: "年行业经验" },
    { value: "500+", label: "服务项目" },
    { value: "100+", label: "技术团队" },
  ],
};

export const services: ServiceItem[] = [
  {
    id: "1",
    title: "风电场检测",
    description: "提供风电机组性能检测、功率特性测试、电能质量检测等全方位风电检测服务",
    icon: "/images/1594274327419b435cf196888f181.png",
    link: "/services/wind",
  },
  {
    id: "2",
    title: "光伏电站检测",
    description: "光伏组件性能检测、逆变器检测、电站效率评估等专业光伏检测服务",
    icon: "/images/17343200421963d104fe5335d120b1a6074e9bbc065cc.webp",
    link: "/services/solar",
  },
  {
    id: "3",
    title: "储能电站检测",
    description: "储能系统性能检测、电池检测、PCS检测等储能领域专业检测服务",
    icon: "/images/15942795638291f1ed80d57b9e17c.png",
    link: "/services/storage",
  },
  {
    id: "4",
    title: "构网型储能检测",
    description: "构网型储能系统并网性能、涉网特性及频率电压主动支撑能力测试与评估服务",
    icon: "/images/17343201835602e256a453171ab97214e58937a13716d.webp",
    link: "/services/grid-forming",
  },
  {
    id: "5",
    title: "仿真建模",
    description: "新能源电站仿真建模、电力系统仿真分析等技术服务",
    icon: "/images/173432024531008b763ddaed7c3f13e2c94ed17ba43d5.webp",
    link: "/services/simulation",
  },
  {
    id: "6",
    title: "技术咨询",
    description: "新能源项目技术咨询、可行性研究、技术方案设计等服务",
    icon: "/images/1594279810775d33322243979c27a.png",
    link: "#consulting",
  },
];

/*
export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "宁夏首个构网型储能示范性项目",
    description: "提供全方位储能系统检测与评估服务",
    image: "/images/173235996080506954b5cbf38943812d64a2ba249c62e.png",
    link: "#case1",
  },
  {
    id: "2",
    title: "宁夏首个转商储能项目示范工程",
    description: "储能电站并网检测与性能评估",
    image: "/images/17323617515461a1395fd40089decc82f27ad168963fb.png",
    link: "#case2",
  },
  {
    id: "3",
    title: "国电投重点合作项目",
    description: "光伏电站全面检测与评估服务",
    image: "/images/17323618181896135add0632a2dc3a9fde85fa8c87ba0.png",
    link: "#case3",
  },
  {
    id: "4",
    title: "蒙东电科院合作示范项目",
    description: "风电机组性能检测与评估",
    image: "/images/1732361977866a657391536b1dd3cea9cf75d887e331f.png",
    link: "#case4",
  },
  {
    id: "5",
    title: "甘肃省示范项目",
    description: "新能源电站综合检测服务",
    image: "/images/17323620429869a92faeef77a728be8d755d9d55aae46.png",
    link: "#case5",
  },
  {
    id: "6",
    title: "内蒙古自治区库布其光伏治沙工程",
    description: "大型光伏电站检测与运维服务",
    image: "/images/17323621097551d638e499e5abd27820f52a8efca5ebb.png",
    link: "#case6",
  },
];
*/

// 提供一个空数组以防其他组件（如 CasesSection）导入时报错
export const caseStudies: CaseStudy[] = [];

export const stats: StatItem[] = [
  { id: "1", value: "10+", label: "年行业经验" },
  { id: "2", value: "500+", label: "服务项目" },
  { id: "3", value: "100+", label: "技术团队" },
  { id: "4", value: "50+", label: "合作伙伴" },
];

export const contactInfo: ContactInfo = {
  phone: "13156150563",
  address: "山东省济南市历城区郭店街道虞山大道5868号",
};

export const footerSections: FooterSection[] = [
  {
    title: "快速导航",
    links: [
      { label: "首页", href: "/" },
      { label: "公司介绍", href: "#about" },
      { label: "业务领域", href: "#services" },
    ],
  },
  {
    title: "服务项目",
    links: [
      { label: "风电场检测", href: "/services/wind" },
      { label: "光伏电站检测", href: "/services/solar" },
      { label: "储能电站检测", href: "/services/storage" },
      { label: "构网型储能检测", href: "/services/grid-forming" },
      { label: "仿真建模", href: "/services/simulation" },
    ],
  },
  {
    title: "联系我们",
    links: [
      { label: "电话：13156150563", href: "tel:13156150563" },
      { label: "地址：山东省济南市历城区郭店街道虞山大道5868号", href: "#address" },
    ],
  },
];

export const companyInfo = {
  name: "山东源讯通电力科技有限公司",
  nameEn: "Shandong Yuanxuntong Electric Power Technology Co., Ltd.",
  description: "专业从事新能源检测、评估和技术服务的高新技术企业",
  copyright: "© 2026 山东源讯通电力科技有限公司 版权所有",
  icp: "鲁ICP备2026017563号-1",
};
