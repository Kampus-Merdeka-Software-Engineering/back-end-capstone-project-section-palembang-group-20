document.addEventListener("DOMContentLoaded", function () {
    // Temukan elemen formulir dan tambahkan event listener pada saat formulir disubmit
    const form = document.getElementById("cek-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Menghentikan pengiriman formulir ke server

        // Ambil nilai berat dan jarak dari input
        const berat = parseFloat(document.getElementById("berat").value);
        const jarak = parseFloat(document.getElementById("jarak").value);

        // Lakukan pengecekan berdasarkan pernyataan
        let harga = 0;
        if (berat === 1 && jarak >= 10 && jarak <= 50) {
            harga = 6000;
        } else if (berat === 2 && jarak >= 10 && jarak <= 50) {
            harga = 12000;
        } else if (berat === 3 && jarak >= 10 && jarak <= 50) {
            harga = 18000;
        }
        // Tampilkan notifikasi berdasarkan hasil pernyataan
        if (harga > 0) {
            alert(`Biaya Pengiriman: Rp. ${harga}`);
        } else {
            alert("Tidak ada informasi biaya pengiriman yang cocok.");
        }
    });
});