/* =========================================
   فعالیت‌های مدرسه — داده‌ها و رندر
========================================= */

const activityItems = [
  {
    size: "large",
    tag: "امکانات جدید",
    icon: "fa-solid fa-table-tennis-paddle-ball",
    color: "linear-gradient(160deg,#0F4CDB,#3B82F6)",
    image: (window.STATIC_BASE_URL || "./") + "website/images/activities/a2.jpg",
    title: "میز پینگ‌پنگ به حیاط مدرسه اضافه شد",
    excerpt: "حالا زنگ تفریح یه رقیب جدی داره.",
    body: [
      "با استقبال دانش‌آموزان از ورزش‌های داخل حیاط، یک میز پینگ‌پنگ استاندارد در گوشه‌ی حیاط مدرسه نصب شد.",
      "دانش‌آموزان می‌توانند در زنگ‌های تفریح، با هماهنگی مربی ورزش، از این میز استفاده کنند. به زودی یک مسابقه‌ی دوستانه‌ی پینگ‌پنگ بین کلاس‌ها هم برگزار خواهد شد.",
    ],
  },
  {
    size: "normal",
    tag: "امکانات جدید",
    icon: "fa-solid fa-futbol",
    color: "linear-gradient(160deg,#059669,#10B981)",
    image: (window.STATIC_BASE_URL || "./") + "website/images/activities/a1.jpg",
    title: "میز فوتبال دستی خریداری شد",
    excerpt: "یکی از پرطرفدارترین درخواست‌های دانش‌آموزان بالاخره عملی شد.",
    body: [
      "با توجه به درخواست‌های مکرر دانش‌آموزان، یک دستگاه فوتبال دستی برای سالن مدرسه خریداری و نصب شد.",
      "این امکان در ساعات زنگ تفریح و پس از پایان کلاس‌ها، تحت نظارت مسئول انضباط در دسترس دانش‌آموزان خواهد بود.",
    ],
  },
  {
    size: "normal",
    tag: "زیرساخت",
    icon: "fa-solid fa-seedling",
    color: "linear-gradient(160deg,#65A30D,#84CC16)",
    image: (window.STATIC_BASE_URL || "./") + "website/images/activities/a3.jpg",
    title: "زمین چمن مصنوعی حیاط مدرسه اضافه شد",
    excerpt: "بخشی از حیاط به یک زمین کوچک فوتبال تبدیل شد.",
    body: [
      "بخشی از حیاط پشتی مدرسه با چمن مصنوعی استاندارد پوشانده شد تا فضایی امن‌تر و مناسب‌تر برای فعالیت‌های ورزشی دانش‌آموزان در زنگ‌های تفریح فراهم شود.",
      "این پروژه با هدف کاهش آسیب‌های ورزشی و افزایش نشاط دانش‌آموزان در طول روز تحصیلی انجام شده است.",
    ],
  },
  {
    size: "wide",
    tag: "رویداد",
    icon: "fa-solid fa-chess-knight",
    color: "linear-gradient(120deg,#7C3AED,#A855F7)",
    title: "برگزاری مسابقه شطرنج درون‌مدرسه‌ای",
    excerpt: "با استقبال بیش از ۴۰ دانش‌آموز از پایه‌های مختلف برگزار شد.",
    body: [
      "مسابقه‌ی دوستانه‌ی شطرنج با حضور بیش از ۴۰ دانش‌آموز علاقه‌مند از پایه‌های هفتم تا نهم در سالن اجتماعات مدرسه برگزار شد.",
      "به سه نفر برتر این مسابقه، لوح تقدیر و جوایزی از طرف انجمن اولیا و مربیان مدرسه اهدا خواهد شد.",
    ],
  },
  {
    size: "normal",
    tag: "امکانات جدید",
    icon: "fa-solid fa-book-open-reader",
    color: "linear-gradient(160deg,#DC2626,#F97316)",
    title: "بازگشایی کتابخانه با قفسه‌های تازه",
    excerpt: "بیش از ۲۰۰ عنوان کتاب جدید به کتابخانه مدرسه اضافه شد.",
    body: [
      "کتابخانه‌ی مدرسه با بیش از ۲۰۰ عنوان کتاب جدید در حوزه‌ی داستان، علمی-تخیلی و کمک‌درسی، بازچینی و بازگشایی شد.",
      "دانش‌آموزان می‌توانند در ساعات مشخص‌شده در برنامه‌ی هفتگی، با هماهنگی دبیر ادبیات، از کتابخانه بازدید و کتاب امانت بگیرند.",
    ],
  },
  {
    size: "normal",
    tag: "ورزشی",
    icon: "fa-solid fa-dumbbell",
    color: "linear-gradient(160deg,#0891B2,#06B6D4)",
    title: "تجهیز سالن ورزشی به وسایل بدنسازی سبک",
    excerpt: "چند دستگاه ساده برای گرم‌کردن پیش از کلاس ورزش اضافه شد.",
    body: [
      "به‌منظور بهبود کیفیت کلاس‌های تربیت‌بدنی، چند دستگاه ساده‌ی بدنسازی و گرم‌کردن به سالن ورزشی مدرسه اضافه شد.",
      "استفاده از این وسایل تنها با حضور و نظارت مستقیم دبیر ورزش امکان‌پذیر است.",
    ],
  },
];

const activitiesGrid = document.getElementById("activitiesGrid");

if (activitiesGrid) {
  activityItems.forEach((item) => {
    const tile = document.createElement("div");
    const sizeClass =
      item.size === "large" ? "tile-large" : item.size === "wide" ? "tile-wide" : "";
    const hasImage = Boolean(item.image);
    tile.className = `activity-tile ${sizeClass} ${hasImage ? "has-image" : ""}`;
    tile.style.setProperty("--tile-bg", item.color);

    const photoHtml = hasImage
      ? `<img class="activity-tile-photo" src="${item.image}" alt="${item.title}" loading="lazy" />`
      : "";

    if (item.size === "wide") {
      tile.innerHTML = `
        ${photoHtml}
        <div class="activity-tile-content">
          <span class="activity-tile-tag">${item.tag}</span>
          <p class="activity-tile-title">${item.title}</p>
          <p class="activity-tile-excerpt">${item.excerpt}</p>
        </div>
        <div class="activity-tile-icon">
          <i class="${item.icon}"></i>
        </div>
      `;
    } else {
      tile.innerHTML = `
        ${photoHtml}
        <div class="activity-tile-icon">
          <i class="${item.icon}"></i>
        </div>
        <div class="activity-tile-content">
          <span class="activity-tile-tag">${item.tag}</span>
          <p class="activity-tile-title">${item.title}</p>
          <p class="activity-tile-excerpt">${item.excerpt}</p>
        </div>
      `;
    }

    tile.addEventListener("click", () => openActivityModal(item));
    activitiesGrid.appendChild(tile);
  });
}

const activityModal = document.getElementById("activityModal");
const activityBox = document.getElementById("activityBox");
const activityOverlay = document.getElementById("activityOverlay");
const closeActivityModal = document.getElementById("closeActivityModal");

function openActivityModal(item) {
  const header = document.getElementById("activityModalHeader");
  if (item.image) {
    header.style.background = `linear-gradient(rgba(6,20,45,.4), rgba(6,20,45,.6)), url("${item.image}") center/cover no-repeat`;
  } else {
    header.style.background = item.color;
  }
  document.getElementById("activityModalIcon").innerHTML = `<i class="${item.icon}"></i>`;
  document.getElementById("activityModalTag").textContent = item.tag;
  document.getElementById("activityModalTitle").textContent = item.title;

  const bodyEl = document.getElementById("activityModalBody");
  bodyEl.innerHTML = "";
  item.body.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    bodyEl.appendChild(p);
  });

  activityModal.classList.add("show");
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    activityBox.classList.add("show");
  });
}

function closeActivityModalFn() {
  activityBox.classList.remove("show");
  document.body.style.overflow = "";

  setTimeout(() => {
    activityModal.classList.remove("show");
  }, 250);
}

closeActivityModal?.addEventListener("click", closeActivityModalFn);
activityOverlay?.addEventListener("click", closeActivityModalFn);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && activityModal.classList.contains("show")) {
    closeActivityModalFn();
  }
});
