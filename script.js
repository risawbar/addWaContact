

const nomor = document.getElementById('nomor');
const tombol = document.getElementById('tambah');
const wa = "wa.me/+62";

tombol.addEventListener('click', function() {
    let baru = nomor.value.slice(1, nomor.value.length);
    return window.location.href = 'https://' + wa + baru;
});