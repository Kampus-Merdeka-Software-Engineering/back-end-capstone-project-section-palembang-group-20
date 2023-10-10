document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (e) {
        e.preventDefault();

      // Ambil nilai biaya pengiriman dan metode pembayaran dari formulir
        const biaya = document.querySelector('#biaya').value;
        const metode = document.querySelector('#bayar').value;

      // Lakukan validasi di sini jika diperlukan

      // Tampilkan notifikasi pembayaran berhasil
        showNotification(`Pembayaran berhasil!\nBiaya: ${biaya}\nMetode: ${metode}`);
    });

    function showNotification(message) {
      // Gunakan pustaka notifikasi seperti SweetAlert atau Toastify
      // Contoh dengan SweetAlert
        Swal.fire({
        icon: 'success',
        title: 'Pembayaran Berhasil',
        text: message,
        });
    }
});