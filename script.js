/* =========================================================
   THE LAMPSTAND — behavior
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initTextSizeControl();

  if (document.body.dataset.page === "sermons") initSermonsPage();
  if (document.body.dataset.page === "questions") initQuestionsPage();
  if (document.body.dataset.page === "home") initHomePage();
});

/* ---------- Mobile nav ---------- */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ---------- Text size control (persists across visits) ---------- */
function initTextSizeControl() {
  const root = document.documentElement;
  const STORAGE_KEY = "lampstand-font-scale";
  const MIN = 0.85;
  const MAX = 1.5;
  const STEP = 0.1;

  let scale = parseFloat(localStorage.getItem(STORAGE_KEY)) || 1;
  applyScale(scale);

  const dec = document.querySelector("[data-font-dec]");
  const inc = document.querySelector("[data-font-inc]");
  const reset = document.querySelector("[data-font-reset]");

  if (dec) dec.addEventListener("click", () => {
    scale = Math.max(MIN, +(scale - STEP).toFixed(2));
    applyScale(scale);
  });
  if (inc) inc.addEventListener("click", () => {
    scale = Math.min(MAX, +(scale + STEP).toFixed(2));
    applyScale(scale);
  });
  if (reset) reset.addEventListener("click", () => {
    scale = 1;
    applyScale(scale);
  });

  function applyScale(value) {
    root.style.setProperty("--font-scale", value);
    try { localStorage.setItem(STORAGE_KEY, String(value)); } catch (e) { /* ignore */ }
  }
}

/* ---------- Helpers ---------- */
function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
function monthLabel(iso) {
  // iso like "2026-07"
  const d = new Date(iso + "-01T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}
function sermonMonthKey(iso) {
  return iso.slice(0, 7); // "YYYY-MM"
}
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Home page: show latest sermons ---------- */
function initHomePage() {
  const el = document.getElementById("latest-sermons");
  if (!el || typeof SERMONS === "undefined") return;
  const latest = [...SERMONS]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  el.innerHTML = latest.map(sermonCardHtml).join("");
}

function sermonCardHtml(s) {
  return `
    <article class="card sermon-card">
      <div class="meta-row">
        <span class="meta-date">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
            <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          ${formatDate(s.date)}
        </span>
        <span class="theme-tag">${escapeHtml(s.theme)}</span>
      </div>
      <h3><a href="sermons.html#${s.id}">${escapeHtml(s.title)}</a></h3>
      <p>${escapeHtml(s.excerpt)}</p>
      <a class="btn btn-outline" href="sermons.html#${s.id}">Read sermon</a>
    </article>
  `;
}

/* ---------- Sermons page ---------- */
function initSermonsPage() {
  const listEl = document.getElementById("sermon-list");
  const detailEl = document.getElementById("sermon-detail");
  const monthSelect = document.getElementById("filter-month");
  const themeSelect = document.getElementById("filter-theme");
  const clearBtn = document.getElementById("filter-clear");
  const countEl = document.getElementById("result-count");
  if (!listEl) return;

  const sorted = [...SERMONS].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Populate month filter
  const months = [...new Set(sorted.map((s) => sermonMonthKey(s.date)))];
  months.forEach((m) => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = monthLabel(m);
    monthSelect.appendChild(opt);
  });

  // Populate theme filter
  const themes = [...new Set(sorted.map((s) => s.theme))].sort();
  themes.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    themeSelect.appendChild(opt);
  });

  function render() {
    const monthVal = monthSelect.value;
    const themeVal = themeSelect.value;
    const filtered = sorted.filter((s) => {
      const monthOk = !monthVal || sermonMonthKey(s.date) === monthVal;
      const themeOk = !themeVal || s.theme === themeVal;
      return monthOk && themeOk;
    });

    countEl.textContent = `Showing ${filtered.length} of ${sorted.length} sermon${sorted.length === 1 ? "" : "s"}`;

    listEl.innerHTML = filtered.length
      ? filtered.map(sermonCardHtml).join("")
      : `<div class="empty-state">No sermons match those filters yet.</div>`;
  }

  monthSelect.addEventListener("change", render);
  themeSelect.addEventListener("change", render);
  clearBtn.addEventListener("click", () => {
    monthSelect.value = "";
    themeSelect.value = "";
    render();
  });

  render();
  renderDetailFromHash();
  window.addEventListener("hashchange", renderDetailFromHash);

  function renderDetailFromHash() {
    const id = decodeURIComponent(location.hash.replace("#", ""));
    if (!id) {
      detailEl.hidden = true;
      detailEl.innerHTML = "";
      return;
    }
    const sermon = SERMONS.find((s) => s.id === id);
    if (!sermon) {
      detailEl.hidden = true;
      return;
    }
    detailEl.hidden = false;
    detailEl.innerHTML = `
      <a class="back-link" href="sermons.html">&larr; Back to all sermons</a>
      <div class="meta-row">
        <span class="meta-date">${formatDate(sermon.date)}</span>
        <span class="theme-tag">${escapeHtml(sermon.theme)}</span>
      </div>
      <h2>${escapeHtml(sermon.title)}</h2>
      <div class="body-text">${sermon.content}</div>
    `;
    detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ---------- Questions page ---------- */
function initQuestionsPage() {
  const el = document.getElementById("questions-container");
  if (!el || typeof QUESTIONS === "undefined") return;

  const today = new Date();

  // Group by month, newest first
  const byMonth = {};
  QUESTIONS.forEach((q) => {
    if (!byMonth[q.month]) byMonth[q.month] = [];
    byMonth[q.month].push(q);
  });
  const months = Object.keys(byMonth).sort().reverse();

  if (!months.length) {
    el.innerHTML = `<div class="empty-state">No questions posted yet — check back soon.</div>`;
    return;
  }

  el.innerHTML = months
    .map((m) => {
      const items = byMonth[m]
        .map((q) => questionCardHtml(q, isUnlocked(q, today)))
        .join("");
      return `
        <div class="month-group">
          <h2 class="month-title">${monthLabel(m)}</h2>
          ${items}
        </div>
      `;
    })
    .join("");

  // Wire up manual reveal buttons
  el.querySelectorAll("[data-reveal-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const answerBox = card.querySelector(".answer-box");
      answerBox.hidden = false;
      btn.hidden = true;
    });
  });
}

function isUnlocked(q, today) {
  if (q.revealed) return true;
  // Auto-unlock on the 1st of the month AFTER q.month
  const [y, m] = q.month.split("-").map(Number);
  const unlockDate = new Date(y, m, 1); // JS months are 0-indexed, so this IS next month's 1st
  return today >= unlockDate;
}

function questionCardHtml(q, unlocked) {
  const answerHtml = `
    <div class="answer-box" hidden>
      <p><strong>Answer / reflection:</strong> ${escapeHtml(q.answer)}</p>
    </div>
  `;
  const controlHtml = unlocked
    ? `<button type="button" class="reveal-btn" data-reveal-id="${q.id}">Reveal answer</button>`
    : `<span class="locked-note">
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
           <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" stroke-width="2"/>
           <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="2"/>
         </svg>
         Answer reveals ${revealDateLabel(q.month)}
       </span>`;

  return `
    <article class="card question-card">
      <p class="q-text">${escapeHtml(q.question)}</p>
      ${controlHtml}
      ${answerHtml}
    </article>
  `;
}

function revealDateLabel(monthKey) {
  const [y, m] = monthKey.split("-").map(Number);
  const unlockDate = new Date(y, m, 1);
  return unlockDate.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}
