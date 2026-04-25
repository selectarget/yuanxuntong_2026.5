# About Section Component Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Screenshot:** `docs/design-references/besteny.com/fullpage-desktop.png` (about section)
- **Interaction model:** Static content with stat cards

## DOM Structure
```
section.about (white background)
  └── div.container (max-width 1200px, centered, py-20)
      ├── div.section-header
      │   ├── h2.title ("关于我们")
      │   └── span.subtitle ("ABOUT US")
      ├── p.description (centered, max-width 800px)
      └── div.stats-grid (3 columns)
          └── div.stat-card (x3)
              ├── span.number (large, blue)
              └── span.label
```

## Computed Styles

### Section Container
- backgroundColor: rgb(255, 255, 255)
- padding: 80px 20px
- textAlign: center

### Section Title
- color: rgb(0, 65, 150)
- fontSize: 32px
- fontWeight: 700
- marginBottom: 8px

### Subtitle
- color: rgb(153, 153, 153)
- fontSize: 14px
- letterSpacing: 2px
- marginBottom: 32px

### Description
- color: rgb(102, 102, 102)
- fontSize: 16px
- lineHeight: 1.8
- maxWidth: 800px
- margin: 0 auto 48px

### Stats Grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 32px
- maxWidth: 600px
- margin: 0 auto

### Stat Card
- backgroundColor: rgb(242, 242, 242) or transparent
- padding: 32px
- borderRadius: 8px
- textAlign: center

### Stat Number
- color: rgb(0, 65, 150)
- fontSize: 48px
- fontWeight: 700

### Stat Label
- color: rgb(102, 102, 102)
- fontSize: 16px
- marginTop: 8px

## Text Content (verbatim)

### Title
- 关于我们
- ABOUT US

### Description
```
国新（河南）能源技术有限公司是一家专业从事新能源检测、评估和技术服务的高新技术企业。
公司致力于为客户提供风电场检测、光伏电站检测、储能电站检测、新能源电池检测、仿真建模等全方位技术服务。
公司拥有CNAS、CMA等权威资质认证，技术实力雄厚，服务网络覆盖全国。
```

### Stats
- 10+ 年行业经验
- 500+ 服务项目
- 100+ 技术团队

## Responsive Behavior
- **Desktop:** 3-column stats grid
- **Tablet:** 3-column, reduced padding
- **Mobile:** Single column stack, full width cards
