# Cases Section Component Specification

## Overview
- **Target file:** `src/components/CasesSection.tsx`
- **Screenshot:** `docs/design-references/besteny.com/fullpage-desktop.png`
- **Interaction model:** Grid cards with image and overlay

## DOM Structure
```
section.cases (white background)
  └── div.container (max-width 1200px, py-20)
      ├── div.section-header
      │   ├── h2.title ("合作案例")
      │   └── span.subtitle ("CASES")
      └── div.cases-grid (3 columns, 2 rows)
          └── div.case-card (x6)
              ├── div.image-wrapper
              │   └── img.case-image
              ├── div.overlay
              │   ├── h3.title
              │   └── p.description
              └── a.link (hover shows arrow)
```

## Computed Styles

### Section Container
- backgroundColor: rgb(255, 255, 255)
- padding: 80px 20px

### Section Header
- textAlign: center
- marginBottom: 48px

### Title
- color: rgb(0, 65, 150)
- fontSize: 32px
- fontWeight: 700

### Cases Grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr)
- gap: 24px

### Case Card
- position: relative
- borderRadius: 8px
- overflow: hidden
- aspectRatio: 4/3

### Image Wrapper
- width: 100%
- height: 100%
- overflow: hidden

### Case Image
- width: 100%
- height: 100%
- objectFit: cover
- transition: transform 0.5s ease

### Overlay
- position: absolute
- inset: 0
- backgroundColor: rgba(0, 65, 150, 0.8)
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
- padding: 24px
- opacity: 0
- transition: opacity 0.3s ease

### Overlay Title
- color: rgb(255, 255, 255)
- fontSize: 18px
- fontWeight: 600
- textAlign: center
- marginBottom: 8px

### Overlay Description
- color: rgba(255, 255, 255, 0.9)
- fontSize: 14px
- textAlign: center

## States & Behaviors

### Hover State
- **Trigger:** mouseenter on card
- **Image:** transform: scale(1.05)
- **Overlay:** opacity: 1
- **Transition:** 0.3s ease

## Assets
- 宁夏首个构网型储能示范性项目: `public/images/173235996080506954b5cbf38943812d64a2ba249c62e.png`
- 宁夏首个转商储能项目示范工程: `public/images/17323617515461a1395fd40089decc82f27ad168963fb.png`
- 国电投重点合作项目: `public/images/17323618181896135add0632a2dc3a9fde85fa8c87ba0.png`
- 蒙东电科院合作示范项目: `public/images/1732361977866a657391536b1dd3cea9cf75d887e331f.png`
- 甘肃省示范项目: `public/images/17323620429869a92faeef77a728be8d755d9d55aae46.png`
- 内蒙古自治区库布其光伏治沙工程: `public/images/17323621097551d638e499e5abd27820f52a8efca5ebb.png`

## Text Content (verbatim)

### Section Title
- 合作案例
- CASES

### Case Studies
1. **宁夏首个构网型储能示范性项目** - 提供全方位储能系统检测与评估服务
2. **宁夏首个转商储能项目示范工程** - 储能电站并网检测与性能评估
3. **国电投重点合作项目** - 光伏电站全面检测与评估服务
4. **蒙东电科院合作示范项目** - 风电机组性能检测与评估
5. **甘肃省示范项目** - 新能源电站综合检测服务
6. **内蒙古自治区库布其光伏治沙工程** - 大型光伏电站检测与运维服务

## Responsive Behavior
- **Desktop:** 3 columns x 2 rows
- **Tablet:** 2 columns x 3 rows
- **Mobile:** 1 column, horizontal scroll or stack
