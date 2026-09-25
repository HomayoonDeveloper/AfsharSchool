/* =========================================
   کادر فنی و اجرایی — داده‌ها و رندر
========================================= */

const leadershipTeam = [
  {
    rank: "مدیر مدرسه",
    name: "آقای دکتر حمید شریفی",
    role: "مدیریت دبیرستان",
    initials: "ح.ش",
    color: "linear-gradient(135deg,#0F4CDB,#3B82F6)",
    short: "مسئولیت کلی اداره‌ی مدرسه، سیاست‌گذاری آموزشی و ارتباط با آموزش و پرورش منطقه.",
    exp: "۱۶",
    hours: "۷ الی ۱۴",
    contact: "دفتر مدیریت، طبقه اول",
    bio: "به‌عنوان بالاترین مقام اجرایی مدرسه، مسئولیت هماهنگی کلیه بخش‌های آموزشی، اداری و رفاهی را بر عهده دارد. تصمیمات کلان مدرسه، از برنامه‌ریزی سال تحصیلی تا ارتباط با اولیا و آموزش و پرورش منطقه، از طریق ایشان انجام می‌شود.",
    quote: "«مدرسه‌ی خوب جایی‌ست که هم دانش‌آموز، هم معلم و هم خانواده در آن احساس آرامش کنند.»",
  },
  {
    rank: "معاون فنی",
    name: "آقای مهندس محمدرضا کاظمی",
    role: "معاونت فنی و مدیر سایت مدرسه",
    initials: "م.ک",
    color: "linear-gradient(135deg,#7C3AED,#A855F7)",
    short: "مسئول ثبت‌نام دانش‌آموزان، به‌روزرسانی اطلاعات سایت و هماهنگی فنی مدرسه.",
    exp: "۱۴",
    hours: "۸ الی ۱۵",
    contact: "دفتر معاونت فنی",
    bio: "از این سال تحصیلی، مسئولیت کامل مدیریت سایت مدرسه، ثبت‌نام آنلاین دانش‌آموزان، به‌روزرسانی اخبار و تصاویر، و بررسی درخواست‌های ثبت‌نام بر عهده‌ی ایشان است. همچنین هماهنگی فنی میان مدرسه و تیم توسعه‌دهنده‌ی سایت را انجام می‌دهد.",
    quote: "«می‌خوایم فرآیندی که قبلاً با کاغذبازی و رفت‌وآمد انجام می‌شد، حالا با چند کلیک ساده انجام بشه.»",
  },
  {
    rank: "معاون آموزشی",
    name: "آقای علی نوروزی",
    role: "معاونت آموزشی و پرورشی",
    initials: "ع.ن",
    color: "linear-gradient(135deg,#059669,#10B981)",
    short: "برنامه‌ریزی درسی، نظارت بر روند آموزش کلاس‌ها و پیگیری وضعیت تحصیلی دانش‌آموزان.",
    exp: "۱۰",
    hours: "۷:۳۰ الی ۱۴",
    contact: "دفتر معاونت آموزشی",
    bio: "مسئول تنظیم برنامه‌ی هفتگی کلاس‌ها، هماهنگی میان دبیران، برگزاری امتحانات میان‌ترم و پایان‌ترم، و پیگیری وضعیت تحصیلی دانش‌آموزانی است که نیاز به توجه بیشتر دارند.",
    quote: "«هر دانش‌آموز یه سرعت یادگیری خودشو داره؛ کار ما همراهی‌کردنه، نه مقایسه.»",
  },
];

const supportTeam = [
  {
    name: "آقای سعید رحیمی",
    role: "سرپرست نظم و انضباط",
    icon: "fa-solid fa-shield-halved",
    color: "linear-gradient(135deg,#DC2626,#F97316)",
    exp: "۷",
    hours: "۷ الی ۱۴:۳۰",
    contact: "راهرو طبقه همکف",
    bio: "مسئول نظارت بر رعایت قوانین مدرسه، حضور و غیاب دانش‌آموزان در زنگ‌های تفریح، و رسیدگی به مسائل انضباطی در طول روز تحصیلی است.",
    quote: "«نظم خوب باعث می‌شه بچه‌ها با خیال راحت‌تر درس بخونن.»",
  },
  {
    name: "خانم مریم توکلی",
    role: "مسئول دفتر و امور اداری",
    icon: "fa-solid fa-folder-open",
    color: "linear-gradient(135deg,#0891B2,#06B6D4)",
    exp: "۹",
    hours: "۷ الی ۱۴",
    contact: "دفتر اداری، ورودی مدرسه",
    bio: "مسئول ثبت مکاتبات، صدور گواهی‌ها و مدارک دانش‌آموزی، هماهنگی قرارهای ملاقات با مدیریت، و پاسخ‌گویی به مراجعان است.",
    quote: "«هر روز صبح، اولین لبخندی که والدین می‌بینن، از پشت همین میزه.»",
  },
  {
    name: "آقای کریم اکبری",
    role: "خدمات و نگهداری",
    icon: "fa-solid fa-broom",
    color: "linear-gradient(135deg,#65A30D,#84CC16)",
    exp: "۱۲",
    hours: "۶:۳۰ الی ۱۵",
    contact: "کل ساختمان مدرسه",
    bio: "مسئول نظافت روزانه‌ی کلاس‌ها و راهروها، نگهداری از فضای سبز حیاط مدرسه و رفع نیازهای جزئی تعمیراتی ساختمان است.",
    quote: "«مدرسه‌ی تمیز یعنی احترام به دانش‌آموز.»",
  },
  {
    name: "خانم زهرا قاسمی",
    role: "مسئول بوفه مدرسه",
    icon: "fa-solid fa-mug-saucer",
    color: "linear-gradient(135deg,#EA580C,#FB923C)",
    exp: "۶",
    hours: "۷:۳۰ الی ۱۳",
    contact: "بوفه، حیاط مدرسه",
    bio: "مسئول تهیه و عرضه‌ی مواد غذایی سالم در زنگ‌های تفریح، با رعایت اصول بهداشتی و توجه ویژه به سلامت تغذیه‌ی دانش‌آموزان.",
    quote: "«سعی می‌کنم چیزی بفروشم که دوست دارم بچه‌ی خودم هم بخوره.»",
  },
];

/* رندر کارت‌های هیئت مدیریت */
const leadershipGrid = document.getElementById("leadershipGrid");

if (leadershipGrid) {
  leadershipTeam.forEach((member) => {
    const card = document.createElement("div");
    card.className = "leader-card";
    card.innerHTML = `
      <span class="leader-rank">${member.rank}</span>
      <div class="leader-avatar" style="background:${member.color}">
        ${member.initials}
      </div>
      <h3 class="leader-name">${member.name}</h3>
      <p class="leader-role">${member.role}</p>
      <p class="leader-desc">${member.short}</p>
      <span class="leader-more">
        مشاهده جزئیات
        <i class="fa-solid fa-arrow-left"></i>
      </span>
    `;
    card.addEventListener("click", () => openStaffModal(member, member.initials));
    leadershipGrid.appendChild(card);
  });
}

/* رندر کارت‌های تیم پشتیبانی */
const supportGrid = document.getElementById("supportGrid");

if (supportGrid) {
  supportTeam.forEach((member) => {
    const card = document.createElement("div");
    card.className = "support-card";
    card.innerHTML = `
      <div class="support-icon" style="background:${member.color}">
        <i class="${member.icon}"></i>
      </div>
      <p class="support-name">${member.name}</p>
      <p class="support-role">${member.role}</p>
    `;
    card.addEventListener("click", () =>
      openStaffModal(member, null, member.icon)
    );
    supportGrid.appendChild(card);
  });
}

/* مودال جزئیات */
const staffModal = document.getElementById("staffModal");
const staffBox = document.getElementById("staffBox");
const staffOverlay = document.getElementById("staffOverlay");
const closeStaffModal = document.getElementById("closeStaffModal");
const staffModalAvatar = document.getElementById("staffModalAvatar");

function openStaffModal(member, initials, icon) {
  if (initials) {
    staffModalAvatar.textContent = initials;
    staffModalAvatar.innerHTML = initials;
  } else if (icon) {
    staffModalAvatar.innerHTML = `<i class="${icon}"></i>`;
  }

  staffModalAvatar.style.background = member.color;

  document.getElementById("staffModalName").textContent = member.name;
  document.getElementById("staffModalRole").textContent = member.role;
  document.getElementById("staffModalExp").textContent = member.exp;
  document.getElementById("staffModalHours").textContent = member.hours;
  document.getElementById("staffModalContact").textContent = member.contact;
  document.getElementById("staffModalBio").textContent = member.bio;
  document.getElementById("staffModalQuote").textContent = member.quote;

  staffModal.classList.add("show");
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    staffBox.classList.add("show");
  });
}

function closeStaffModalFn() {
  staffBox.classList.remove("show");
  document.body.style.overflow = "";

  setTimeout(() => {
    staffModal.classList.remove("show");
  }, 250);
}

closeStaffModal?.addEventListener("click", closeStaffModalFn);
staffOverlay?.addEventListener("click", closeStaffModalFn);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && staffModal.classList.contains("show")) {
    closeStaffModalFn();
  }
});
