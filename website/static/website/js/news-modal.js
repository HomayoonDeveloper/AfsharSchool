/* =========================================
   مودال نمایش کامل خبر (مشترک بین صفحه اصلی و news.html)
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("newsDetailModal");
  const box = document.getElementById("newsDetailBox");
  const overlay = document.getElementById("newsDetailOverlay");
  const closeBtn = document.getElementById("closeNewsDetailModal");

  if (!modal || !box) return;

  const titleEl = document.getElementById("newsDetailTitle");
  const dateEl = document.getElementById("newsDetailDate").querySelector("span");
  const bodyEl = document.getElementById("newsDetailBody");
  const imageWrap = document.getElementById("newsDetailImageWrap");
  const imageEl = document.getElementById("newsDetailImage");

  function openNewsDetail(card) {
    const title = card.dataset.newsTitle || "";
    const date = card.dataset.newsDate || "";
    const image = card.dataset.newsImage || "";
    const fullContentEl = card.querySelector(".news-full-content");

    titleEl.textContent = title;
    dateEl.textContent = date;
    bodyEl.innerHTML = fullContentEl ? fullContentEl.innerHTML : "";

    if (image) {
      imageEl.src = image;
      imageEl.alt = title;
      imageWrap.classList.remove("hidden");
    } else {
      imageWrap.classList.add("hidden");
      imageEl.src = "";
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      box.classList.remove("scale-95", "opacity-0");
      box.classList.add("scale-100", "opacity-100");
    });
  }

  function closeNewsDetail() {
    box.classList.remove("scale-100", "opacity-100");
    box.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }, 250);
  }

  document.querySelectorAll(".news-card").forEach((card) => {
    const trigger = card.querySelector(".news-card-more");
    trigger?.addEventListener("click", () => openNewsDetail(card));
  });

  closeBtn?.addEventListener("click", closeNewsDetail);
  overlay?.addEventListener("click", closeNewsDetail);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("flex")) {
      closeNewsDetail();
    }
  });
});
