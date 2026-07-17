# The Lampstand

A family website for monthly sermons, reflection questions, and contact —
built as a plain static site (HTML/CSS/JS, no build tools, no backend) so it
hosts for free on GitHub Pages.

## Files

| File | Purpose |
|---|---|
| `index.html` | Home page |
| `sermons.html` | Full sermon archive with month/theme filters |
| `questions.html` | Monthly questions with automatic answer reveal |
| `contact.html` | Contact page (opens the visitor's email app) |
| `styles.css` | All styling — colors, layout, type |
| `script.js` | All behavior — filtering, reveal logic, menu, text size |
| `data.js` | **The only file you'll normally edit.** Sermons and questions live here. |

---

## Part 1 — Put this on GitHub Pages

### Step 1: Create the repository
1. Go to [github.com](https://github.com) and log in (create a free account if you don't have one).
2. Click the **+** in the top right → **New repository**.
3. Name it exactly `YOURUSERNAME.github.io` — replace `YOURUSERNAME` with your actual GitHub username, exactly, lowercase. This exact naming is what makes GitHub host it automatically.
   - Example: if your username is `smithfamily`, the repo must be named `smithfamily.github.io`.
4. Set it to **Public**.
5. Don't add a README/gitignore/license here — you already have these files.
6. Click **Create repository**.

### Step 2: Upload the site files
Easiest way, no command line needed:
1. On your new (empty) repository page, click **uploading an existing file**.
2. Drag in all the files from this folder: `index.html`, `sermons.html`, `questions.html`,
   `contact.html`, `styles.css`, `script.js`, `data.js`, `README.md`.
3. Scroll down, add a commit message like "Initial site", click **Commit changes**.

### Step 3: Turn on Pages
1. In the repository, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment" → Source, choose **Deploy from a branch**.
4. Branch: `main`, Folder: `/ (root)`. Click **Save**.
5. Wait 1–2 minutes, then refresh — GitHub will show a message like
   "Your site is live at `https://YOURUSERNAME.github.io`".

That's it. Your family can now visit that address on any phone, tablet, or laptop.

### Updating the site later
Any time you edit a file on GitHub (click the file → pencil/edit icon → make changes →
**Commit changes**), the live site updates automatically within about a minute. No
re-deploying, no technical steps.

---

## Part 2 — Adding a new sermon each month

Open `data.js` (click it in GitHub → pencil icon to edit). At the top you'll see a list
called `SERMONS`. Copy one whole entry (from `{` to the closing `},`) and paste it at the
**top** of the list, then edit the text:

```js
{
  id: "unique-short-id-2026-08",     // no spaces, must be unique
  title: "Your Sermon Title",
  preacher: "Preacher's Name",       // shown on the card and the full sermon
  date: "2026-08-02",                // YYYY-MM-DD
  theme: "Faith",                    // any word you like — used for filtering
  scriptures: ["John 3:16", "Romans 8:28"],  // shown in a box above the sermon
  excerpt: "One or two sentence teaser shown on the list page.",
  content: `
    <p>First paragraph of the sermon.</p>
    <h4>An optional subheading</h4>
    <ul>
      <li>You can use bullet lists too</li>
    </ul>
    <p>Another paragraph.</p>
  `,
},
```

`preacher` and `scriptures` are both optional — leave either one out and it just won't
show. Inside `content`, you can use `<p>` for paragraphs, `<h4>` for subheadings, and
`<ul>`/`<ol>` with `<li>` for lists — the site will style all of these automatically.

Save (commit) the file — the sermon appears on the site immediately, sorted by date,
and shows up in the month and theme filters automatically.

## Part 3 — Adding monthly questions

Same file, further down, in the `QUESTIONS` list:

```js
{
  id: "q-2026-08-1",
  month: "2026-08",                  // YYYY-MM
  question: "Your question text.",
  answer: "The answer or reflection.",
  revealed: false,                   // leave false — see below
},
```

**How the reveal works:** the answer automatically unlocks on the 1st of the month
*after* the one listed (so a question with `month: "2026-08"` unlocks on
September 1). Visitors then tap "Reveal answer" to see it — it doesn't just appear
on its own, so no one sees it by accident.

If you ever want to reveal an answer early, change `revealed: false` to
`revealed: true` and save.

**Filtering:** the Questions page now has the same Month and Theme dropdown
filters as the Sermons page. Give each question a `theme` (e.g. `"Faith"`,
`"Grace"`, `"Hope"` — reuse your sermon themes, or make new ones) and it'll
show up as a filter option automatically.

## Part 3.5 — Verse of the day

Near the bottom of `data.js` is a list called `VERSES`. Every page shows one
verse in a banner just under the header. Because the site has no server, it
can't truly pick a random verse — instead it rotates through your list by
the calendar date, so **everyone sees the same verse on the same day**, and
it automatically moves to the next one tomorrow. Once it reaches the end of
the list it loops back to the start, forever, with no maintenance needed.

To add a verse, add another entry anywhere in the list:
```js
{
  reference: "Philippians 4:13",
  text: "I can do all things through Christ which strengtheneth me.",
},
```
Order doesn't matter, and you can add as many as you like — more verses just
means a longer cycle before it repeats.

## Part 4 — Contact page

Open `contact.html` and find:
```html
<a href="mailto:family@example.com?subject=The%20Lampstand">family@example.com</a>
```
Replace **both** instances of `family@example.com` with your real family email address,
then save. Because the site is static (no server), the Contact page works by opening
the visitor's own email app with your address pre-filled — no contact form to manage,
no spam inbox to sort through.

*(If later you want an actual on-page form instead of opening an email app, a free
service like [Formspree](https://formspree.io) can do that without needing a backend
— ask me and I can wire it in.)*

---

## Accessibility notes

This site was built with a low-vision family member in mind:
- Body text uses **Atkinson Hyperlegible**, a typeface designed by the Braille Institute
  specifically for readability.
- Colors are high-contrast: warm white text on near-black, with bright blue and green
  accents that meet accessibility contrast guidelines.
- There's a built-in **text size control** (A− / A / A+) in the top navigation on every
  page, and it remembers each visitor's preference.
- All interactive elements (links, buttons, dropdowns) have a clearly visible focus ring
  for keyboard navigation.

## Adding more pages later

You mentioned you'll add more sections later — the pattern is: copy any existing page
(e.g. `contact.html`), rename it, replace the `<main>` content, and add a link to it in
the `<nav class="site-nav">` block near the top of every page (there are 4 copies, one
per existing page — add your new link to all of them so it shows everywhere).
