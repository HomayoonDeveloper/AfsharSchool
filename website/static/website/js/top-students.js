/* =========================================
   دانش‌آموزان برتر — داده‌ها و رندر
   سه دسته: جشنواره‌های علمی، مسابقات ورزشی و فرهنگی، قبولی مدارس برتر
========================================= */

const avatarPalette = [
  "linear-gradient(135deg,#0F4CDB,#3B82F6)",
  "linear-gradient(135deg,#7C3AED,#A855F7)",
  "linear-gradient(135deg,#059669,#10B981)",
  "linear-gradient(135deg,#DC2626,#F97316)",
  "linear-gradient(135deg,#0891B2,#06B6D4)",
  "linear-gradient(135deg,#D97706,#F59E0B)",
  "linear-gradient(135deg,#DB2777,#F472B6)",
  "linear-gradient(135deg,#65A30D,#84CC16)",
];

/* دسته اول: جشنواره‌های علمی و پژوهشی */
const festivalStudents = [
  {
    name: "امیرحسین رضایی",
    grade: "پایه نهم",
    subject: "ریاضی",
    subjectIcon: "fa-solid fa-square-root-variable",
    festival: "جشنواره نوجوان خوارزمی",
    rank: "رتبه ۱ استانی",
  },
  {
    name: "محمدطاها کریمی",
    grade: "پایه هشتم",
    subject: "علوم تجربی",
    subjectIcon: "fa-solid fa-flask",
    festival: "جشنواره جابر بن‌حیان",
    rank: "راه‌یابی به مرحله کشوری",
  },
  {
    name: "علی‌رضا احمدی",
    grade: "پایه نهم",
    subject: "رایانه و برنامه‌نویسی",
    subjectIcon: "fa-solid fa-laptop-code",
    festival: "جشنواره نوجوان خوارزمی",
    rank: "رتبه ۲ منطقه‌ای",
  },
  {
    name: "پارسا موسوی",
    grade: "پایه هفتم",
    subject: "نجوم",
    subjectIcon: "fa-solid fa-satellite",
    festival: "جشنواره فرهنگی‌هنری رویش",
    rank: "پذیرفته‌شده در نمایشگاه استانی",
  },
  {
    name: "کیان صادقی",
    grade: "پایه نهم",
    subject: "ادبیات و انشا",
    subjectIcon: "fa-solid fa-feather",
    festival: "جشنواره نوجوان خوارزمی",
    rank: "رتبه ۳ کشوری",
  },
  {
    name: "سامان قربانی",
    grade: "پایه هشتم",
    subject: "زیست‌شناسی",
    subjectIcon: "fa-solid fa-dna",
    festival: "جشنواره جابر بن‌حیان",
    rank: "رتبه ۱ منطقه‌ای",
  },
];

/* دسته دوم: مسابقات ورزشی و فرهنگی */
const competitionStudents = [
  {
    name: "حسین یوسفی",
    grade: "پایه نهم",
    subject: "شطرنج",
    subjectIcon: "fa-solid fa-chess-knight",
    festival: "مسابقات قهرمانی شطرنج منطقه",
    rank: "مدال طلا",
  },
  {
    name: "ماهان جعفری",
    grade: "پایه هفتم",
    subject: "دو و میدانی",
    subjectIcon: "fa-solid fa-person-running",
    festival: "المپیاد ورزشی دانش‌آموزی",
    rank: "مدال نقره",
  },
  {
    name: "آرمین حسینی",
    grade: "پایه هشتم",
    subject: "فوتسال",
    subjectIcon: "fa-solid fa-futbol",
    festival: "مسابقات فوتسال بین‌مدارس",
    rank: "قهرمانی تیمی",
  },
  {
    name: "رادین محمدی",
    grade: "پایه نهم",
    subject: "قرآن و احکام",
    subjectIcon: "fa-solid fa-book-quran",
    festival: "مسابقات قرآن دانش‌آموزی",
    rank: "مدال طلا",
  },
  {
    name: "دانیال نجفی",
    grade: "پایه هشتم",
    subject: "کاراته",
    subjectIcon: "fa-solid fa-hand-fist",
    festival: "مسابقات قهرمانی کاراته استان",
    rank: "مدال برنز",
  },
  {
    name: "نیما اکبرزاده",
    grade: "پایه هفتم",
    subject: "نقاشی و خوشنویسی",
    subjectIcon: "fa-solid fa-palette",
    festival: "جشنواره هنری دانش‌آموزی",
    rank: "رتبه ۱ منطقه‌ای",
  },
];

/* دسته سوم: قبولی در مدارس برتر */
const admissionStudents = [
  {
    name: "امیرمحمد شریفی",
    grade: "فارغ‌التحصیل پایه نهم",
    subject: "پذیرش تیزهوشان",
    subjectIcon: "fa-solid fa-graduation-cap",
    festival: "دبیرستان جابر ابن حیان",
    rank: "سال تحصیلی ۱۴۰۴",
  },
  {
    name: "بردیا اسماعیلی",
    grade: "فارغ‌التحصیل پایه نهم",
    subject: "پذیرش نمونه دولتی",
    subjectIcon: "fa-solid fa-graduation-cap",
    festival: "دبیرستان نمونه دولتی",
    rank: "سال تحصیلی ۱۴۰۴",
  },
  {
    name: "امیرعلی فرهادی",
    grade: "فارغ‌التحصیل پایه نهم",
    subject: "پذیرش تیزهوشان",
    subjectIcon: "fa-solid fa-graduation-cap",
    festival: "دبیرستان شرکت فرش",
    rank: "سال تحصیلی ۱۴۰۴",
  },
  {
    name: "سینا مرادی",
    grade: "فارغ‌التحصیل پایه نهم",
    subject: "پذیرش نمونه دولتی",
    subjectIcon: "fa-solid fa-graduation-cap",
    festival: "دبیرستان نمونه دولتی",
    rank: "سال تحصیلی ۱۴۰۳",
  },
  {
    name: "یوسف عزیزی",
    grade: "فارغ‌التحصیل پایه نهم",
    subject: "پذیرش تیزهوشان",
    subjectIcon: "fa-solid fa-graduation-cap",
    festival: "دبیرستان جابر ابن حیان",
    rank: "سال تحصیلی ۱۴۰۳",
  },
  {
    name: "علی باقری",
    grade: "فارغ‌التحصیل پایه نهم",
    subject: "پذیرش نمونه دولتی",
    subjectIcon: "fa-solid fa-graduation-cap",
    festival: "دبیرستان شرکت فرش",
    rank: "سال تحصیلی ۱۴۰۳",
  },
];

function getInitials(name) {
  const parts = name.trim().split(" ");
  if (parts.length < 2) return parts[0].slice(0, 2);
  return parts[0][0] + parts[1][0];
}

/* رندر یک گرید از کارت‌های دانش‌آموز */
function renderSpotlightGrid(containerId, list, shape) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  list.forEach((student, index) => {
    const card = document.createElement("div");
    card.className = "spotlight-card";
    card.style.setProperty("--delay", `${(index % 6) * 0.18}s`);

    const color = avatarPalette[index % avatarPalette.length];
    const initials = getInitials(student.name);

    card.innerHTML = `
      <div class="spotlight-avatar-wrap">
        <div class="spotlight-ring ${shape === "hex" ? "ring-hex" : "ring-circle"}"></div>
        <div class="spotlight-avatar ${shape === "hex" ? "avatar-hex" : "avatar-circle"}" style="background:${color}">
          ${initials}
        </div>
        <div class="spotlight-badge">
          <i class="${student.subjectIcon}"></i>
        </div>
      </div>

      <h3 class="spotlight-name">${student.name}</h3>
      <p class="spotlight-grade">${student.grade}</p>

      <div class="spotlight-info">
        <span class="spotlight-subject">${student.subject}</span>
        <p class="spotlight-festival">${student.festival}</p>
      </div>

      <span class="spotlight-rank">
        <i class="fa-solid fa-medal"></i>
        ${student.rank}
      </span>
    `;

    grid.appendChild(card);
  });
}

renderSpotlightGrid("festivalGrid", festivalStudents, "hex");
renderSpotlightGrid("competitionGrid", competitionStudents, "hex");
renderSpotlightGrid("admissionGrid", admissionStudents, "circle");

/* شمارنده آمار بالای صفحه */
function animateCounter(el, target) {
  let current = 0;
  const duration = 1200;
  const stepTime = 16;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString("fa-IR");
  }, stepTime);
}

const statEls = document.querySelectorAll("[data-count]");
if (statEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target, Number(entry.target.dataset.count));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  statEls.forEach((el) => observer.observe(el));
}
