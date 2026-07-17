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
   Same idea, in the QUESTIONS list further down. Give each one
   a "theme" (matching your sermon themes if you like) so it can
   be filtered on the Questions page, same as sermons.
   The answer stays hidden automatically until the 1st of the
   following month — or you can reveal it early by changing
   revealed: false to revealed: true.

   HOW VERSE OF THE DAY WORKS:
   See the VERSES list near the bottom of this file.
   ========================================================= */

const SERMONS = [
  {
    id: "when-jesus-steps-in-2026-07",
    title: "When Jesus Steps In",
    preacher: "Dr. Gladys",
    date: "2026-07-03",
    theme: "When Jesus Steps In",
    scriptures: ["John 5:1-9", "Luke 5:4-8", "2 Kings 7:3-8"],
    excerpt:
      "God's timing can change a life in a single moment — three biblical accounts of what happens the instant Jesus steps into a situation, and nine ways we invite Him to step into ours.",
    content: `
      <p>God's timing can change a life in a single moment.</p>
      <p>The man who had suffered for thirty-eight years kept his focus on the pool, but his miracle came from Jesus — not from the stirred water. We should shift our focus away from human systems and fix it instead on the Lord Jesus. When the Lord Jesus Christ stepped into this man's situation, he was immediately made whole, and he picked up his mat and walked.</p>
      <p>On the other hand, Simon Peter, a professional fisherman, could not catch any fish that night. But when Jesus stepped in, at His word Peter caught a multitude of fish.</p>
      <p>In 2 Kings 7:3-8, the Lord stepped into the situation of four helpless lepers and provided for their needs in an unexpected way.</p>

      <h4>Some ways that attract the Lord to step into our situations</h4>
      <ol>
        <li><strong>Prayer and fasting</strong> — Esther 4:15-16; Esther 5:1-3; 1 Samuel 2:12-18, 20</li>
        <li><strong>Obedience</strong> — 1 Kings 17:8-16; Luke 5:4-7</li>
        <li><strong>Faith / Trust</strong> — Mark 5:25-29; John 11:29-44</li>
        <li><strong>Favour</strong> — the life of Joseph</li>
        <li><strong>Humility</strong></li>
        <li><strong>Generosity</strong></li>
        <li><strong>Kingdom service</strong></li>
        <li><strong>Honouring our parents</strong></li>
        <li><strong>Honouring the servants of God</strong> — 2 Kings 4:8-17</li>
      </ol>

      <p>In conclusion, in this season of campaigns leading up to elections and after elections, let us pray that the Lord steps into all that concerns our nation, and let peace prevail in Jesus' name.</p>
      <p>Let us also present our individual issues and invite the Lord to step in. 🙏 May the Lord bless us all. Amen. 🙌</p>
    `,
  },
  {
    id: "the-importance-of-fellowship-2026-05",
    title: "The Importance of Fellowship",
    preacher: "Limpo Musale",
    date: "2026-05-01",
    theme: "The Importance of Fellowship",
    scriptures: ["Hebrews 10:24-25", "1 John 1:3", "1 John 1:7"],
    excerpt:
      "What fellowship really means, and why gathering together — not just believing alone — is essential to how we grow and stay grounded in faith.",
    content: `
      <h4>What is fellowship?</h4>
      <p>At its core, fellowship just means a close, supportive relationship with others, often tied by shared beliefs, goals, or experiences. In a Christian context, it's that bond we share as believers, supporting and encouraging each other in faith and in life.</p>

      <h4>Why fellowship matters</h4>
      <p>First, fellowship reflects our unity in Christ — it's how we live out love and support as a body.</p>
      <p>Second, it helps us grow — we encourage one another, share wisdom, and sharpen our faith.</p>
      <p>Third, fellowship is a source of accountability — being together keeps us grounded, helps us persevere, and reminds us that we're not alone on this journey.</p>

      <p>In conclusion, even as we continue to worship God in truth and in spirit, may we never abandon the habit of fellowship, as this shapes us and builds us into better Christians.</p>
      <p>Prayer requests are welcome. Good night, and God bless.</p>
    `,
  },
  {
    id: "giving-thanks-to-god-2026-03",
    title: "Giving Thanks to God",
    preacher: "Mrs Besa Snr",
    date: "2026-03-06",
    theme: "Giving Thanks to God",
    scriptures: ["Psalm 107:1", "Psalm 136", "1 Thessalonians 5:18"],
    excerpt:
      "A study on when, why, and how we give thanks to God, with examples from Miriam, Hannah, David, Solomon, and the healed leper.",
    content: `
      <h4>When should we give thanks?</h4>
      <p>At all times, regardless of our circumstances (Psalm 34).</p>

      <h4>Why should we give thanks to God?</h4>
      <ul>
        <li>He is good</li>
        <li>He has done great things for us</li>
        <li>It is an instruction</li>
        <li>It makes us humble</li>
        <li>It positions us to receive more</li>
      </ul>
      <p class="scripture-note">1 Chronicles 16:34 &middot; Philippians 4:6 &middot; Psalm 103</p>

      <h4>How do we give thanks to God?</h4>
      <ul>
        <li>By honouring Him with our lives</li>
        <li>By praising Him</li>
        <li>By telling people about Him</li>
      </ul>

      <h4>Some people who gave thanks to God in the Bible</h4>
      <ul>
        <li>Miriam, for crossing the Red Sea — Exodus 15:20</li>
        <li>Hannah, for God answering her prayers and giving her a son — 1 Samuel 2:10</li>
        <li>David, for defeating the Philistines — 2 Samuel 22:1</li>
        <li>Solomon, after building the temple — 1 Kings 8:14-21</li>
        <li>The leper, after being healed by Jesus — Luke 17:11-19</li>
      </ul>
    `,
  },
];

const QUESTIONS = [
  {
    id: "q-2026-07-1",
    month: "2026-07",
    theme: "When Jesus Steps In",
    question:
      "Where in your life are you focused on 'the pool' — a system, method, or process — instead of on Jesus Himself? What would it look like to shift your focus to Him?",
    answer:
      "There's no single right answer here — the aim is honest reflection. Many of us named a habit, a process, or a person we'd been leaning on instead of prayer, and talked about what it would look like to bring that situation to Jesus directly this month.",
    revealed: false,
  },
  {
    id: "q-2026-07-2",
    month: "2026-07",
    theme: "When Jesus Steps In",
    question:
      "Of the nine things that attract the Lord to step into our situations — prayer and fasting, obedience, faith, favour, humility, generosity, kingdom service, honouring our parents, and honouring God's servants — which one do you most need to grow in this month?",
    answer:
      "Answers varied across the family, but obedience and prayer and fasting came up most. A few of us committed to one practical step this month rather than trying to grow in all nine areas at once.",
    revealed: false,
  },
  {
    id: "q-2026-05-1",
    month: "2026-05",
    theme: "The Importance of Fellowship",
    question:
      "Fellowship was described as a source of unity, growth, and accountability. Which of these three do you personally need most right now?",
    answer:
      "Several of us said accountability — having someone who checks in and keeps us grounded. Others said growth, especially those going through a season of change. A reminder that fellowship meets different needs at different times.",
    revealed: true,
  },
  {
    id: "q-2026-05-2",
    month: "2026-05",
    theme: "The Importance of Fellowship",
    question:
      "Is there a relationship or fellowship you've been neglecting? What's one small step you could take to reconnect?",
    answer:
      "A few of us named family members or friends we'd fallen out of touch with, and agreed to reach out with a call or visit before the next gathering.",
    revealed: true,
  },
  {
    id: "q-2026-03-1",
    month: "2026-03",
    theme: "Giving Thanks to God",
    question:
      "The sermon gave several reasons to give thanks: He is good, He has done great things for us, it is an instruction, it makes us humble, and it positions us to receive more. Which of these means the most to you this month?",
    answer:
      "Many of us pointed to 'He has done great things for us' — it was encouraging to actually list specific things God had done recently rather than speaking in generalities.",
    revealed: true,
  },
  {
    id: "q-2026-03-2",
    month: "2026-03",
    theme: "Giving Thanks to God",
    question:
      "Think of a time in the past year when you experienced God's goodness, the way Miriam, Hannah, or the healed leper did. Have you thanked Him for it yet?",
    answer:
      "This question led to several family members sharing specific answered prayers out loud for the first time, and closing that gathering in a time of thanksgiving together.",
    revealed: true,
  },
];

/* =========================================================
   VERSE OF THE DAY
   -----------------------------------------------------------
   No server, so there's no way to truly pick a "random" verse
   each day — instead we rotate through this list by date, so
   everyone who visits on the same day sees the same verse, and
   it automatically changes tomorrow. Once the list is used up,
   it loops back to the start.

   HOW TO ADD VERSES:
   Just add another { reference: "...", text: "..." } entry
   anywhere in the list below — order doesn't matter.
   ========================================================= */

const VERSES = [
  {
    reference: "Psalm 119:105",
    text: "Thy word is a lamp unto my feet, and a light unto my path.",
  },
  {
    reference: "John 10:14",
    text: "I am the good shepherd, and know my sheep, and am known of mine.",
  },
  {
    reference: "Hebrews 6:19",
    text: "Which hope we have as an anchor of the soul, both sure and stedfast.",
  },
  {
    reference: "Matthew 5:16",
    text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
  },
  {
    reference: "Proverbs 3:5-6",
    text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
  },
  {
    reference: "Isaiah 41:10",
    text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.",
  },
  {
    reference: "Philippians 4:6-7",
    text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
  },
  {
    reference: "Lamentations 3:22-23",
    text: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
  },
  {
    reference: "Joshua 1:9",
    text: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
  },
  {
    reference: "Romans 8:28",
    text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
  },
];
