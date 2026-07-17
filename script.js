const isiSurat = `

sayangggggkuuuuu cintaaakuu cantikkuuuuu maaapppp yaaaa dedewwww ajaaayyy salaaaaa camaaaa sayangggggg ajaaayyyy mintaaaa maapppp yaaa  sayangggggg maaapiiinnnn ajaaayyyyyy tidaaaa sadaarrr kaloooo ajaaayyy salaaaa ajaayyyyy ngertiiii sayanggggg kalooo haallll haallll keciiillll punnn bisaaaaa jadiiiii beteeee keee dedeee nyaaaa ajaayyy salaaaaaa dedewwwww ajaaayyyy salaaaaa camaaaaa dedewwww sudaaaaa bikiinnnn dedewwww kecewaaaa terusssss maraaaa bahkaannnn keseellll tiaapppp hariiii camaaaa sifaaattt ajaayyyy maaapppp bangeetttt sayaanggg maaappppp yaaaa sayangggkuuuu ajaaayyyy sayangggg camaaa dedeewwww maaapppp yaaaa ajaaayyyy salaaaaa bangeetttt camaaaa dedeewwwww ajaaayyyy perbaikiiinnn lagiiiii yangggg kurangggg dariiiii ajaaayyyy makaaciiiii yayangggggkuuuuuu ajaaayyyy beneerrr beneerrr bersyukuuurrrrr punyaaaa dedeewww 


maaapppp yaaaa sekaliiiii lagiiiii sayanggggg loveeee youuuu sayanggggggg 💗💗💗💗💗

`;

function sembunyikanSemua() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });
}

function bukaPesan() {
    sembunyikanSemua();
    document.getElementById("page2").classList.remove("hidden");

    const musik = document.getElementById("musik");
    if (musik) {
        musik.play().catch(() => {});
    }

    ketikSurat();
}

function akhirPage() {
    sembunyikanSemua();
    document.getElementById("page4").classList.remove("hidden");
}

function maafin() {
    sembunyikanSemua();
    document.getElementById("page5").classList.remove("hidden");

    alert("❤️ Terima kasih Rika ❤️");
}

let indexHuruf = 0;

function ketikSurat() {
    const target = document.getElementById("typing");

    target.innerHTML = "";
    indexHuruf = 0;

    function tulis() {
        if (indexHuruf < isiSurat.length) {
            target.innerHTML += isiSurat.charAt(indexHuruf);
            indexHuruf++;
            setTimeout(tulis, 40);
        }
    }

    tulis();
}

function kabur() {
    const btn = document.getElementById("noBtn");

    const maxX = window.innerWidth - btn.offsetWidth - 30;
    const maxY = window.innerHeight - btn.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// Agar tombol "Tidak" juga kabur saat disentuh di HP
document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");

    if (noBtn) {
        noBtn.addEventListener("touchstart", function(e) {
            e.preventDefault();
            kabur();
        });
    }
});