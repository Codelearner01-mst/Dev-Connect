document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("event-heading");
  const paragraph = document.getElementById("event-paragraph");

 const messages = [
  {
    h1: "The Never-Ending Learning Curve",
    p: "How tech evolves faster than any one person can master."
  },
  {
    h1: "Question & Answer Session",
    p: "Bring your toughest dev questions — we’ll tackle them together live."
  },
  {
    h1: "Community Contributions",
    p: "Share your insights, tips, and experiences to help others grow."
  },
  {
    h1: "Exploring the Topic",
    p: "We’ll dive into how developers adapt to constant change in tech."
  },
  {
    h1: "Learning How This & That",
    p: "From frameworks to tools, let’s break down the practical steps to stay relevant."
  }
];

  const animations = ["slide-left", "slide-right", "slide-up", "slide-down"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % messages.length;
    const anim = animations[index % animations.length];

    heading.className = "";
    paragraph.className = "event-subtitle";

    heading.classList.add(anim);
    paragraph.classList.add(anim);

    heading.textContent = messages[index].h1;
    paragraph.textContent = messages[index].p;
  }, 4000);
});

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("hero-heading");
  const paragraph = document.getElementById("hero-paragraph");

  const messages = [
    {
      h1: "Learn, Share & Grow Together",
      p: "Join our weekly DevConnect Live sessions on X and occasional WhatsApp Lives to stay connected."
    },
    {
      h1: "🚀 Weekly X Live Sessions",
      p: "Every Saturday at 7 PM GMT — don’t miss it!"
    },
    {
      h1: "👥 Community Code Reviews",
      p: "Sharpen your skills every Friday with collaborative reviews."
    },
    {
      h1: "🎥 WhatsApp Live (Random)",
      p: "Occasional interactive sessions to keep learning fun."
    }
  ];

  const animations = ["slide-left", "slide-right", "slide-up", "slide-down"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % messages.length;
    const anim = animations[index % animations.length];

    heading.className = "";
    paragraph.className = "hero-paragraph";

    heading.classList.add(anim);
    paragraph.classList.add(anim);

    heading.textContent = messages[index].h1;
    paragraph.textContent = messages[index].p;
  }, 4000);
});
