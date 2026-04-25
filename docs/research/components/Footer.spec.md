# Footer Component Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/besteny.com/fullpage-desktop.png`
- **Interaction model:** Static with link hover states

## DOM Structure
```
footer.footer (dark blue background)
  └── div.container (max-width 1200px, py-16)
      ├── div.footer-grid (4 columns)
      │   ├── div.company-info
      │   │   ├── img.logo
      │   │   └── p.description
      │   └── div.footer-column (x3)
      │       ├── h4.title
      │       └── ul.links
      │           └── li.link-item (multiple)
      └── div.footer-bottom
          ├── p.copyright
          └── p.icp
```

## Computed Styles

### Footer Container
- backgroundColor: rgb(23, 35, 61) (#17233d)
- padding: 60px 20px 20px

### Footer Grid
- display: grid
- gridTemplateColumns: 2fr 1fr 1fr 1fr
- gap: 40px
- marginBottom: 40px

### Company Info
- maxWidth: 300px

### Logo
- height: 40px
- marginBottom: 16px
- filter: brightness(0) invert(1) // White version

### Description
- color: rgba(255, 255, 255, 0.7)
- fontSize: 14px
- lineHeight: 1.6

### Column Title
- color: rgb(255, 255, 255)
- fontSize: 16px
- fontWeight: 600
- marginBottom: 16px

### Links List
- listStyle: none
- padding: 0

### Link Item
- marginBottom: 12px

### Link
- color: rgba(255, 255, 255, 0.7)
- fontSize: 14px
- textDecoration: none

### Footer Bottom
- borderTop: 1px solid rgba(255, 255, 255, 0.1)
- paddingTop: 20px
- display: flex
- justifyContent: space-between
- flexWrap: wrap

### Copyright
- color: rgba(255, 255, 255, 0.5)
- fontSize: 14px

## States & Behaviors

### Link Hover
- **State A:** color: rgba(255, 255, 255, 0.7)
- **State B:** color: rgb(255, 255, 255)
- **Transition:** 0.2s ease

## Text Content (verbatim)

### Company
- 国新（河南）能源技术有限公司
- 专业从事新能源检测、评估和技术服务的高新技术企业

### Quick Navigation (快速导航)
- 首页
- 公司介绍
- 业务领域
- 新闻中心

### Services (服务项目)
- 风电场检测
- 光伏电站检测
- 储能电站检测
- 仿真建模

### Contact (联系我们)
- 电话：159-3625-6368
- 电话：0371-63795982
- 地址：郑州高新区西美大厦A座

### Copyright
- © 2024 国新（河南）能源技术有限公司 版权所有
- 豫ICP备XXXXXXXX号

## Responsive Behavior
- **Desktop:** 4 columns (2fr + 3x 1fr)
- **Tablet:** 2 columns
- **Mobile:** Single column stack
