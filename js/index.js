document.addEventListener("DOMContentLoaded", function () {
  // Scroll halus saat klik tautan
  document.querySelectorAll(".scroll-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah perilaku default tautan

      // Mendapatkan target elemen dari atribut data-target
      const targetId = this.getAttribute("data-target");
      const targetElement = document.querySelector(targetId);

      // Scroll halus ke target elemen
      if (targetElement) {
        window.scroll({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }

      // Update URL dengan hash untuk menunjukkan bagian yang sedang ditampilkan
      history.pushState(null, null, targetId);
    });
  });

  // Mengatur posisi saat halaman dimuat
  window.addEventListener("load", function () {
    // Mengatur posisi scroll ke bagian atas saat halaman dimuat ulang
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  });

  // Memastikan bahwa ketika pengguna kembali ke halaman (menggunakan tombol kembali), halaman tetap di atas
  window.addEventListener("popstate", function () {
    window.scrollTo(0, 0);
  });
});
