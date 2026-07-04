/* html-editback standalone bundle — https://github.com/waltwang1019-sudo/html-editback */
(function(){var s=document.createElement("style");s.textContent="/* html-editback — self-contained edit layer for HTML documents */\n\n.eb-editbar {\n  position: fixed;\n  top: 18px;\n  right: 24px;\n  z-index: 9999;\n  font-family: system-ui, -apple-system, \"Segoe UI\", sans-serif;\n  color: #fff;\n  pointer-events: none;\n}\n\n.eb-editbar .eb-fab {\n  pointer-events: auto;\n  appearance: none;\n  width: 44px;\n  height: 44px;\n  border: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--eb-accent, #f56a21);\n  color: #fff;\n  font: 800 18px/1 system-ui, sans-serif;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.34);\n  cursor: pointer;\n  transition: transform 0.18s ease, opacity 0.18s ease, background 0.18s ease;\n}\n\n.eb-editbar .eb-fab:hover {\n  transform: translateY(-1px) scale(1.04);\n  filter: brightness(1.08);\n}\n\n.eb-editbar.is-open .eb-fab {\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.86);\n}\n\n.eb-editbar .eb-panel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 13px;\n  background: rgba(22, 22, 22, 0.82);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 999px;\n  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.36);\n  backdrop-filter: blur(14px);\n  opacity: 0;\n  transform: translateY(-2px) scale(0.96);\n  transform-origin: top right;\n  pointer-events: none;\n  transition: opacity 0.18s ease, transform 0.18s ease;\n}\n\n.eb-editbar.is-open .eb-panel {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  pointer-events: auto;\n}\n\n.eb-editbar button {\n  appearance: none;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.08);\n  color: #fff;\n  padding: 9px 13px;\n  font: 600 13px/1 system-ui, sans-serif;\n  letter-spacing: 0.04em;\n  cursor: pointer;\n  transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;\n}\n\n.eb-editbar button:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n\n.eb-editbar .eb-toggle {\n  background: var(--eb-accent, #f56a21);\n  border-color: var(--eb-accent, #f56a21);\n  color: #fff;\n  padding: 10px 16px;\n}\n\n.eb-editbar .eb-toggle[aria-pressed=\"true\"] {\n  background: #35c46a;\n  border-color: #35c46a;\n}\n\n.eb-editbar .eb-fab,\n.eb-editbar .eb-collapse {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n}\n\n.eb-editbar .eb-collapse {\n  width: 32px;\n  height: 32px;\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.72);\n}\n\n.eb-editbar .eb-dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #35c46a;\n  box-shadow: 0 0 0 4px rgba(53, 196, 106, 0.12);\n}\n\n.eb-editbar .eb-status {\n  min-width: 74px;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.72);\n  white-space: nowrap;\n}\n\n.eb-editbar .eb-filelink {\n  font-size: 11.5px;\n  color: rgba(255, 255, 255, 0.55);\n  white-space: nowrap;\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);\n  padding-bottom: 1px;\n}\n\n.eb-editbar .eb-filelink:hover {\n  color: #fff;\n}\n\n.eb-editbar .eb-filelink[data-linked=\"true\"] {\n  color: #8fd9a8;\n  border-color: rgba(143, 217, 168, 0.5);\n}\n\n.eb-layout-tools {\n  position: fixed;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px;\n  background: rgba(33, 39, 64, 0.92);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);\n  backdrop-filter: blur(12px);\n  font-family: system-ui, sans-serif;\n}\n\n.eb-layout-tools[hidden] {\n  display: none !important;\n}\n\n.eb-layout-tools button {\n  appearance: none;\n  border: 0;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  padding: 7px 10px;\n  font: 600 12px/1 system-ui, sans-serif;\n  cursor: pointer;\n}\n\n.eb-layout-tools button:hover {\n  background: rgba(255, 255, 255, 0.22);\n}\n\n.eb-layout-tools .eb-drag-handle {\n  background: #3d4470;\n  cursor: grab;\n}\n\n.eb-layout-tools .eb-resize-handle {\n  background: #2e8b57;\n  cursor: nwse-resize;\n}\n\n.eb-layout-tools .eb-duplicate-handle {\n  background: #5a6a9a;\n}\n\n.eb-layout-tools .eb-image-handle {\n  background: #7a5a9a;\n}\n\n.eb-layout-tools .eb-delete-handle {\n  background: #b84534;\n}\n\nbody.eb-editing [data-eb-editable] {\n  cursor: text;\n}\n\nbody.eb-editing [data-eb-editable]:hover {\n  outline: 2px dashed color-mix(in srgb, var(--eb-accent, #f56a21) 78%, transparent);\n  outline-offset: 4px;\n}\n\nbody.eb-editing [data-eb-editable]:focus {\n  outline: 3px solid var(--eb-accent, #f56a21);\n  outline-offset: 5px;\n  background: rgba(255, 255, 255, 0.2);\n}\n\nbody.eb-editing .eb-layout-selected {\n  outline: 2px solid #2687ff !important;\n  outline-offset: 5px;\n}\n\nbody.eb-layout-dragging,\nbody.eb-layout-dragging * {\n  user-select: none !important;\n  cursor: grabbing !important;\n}\n\nbody.eb-layout-resizing,\nbody.eb-layout-resizing * {\n  user-select: none !important;\n  cursor: nwse-resize !important;\n}\n\n.eb-restore-banner {\n  position: fixed;\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 10001;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  background: rgba(22, 22, 22, 0.92);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 12px;\n  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.36);\n  color: #fff;\n  font: 500 13px/1.4 system-ui, sans-serif;\n}\n\n.eb-restore-banner[hidden] {\n  display: none !important;\n}\n\n.eb-restore-banner button {\n  appearance: none;\n  border: 0;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font: 600 12px/1 system-ui, sans-serif;\n  cursor: pointer;\n}\n\n.eb-restore-banner .eb-restore-yes {\n  background: var(--eb-accent, #f56a21);\n  color: #fff;\n}\n\n.eb-restore-banner .eb-restore-no {\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n}\n\n.eb-undo-toast {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 10001;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: rgba(22, 22, 22, 0.92);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 10px;\n  color: #fff;\n  font: 500 13px/1 system-ui, sans-serif;\n}\n\n.eb-undo-toast button {\n  appearance: none;\n  border: 0;\n  border-radius: 6px;\n  padding: 6px 10px;\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  font: 600 12px/1 system-ui, sans-serif;\n  cursor: pointer;\n}\n\n@media print {\n  .eb-editbar,\n  .eb-layout-tools,\n  .eb-restore-banner,\n  .eb-undo-toast {\n    display: none !important;\n  }\n}\n";document.head.appendChild(s);})();
/**
 * html-editback — edit layer for self-contained HTML documents.
 * Open in browser → edit text & layout → save back to local file.
 *
 * @license MIT
 */
(function EditBackModule(global) {
  "use strict";

  const DEFAULTS = {
    root: "[data-editback-root], .book, main",
    pageScaleSelector: ".pg, [data-editback-page]",
    pageDesignWidth: 1920,
    accentColor: "#F56A21",
    storagePrefix: "editback",
    fabLabel: "编",
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

  function createShell() {
    if (document.querySelector(".eb-editbar")) return;

    document.body.insertAdjacentHTML(
      "beforeend",
      `
<div class="eb-editbar" aria-label="EditBack toolbar">
  <button class="eb-fab" type="button" aria-label="Open editor" aria-expanded="false"></button>
  <div class="eb-panel">
    <button class="eb-toggle" type="button" aria-pressed="false">Edit</button>
    <span class="eb-dot" aria-hidden="true"></span>
    <span class="eb-status">Off</span>
    <button class="eb-save" type="button">Save</button>
    <span class="eb-filelink" role="button" tabindex="0" title="Link local file for direct save (Chrome / Edge)">Link file</span>
    <button class="eb-print" type="button">Print</button>
    <button class="eb-reset" type="button">Reset</button>
    <button class="eb-collapse" type="button" aria-label="Collapse toolbar">×</button>
  </div>
</div>
<div class="eb-layout-tools" aria-label="Block tools" hidden>
  <button class="eb-drag-handle" type="button">Move</button>
  <button class="eb-resize-handle" type="button">Resize</button>
  <button class="eb-duplicate-handle" type="button">Copy</button>
  <button class="eb-image-handle" type="button" hidden>Image</button>
  <button class="eb-delete-handle" type="button">Delete</button>
</div>
<div class="eb-restore-banner" hidden>
  <span class="eb-restore-text">Unsaved draft found. Restore?</span>
  <button class="eb-restore-yes" type="button">Restore</button>
  <button class="eb-restore-no" type="button">Discard</button>
</div>`
    );
  }

  function init(userConfig) {
    const config = mergeConfig(userConfig);
    document.documentElement.style.setProperty("--eb-accent", config.accentColor);

    createShell();

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
    const saveBtn = toolbar.querySelector(".eb-save");
    const fileLinkEl = toolbar.querySelector(".eb-filelink");
    const printBtn = toolbar.querySelector(".eb-print");
    const resetBtn = toolbar.querySelector(".eb-reset");
    const layoutTools = document.querySelector(".eb-layout-tools");
    const dragHandle = layoutTools.querySelector(".eb-drag-handle");
    const resizeHandle = layoutTools.querySelector(".eb-resize-handle");
    const duplicateHandle = layoutTools.querySelector(".eb-duplicate-handle");
    const imageHandle = layoutTools.querySelector(".eb-image-handle");
    const deleteBtn = layoutTools.querySelector(".eb-delete-handle");
    const restoreBanner = document.querySelector(".eb-restore-banner");

    fab.textContent = config.fabLabel;

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

    const setStatus = (text) => {
      status.textContent = text;
    };

    const setToolbarOpen = (open) => {
      toolbar.classList.toggle("is-open", open);
      fab.setAttribute("aria-expanded", String(open));
    };

    const setFileLinkLabel = (text, linked) => {
      if (!fileLinkEl) return;
      fileLinkEl.textContent = text;
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
      setFileLinkLabel(`Linked: ${handle.name}`, true);
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
        setFileLinkLabel(`Linked: ${stored.name}`, true);
      } else {
        setFileLinkLabel("Link file before save", false);
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
      toggle.textContent = enabled ? "Editing" : "Edit";
      setStatus(enabled ? "Editable" : "Off");
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
      setStatus("Selected");
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
        setStatus(action === "drag" ? "Moved" : "Resized");
      };

      document.addEventListener("pointermove", move);
      document.addEventListener("pointerup", up, { once: true });
    };

    const scheduleDraftSave = () => {
      window.clearTimeout(draftTimer);
      draftTimer = window.setTimeout(() => {
        localStorage.setItem(storageKey, root.innerHTML);
        setStatus("Draft saved");
      }, 450);
    };

    const showUndoToast = (message, onUndo) => {
      document.querySelector(".eb-undo-toast")?.remove();
      const toast = document.createElement("div");
      toast.className = "eb-undo-toast";
      toast.innerHTML = `<span>${message}</span><button type="button">Undo</button>`;
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
      setStatus("Duplicated");
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
          const ok = confirm("Image is larger than 5 MB. Embed anyway? File size will grow.");
          if (!ok) return;
        }
        const reader = new FileReader();
        reader.onload = () => {
          selectedLayoutEl.src = String(reader.result);
          if (!selectedLayoutEl.alt) selectedLayoutEl.alt = file.name;
          scheduleDraftSave();
          setStatus("Image replaced");
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
        clonedToggle.textContent = "Edit";
      }
      if (clonedStatus) clonedStatus.textContent = "Off";
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
      setStatus("Downloaded copy");
    };

    const saveHTML = async () => {
      const html = buildSavedHTML();

      if (supportsFS) {
        try {
          if (!linkedFileHandle) {
            setStatus("Link file first");
            alert("Select the original HTML file once. Later saves will overwrite it directly.");
          }
          const handle = linkedFileHandle || (await pickFileHandle());
          const ok = await verifyWritePermission(handle);
          if (!ok) throw new Error("permission-denied");
          const writable = await handle.createWritable();
          await writable.write(html);
          await writable.close();
          localStorage.removeItem(storageKey);
          setStatus("Saved to file");
          return;
        } catch (err) {
          if (err?.name === "AbortError") {
            setStatus("Save cancelled");
            return;
          }
          console.warn("[editback] save failed:", err);
          setStatus("Save failed");
          alert("Could not overwrite the file. Re-link the HTML file and try again.");
          return;
        }
      }

      alert("This browser cannot write directly to disk. A copy will be downloaded instead.");
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
        setStatus("Draft restored");
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
      if (!confirm("Reset to the content from when this file was opened? Draft will be cleared.")) return;
      localStorage.removeItem(storageKey);
      clearLayoutSelection();
      root.innerHTML = initialRootHTML;
      markEditableText();
      setEditing(false);
      setStatus("Reset");
    });

    dragHandle.addEventListener("pointerdown", (e) => startLayoutAction(e, "drag"));
    resizeHandle.addEventListener("pointerdown", (e) => startLayoutAction(e, "resize"));
    duplicateHandle.addEventListener("click", duplicateSelected);
    imageHandle.addEventListener("click", replaceSelectedImage);
    deleteBtn.addEventListener("click", () => {
      if (!selectedLayoutEl) return;
      if (!confirm("Delete selected block? Use Reset to undo all changes.")) return;
      undoEntry = { html: selectedLayoutEl.outerHTML, parent: selectedLayoutEl.parentElement, next: selectedLayoutEl.nextSibling };
      const removed = selectedLayoutEl;
      clearLayoutSelection();
      removed.remove();
      scheduleDraftSave();
      setStatus("Deleted");
      showUndoToast("Block deleted", () => {
        if (!undoEntry?.parent) return;
        const temp = document.createElement("div");
        temp.innerHTML = undoEntry.html;
        const node = temp.firstElementChild;
        if (!node) return;
        undoEntry.parent.insertBefore(node, undoEntry.next);
        selectLayoutTarget(node);
        scheduleDraftSave();
        setStatus("Restored");
      });
    });

    if (fileLinkEl) {
      fileLinkEl.addEventListener("click", async () => {
        try {
          await pickFileHandle();
          setStatus("File linked");
        } catch (err) {
          if (err?.name !== "AbortError") console.error(err);
        }
      });
    }

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
