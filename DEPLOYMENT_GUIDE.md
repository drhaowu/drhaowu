# 🚀 部署指南 - GitHub Pages

## 📋 部署步骤

### 1. 创建GitHub仓库
1. 在GitHub上创建一个新的仓库，命名为 `250723Website`
2. 不要初始化README文件（因为我们已经有了）

### 2. 连接本地仓库到GitHub
```bash
# 添加远程仓库
git remote add origin https://github.com/casperwu/250723Website.git

# 推送代码
git push -u origin main
```

### 3. 启用GitHub Pages
1. 进入GitHub仓库设置
2. 找到 "Pages" 选项
3. 在 "Source" 中选择 "GitHub Actions"
4. 保存设置

### 4. 自动部署
- 每次推送到 `main` 分支时，GitHub Actions会自动构建并部署网站
- 网站将在几分钟内上线

## 🌐 网站地址
部署完成后，网站将在以下地址可用：
```
https://casperwu.github.io/250723Website/
```

## 📁 项目结构
```
250723Website/
├── src/
│   ├── pages/
│   │   ├── index.astro          # 主页
│   │   ├── academic.astro       # 学术页面
│   │   ├── media.astro          # 媒体页面
│   │   ├── experience.astro     # 经历页面
│   │   └── contact.astro        # 联系页面
│   ├── components/
│   │   ├── Header.astro         # 导航栏
│   │   └── Footer.astro         # 页脚
│   └── styles/
│       ├── variables.css        # CSS变量
│       └── components.css       # 组件样式
├── public/
│   └── assets/
│       ├── images/              # 图片资源
│       └── videos/              # 视频/GIF资源
└── .github/workflows/
    └── deploy.yml               # 自动部署配置
```

## 🎨 特色功能
- ✅ Liquid Glass 玻璃效果设计
- ✅ 动态GIF背景
- ✅ 响应式布局
- ✅ 多页面结构
- ✅ 自动部署到GitHub Pages

## 🔧 本地开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📝 注意事项
- 确保GitHub仓库是公开的
- 第一次部署可能需要几分钟时间
- 如果遇到问题，检查GitHub Actions日志 