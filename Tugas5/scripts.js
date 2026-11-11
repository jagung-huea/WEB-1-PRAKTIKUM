var prd = [
    { id: 1, nama: "Mouse", harga: 100000, stok: 5 },
    { id: 2, nama: "Keyboard", harga: 250000, stok: 3 },
    { id: 3, nama: "Headset", harga: 150000, stok: 4 },
    { id: 4, nama: "Flashdisk", harga: 80000, stok: 6 },
    { id: 5, nama: "Webcam", harga: 200000, stok: 2 },
    { id: 6, nama: "Mousepad", harga: 50000, stok: 1 }
];

var jml = 0;
var tot = 0;
var no = 0;

function tampil() {
    var wadah = document.getElementById("list-prd");

    for (var i = 0; i < prd.length; i++) {
        var kotak = document.createElement("div");
        kotak.id = "prd-" + i;
        kotak.className = "item-prd";

        var nm = document.createElement("h3");
        nm.appendChild(document.createTextNode(prd[i].nama));

        var hrg = document.createElement("p");
        hrg.appendChild(document.createTextNode("Harga: Rp " + prd[i].harga));

        var stk = document.createElement("p");
        stk.id = "stk-" + i;
        stk.appendChild(document.createTextNode("Stok: " + prd[i].stok));

        var btn = document.createElement("button");
        btn.type = "button";
        btn.setAttribute("onclick", "tmb(" + i + ")");
        btn.appendChild(document.createTextNode("Tambah ke Keranjang"));

        kotak.appendChild(nm);
        kotak.appendChild(hrg);
        kotak.appendChild(stk);
        kotak.appendChild(btn);

        wadah.appendChild(kotak);
    }
}

function tmb(i) {
    if (prd[i].stok <= 0) {
        alert("Stok produk habis!");
        return;
    }

    prd[i].stok = prd[i].stok - 1;
    $("#stk-" + i).text("Stok: " + prd[i].stok);

    jml = jml + 1;
    tot = tot + prd[i].harga;
    no = no + 1;

    var btnHps = '<button type="button" onclick="hps(' + no + ', ' + i + ')">Hapus</button>';
    var item = '<li id="krj-' + no + '">' + prd[i].nama + ' - Rp ' + prd[i].harga + ' ' + btnHps + '</li>';

    $("#list-krj").append(item);
    $("#krj-" + no).hide();
    $("#krj-" + no).fadeIn();

    $("#jml-item").text(jml);
    $("#tot-hrg").text(tot);
}

function hps(n, i) {
    if (confirm("Hapus item ini?")) {
        prd[i].stok = prd[i].stok + 1;
        $("#stk-" + i).text("Stok: " + prd[i].stok);

        jml = jml - 1;
        tot = tot - prd[i].harga;
        $("#jml-item").text(jml);
        $("#tot-hrg").text(tot);

        $("#krj-" + n).fadeOut(function () {
            $("#krj-" + n).remove();
        });
    }
}

$(document).ready(function () {
    tampil();

    $("#btn-kosong").click(function () {
        if (jml == 0) {
            alert("Keranjang masih kosong!");
            return;
        }

        if (confirm("Yakin kosongkan keranjang?")) {
            $("#list-krj").empty();
            jml = 0;
            tot = 0;
            $("#jml-item").text(0);
            $("#tot-hrg").text(0);
        }
    });

    $("#btn-tgl").click(function () {
        $("#panel-krj").animate({ height: "toggle" });
    });

    $("#cari").keyup(function () {
        var kata = $("#cari").val().toLowerCase();
        for (var i = 0; i < prd.length; i++) {
            var nama = prd[i].nama.toLowerCase();
            var cocok = nama.includes(kata);
            $("#prd-" + i).toggle(cocok);
        }
    });

    $("#btn-co").click(function () {
        if (jml == 0) {
            alert("Keranjang masih kosong!");
            return;
        }

        var nama = prompt("Masukkan nama pembeli:");
        if (nama == "" || nama == null) {
            return;
        }

        $("#res-nama").text(nama);
        $("#res-item").empty();
        $("#res-item").append($("#list-krj").html());
        $("#res-item button").remove();
        $("#res-total").text(tot);

        $("#list-krj").empty();
        jml = 0;
        tot = 0;
        $("#jml-item").text(0);
        $("#tot-hrg").text(0);
    });
});
