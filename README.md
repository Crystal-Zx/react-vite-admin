# React + Vite 后台项目脚手架

## 功能分支分类

### 基础功能

1. Git 工作流：✅

- commitlint 规范提交 msg
- husky hook 处理提交时的 eslint 检测
- package.json scripts 中配置命令行提交

2. ESLint 及 Prettier 配置：规范代码风格 ✅
3. 环境变量处理 ✅
4. 构建工具基础配置： ✅

- 区分开发/生产环境配置
- 路径别名
- Babel、postcss 等处理代码兼容问题
  - Babel 内置在了 @vitejs/plugin-react 包中了

5. vscode 配置 ✅

- setting.json
- extension.json

6. import-sort 模块导入顺序 ✅

- eslint-plugin-simple-import-sort

7. React Router 路由配置 ✅
8. antd 接入及后台基础界面框架处理（Half）
9. axios 等请求库接入

### TypeScript 接入

### css 选择：tailwind | less | scss 接入

### Zustand 接入

# 分支划分

1. base： 仅提供基础基建（上述 1 - 6 点）；
2. admin： 在 base 的基础上提供：

- 路由，权限处理 ✅
- 界面基础布局
- 基础 Axios 使用封装
  等后台相关功能；

3. admin-ts： 在 admin 的基础上添加 TS 处理；

## 构建流程纪要

### 创建项目

```shell
npm create vite@latest
```
