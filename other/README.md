# Other — 未公开页面存档

这里的页面**不会**被 Astro 构建，也不会出现在线上站点。当前对外只发布 `src/pages/index.astro`（Home）。

## 恢复某个页面到线上

1. 将对应 `.astro` 文件移回 `src/pages/`（保持原有目录结构）。
2. 在 `src/config/settings.js` 的 `nav` / `sidebar` 中重新加入链接。
3. 运行 `npm run build` 确认无报错。

## 文件说明

| 文件 | 原路径 |
|------|--------|
| `index-research-archive.astro` | 旧版首页（研究地图入口） |
| `research-map.astro` | Research Map |
| `academic.astro` | Academic |
| `experience.astro` | Experience |
| `media.astro` | Media |
| `contact.astro` | Contact（旧版） |
| `blog/index.astro` | Projects / Blog |
| `company/about.astro` | About |
| `company/contact.astro` | Contact |
