# 样式使用指南

## 🎨 CSS变量系统

### 主题颜色
```css
--primary-blue: #078FFB    /* 主蓝色 */
--primary-cyan: #42DEE4    /* 青色 */
--primary-green: #67E356   /* 绿色 */
--primary-aqua: #A9EFE5    /* 浅青色 */
```

### 文字颜色
```css
--text-white: #ffffff       /* 白色文字 */
--text-dark: #1a1a1a       /* 深色文字 */
--text-gray: #64748b       /* 灰色文字 */
--text-light-gray: #374151 /* 浅灰色文字 */
```

## 🔮 Liquid Glass 效果

### 基础类
```html
<!-- 基础玻璃效果 -->
<div class="liquid-glass">
  内容
</div>

<!-- 玻璃卡片 -->
<div class="liquid-glass-card">
  卡片内容
</div>

<!-- 大号玻璃卡片 -->
<div class="liquid-glass-card--large">
  大卡片内容
</div>
```

### 文字样式
```html
<!-- 玻璃文字 -->
<p class="text-glass">普通玻璃文字</p>
<p class="text-glass-strong">强调玻璃文字</p>
<h2 class="text-glass-title">标题玻璃文字</h2>
```

## 🃏 传统卡片效果

### 基础类
```html
<!-- 基础卡片 -->
<div class="card">
  内容
</div>

<!-- 卡片组件 -->
<div class="card-component">
  卡片内容
</div>

<!-- 大号卡片 -->
<div class="card-component--large">
  大卡片内容
</div>
```

## 🎯 按钮组件

```html
<!-- 玻璃按钮 -->
<a href="#" class="btn btn--glass">玻璃按钮</a>

<!-- 主要按钮 -->
<a href="#" class="btn btn--primary">主要按钮</a>
```

## 📐 布局组件

### 网格布局
```html
<!-- 2列网格 -->
<div class="grid grid--2">
  <div>项目1</div>
  <div>项目2</div>
</div>

<!-- 3列网格 -->
<div class="grid grid--3">
  <div>项目1</div>
  <div>项目2</div>
  <div>项目3</div>
</div>
```

### 容器和区域
```html
<!-- 容器 -->
<div class="container">
  <div class="section section--light">
    浅色背景区域
  </div>
  
  <div class="section section--medium">
    中等背景区域
  </div>
  
  <div class="section section--dark">
    深色背景区域
  </div>
</div>
```

## ✨ 动画效果

```html
<!-- 淡入上升 -->
<div class="animate--fade-in-up">
  淡入上升动画
</div>

<!-- 左侧滑入 -->
<div class="animate--slide-in-left">
  左侧滑入动画
</div>

<!-- 右侧滑入 -->
<div class="animate--slide-in-right">
  右侧滑入动画
</div>
```

## 📱 响应式设计

所有组件都内置了响应式设计：
- 移动端：`< 768px`
- 平板端：`768px - 1024px`
- 桌面端：`> 1024px`

## 🛠️ 快速使用示例

### 使用统一组件
```astro
---
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import Features from '../components/Features.astro';
import Footer from '../components/Footer.astro';
---

<html>
<head>
  <title>My Page</title>
</head>
<body>
  <Header />
  <Hero />
  <Features />
  <Footer />
</body>
</html>
```

### 创建Liquid Glass卡片
```html
<div class="liquid-glass-card animate--fade-in-up">
  <h3 class="text-component--title text-component--glass-strong">标题</h3>
  <p class="text-component--description text-component--glass">描述内容</p>
  <a href="#" class="btn btn--glass">了解更多</a>
</div>
```

### 创建传统卡片
```html
<div class="card-component animate--fade-in-up">
  <h3 class="text-component--title">标题</h3>
  <p class="text-component--description">描述内容</p>
  <a href="#" class="btn btn--primary">了解更多</a>
</div>
```

### 创建网格布局
```html
<div class="container">
  <div class="section section--light">
    <h2 class="text-component--subtitle text-component--glass-title">区域标题</h2>
    <div class="grid grid--3">
      <div class="liquid-glass-card">卡片1</div>
      <div class="liquid-glass-card">卡片2</div>
      <div class="liquid-glass-card">卡片3</div>
    </div>
  </div>
</div>
```

## 🎨 自定义样式

如果需要自定义样式，可以直接使用CSS变量：

```css
.my-custom-card {
  background: var(--glass-bg);
  border-radius: var(--glass-radius);
  box-shadow: var(--glass-shadow);
  color: var(--text-white);
  padding: var(--spacing-xl);
}
```

## 📝 注意事项

1. **浏览器兼容性**：Liquid Glass效果需要现代浏览器支持
2. **性能优化**：大量使用backdrop-filter可能影响性能
3. **可访问性**：确保文字对比度符合WCAG标准
4. **移动端**：在小屏幕上自动调整为单列布局 