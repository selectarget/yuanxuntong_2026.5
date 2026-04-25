# Services Section Component Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/besteny.com/fullpage-desktop.png`
- **Interaction model:** Hover cards with icon and description

## DOM Structure
```
section.services (light gray background)
  └── div.container (max-width 1200px, py-20)
      ├── div.section-header
      │   ├── h2.title ("业务领域")
      │   └── span.subtitle ("SERVICES")
      └── div.services-grid (3 columns, 2 rows)
          └── div.service-card (x6)
              ├── div.icon-wrapper
              │   └── img.icon
              ├── h3.title
              ├── p.description
              └── a.link ("了解更多 >")
```

## Computed Styles

### Section Container
- backgroundColor: rgb(242, 242, 242) or rgb(217, 227, 240)
- padding: 80px 20px

### Section Header
- textAlign: center
- marginBottom: 48px

### Title
- color: rgb(0, 65, 150)
- fontSize: 32px
- fontWeight: 700

### Services Grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 24px

### Service Card
- backgroundColor: rgb(255, 255, 255)
- padding: 32px
- borderRadius: 8px
- textAlign: center
- boxShadow: 0 2px 8px rgba(0,0,0,0.05)

### Icon Wrapper
- width: 80px
- height: 80px
- margin: 0 auto 16px
- display: flex
- alignItems: center
- justifyContent: center

### Icon
- width: 60px
- height: 60px
- objectFit: contain

### Card Title
- color: rgb(51, 51, 51)
- fontSize: 18px
- fontWeight: 600
- marginBottom: 12px

### Card Description
- color: rgb(102, 102, 102)
- fontSize: 14px
- lineHeight: 1.6
- marginBottom: 16px

### Link Button
- color: rgb(0, 65, 150) or rgb(79, 80, 233)
- fontSize: 14px
- textDecoration: none
- display: inline-flex
- alignItems: center
- gap: 4px

## States & Behaviors

### Hover State
- **Trigger:** mouseenter on card
- **State A:** boxShadow: 0 2px 8px rgba(0,0,0,0.05), transform: none
- **State B:** boxShadow: 0 8px 24px rgba(0,0,0,0.1), transform: translateY(-4px)
- **Transition:** all 0.3s ease

## Assets
- 风电场检测: `public/images/1594274327419b435cf196888f181.png`
- 光伏电站检测: `public/images/17343200421963d104fe5335d120b1a6074e9bbc065cc.webp`
- 储能电站检测: `public/images/15942795638291f1ed80d57b9e17c.png`
- 新能源电池检测: `public/images/17343201835602e256a453171ab97214e58937a13716d.webp`
- 仿真建模: `public/images/173432024531008b763ddaed7c3f13e2c94ed17ba43d5.webp`
- 技术咨询: `public/images/1594279810775d33322243979c27a.png`

## Text Content (verbatim)

### Services
1. **风电场检测** - 提供风电机组性能检测、功率特性测试、电能质量检测等全方位风电检测服务
2. **光伏电站检测** - 光伏组件性能检测、逆变器检测、电站效率评估等专业光伏检测服务
3. **储能电站检测** - 储能系统性能检测、电池检测、PCS检测等储能领域专业检测服务
4. **新能源电池检测** - 动力电池、储能电池性能检测与安全评估服务
5. **仿真建模** - 新能源电站仿真建模、电力系统仿真分析等技术服务
6. **技术咨询** - 新能源项目技术咨询、可行性研究、技术方案设计等服务

### Link Text
- 了解更多 >

## Responsive Behavior
- **Desktop:** 3 columns x 2 rows
- **Tablet:** 2 columns x 3 rows
- **Mobile:** 1 column x 6 rows
