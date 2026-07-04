---
name: html-editback
description: 给 HTML 文档注入浏览器内编辑层（EditBack）——就地改字、拖拽布局、保存回本地文件、导出 PDF。当用户要做 HTML back、品牌手册、演示文稿 HTML、可编辑单文件 HTML，或说「加编辑功能」「editback」「保存回本地」时使用。
---

# html-editback

> 单文件 HTML 即产品。浏览器里改，保存写回磁盘。

仓库：<https://github.com/waltwang1019-sudo/html-editback>

## 何时使用

| 用户说 | 动作 |
|--------|------|
| 「给这个 HTML 加编辑 / back 功能」 | 注入 EditBack |
| 「做品牌手册 HTML，要能改字保存」 | 生成 HTML + 注入 EditBack |
| 「HTML back」 | 同上 |

## 标准流程

### 1. 新建 HTML 文档

- 内容根容器用 `data-editback-root` 或 `.book`
- 多页场景每页用 `.pg`（1920×1080 设计稿 + CSS scale 亦可）
- 打印样式单独写 `@media print`，隐藏 `.eb-editbar`

### 2. 注入 EditBack

**方式 A — CLI（推荐）**

```bash
cd tools/html-editback   # 或 clone 独立仓库
npm run build
node scripts/inject.mjs path/to/doc.html --root ".book"
```

**方式 B — 手动引用**

```html
<link rel="stylesheet" href="path/to/dist/editback.css">
<script>
  window.EDITBACK_CONFIG = {
    root: "[data-editback-root]",
    locale: "zh",
    accentColor: "#F56A21",
    pageScaleSelector: ".pg",
    pageDesignWidth: 1920,
  };
</script>
<script src="path/to/dist/editback.js"></script>
```

**方式 C — 单文件内联**

```bash
node scripts/inject.mjs doc.html --inline
```

### 3. 验收清单

- [ ] Chrome/Edge 打开 → 右上角「编」→ 切换 Edit
- [ ] 点击文字可编辑
- [ ] 点击模块可选中 → 拖动/调尺寸/复制/删除
- [ ] 图片选中 → Image 按钮可替换
- [ ] Save → 首次关联原文件 → 再次 Save 直接覆盖
- [ ] 保存后 HTML 不含 `contenteditable`、不含编辑态 class
- [ ] Cmd/Ctrl+S 快捷键可用
- [ ] Print 导出 PDF 正常

## 配置参考

```js
window.EDITBACK_CONFIG = {
  root: "[data-editback-root], .book",
  pageScaleSelector: ".pg",
  pageDesignWidth: 1920,
  accentColor: "#F56A21",
  fabLabel: "编",
  restoreDraft: true,
  layoutSelectors: ["img", ".card", ".tile", ".item", "section"],
};
```

## 与品牌手册集成

破泥品牌手册类文档额外注意：

- 字体用本地 `@font-face`，路径相对 HTML 文件
- 图片用相对路径，不用绝对 `file://`
- 打印 `@page { size: 1920px 1080px }` 配合 `.slot` 分页
- 缩放舞台：`.book { --s: .642 }` + `.pg { transform: scale(var(--s)) }`

## 资源

| 文件 | 用途 |
|------|------|
| `src/editback.css` | 编辑层样式 |
| `src/editback.js` | 核心逻辑 |
| `dist/editback.standalone.js` | CSS 内联单文件版 |
| `demo/demo.html` | 最小可运行 demo |
| `scripts/inject.mjs` | 批量注入 CLI |

## 不要做的事

- 不要用外部 CDN 依赖（保持零依赖）
- 不要在保存后的 HTML 里留下 `contenteditable` 或 `.eb-editing`
- Safari/Firefox 不支持直接写盘，需提示用户下载副本
