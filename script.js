document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // ボタンの active クラス切り替え
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // コンテンツ切り替え
      const target = button.dataset.tab;
      tabContents.forEach(content => {
        content.classList.toggle("active", content.id === target);
      });
    });
  });
});
