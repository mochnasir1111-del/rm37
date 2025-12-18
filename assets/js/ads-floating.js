document.addEventListener("DOMContentLoaded", function () {
  const ad = document.getElementById("floatingAd");
  const closeBtn = document.getElementById("closeAd");

  // tombol close
  closeBtn.addEventListener("click", function () {
    ad.style.display = "none";
  });
});
