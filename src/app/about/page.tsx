import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { partnerLogos } from "@/lib/data";
import { Lightbulb, Target, ShieldCheck, Award, Eye, Sparkles, Rocket, Gem } from "lucide-react";

// Certificates
const certificates = [
  { name: "CNAS认证", image: "/images/cert-1.png" },
  { name: "CMA认定", image: "/images/cert-2.png" },
  { name: "高新技术企业", image: "/images/cert-3.png" },
  { name: "科技型中小企业", image: "/images/cert-4.png" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[320px] overflow-hidden md:h-[420px]">
        <Image
          src="/images/zhdz_d_09.jpg"
          alt="关于我们"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="fade-up px-4 text-center text-3xl font-bold text-white drop-shadow-lg md:text-5xl">
            诚信经营、开拓创新
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-y border-border/70 bg-white/90 py-3">
        <div className="site-shell">
          <span className="text-sm text-text-tertiary">首页 &gt; 关于我们</span>
        </div>
      </div>

      {/* About Content */}
      <section className="section-pad bg-white">
        <div className="site-shell">
          <div className="grid items-center gap-12 md:grid-cols-2" data-reveal>
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <Image
                src="/images/gnwh_10.jpg"
                alt="公司大楼"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="section-title">关于我们</h2>
              <span className="section-eyebrow mb-6 block">ABOUT US</span>
              <div className="mb-6 border-l-4 border-brand-primary pl-4">
                <p className="text-lg font-medium leading-relaxed text-text-primary">
                  山东源讯通电力科技有限公司成立于2017年，位于美丽的泉城济南，是一家专注于新能源产业和检测服务的国家高新技术企业、专精特新中小企业、科技型中小企业。同时也是集研发、生产、销售、服务、运维、集成于一体的综合性电力科技企业。
                </p>
              </div>
              <p className="section-copy leading-loose text-text-secondary">
                公司拥有雄厚的科研开发和试验测试能力，多年来深耕电力行业一线，积累了丰富的试验检测、智慧运维、系统集成与调试实战经验。2023年，公司在新疆成立西北地区办事处，进一步完善全国业务布局，拓宽跨区域服务覆盖范围。我们始终致力于参与建设以新能源为主体的新型电力系统，坚持为客户提供优质、安全、可靠、专业的电力产品及服务。
              </p>
              <p className="section-copy mt-3 leading-loose text-text-secondary">
                凭借持续的技术研发投入与创新突破，公司拥有多项自主发明及实用新型专利、自主软件著作权及软件产品证书，各类核心资质齐全，行业技术与服务能力备受认可。自成立以来，先后取得CMMI能力成熟度三级认证、CNAS认证、承装(修、试)电力设施许可证等多项专业资质。
              </p>

              {/* Data Highlights */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/50 pt-6">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-brand-primary">2017<span className="text-xl">+</span></div>
                  <div className="mt-1 text-[11px] font-medium tracking-widest text-text-secondary uppercase">成立年份</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight text-brand-primary">500<span className="text-xl">+</span></div>
                  <div className="mt-1 text-[11px] font-medium tracking-widest text-text-secondary uppercase">服务场站</div>
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight text-brand-primary">100<span className="text-xl">%</span></div>
                  <div className="mt-1 text-[11px] font-medium tracking-widest text-text-secondary uppercase">硕士及以上骨干</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Cards */}
      <section className="section-pad-sm bg-[#17233d]">
        <div className="site-shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
            {/* 公司愿景 */}
            <div className="surface-card group border-white/10 bg-white/5 p-8 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10" data-reveal="1">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
                <Eye className="h-7 w-7 text-white/90" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-wide">公司愿景</h3>
              <p className="text-sm leading-relaxed text-white/80">成为国内领先的新能源电力<br />检测与技术服务提供商</p>
            </div>

            {/* 公司精神 */}
            <div className="surface-card group border-white/10 bg-white/5 p-8 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10" data-reveal="2">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
                <Sparkles className="h-7 w-7 text-white/90" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-wide">公司精神</h3>
              <p className="text-sm leading-relaxed text-white/80">科学严谨，精准高效<br />精益求精</p>
            </div>

            {/* 公司使命 */}
            <div className="surface-card group border-white/10 bg-white/5 p-8 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10" data-reveal="3">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
                <Rocket className="h-7 w-7 text-white/90" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-wide">公司使命</h3>
              <p className="text-sm leading-relaxed text-white/80">以专业检测技术保障<br />新能源电力系统安全稳定高效运行</p>
            </div>

            {/* 公司价值观 */}
            <div className="surface-card group border-white/10 bg-white/5 p-8 text-center text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10" data-reveal="4">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
                <Gem className="h-7 w-7 text-white/90" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-wide">公司价值观</h3>
              <p className="text-sm leading-relaxed text-white/80">严谨求实，专业可靠，客户至上<br />创新进取，责任担当</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section (发展历程) */}
      <section className="section-pad bg-surface-soft">
        <div className="site-shell">
          <div className="section-head" data-reveal>
            <h2 className="section-title">发展历程</h2>
            <span className="section-eyebrow">MILESTONES</span>
            <p className="section-copy mx-auto mt-4 content-measure">不忘初心，砥砺前行，见证源讯通的每一步成长与跨越。</p>
          </div>

          <div className="relative mx-auto max-w-4xl pt-8" data-reveal="1">
            {/* 纵向中心线 - 移动端靠左，PC端居中 */}
            <div className="absolute left-[24px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-brand-primary/10 via-brand-primary/30 to-brand-primary/10 md:left-1/2 md:-ml-[1px]"></div>

            <div className="space-y-10 md:space-y-12">
              {[
                { year: "2017", title: "山东省源讯通成立", desc: "公司正式扬帆起航，开启新能源服务征程" },
                { year: "2019", title: "获得重服务守信用单位认证", desc: "坚持客户至上，服务质量获得权威机构认可" },
                { year: "2020", title: "获得重合同守信用企业认证\n获得重质量守信用单位认证", desc: "诚实守信规范经营，品质为先精益求精" },
                { year: "2021", title: "获得诚信经营示范单位认证", desc: "树立企业诚信标杆，展现企业担当与责任" },
                { year: "2022", title: "成为大数据协会会员", desc: "深耕数据领域，探索行业前沿技术" },
                { year: "2023", title: "成为软件行业协会理事会员", desc: "技术研发实力获得行业协会高度认可" },
              ].map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* 时间轴节点 (圆圈) */}
                  <div className="absolute left-[24px] md:left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-110">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary/20 transition-colors duration-500 group-hover:bg-brand-primary/30">
                      <div className="h-2 w-2 rounded-full bg-brand-primary transition-all duration-500 group-hover:scale-150"></div>
                    </div>
                  </div>

                  {/* 内容卡片 */}
                  <div className={`ml-[72px] md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'} pt-1 md:pt-0`}>
                    <div className={`surface-card relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,65,150,0.15)] ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="mb-2 text-5xl font-black tracking-tighter text-brand-primary/10 transition-colors duration-300 group-hover:text-brand-primary/20">{item.year}</div>
                      <h3 className="mb-3 text-[1.15rem] font-bold leading-relaxed text-text-primary whitespace-pre-line">{item.title}</h3>
                      <p className="text-sm leading-loose text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates - 暂无素材暂时隐藏
      <section className="section-pad bg-surface-soft">
        <div className="site-shell">
          <div className="section-head" data-reveal>
            <h2 className="section-title">荣誉资质</h2>
            <span className="section-eyebrow">HONOR</span>
            <p className="section-copy mx-auto mt-4 content-measure">推动新能源产业的健康发展，助力实现可持续发展目标。</p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4" data-reveal="1">
            {certificates.map((cert, index) => (
              <div key={index} className="group cursor-pointer surface-card p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" data-reveal="2">
                <div className="relative aspect-[3/4] mb-3 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#eaf2ff] transition-transform duration-500 group-hover:scale-110">
                    <Award className="mb-3 h-10 w-10 text-brand-primary/30" />
                    <span className="px-3 text-xs font-semibold leading-relaxed text-brand-primary/70">{cert.name}</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-text-primary transition-colors group-hover:text-brand-primary">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Partners */}
      <section className="section-pad bg-white">
        <div className="site-shell">
          <div className="section-head" data-reveal>
            <h2 className="section-title">合作伙伴</h2>
            <span className="section-eyebrow">PARTNER</span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5" data-reveal="1">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="surface-card hover-lift flex h-[86px] items-center justify-center overflow-hidden px-3 py-2 md:h-[92px]"
                data-reveal="2"
              >
                <div className="relative h-12 w-full md:h-14">
                  <Image
                    src={logo}
                    alt={`合作伙伴 ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-contain object-center scale-[1.32] transform-gpu"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
