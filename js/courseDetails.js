const courseDetails = [
  {
    title: "JavaScript Crash Course",
    description: `<ul>
      <li>Foundations: Learn variables, functions, and loops.</li>
      <li>DOM Manipulation: Build interactive web pages.</li>
      <li>Hands-on Projects: Practice with mini apps.</li>
    </ul>`,
    lectures: 12,
    duration: "48m 9s",
    level: "Beginner Friendly",
    instructor: "Programming with Mosh",
    thumbnail: "images/javascript.jpg"
  },
  {
    title: "Python for Beginners",
    description: `<ul>
      <li>Syntax Basics: Variables, data types, and operators.</li>
      <li>Control Flow: If statements, loops, and functions.</li>
      <li>Practical Tasks: Automate simple scripts.</li>
    </ul>`,
    lectures: 10,
    duration: "3h 1s",
    level: "Beginner to Intermediate",
    instructor: "FreeCodeCamp",
    thumbnail: "images/python-crash.jpg"
  },
  {
    title: "HTML for Complete Beginners",
    description: `<ul>
      <li>Structure: Learn headings, paragraphs, and lists.</li>
      <li>Links & Media: Add images, videos, and hyperlinks.</li>
      <li>Page Building: Create your first static website.</li>
    </ul>`,
    lectures: 100,
    duration: "47m 10s",
    level: "Beginner friendly",
    instructor: "W3Schools",
    thumbnail: "images/html.jpg"
  },
  {
    title: "React Basics & Beyond",
    description: `<ul>
      <li>Structure: Learn headings, paragraphs, and lists.</li>
      <li>Links & Media: Add images, videos, and hyperlinks.</li>
      <li>Page Building: Create your first static website.</li>
    </ul>`,
    lectures: 10,
    duration: "1h 19m 10s",
    level: "Very high recommended for Beginners",
    instructor: "Programming with Mosh",
    thumbnail: "images/html.jpg"
  },

    {
    title: "Java Essentials",
    description: `<ul>
      <li>Structure: Learn headings, paragraphs, and lists.</li>
      <li>Links & Media: Add images, videos, and hyperlinks.</li>
      <li>Page Building: Create your first static website.</li>
    </ul>`,
    lectures: 300,
    duration: "1h 19m 10s",
    level: "Very high recommended for Beginners",
    instructor: "Programming with Mosh",
    thumbnail: "images/html.jpg"
  },
      {
    title: "PHP Fundamentals",
    description: `<ul>
      <li>Structure: Learn headings, paragraphs, and lists.</li>
      <li>Links & Media: Add images, videos, and hyperlinks.</li>
      <li>Page Building: Create your first static website with PHP.</li>
    </ul>`,
    lectures: 30,
    duration: "1h 11m 59s",
    level: "Very high recommended for Beginners",
    instructor: "Laravel",
    thumbnail: "images/html.jpg"
  },
   {
    title: "How to Prompt AI",
    description: `<ul>
      <li>Structure: Learn headings, paragraphs, and lists.</li>
      <li>Links & Media: Add images, videos, and hyperlinks.</li>
      <li>Page Building: Create your first static website Using Ai.</li>
    </ul>`,
    lectures: 30,
    duration: "23m 56s",
    level: "Very high recommended for Beginners who loves Ai",
    instructor: "NetworkChuck",
    thumbnail: "images/html.jpg"
  },
   {
    title: "AI for Developers",
    description: `<ul>
      <li>Structure: Learn headings, paragraphs, and lists.</li>
      <li>Links & Media: Add images, videos, and hyperlinks.</li>
      <li>Page Building: Create your first static website Using Ai.</li>
    </ul>`,
    lectures: 30,
    duration: "27m 3s",
    level: "Very high recommended for Beginners who loves Ai",
    instructor: "Mickey No Code",
    thumbnail: "images/html.jpg"
  }
];


const videos = {
  "JavaScript Crash Course": "W6NZfCO5SIk",
  "Python for Beginners": "8ext9G7xspg",
  "HTML for Complete Beginners": "BzYMFd-lQL4",
  "React Basics & Beyond": "SqcY0GlETPk",
  "Java Essentials": "eIrMbAQSU34",
  "PHP Fundamentals": "EX3qQqdm16I",
  "How to Prompt AI": "pwWBcsxEoLk",
  "AI for Developers": "RKbmqSRc0z0"
};

const cardsPerRow = 4;

document.querySelectorAll('.card').forEach((card, index, cards) => {
  let targetCard = null;
  const positionInRow = index % cardsPerRow;

  if (positionInRow === 0) targetCard = cards[index + 1];
  else if (positionInRow === 1) targetCard = cards[index - 1];
  else if (positionInRow === 2) targetCard = cards[index + 1];
  else if (positionInRow === 3) targetCard = cards[index - 1];

  if (!targetCard) return;
  const overlay = targetCard.querySelector('.card-overlay');

  card.addEventListener('mouseenter', () => {
    const details = courseDetails[index];
    overlay.innerHTML = `<h4>${details.title}</h4>${details.description}`;
    overlay.classList.add('show');
  });

  card.addEventListener('mouseleave', () => {
    overlay.classList.remove('show');
    overlay.innerHTML = "";
  });

card.addEventListener('click', () => {
  const details = courseDetails[index];

  document.querySelector('.section').style.display = 'none';
  document.getElementById('course-view').classList.remove('hidden');

  document.getElementById('backBtn').style.display = 'inline-block';

  document.getElementById('course-title').textContent = details.title;
  document.getElementById('course-description').innerHTML = details.description;
  document.getElementById('course-meta').innerHTML = `
    <ul>
      <li>📘 ${details.lectures} Lectures</li>
      <li>⏱️ ${details.duration}</li>
      <li>⭐ ${details.level}</li>
      <li>👨‍🏫 Instructor: ${details.instructor}</li>
    </ul>
  `;

  document.getElementById('course-video-player').src =
    "https://www.youtube.com/embed/" + videos[details.title];

  localStorage.setItem('selectedCourse', details.title);
});
});


window.addEventListener('DOMContentLoaded', () => {
  const savedCourse = localStorage.getItem('selectedCourse');
  if (savedCourse) {
    const details = courseDetails.find(c => c.title === savedCourse);

    document.querySelector('.section').style.display = 'none';
    document.getElementById('course-view').classList.remove('hidden');

    document.getElementById('backBtn').style.display = 'inline-block';

    document.getElementById('course-title').textContent = details.title;
    document.getElementById('course-description').innerHTML = details.description;

    document.getElementById('course-meta').innerHTML = `
      <ul>
        <li>📘 ${details.lectures} Lectures</li>
        <li>⏱️ ${details.duration}</li>
        <li>⭐ ${details.level}</li>
        <li>👨‍🏫 Instructor: ${details.instructor}</li>
      </ul>
    `;

    document.getElementById('course-video-player').src =
      "https://www.youtube.com/embed/" + videos[details.title];
  }
});


document.getElementById('backBtn')?.addEventListener('click', () => {
  document.getElementById('course-view').classList.add('hidden');
  document.querySelector('.section').style.display = 'block';
  document.getElementById('course-video-player').src = "";
  localStorage.removeItem('selectedCourse');

   document.getElementById('backBtn').style.display = 'none';
});
