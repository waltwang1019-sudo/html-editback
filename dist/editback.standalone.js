/* html-editback standalone bundle — https://github.com/waltwang1019-sudo/html-editback */
(function(){var s=document.createElement("style");s.textContent="/* html-editback v1.1 — editor chrome */\n\n:root {\n  --eb-font: \"SF Pro Text\", \"PingFang SC\", \"Helvetica Neue\", system-ui, sans-serif;\n  --eb-surface: #111318;\n  --eb-surface-2: #181b24;\n  --eb-border: rgba(255, 255, 255, 0.08);\n  --eb-border-strong: rgba(255, 255, 255, 0.14);\n  --eb-text: rgba(255, 255, 255, 0.92);\n  --eb-text-muted: rgba(255, 255, 255, 0.52);\n  --eb-text-faint: rgba(255, 255, 255, 0.36);\n  --eb-accent: #f56a21;\n  --eb-accent-soft: color-mix(in srgb, var(--eb-accent) 18%, transparent);\n  --eb-success: #3ecf8e;\n  --eb-success-soft: rgba(62, 207, 142, 0.14);\n  --eb-danger: #f07167;\n  --eb-danger-soft: rgba(240, 113, 103, 0.16);\n  --eb-info: #5b9dff;\n  --eb-info-soft: rgba(91, 157, 255, 0.16);\n  --eb-shadow-lg: 0 24px 64px rgba(0, 0, 0, 0.42), 0 2px 8px rgba(0, 0, 0, 0.24);\n  --eb-shadow-md: 0 12px 32px rgba(0, 0, 0, 0.32);\n  --eb-radius-lg: 16px;\n  --eb-radius-md: 12px;\n  --eb-radius-sm: 10px;\n  --eb-ease: cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.eb-icon {\n  width: 18px;\n  height: 18px;\n  flex: none;\n  display: block;\n}\n\n.eb-icon-sm {\n  width: 15px;\n  height: 15px;\n}\n\n/* ── Main toolbar ── */\n.eb-editbar {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 9999;\n  font-family: var(--eb-font);\n  color: var(--eb-text);\n  pointer-events: none;\n}\n\n.eb-editbar .eb-fab {\n  pointer-events: auto;\n  appearance: none;\n  width: 48px;\n  height: 48px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  background:\n    radial-gradient(120% 120% at 20% 0%, rgba(255, 255, 255, 0.22), transparent 55%),\n    linear-gradient(145deg, color-mix(in srgb, var(--eb-accent) 88%, #fff), var(--eb-accent));\n  color: #fff;\n  box-shadow: var(--eb-shadow-md);\n  cursor: pointer;\n  transition: transform 0.22s var(--eb-ease), box-shadow 0.22s var(--eb-ease), opacity 0.18s ease;\n}\n\n.eb-editbar .eb-fab .eb-icon {\n  width: 20px;\n  height: 20px;\n  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.18));\n}\n\n.eb-editbar .eb-fab:hover {\n  transform: translateY(-2px) scale(1.03);\n  box-shadow: var(--eb-shadow-lg);\n}\n\n.eb-editbar .eb-fab:active {\n  transform: translateY(0) scale(0.98);\n}\n\n.eb-editbar.is-open .eb-fab {\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.88) translateY(-4px);\n}\n\n.eb-editbar .eb-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: min(300px, calc(100vw - 40px));\n  background: var(--eb-surface);\n  border: 1px solid var(--eb-border-strong);\n  border-radius: var(--eb-radius-lg);\n  box-shadow: var(--eb-shadow-lg);\n  overflow: hidden;\n  opacity: 0;\n  transform: translateY(-6px) scale(0.96);\n  transform-origin: top right;\n  pointer-events: none;\n  transition: opacity 0.22s var(--eb-ease), transform 0.22s var(--eb-ease);\n}\n\n.eb-editbar.is-open .eb-panel {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  pointer-events: auto;\n}\n\n.eb-panel-head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 14px 12px;\n  border-bottom: 1px solid var(--eb-border);\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent);\n}\n\n.eb-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  flex: 1;\n  font: 600 13px/1 var(--eb-font);\n  letter-spacing: 0.01em;\n}\n\n.eb-brand-mark {\n  width: 28px;\n  height: 28px;\n  border-radius: 8px;\n  display: grid;\n  place-items: center;\n  background: var(--eb-accent-soft);\n  color: var(--eb-accent);\n  flex: none;\n}\n\n.eb-brand-mark .eb-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.eb-status {\n  font: 500 11px/1 var(--eb-font);\n  color: var(--eb-text-muted);\n  padding: 5px 8px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid var(--eb-border);\n  white-space: nowrap;\n  max-width: 96px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.eb-status.is-live {\n  color: var(--eb-success);\n  background: var(--eb-success-soft);\n  border-color: rgba(62, 207, 142, 0.22);\n}\n\n.eb-collapse {\n  appearance: none;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  border-radius: 8px;\n  display: grid;\n  place-items: center;\n  background: transparent;\n  color: var(--eb-text-muted);\n  cursor: pointer;\n  transition: background 0.15s ease, color 0.15s ease;\n  flex: none;\n}\n\n.eb-collapse:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--eb-text);\n}\n\n.eb-panel-body {\n  padding: 12px 14px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.eb-toggle {\n  appearance: none;\n  width: 100%;\n  border: 1px solid color-mix(in srgb, var(--eb-accent) 40%, transparent);\n  border-radius: var(--eb-radius-sm);\n  background: linear-gradient(180deg, color-mix(in srgb, var(--eb-accent) 22%, transparent), color-mix(in srgb, var(--eb-accent) 10%, transparent));\n  color: var(--eb-text);\n  padding: 11px 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font: 600 13px/1 var(--eb-font);\n  cursor: pointer;\n  transition: background 0.18s ease, border-color 0.18s ease, transform 0.15s ease;\n}\n\n.eb-toggle:hover {\n  border-color: color-mix(in srgb, var(--eb-accent) 55%, transparent);\n  transform: translateY(-1px);\n}\n\n.eb-toggle[aria-pressed=\"true\"] {\n  background: linear-gradient(180deg, rgba(62, 207, 142, 0.22), rgba(62, 207, 142, 0.1));\n  border-color: rgba(62, 207, 142, 0.42);\n  color: #dfffea;\n}\n\n.eb-actions {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 6px;\n}\n\n.eb-action {\n  appearance: none;\n  border: 1px solid var(--eb-border);\n  border-radius: var(--eb-radius-sm);\n  background: var(--eb-surface-2);\n  color: var(--eb-text-muted);\n  padding: 10px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  font: 500 10px/1 var(--eb-font);\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.15s ease;\n}\n\n.eb-action:hover {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: var(--eb-border-strong);\n  color: var(--eb-text);\n  transform: translateY(-1px);\n}\n\n.eb-action:active {\n  transform: translateY(0);\n}\n\n.eb-action.eb-save {\n  color: var(--eb-accent);\n}\n\n.eb-action.eb-save:hover {\n  background: var(--eb-accent-soft);\n  border-color: color-mix(in srgb, var(--eb-accent) 35%, transparent);\n}\n\n.eb-action.eb-reset:hover {\n  color: var(--eb-danger);\n  background: var(--eb-danger-soft);\n  border-color: rgba(240, 113, 103, 0.28);\n}\n\n.eb-filelink {\n  appearance: none;\n  width: 100%;\n  border: 1px dashed var(--eb-border-strong);\n  border-radius: var(--eb-radius-sm);\n  background: rgba(255, 255, 255, 0.02);\n  color: var(--eb-text-muted);\n  padding: 9px 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font: 500 11px/1.35 var(--eb-font);\n  text-align: left;\n  cursor: pointer;\n  transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;\n}\n\n.eb-filelink:hover {\n  color: var(--eb-text);\n  border-color: rgba(255, 255, 255, 0.22);\n  background: rgba(255, 255, 255, 0.04);\n}\n\n.eb-filelink[data-linked=\"true\"] {\n  color: var(--eb-success);\n  border-style: solid;\n  border-color: rgba(62, 207, 142, 0.28);\n  background: var(--eb-success-soft);\n}\n\n.eb-filelink-text {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.eb-kbd-hint {\n  font: 500 10px/1.4 var(--eb-font);\n  color: var(--eb-text-faint);\n  text-align: center;\n  margin-top: 2px;\n}\n\n.eb-kbd-hint kbd {\n  display: inline-block;\n  padding: 2px 5px;\n  border-radius: 4px;\n  border: 1px solid var(--eb-border);\n  background: rgba(255, 255, 255, 0.04);\n  font: inherit;\n  color: var(--eb-text-muted);\n}\n\n/* ── Block tools ── */\n.eb-layout-tools {\n  position: fixed;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding: 4px;\n  background: var(--eb-surface);\n  border: 1px solid var(--eb-border-strong);\n  border-radius: 999px;\n  box-shadow: var(--eb-shadow-md);\n  font-family: var(--eb-font);\n}\n\n.eb-layout-tools[hidden] {\n  display: none !important;\n}\n\n.eb-layout-tools::before {\n  content: \"\";\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: var(--eb-info);\n  box-shadow: 0 0 0 3px var(--eb-info-soft);\n  margin: 0 4px 0 6px;\n  flex: none;\n}\n\n.eb-layout-tools button {\n  appearance: none;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--eb-text-muted);\n  width: 34px;\n  height: 34px;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  position: relative;\n  transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;\n}\n\n.eb-layout-tools button:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--eb-text);\n  transform: translateY(-1px);\n}\n\n.eb-layout-tools button[data-tip]::after {\n  content: attr(data-tip);\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  padding: 4px 7px;\n  border-radius: 6px;\n  background: #000;\n  color: #fff;\n  font: 500 10px/1 var(--eb-font);\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n}\n\n.eb-layout-tools button[data-tip]:hover::after {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n\n.eb-layout-tools .eb-drag-handle:hover {\n  color: var(--eb-info);\n  background: var(--eb-info-soft);\n}\n\n.eb-layout-tools .eb-resize-handle:hover {\n  color: var(--eb-success);\n  background: var(--eb-success-soft);\n}\n\n.eb-layout-tools .eb-duplicate-handle:hover {\n  color: #c4b5fd;\n  background: rgba(196, 181, 253, 0.14);\n}\n\n.eb-layout-tools .eb-image-handle:hover {\n  color: #f0b27a;\n  background: rgba(240, 178, 122, 0.14);\n}\n\n.eb-layout-tools .eb-delete-handle:hover {\n  color: var(--eb-danger);\n  background: var(--eb-danger-soft);\n}\n\n/* ── Editing states ── */\nbody.eb-editing [data-eb-editable] {\n  cursor: text;\n  border-radius: 2px;\n  transition: box-shadow 0.15s ease, background 0.15s ease;\n}\n\nbody.eb-editing [data-eb-editable]:hover {\n  box-shadow: 0 0 0 2px color-mix(in srgb, var(--eb-accent) 55%, transparent);\n  background: color-mix(in srgb, var(--eb-accent) 6%, transparent);\n}\n\nbody.eb-editing [data-eb-editable]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--eb-accent), 0 0 0 6px color-mix(in srgb, var(--eb-accent) 22%, transparent);\n  background: color-mix(in srgb, var(--eb-accent) 8%, transparent);\n}\n\nbody.eb-editing .eb-layout-selected {\n  outline: none !important;\n  box-shadow: 0 0 0 2px var(--eb-info), 0 0 0 6px var(--eb-info-soft) !important;\n}\n\nbody.eb-layout-dragging,\nbody.eb-layout-dragging * {\n  user-select: none !important;\n  cursor: grabbing !important;\n}\n\nbody.eb-layout-resizing,\nbody.eb-layout-resizing * {\n  user-select: none !important;\n  cursor: nwse-resize !important;\n}\n\n/* ── Banners & toasts ── */\n.eb-restore-banner {\n  position: fixed;\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10001;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: var(--eb-surface);\n  border: 1px solid var(--eb-border-strong);\n  border-radius: var(--eb-radius-md);\n  box-shadow: var(--eb-shadow-lg);\n  color: var(--eb-text);\n  font: 500 13px/1.4 var(--eb-font);\n  max-width: min(92vw, 480px);\n}\n\n.eb-restore-banner[hidden] {\n  display: none !important;\n}\n\n.eb-restore-banner button {\n  appearance: none;\n  border: 0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font: 600 12px/1 var(--eb-font);\n  cursor: pointer;\n}\n\n.eb-restore-banner .eb-restore-yes {\n  background: var(--eb-accent);\n  color: #fff;\n}\n\n.eb-restore-banner .eb-restore-no {\n  background: rgba(255, 255, 255, 0.08);\n  color: var(--eb-text);\n}\n\n.eb-undo-toast {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 10001;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px 10px 14px;\n  background: var(--eb-surface);\n  border: 1px solid var(--eb-border-strong);\n  border-radius: var(--eb-radius-md);\n  box-shadow: var(--eb-shadow-md);\n  color: var(--eb-text);\n  font: 500 13px/1 var(--eb-font);\n}\n\n.eb-undo-toast button {\n  appearance: none;\n  border: 0;\n  border-radius: 8px;\n  padding: 7px 10px;\n  background: rgba(255, 255, 255, 0.1);\n  color: var(--eb-text);\n  font: 600 12px/1 var(--eb-font);\n  cursor: pointer;\n}\n\n@media print {\n  .eb-editbar,\n  .eb-layout-tools,\n  .eb-restore-banner,\n  .eb-undo-toast {\n    display: none !important;\n  }\n}\n\n@media (max-width: 480px) {\n  .eb-editbar {\n    top: 12px;\n    right: 12px;\n  }\n\n  .eb-editbar .eb-panel {\n    width: calc(100vw - 24px);\n  }\n\n  .eb-actions {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n";document.head.appendChild(s);})();
/**
 * html-editback — edit layer for self-contained HTML documents.
 * Open in browser → edit text & layout → save back to local file.
 *
 * @license MIT
 */
(function EditBackModule(global) {
  "use strict";

  const STRINGS = {
    zh: {
      openEditor: "打开编辑器",
      collapse: "收起",
      editOn: "编辑中",
      editOff: "开始编辑",
      ready: "就绪",
      editable: "可编辑",
      selected: "已选中",
      moved: "已移动",
      resized: "已调整",
      draftSaved: "已暂存",
      duplicated: "已复制",
      imageReplaced: "图片已替换",
      deleted: "已删除",
      restored: "已恢复",
      saved: "已保存",
      saveFailed: "保存失败",
      saveCancelled: "已取消",
      linkFirst: "请先关联文件",
      linkFile: "关联本地文件",
      linked: "已关联",
      fileLinked: "文件已关联",
      downloaded: "已下载副本",
      reset: "已重置",
      blockDeleted: "模块已删除",
      restoreDraft: "发现未保存草稿，是否恢复？",
      restoreYes: "恢复",
      restoreNo: "丢弃",
      undo: "撤销",
      save: "保存",
      print: "导出",
      resetBtn: "重置",
      linkTitle: "选择要直接覆盖保存的 HTML 原文件（Chrome / Edge）",
      saveAlert: "首次保存需选择 HTML 原文件，之后将直接覆盖。",
      saveFailAlert: "未能覆盖原文件，请重新关联后再试。",
      downloadAlert: "当前浏览器不支持直接写盘，将下载副本。",
      resetConfirm: "确定恢复到打开文件时的内容？草稿将被清除。",
      deleteConfirm: "确定删除选中模块？可用「重置」恢复全部。",
      imageLarge: "图片超过 5MB，嵌入后文件会变大，是否继续？",
      move: "移动",
      resize: "缩放",
      copy: "复制",
      image: "换图",
      delete: "删除",
      kbdHint: "E 编辑 · ⌘S 保存 · ⌘P 打印",
    },
    en: {
      openEditor: "Open editor",
      collapse: "Collapse",
      editOn: "Editing",
      editOff: "Start editing",
      ready: "Ready",
      editable: "Editable",
      selected: "Selected",
      moved: "Moved",
      resized: "Resized",
      draftSaved: "Draft saved",
      duplicated: "Duplicated",
      imageReplaced: "Image replaced",
      deleted: "Deleted",
      restored: "Restored",
      saved: "Saved",
      saveFailed: "Save failed",
      saveCancelled: "Cancelled",
      linkFirst: "Link file first",
      linkFile: "Link local file",
      linked: "Linked",
      fileLinked: "File linked",
      downloaded: "Downloaded",
      reset: "Reset",
      blockDeleted: "Block deleted",
      restoreDraft: "Unsaved draft found. Restore?",
      restoreYes: "Restore",
      restoreNo: "Discard",
      undo: "Undo",
      save: "Save",
      print: "Print",
      resetBtn: "Reset",
      linkTitle: "Link HTML file for direct save (Chrome / Edge)",
      saveAlert: "Select the original HTML file once. Later saves overwrite it.",
      saveFailAlert: "Could not overwrite. Re-link the file and try again.",
      downloadAlert: "Direct save unavailable. A copy will be downloaded.",
      resetConfirm: "Reset to content from when this file was opened?",
      deleteConfirm: "Delete selected block?",
      imageLarge: "Image is larger than 5 MB. Embed anyway?",
      move: "Move",
      resize: "Resize",
      copy: "Copy",
      image: "Image",
      delete: "Delete",
      kbdHint: "E edit · ⌘S save · ⌘P print",
    },
  };

  const ICONS = {
    edit: '<svg class="eb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    layers: '<svg class="eb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12.83 2.18 8.49 4.92a1 1 0 0 1 0 1.74l-8.5 4.92a2 2 0 0 1-2 0l-8.5-4.92a1 1 0 0 1 0-1.74l8.5-4.92a2 2 0 0 1 2 0Z"/><path d="M2 12.5l8.5 4.92a2 2 0 0 0 2 0L21 12.5"/><path d="M2 17.5l8.5 4.92a2 2 0 0 0 2 0L21 17.5"/></svg>',
    close: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    save: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/></svg>',
    link: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    print: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>',
    reset: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 3v6h6"/></svg>',
    move: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20M2 12h20"/><path d="m16 6 4-4M20 6l-4-4M8 18l-4 4M4 18l4 4M18 8l4-4M22 8l-4-4M6 16l-4 4M2 16l4 4"/></svg>',
    resize: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
    copy: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    image: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L9 18"/></svg>',
    trash: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/></svg>',
    penOn: '<svg class="eb-icon eb-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5 5"/><path d="M16 3l5 5"/></svg>',
  };

  const DEFAULTS = {
    root: "[data-editback-root], .book, main",
    pageScaleSelector: ".pg, [data-editback-page]",
    pageDesignWidth: 1920,
    accentColor: "#F56A21",
    storagePrefix: "editback",
    locale: "zh",
    restoreDraft: true,
    layoutSelectors: [
      "img",
      "[data-eb-editable]",
      "[data-editback-block]",
      ".tile",
      ".card",
      ".item",
      ".cell",
      ".row",
      ".shot",
      "section",
      "article",
      "figure",
    ],
    excludeSelectors: [".eb-editbar", ".eb-layout-tools", ".eb-restore-banner", ".eb-undo-toast"],
  };

  const mergeConfig = (input) => ({ ...DEFAULTS, ...(global.EDITBACK_CONFIG || {}), ...(input || {}) });

  const supportsFS = typeof global.showSaveFilePicker === "function";

  function createShell(t) {
    if (document.querySelector(".eb-editbar")) return;

    document.body.insertAdjacentHTML(
      "beforeend",
      `
<div class="eb-editbar" aria-label="EditBack">
  <button class="eb-fab" type="button" aria-label="${t.openEditor}" aria-expanded="false">${ICONS.edit}</button>
  <div class="eb-panel">
    <div class="eb-panel-head">
      <div class="eb-brand">
        <span class="eb-brand-mark">${ICONS.layers}</span>
        <span>EditBack</span>
      </div>
      <span class="eb-status">${t.ready}</span>
      <button class="eb-collapse" type="button" aria-label="${t.collapse}">${ICONS.close}</button>
    </div>
    <div class="eb-panel-body">
      <button class="eb-toggle" type="button" aria-pressed="false">${ICONS.penOn}<span class="eb-toggle-label">${t.editOff}</span></button>
      <div class="eb-actions">
        <button class="eb-action eb-save" type="button" title="${t.save}">${ICONS.save}<span>${t.save}</span></button>
        <button class="eb-action eb-print" type="button" title="${t.print}">${ICONS.print}<span>${t.print}</span></button>
        <button class="eb-action eb-reset" type="button" title="${t.resetBtn}">${ICONS.reset}<span>${t.resetBtn}</span></button>
        <button class="eb-action eb-link" type="button" title="${t.linkFile}">${ICONS.link}<span>${t.linkFile}</span></button>
      </div>
      <button class="eb-filelink" type="button" title="${t.linkTitle}">${ICONS.link}<span class="eb-filelink-text">${t.linkFile}</span></button>
      <p class="eb-kbd-hint">${t.kbdHint.replace("⌘", navigator.platform.includes("Mac") ? "⌘" : "Ctrl+")}</p>
    </div>
  </div>
</div>
<div class="eb-layout-tools" aria-label="Block tools" hidden>
  <button class="eb-drag-handle" type="button" data-tip="${t.move}">${ICONS.move}</button>
  <button class="eb-resize-handle" type="button" data-tip="${t.resize}">${ICONS.resize}</button>
  <button class="eb-duplicate-handle" type="button" data-tip="${t.copy}">${ICONS.copy}</button>
  <button class="eb-image-handle" type="button" hidden data-tip="${t.image}">${ICONS.image}</button>
  <button class="eb-delete-handle" type="button" data-tip="${t.delete}">${ICONS.trash}</button>
</div>
<div class="eb-restore-banner" hidden>
  <span class="eb-restore-text">${t.restoreDraft}</span>
  <button class="eb-restore-yes" type="button">${t.restoreYes}</button>
  <button class="eb-restore-no" type="button">${t.restoreNo}</button>
</div>`
    );
  }

  function init(userConfig) {
    const config = mergeConfig(userConfig);
    const t = STRINGS[config.locale] || STRINGS.zh;
    document.documentElement.style.setProperty("--eb-accent", config.accentColor);

    createShell(t);

    const root = document.querySelector(config.root);
    if (!root) {
      console.warn("[editback] Root not found:", config.root);
      return null;
    }

    const toolbar = document.querySelector(".eb-editbar");
    const fab = toolbar.querySelector(".eb-fab");
    const collapseBtn = toolbar.querySelector(".eb-collapse");
    const toggle = toolbar.querySelector(".eb-toggle");
    const status = toolbar.querySelector(".eb-status");
    const toggleLabel = toggle.querySelector(".eb-toggle-label");
    const saveBtn = toolbar.querySelector(".eb-save");
    const fileLinkEl = toolbar.querySelector(".eb-filelink");
    const fileLinkText = fileLinkEl.querySelector(".eb-filelink-text");
    const linkBtn = toolbar.querySelector(".eb-link");
    const printBtn = toolbar.querySelector(".eb-print");
    const resetBtn = toolbar.querySelector(".eb-reset");
    const layoutTools = document.querySelector(".eb-layout-tools");
    const dragHandle = layoutTools.querySelector(".eb-drag-handle");
    const resizeHandle = layoutTools.querySelector(".eb-resize-handle");
    const duplicateHandle = layoutTools.querySelector(".eb-duplicate-handle");
    const imageHandle = layoutTools.querySelector(".eb-image-handle");
    const deleteBtn = layoutTools.querySelector(".eb-delete-handle");
    const restoreBanner = document.querySelector(".eb-restore-banner");

    const storageKey = `${config.storagePrefix}:draft:${location.pathname}`;
    const dbKey = `${config.storagePrefix}:handle:${location.pathname}`;
    const initialRootHTML = root.innerHTML;
    let draftTimer = 0;
    let selectedLayoutEl = null;
    let linkedFileHandle = null;
    let undoEntry = null;
    let undoTimer = 0;

    const layoutTargetSelector = config.layoutSelectors.join(",");
    const excludeSelector = config.excludeSelectors.join(",");

    const openHandleDB = () =>
      new Promise((resolve, reject) => {
        const req = indexedDB.open(`${config.storagePrefix}-fs-handles`, 1);
        req.onupgradeneeded = () => {
          req.result.createObjectStore("handles");
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });

    const idbGet = async (key) => {
      try {
        const db = await openHandleDB();
        return await new Promise((resolve, reject) => {
          const tx = db.transaction("handles", "readonly");
          const req = tx.objectStore("handles").get(key);
          req.onsuccess = () => resolve(req.result || null);
          req.onerror = () => reject(req.error);
        });
      } catch {
        return null;
      }
    };

    const idbSet = async (key, value) => {
      try {
        const db = await openHandleDB();
        await new Promise((resolve, reject) => {
          const tx = db.transaction("handles", "readwrite");
          tx.objectStore("handles").put(value, key);
          tx.oncomplete = () => resolve();
          tx.onerror = () => reject(tx.error);
        });
      } catch {
        /* ignore */
      }
    };

    const verifyWritePermission = async (handle) => {
      const opts = { mode: "readwrite" };
      try {
        if ((await handle.queryPermission(opts)) === "granted") return true;
        if ((await handle.requestPermission(opts)) === "granted") return true;
      } catch {
        /* noop */
      }
      return false;
    };

    const setStatus = (text, live = false) => {
      status.textContent = text;
      status.classList.toggle("is-live", live);
    };

    const setToolbarOpen = (open) => {
      toolbar.classList.toggle("is-open", open);
      fab.setAttribute("aria-expanded", String(open));
    };

    const setFileLinkLabel = (text, linked) => {
      if (!fileLinkText) return;
      fileLinkText.textContent = text;
      fileLinkEl.dataset.linked = String(!!linked);
    };

    const defaultFileName = () =>
      decodeURIComponent(location.pathname.split("/").pop() || "document.html");

    const pickFileHandle = async () => {
      const handle = await global.showSaveFilePicker({
        suggestedName: defaultFileName(),
        types: [{ description: "HTML", accept: { "text/html": [".html", ".htm"] } }],
      });
      linkedFileHandle = handle;
      await idbSet(dbKey, handle);
      setFileLinkLabel(`${t.linked}: ${handle.name}`, true);
      return handle;
    };

    const initFileLink = async () => {
      if (!supportsFS || !fileLinkEl) {
        if (fileLinkEl) fileLinkEl.hidden = true;
        return;
      }
      const stored = await idbGet(dbKey);
      if (stored && (await verifyWritePermission(stored).catch(() => false))) {
        linkedFileHandle = stored;
        setFileLinkLabel(`${t.linked}: ${stored.name}`, true);
      } else {
        setFileLinkLabel(t.linkFile, false);
      }
    };

    const markEditableText = () => {
      root.querySelectorAll("[data-eb-editable]").forEach((node) => {
        node.removeAttribute("data-eb-editable");
        node.removeAttribute("contenteditable");
        node.removeAttribute("spellcheck");
      });

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        },
      });

      const editableNodes = new Set();
      while (walker.nextNode()) {
        const parent = walker.currentNode.parentElement;
        if (!parent || parent.closest(excludeSelector) || ["SCRIPT", "STYLE"].includes(parent.tagName)) {
          continue;
        }
        editableNodes.add(parent);
      }

      editableNodes.forEach((node) => {
        node.dataset.ebEditable = "true";
        if (document.body.classList.contains("eb-editing")) {
          node.setAttribute("contenteditable", "true");
          node.setAttribute("spellcheck", "false");
        }
      });
    };

    const setEditing = (enabled) => {
      document.body.classList.toggle("eb-editing", enabled);
      toggle.setAttribute("aria-pressed", String(enabled));
      if (toggleLabel) toggleLabel.textContent = enabled ? t.editOn : t.editOff;
      setStatus(enabled ? t.editable : t.ready, enabled);
      if (!enabled) clearLayoutSelection();
      root.querySelectorAll("[data-eb-editable]").forEach((node) => {
        if (enabled) {
          node.setAttribute("contenteditable", "true");
          node.setAttribute("spellcheck", "false");
        } else {
          node.removeAttribute("contenteditable");
          node.removeAttribute("spellcheck");
        }
      });
    };

    const readTranslate = (node) => {
      const raw = (node.style.translate || "").trim();
      if (!raw || raw === "none") return { x: 0, y: 0 };
      const [x = "0", y = "0"] = raw.split(/\s+/);
      return { x: parseFloat(x) || 0, y: parseFloat(y) || 0 };
    };

    const pageScaleFor = (node) => {
      const page = node.closest(config.pageScaleSelector);
      if (!page) return 1;
      return page.getBoundingClientRect().width / config.pageDesignWidth || 1;
    };

    const getLayoutTarget = (target) => {
      if (!(target instanceof HTMLElement)) return null;
      const node = target.closest(layoutTargetSelector);
      if (!node || !root.contains(node)) return null;
      if (node.closest(excludeSelector)) return null;
      if (node.matches(`${config.root}, script, style`)) return null;
      return node;
    };

    const clearLayoutSelection = () => {
      if (selectedLayoutEl) selectedLayoutEl.classList.remove("eb-layout-selected");
      selectedLayoutEl = null;
      layoutTools.hidden = true;
      imageHandle.hidden = true;
    };

    const updateLayoutTools = () => {
      if (!selectedLayoutEl || !document.body.classList.contains("eb-editing")) {
        layoutTools.hidden = true;
        return;
      }
      const rect = selectedLayoutEl.getBoundingClientRect();
      layoutTools.hidden = false;
      imageHandle.hidden = selectedLayoutEl.tagName !== "IMG";
      layoutTools.style.left = `${Math.max(12, rect.left)}px`;
      layoutTools.style.top = `${Math.max(12, rect.top - layoutTools.offsetHeight - 10)}px`;
    };

    const selectLayoutTarget = (node) => {
      if (selectedLayoutEl === node) {
        updateLayoutTools();
        return;
      }
      clearLayoutSelection();
      selectedLayoutEl = node;
      selectedLayoutEl.classList.add("eb-layout-selected");
      updateLayoutTools();
      setStatus(t.selected, true);
    };

    const startLayoutAction = (event, action) => {
      if (!selectedLayoutEl) return;
      event.preventDefault();
      event.stopPropagation();

      const node = selectedLayoutEl;
      const scale = pageScaleFor(node);
      const startX = event.clientX;
      const startY = event.clientY;
      const startTranslate = readTranslate(node);
      const startWidth = node.offsetWidth;
      const startHeight = node.offsetHeight;

      if (action === "drag") document.body.classList.add("eb-layout-dragging");
      if (action === "resize") {
        document.body.classList.add("eb-layout-resizing");
        node.style.maxWidth = "none";
        node.style.maxHeight = "none";
        node.style.flex = "none";
        node.style.width = `${startWidth}px`;
        node.style.height = `${startHeight}px`;
      }

      const move = (moveEvent) => {
        const dx = (moveEvent.clientX - startX) / scale;
        const dy = (moveEvent.clientY - startY) / scale;
        if (action === "drag") {
          node.style.translate = `${Math.round(startTranslate.x + dx)}px ${Math.round(startTranslate.y + dy)}px`;
        } else {
          node.style.width = `${Math.max(24, Math.round(startWidth + dx))}px`;
          node.style.height = `${Math.max(18, Math.round(startHeight + dy))}px`;
        }
        updateLayoutTools();
      };

      const up = () => {
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerup", up);
        document.body.classList.remove("eb-layout-dragging", "eb-layout-resizing");
        updateLayoutTools();
        scheduleDraftSave();
        setStatus(action === "drag" ? t.moved : t.resized, true);
      };

      document.addEventListener("pointermove", move);
      document.addEventListener("pointerup", up, { once: true });
    };

    const scheduleDraftSave = () => {
      window.clearTimeout(draftTimer);
      draftTimer = window.setTimeout(() => {
        localStorage.setItem(storageKey, root.innerHTML);
        setStatus(t.draftSaved, true);
      }, 450);
    };

    const showUndoToast = (message, onUndo) => {
      document.querySelector(".eb-undo-toast")?.remove();
      const toast = document.createElement("div");
      toast.className = "eb-undo-toast";
      toast.innerHTML = `<span>${message}</span><button type="button">${t.undo}</button>`;
      toast.querySelector("button").addEventListener("click", () => {
        onUndo();
        toast.remove();
      });
      document.body.appendChild(toast);
      window.clearTimeout(undoTimer);
      undoTimer = window.setTimeout(() => toast.remove(), 5000);
    };

    const duplicateSelected = () => {
      if (!selectedLayoutEl) return;
      const clone = selectedLayoutEl.cloneNode(true);
      clone.classList.remove("eb-layout-selected");
      const t = readTranslate(selectedLayoutEl);
      clone.style.translate = `${t.x + 12}px ${t.y + 12}px`;
      selectedLayoutEl.after(clone);
      selectLayoutTarget(clone);
      scheduleDraftSave();
      setStatus(t.duplicated, true);
    };

    const replaceSelectedImage = () => {
      if (!selectedLayoutEl || selectedLayoutEl.tagName !== "IMG") return;
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.addEventListener("change", () => {
        const file = input.files?.[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) {
          const ok = confirm(t.imageLarge);
          if (!ok) return;
        }
        const reader = new FileReader();
        reader.onload = () => {
          selectedLayoutEl.src = String(reader.result);
          if (!selectedLayoutEl.alt) selectedLayoutEl.alt = file.name;
          scheduleDraftSave();
          setStatus(t.imageReplaced, true);
        };
        reader.readAsDataURL(file);
      });
      input.click();
    };

    const buildSavedHTML = () => {
      const clone = document.documentElement.cloneNode(true);
      clone.querySelector("body")?.classList.remove("eb-editing", "eb-layout-dragging", "eb-layout-resizing");
      clone.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));
      clone.querySelectorAll("[spellcheck]").forEach((node) => node.removeAttribute("spellcheck"));
      clone.querySelectorAll("[data-eb-editable]").forEach((node) => node.removeAttribute("data-eb-editable"));
      clone.querySelectorAll(".eb-layout-tools, .eb-restore-banner, .eb-undo-toast").forEach((node) => node.remove());
      clone.querySelectorAll(".eb-layout-selected").forEach((node) => node.classList.remove("eb-layout-selected"));
      clone.querySelector(".eb-editbar")?.classList.remove("is-open");
      const clonedFab = clone.querySelector(".eb-fab");
      const clonedToggle = clone.querySelector(".eb-toggle");
      const clonedStatus = clone.querySelector(".eb-status");
      if (clonedFab) clonedFab.setAttribute("aria-expanded", "false");
      if (clonedToggle) {
        clonedToggle.setAttribute("aria-pressed", "false");
        const label = clonedToggle.querySelector(".eb-toggle-label");
        if (label) label.textContent = t.editOff;
      }
      if (clonedStatus) {
        clonedStatus.textContent = t.ready;
        clonedStatus.classList.remove("is-live");
      }
      return `<!DOCTYPE html>\n${clone.outerHTML}`;
    };

    const downloadCopy = (html) => {
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = defaultFileName();
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
      setStatus(t.downloaded);
    };

    const saveHTML = async () => {
      const html = buildSavedHTML();

      if (supportsFS) {
        try {
          if (!linkedFileHandle) {
            setStatus(t.linkFirst);
            alert(t.saveAlert);
          }
          const handle = linkedFileHandle || (await pickFileHandle());
          const ok = await verifyWritePermission(handle);
          if (!ok) throw new Error("permission-denied");
          const writable = await handle.createWritable();
          await writable.write(html);
          await writable.close();
          localStorage.removeItem(storageKey);
          setStatus(t.saved, true);
          return;
        } catch (err) {
          if (err?.name === "AbortError") {
            setStatus(t.saveCancelled);
            return;
          }
          console.warn("[editback] save failed:", err);
          setStatus(t.saveFailed);
          alert(t.saveFailAlert);
          return;
        }
      }

      alert(t.downloadAlert);
      downloadCopy(html);
    };

    const offerDraftRestore = () => {
      if (!config.restoreDraft || !restoreBanner) return;
      const draft = localStorage.getItem(storageKey);
      if (!draft || draft === initialRootHTML) return;
      restoreBanner.hidden = false;
      restoreBanner.querySelector(".eb-restore-yes").onclick = () => {
        root.innerHTML = draft;
        markEditableText();
        restoreBanner.hidden = true;
        setStatus(t.restored, true);
      };
      restoreBanner.querySelector(".eb-restore-no").onclick = () => {
        localStorage.removeItem(storageKey);
        restoreBanner.hidden = true;
      };
    };

    fab.addEventListener("click", () => setToolbarOpen(true));
    collapseBtn.addEventListener("click", () => setToolbarOpen(false));
    toggle.addEventListener("click", () => setEditing(!document.body.classList.contains("eb-editing")));
    saveBtn.addEventListener("click", saveHTML);
    printBtn.addEventListener("click", () => {
      const wasEditing = document.body.classList.contains("eb-editing");
      setEditing(false);
      global.print();
      if (wasEditing) setEditing(true);
    });
    resetBtn.addEventListener("click", () => {
      if (!confirm(t.resetConfirm)) return;
      localStorage.removeItem(storageKey);
      clearLayoutSelection();
      root.innerHTML = initialRootHTML;
      markEditableText();
      setEditing(false);
      setStatus(t.reset);
    });

    dragHandle.addEventListener("pointerdown", (e) => startLayoutAction(e, "drag"));
    resizeHandle.addEventListener("pointerdown", (e) => startLayoutAction(e, "resize"));
    duplicateHandle.addEventListener("click", duplicateSelected);
    imageHandle.addEventListener("click", replaceSelectedImage);
    deleteBtn.addEventListener("click", () => {
      if (!selectedLayoutEl) return;
      if (!confirm(t.deleteConfirm)) return;
      undoEntry = { html: selectedLayoutEl.outerHTML, parent: selectedLayoutEl.parentElement, next: selectedLayoutEl.nextSibling };
      const removed = selectedLayoutEl;
      clearLayoutSelection();
      removed.remove();
      scheduleDraftSave();
      setStatus(t.deleted);
      showUndoToast(t.blockDeleted, () => {
        if (!undoEntry?.parent) return;
        const temp = document.createElement("div");
        temp.innerHTML = undoEntry.html;
        const node = temp.firstElementChild;
        if (!node) return;
        undoEntry.parent.insertBefore(node, undoEntry.next);
        selectLayoutTarget(node);
        scheduleDraftSave();
        setStatus(t.restored, true);
      });
    });

    const linkFile = async () => {
      try {
        await pickFileHandle();
        setStatus(t.fileLinked, true);
      } catch (err) {
        if (err?.name !== "AbortError") console.error(err);
      }
    };

    if (fileLinkEl) fileLinkEl.addEventListener("click", linkFile);
    if (linkBtn) linkBtn.addEventListener("click", linkFile);

    root.addEventListener("input", (event) => {
      if (event.target instanceof HTMLElement && event.target.matches("[data-eb-editable]")) {
        scheduleDraftSave();
      }
    });

    root.addEventListener("click", (event) => {
      if (!document.body.classList.contains("eb-editing")) return;
      const layoutTarget = getLayoutTarget(event.target);
      if (layoutTarget) selectLayoutTarget(layoutTarget);
      const target = event.target instanceof HTMLElement ? event.target.closest("[data-eb-editable]") : null;
      if (target) target.focus();
    });

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      if (toolbar.contains(event.target) || layoutTools.contains(event.target) || root.contains(event.target)) return;
      clearLayoutSelection();
    });

    document.addEventListener("keydown", (event) => {
      const mod = event.metaKey || event.ctrlKey;
      const key = event.key.toLowerCase();

      if (mod && key === "s") {
        event.preventDefault();
        saveHTML();
        return;
      }
      if (mod && key === "p") {
        event.preventDefault();
        printBtn.click();
        return;
      }
      if (!mod && key === "e" && !event.target.closest("[contenteditable=true]")) {
        event.preventDefault();
        toggle.click();
        return;
      }
      if (key === "escape") {
        if (toolbar.classList.contains("is-open")) setToolbarOpen(false);
        clearLayoutSelection();
      }
    });

    window.addEventListener("scroll", updateLayoutTools, { passive: true });
    window.addEventListener("resize", updateLayoutTools);

    markEditableText();
    setEditing(false);
    initFileLink();
    offerDraftRestore();

    return { save: saveHTML, reset: resetBtn.click.bind(resetBtn), setEditing, getRoot: () => root };
  }

  global.EditBack = { init, defaults: DEFAULTS };
  if (global.EDITBACK_AUTO_INIT !== false) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => init());
    } else {
      init();
    }
  }
})(window);
