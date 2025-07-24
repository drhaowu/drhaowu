# GitHub Pages 部署指南

## 问题诊断

如果GitHub Actions失败，请按以下步骤检查：

### 1. 检查GitHub仓库设置

1. 进入您的GitHub仓库：`https://github.com/drhaowu/drhaowu`
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 确保设置如下：
   - **Source**: GitHub Actions
   - **Branch**: 不需要设置（使用Actions）

### 2. 检查Actions权限

1. 在仓库Settings中，点击 **Actions** → **General**
2. 确保 **Actions permissions** 设置为 "Allow all actions and reusable workflows"
3. 在 **Workflow permissions** 部分，选择 "Read and write permissions"

### 3. 检查仓库可见性

确保仓库是 **Public**（公开的），因为GitHub Pages免费版只支持公开仓库。

### 4. 手动触发部署

如果自动部署失败，可以手动触发：

1. 进入 **Actions** 标签
2. 点击左侧的 **Deploy to GitHub Pages**
3. 点击 **Run workflow** 按钮
4. 选择 **main** 分支
5. 点击 **Run workflow**

## 常见问题解决

### 问题1: 构建失败
- 检查本地构建：`npm run build`
- 确保所有依赖已安装：`npm install`

### 问题2: 权限错误
- 确保仓库有正确的Actions权限
- 检查GitHub Token是否有效

### 问题3: 文件路径错误
- 确保所有图片和资源文件存在
- 检查文件路径是否正确

## 替代部署方案

如果GitHub Actions持续失败，可以考虑：

### 方案1: 使用Netlify
1. 将代码推送到GitHub
2. 在Netlify中连接GitHub仓库
3. 设置构建命令：`npm run build`
4. 设置发布目录：`dist`

### 方案2: 使用Vercel
1. 将代码推送到GitHub
2. 在Vercel中导入GitHub仓库
3. 自动检测Astro项目并部署

## 联系支持

如果问题仍然存在，请：
1. 检查GitHub Actions的详细日志
2. 分享具体的错误信息
3. 确认仓库设置是否正确

## 成功部署后的访问地址

部署成功后，您的网站将在以下地址可用：
- **GitHub Pages**: `https://drhaowu.github.io/drhaowu`
- **自定义域名**（如果配置）: `https://drhaowu.com` 