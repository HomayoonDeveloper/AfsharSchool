/* =========================================
   اخبار مدرسه — رندر و مودال
   (داده‌ها در فایل news-data.js قرار دارند)
========================================= */


const newsList = document.getElementById("newsList");

if (newsList) {
  newsItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.style.setProperty("--accent", item.color);
    card.innerHTML = `
      <div class="news-date-badge">
        <span class="day">${item.day}</span>
        <span class="month">${item.month}</span>
      </div>

      <div class="news-body">
        <span class="news-category">
          <i class="${item.icon}"></i>
          ${item.category}
        </span>
        <h3 class="news-title">${item.title}</h3>
        <p class="news-excerpt">${item.excerpt}</p>
      </div>

      <div class="news-arrow">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
    `;
    card.addEventListener("click", () => openNewsModal(item));
    newsList.appendChild(card);
  });
}

const newsModal = document.getElementById("newsModal");
const newsBox = document.getElementById("newsBox");
const newsOverlay = document.getElementById("newsOverlay");
const closeNewsModal = document.getElementById("closeNewsModal");

function openNewsModal(item) {
  document.getElementById("newsModalHeader").style.background = item.color;
  document.getElementById("newsModalIcon").innerHTML = `<i class="${item.icon}"></i>`;
  document.getElementById("newsModalDate").textContent = `${item.day} ${item.month}`;
  document.getElementById("newsModalCategory").textContent = item.category;
  document.getElementById("newsModalTitle").textContent = item.title;

  const bodyEl = document.getElementById("newsModalBody");
  bodyEl.innerHTML = "";
  item.body.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    bodyEl.appendChild(p);
  });

  newsModal.classList.add("show");
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    newsBox.classList.add("show");
  });
}

function closeNewsModalFn() {
  newsBox.classList.remove("show");
  document.body.style.overflow = "";

  setTimeout(() => {
    newsModal.classList.remove("show");
  }, 250);
}

closeNewsModal?.addEventListener("click", closeNewsModalFn);
newsOverlay?.addEventListener("click", closeNewsModalFn);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && newsModal.classList.contains("show")) {
    closeNewsModalFn();
  }
});
