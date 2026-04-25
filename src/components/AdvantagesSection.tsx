import { ShieldCheck, Award, Zap, Map } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "资质权威",
    description: "拥有CNAS国家认可、CMA资质认定及CMMI三级等多项行业核心资质，检测结果精准权威。",
  },
  {
    icon: Zap,
    title: "技术精湛",
    description: "核心团队100%具备硕士及以上学历，多年深耕电力一线，积累丰富的仿真建模与系统集成经验。",
  },
  {
    icon: ShieldCheck,
    title: "服务全面",
    description: "集研发、生产、销售、服务、运维、集成于一体，为客户提供全生命周期的综合性电力科技服务。",
  },
  {
    icon: Map,
    title: "覆盖广泛",
    description: "立足山东，布局全国。在新疆设立西北地区办事处，具备强大的跨区域服务协同响应能力。",
  },
];

export function AdvantagesSection() {
  return (
    <section className="section-pad bg-surface-soft relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-brand-secondary/5 blur-[80px]" />

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="section-head" data-reveal>
          <h2 className="mx-auto w-fit bg-gradient-to-r from-[#0c2b57] via-[#1554a0] to-[#2d75c7] bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent md:text-5xl">
            核心优势
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#9fbbe7]" />
            <span className="text-xs font-medium tracking-[0.34em] text-[#607ca8] uppercase">
              OUR ADVANTAGES
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#9fbbe7]" />
          </div>
          <p className="section-copy mx-auto mt-6 content-measure">
            坚持为客户提供优质、安全、可靠、专业的电力产品及服务
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" data-reveal="1">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="surface-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,65,150,0.15)]"
                data-reveal="2"
              >
                {/* 悬浮时的背景高亮 */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 transition-transform duration-500 group-hover:scale-[2.5] group-hover:opacity-100 opacity-0" />
                
                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#eaf2ff] shadow-inner transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-[#1554a0] transition-colors duration-500 group-hover:text-[#0c2b57]" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold tracking-wide text-text-primary">
                    {adv.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-text-secondary">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
