const typing = document.getElementById("typing");
const text = typing.dataset.text;
let index = 0;

function typeEffect() {

    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}

// MULAI EFEK MENGETIK

typeEffect();

// LOVE BERTERBANGAN

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 30 + 20 + "px";

    heart.style.animationDuration = Math.random() * 4 + 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 250);

// Tmbol Tidak Bergerak
const tidakBtn = document.getElementById("tidakBtn");

/*Fungsi Pindah Tombol */
function pindahTombol() {

    /* Ubah Posisi Ketika di sentuh */
    tidakBtn.style.position = "fixed";

    /* Batas Layar */
    const maxX = window.innerWidth - tidakBtn.offsetWidth - 20;
    const maxY = window.innerHeight - tidakBtn.offsetHeight - 20;

    /* Posisi Random */
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    /* Tombol Tetap Terlihat Di Layar */
    tidakBtn.style.left = `${x}px`;
    tidakBtn.style.top = `${y}px`;
}

/* Dekstop: mouse mendekat */
tidakBtn.addEventListener("mouseover", pindahTombol);

/* HP Saat Di Sentuh */
tidakBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    pindahTombol();
});

/* Kalau Sempat Di Klik */
tidakBtn.addEventListener("click", function (e) {
    e.preventDefault();
    pindahTombol();
});