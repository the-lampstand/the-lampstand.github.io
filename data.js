/* =========================================================
   THE LAMPSTAND — content data
   -----------------------------------------------------------
   This is the ONLY file you need to edit to add new content.
   No coding needed — just copy an existing entry and change
   the text between the quotes.

   HOW TO ADD A NEW SERMON:
   1. Copy one of the objects in the SERMONS list below
      (from the opening { to the closing },).
   2. Paste it at the TOP of the list (so newest shows first).
   3. Give it a unique "id" (no spaces — use dashes).
   4. Fill in title, date, theme, excerpt and content.
   5. Save the file. That's it — the website updates itself.

   HOW TO ADD MONTHLY QUESTIONS:
   Same idea, in the QUESTIONS list further down.
   The answer stays hidden automatically until the 1st of the
   following month — or you can reveal it early by changing
   revealed: false to revealed: true.
   ========================================================= */

const SERMONS = [
  {
    id: "walking-in-the-light-2026-07",
    title: "Walking in the Light",
    date: "2026-07-05",
    theme: "Faith",
    excerpt:
      "What it means to let our lives be shaped by the light of Christ, even when the path ahead isn't fully lit.",
    content: `
      <p>"Thy word is a lamp unto my feet, and a light unto my path." (Psalm 119:105)</p>
      <p>We don't often get to see the whole road at once. A lamp at your feet shows the next step, not the whole journey — and that is enough. Faith isn't about having every answer before we move; it's about trusting the light we've been given for today.</p>
      <p>This month, consider one place in your life where you're being asked to take a step without seeing the whole path. What would it look like to trust the light you have?</p>
      <p>Close in prayer, thanking God for being a lamp to our feet even in seasons of uncertainty.</p>
    `,
  },
  {
    id: "the-good-shepherd-2026-06",
    title: "The Good Shepherd Knows His Own",
    date: "2026-06-07",
    theme: "Grace",
    excerpt:
      "A reflection on John 10 and what it means to be known personally by God, not just as part of a crowd.",
    content: `
      <p>"I am the good shepherd, and know my sheep, and am known of mine." (John 10:14)</p>
      <p>It's one thing to be part of a flock. It's another to be known by name. The Good Shepherd doesn't manage us from a distance — He knows our voice, our wandering, our weariness, and still calls us His own.</p>
      <p>Take some time this week to sit with the idea that you are personally known — not just tolerated, not just counted, but known and loved.</p>
    `,
  },
  {
    id: "an-anchor-for-the-soul-2026-05",
    title: "An Anchor for the Soul",
    date: "2026-05-03",
    theme: "Hope",
    excerpt:
      "On hope as an anchor in Hebrews 6, and why steady hope looks different from optimism.",
    content: `
      <p>"Which hope we have as an anchor of the soul, both sure and stedfast." (Hebrews 6:19)</p>
      <p>Hope, in Scripture, isn't wishful thinking. It's an anchor — something that holds fast precisely because the water gets rough. An anchor isn't for calm seas; it's for storms.</p>
      <p>Where in your life do you need an anchor right now, not a guarantee of calm water, but something sure to hold onto while the waves move?</p>
    `,
  },
];

const QUESTIONS = [
  {
    id: "q-2026-07-1",
    month: "2026-07",
    question:
      "Where in your life right now do you only have light for 'the next step,' and not the whole path? How does that make you feel?",
    answer:
      "There's no single right answer here — the aim is honest reflection. Many of us shared that not knowing the whole path feels uncomfortable, but that looking back, God's provision for 'just the next step' was often enough, even when it didn't feel like it at the time.",
    revealed: false,
  },
  {
    id: "q-2026-07-2",
    month: "2026-07",
    question:
      "Read Psalm 119:105 together as a family. What is one decision this month where you could ask for 'lamp light' before acting?",
    answer:
      "Several families discussed decisions about school, work changes, and relationships where pausing to pray before acting made the difference between reacting and responding.",
    revealed: false,
  },
  {
    id: "q-2026-06-1",
    month: "2026-06",
    question:
      "What does it mean to you that the Good Shepherd 'knows His own' by name, not just as part of a group?",
    answer:
      "This one moved a lot of us — the idea that we're not anonymous to God. Being known personally, including in our weakest moments, was described as both humbling and deeply comforting.",
    revealed: true,
  },
];
