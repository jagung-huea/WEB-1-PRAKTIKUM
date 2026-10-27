var tombol = document.getElementById("tombolAtas");

window.onscroll = function () {
    munculkanTombol();
};

function munculkanTombol() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        tombol.style.display = "block";
    } else {
        tombol.style.display = "none";
    }
}

function kembaliKeAtas() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}