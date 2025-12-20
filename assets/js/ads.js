document.addEventListener("DOMContentLoaded", () => {
  const ads = document.querySelectorAll(".ad-inner");

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ad-loaded");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "200px" });

  ads.forEach(ad => observer.observe(ad));
});
