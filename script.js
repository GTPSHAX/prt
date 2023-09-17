// Fungsi untuk menampilkan konten halaman yang sesuai
function showContent(targetId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    const targetContent = document.getElementById(targetId);
    targetContent.style.display = 'block';
}

// Fungsi untuk menambahkan kelas "active" pada tautan yang aktif
function setActiveLink(targetId) {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === targetId) {
            link.classList.add('active');
        }
    });
}

// Tambahkan event listener pada setiap tautan navigasi
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Mencegah tindakan bawaan tautan
            const targetId = event.target.getAttribute('data-target');
            showContent(targetId);
            setActiveLink(targetId);
        });
    });

    // Secara default, tampilkan halaman Home saat halaman dimuat
    showContent('home');
    setActiveLink('home');
});
