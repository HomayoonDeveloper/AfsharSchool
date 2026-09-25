/* =========================================
   پیش‌نمایش اخبار در صفحه اصلی
   (از داده‌های news-data.js استفاده می‌کند)
========================================= */

const homeNewsList = document.getElementById("homeNewsList");

if (homeNewsList && typeof newsItems !== "undefined") {
  newsItems.slice(0, 3).forEach((item) => {
    const card = document.createElement("article");
    card.className = "news-card reveal reveal-up";
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
    card.addEventListener("click", () => {
      window.location.href = "news.html";
    });
    homeNewsList.appendChild(card);
  });
}
