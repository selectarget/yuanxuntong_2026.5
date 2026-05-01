# 源讯通 (Yuanxuntong) - 企业官网

这是一个基于 [Next.js 16](https://nextjs.org/) 和 [Tailwind CSS v4](https://tailwindcss.com/) 构建的现代化企业官方网站。

## 🛠️ 技术栈

- **框架**: Next.js 16 (App Router)
- **UI 组件**: shadcn/ui & Radix Primitives
- **样式**: Tailwind CSS v4
- **图标**: Lucide React
- **语言**: TypeScript

## 🚀 快速开始

在本地启动开发环境：

```bash
# 安装依赖 (如果尚未安装)
npm install

# 启动本地开发服务器
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可查看页面。

## 📦 可用命令

- `npm run dev` - 启动本地开发服务器
- `npm run build` - 构建生产环境版本
- `npm run start` - 运行构建好的生产环境版本
- `npm run lint` - 运行 ESLint 代码检查
- `npm run typecheck` - 运行 TypeScript 类型检查
- `npm run check` - 同时执行 lint, typecheck 和 build

## 📂 项目结构

- `/src/app` - Next.js 路由和页面 (App Router)
- `/src/components` - 可复用的 React 组件
- `/public` - 静态资源（图片、图标等）
- `/docs` - 项目设计文档和参考资料

## 📝 贡献指南

1. 从 `master` 分支拉取最新代码。
2. 提交代码前，请确保运行过 `npm run check`，保证没有语法或类型错误。
