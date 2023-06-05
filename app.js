const liste = document.getElementById("liste");
const txtArea = document.getElementById("txtArea");
const isaret = document.querySelector('.isaret');

txtArea.addEventListener('keydown', () => {
    isaret.classList.add('kirmizi');
})

    

txtArea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    isaret.classList.remove('kirmizi');
    isaret.classList.add('yesil');
    createTags(e.target.value);
    setTimeout(() => {
        e.target.value = "";
    }, 100);

    secenekBul();
  }
});

function createTags(e) {
  const yapilacaklar = e.split(",");
  yapilacaklar
    .filter((tag) => tag.trim() !== "")
    .map((tag) => {
      liste.innerHTML += `<li class="secenek" > ${tag} </li>`;
    });
}


function tagBul() {
  const tags = document.querySelectorAll(".secenek");
  const tag = tags[Math.floor(Math.random() * tags.length)];
  return tag;
}

function secenekBul() {
  const times = 30;
  const interval = setInterval(() => {
    const tag = tagBul();
    activeEkle(tag);

    setTimeout(() => {
      activeSil(tag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    
    setTimeout(() => {
      const tag = tagBul();
      activeEkle(tag);
      isaret.setAttribute('class', 'isaret');
    }, 100);
  }, times * 100);
}

function activeEkle(tag) {
  tag.classList.add("active");
}

function activeSil(tag) {
  tag.classList.remove("active");
}
