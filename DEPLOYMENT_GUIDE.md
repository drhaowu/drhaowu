# 网站部署指南

## 🚀 多种部署方案

由于GitHub Actions可能遇到问题，我们提供了多种部署方案：

### 方案1: Vercel (推荐)
**最简单、最可靠的方案**

1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择您的仓库 `drhaowu/drhaowu`
5. Vercel会自动检测Astro项目
6. 点击 "Deploy"

**优势**：
- ✅ 自动检测Astro项目
- ✅ 免费SSL证书
- ✅ 全球CDN
- ✅ 自动部署
- ✅ 自定义域名支持

### 方案2: Netlify
**另一个优秀的免费平台**

1. 访问 [netlify.com](https://netlify.com)
2. 使用GitHub账号登录
3. 点击 "New site from Git"
4. 选择您的仓库
5. 设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 "Deploy site"

**优势**：
- ✅ 免费SSL证书
- ✅ 全球CDN
- ✅ 表单处理
- ✅ 自定义域名

### 方案3: GitHub Pages (如果修复成功)
**如果GitHub Actions工作正常**

1. 确保仓库设置正确：
   - Settings → Pages → Source: GitHub Actions
   - Settings → Actions → General → 允许所有actions

2. 手动触发部署：
   - Actions → Deploy to GitHub Pages → Run workflow

## 🔧 本地测试

确保本地构建成功：
```bash
npm install
npm run build
```

## 📁 项目文件

已添加的配置文件：
- `vercel.json` - Vercel配置
- `netlify.toml` - Netlify配置
- `.github/workflows/deploy.yml` - GitHub Actions配置

## 🌐 部署后的访问地址

- **Vercel**: `https://drhaowu.vercel.app` (或自定义域名)
- **Netlify**: `https://drhaowu.netlify.app` (或自定义域名)
- **GitHub Pages**: `https://drhaowu.github.io/drhaowu`

## 🎯 推荐方案

**强烈推荐使用Vercel**，因为：
1. 对Astro项目支持最好
2. 部署速度最快
3. 配置最简单
4. 免费额度充足

## 📞 需要帮助？

如果遇到任何问题，请：
1. 检查本地构建是否成功
2. 分享具体的错误信息
3. 尝试不同的部署平台 