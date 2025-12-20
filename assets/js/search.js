const RM_SEARCH_INDEX = [
  { title:"Joki Bekas Merajai Total", url:"joki-bekas.html" },
  { title:"Anniversary MMFC ke-14", url:"hut-mmfc-14th.html" },
  { title:"Ulasan Reel Shimano Stella", url:"ulasan-reel-stella.html" },
  { title:"Profil Tokoh Komunitas Mancing", url:"profil-angler2.html" }
];

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#searchInput");
  const result = document.querySelector("#searchResult");

  if (!input || !result) return;

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase();
    result.innerHTML = "";

    if (q.length < 2) return;

    RM_SEARCH_INDEX
      .filter(item => item.title.toLowerCase().includes(q))
      .forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        result.appendChild(li);
      });
  });
});
