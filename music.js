const music = document.getElementById("bgMusic");

/* =========================
   LOAD HALAMAN
========================= */

window.addEventListener("load", () => {

    const savedTime = localStorage.getItem("musicTime");
    const isPlaying = localStorage.getItem("musicPlaying");

    if(savedTime){

        music.currentTime = parseFloat(savedTime);

    }

    if(isPlaying === "true"){

        music.play().catch(() => {

            console.log("Autoplay diblokir");

        });

    }

});


/* =========================
   BACK / FORWARD
========================= */

window.addEventListener("pageshow", () => {

    const savedTime = localStorage.getItem("musicTime");
    const isPlaying = localStorage.getItem("musicPlaying");

    if(savedTime){

        music.currentTime = parseFloat(savedTime);

    }

    if(isPlaying === "true"){

        music.play().catch(() => {

            console.log("Autoplay diblokir");

        });

    }

});


/* =========================
   SIMPAN WAKTU
========================= */

music.addEventListener("timeupdate", () => {

    localStorage.setItem(
        "musicTime",
        music.currentTime
    );

});


/* =========================
   STATUS PLAY
========================= */

music.addEventListener("play", () => {

    localStorage.setItem(
        "musicPlaying",
        "true"
    );

});


/* =========================
   STATUS PAUSE
========================= */

music.addEventListener("pause", () => {

    localStorage.setItem(
        "musicPlaying",
        "false"
    );

});


/* =========================
   SEBELUM PINDAH HALAMAN
========================= */

window.addEventListener("beforeunload", () => {

    localStorage.setItem(
        "musicTime",
        music.currentTime
    );

});