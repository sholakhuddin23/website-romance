const loveBtn = document.getElementById("loveBtn");

loveBtn.addEventListener("click", function () {

  // Animasi kecil sebelum pindah halaman
  document.body.style.transition = "1s";
  document.body.style.opacity = "0";

  setTimeout(() => {

    // Ganti dengan nama html tujuan kamu
    window.location.href = "../kedua/kedua.html";

  }, 1000);

});

const music = document.getElementById("bg-music");

// Ambil posisi terakhir lagu
window.addEventListener("load", () => {
    const musicTime = localStorage.getItem("music-time");

    if (musicTime) {
        music.currentTime = musicTime;
    }

    // Autoplay
    music.play().catch(() => {
        console.log("Autoplay diblokir browser");
    });
});

// Simpan posisi lagu setiap detik
setInterval(() => {
    localStorage.setItem("music-time", music.currentTime);
}, 1000);