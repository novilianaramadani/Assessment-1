let buku = [
    {nama: 'sherlock', jumlah: 2},
    {nama: 'lupin', jumlah: 2},
    {nama: 'aladin', jumlah: 2},
];

function cekPeminjaman() {
    let jumlah = parseInt(document, getElementById('jumlah').value);
    let bukuTerpilih = document.getElementById('buku').value;

    if (jumlah === 0 || isNaN(jumlah)) {
        alert('Masukkan jumlah buku yang valid.');
    } else {
        let bukuDitemukan = false;
        for (let i = 0; i < buku.length; i++) {
            if (buku[i].nama === bukuTerpilih) {
                bukuDitemukan = true;
                if (jumlah > buku[i].jumlah) {
                    alert("Jumlah buku tidak tersedia.");
                } else {
                    alert("Silahkan ambil buku anda.");
                }
                break;
            }
        }
        if (!bukuDitemukan) {
            alert("Buku tidak ditemukan");
        }
    }
}
