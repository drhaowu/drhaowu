# Figma 集成设置指南

## 1. 获取 Figma 个人访问令牌

1. 登录您的 Figma 账户
2. 进入设置页面：https://www.figma.com/settings
3. 点击 "Account" 标签
4. 滚动到 "Personal access tokens" 部分
5. 点击 "Create new token"
6. 输入令牌名称（如："Website Integration"）
7. 复制生成的令牌（注意：令牌只会显示一次！）

## 2. 设置环境变量

### 方法 1：在终端中设置（临时）
```bash
export FIGMA_ACCESS_TOKEN="your_token_here"
```

### 方法 2：创建 .env 文件（推荐）
在项目根目录创建 `.env` 文件：
```bash
FIGMA_ACCESS_TOKEN=your_token_here
```

### 方法 3：在 package.json 中设置
```json
{
  "scripts": {
    "dev": "FIGMA_ACCESS_TOKEN=your_token_here astro dev"
  }
}
```

## 3. 测试连接

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 访问演示页面：
   ```
   http://localhost:4321/figma-demo
   ```

## 4. 可用的功能

### 获取文件信息
```javascript
import { getFigmaFile } from '../utils/figma.js';
const fileData = await getFigmaFile();
```

### 获取特定节点
```javascript
import { getFigmaNode } from '../utils/figma.js';
const nodeData = await getFigmaNode('1:2');
```

### 获取样式信息
```javascript
import { getFigmaStyles } from '../utils/figma.js';
const styles = await getFigmaStyles();
```

## 5. 文件 ID

当前配置的文件 ID：`k1a9sC0LUgev8qnOVr04Xd`

如果您需要更改文件，请修改 `src/utils/figma.js` 中的 `FIGMA_FILE_KEY` 变量。

## 6. 故障排除

### 错误：Figma 客户端未初始化
- 确保已设置 `FIGMA_ACCESS_TOKEN` 环境变量
- 重启开发服务器

### 错误：401 Unauthorized
- 检查访问令牌是否正确
- 确保令牌没有过期
- 确保您有访问该文件的权限

### 错误：404 Not Found
- 检查文件 ID 是否正确
- 确保文件存在且可访问 