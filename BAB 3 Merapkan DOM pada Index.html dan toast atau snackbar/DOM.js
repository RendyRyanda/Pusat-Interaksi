// Mengubah teks pada elemen <h2> Layanan Interaksi
const layananInteraksiTitle = document.querySelector('.layanan-interaksi h2');
layananInteraksiTitle.textContent = 'Layanan Interaktif';

// Menambahkan event click pada layanan-item
const layananItems = document.querySelectorAll('.layanan-item');
layananItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`Anda memilih: ${item.querySelector('p').textContent}`);
    });
});

// Mengubah gaya tombol login
const loginBtn = document.querySelector('.login-btn');
loginBtn.style.backgroundColor = '#4CAF50';
loginBtn.style.color = '#fff';
loginBtn.textContent = 'Masuk Sekarang';

// Menambahkan elemen baru ke dalam daftar layanan
const newLayanan = document.createElement('div');
newLayanan.classList.add('layanan-item');
newLayanan.innerHTML = `
    <img src="assets/new_service_icon.png" alt="Layanan Baru" class="layanan-icon">
    <p>Layanan Baru</p>
`;
document.querySelector('.layanan').appendChild(newLayanan);
