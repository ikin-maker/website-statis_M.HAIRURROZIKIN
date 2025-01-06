
document.addEventListener('DOMContentLoaded', () => {
    
    const content = document.getElementById('content');
  
    
    document.getElementById('beranda').addEventListener('click', () => {
      content.innerHTML = `
        <section>
          <h1>Halaman web statis saya </h1>
          <p>Ini adalah halaman beranda saya. Klik menu di atas untuk melihat lebih banyak.</p>
        </section>
      `;
    });
  
    document.getElementById('photo').addEventListener('click', () => {
      content.innerHTML = `
        <section>
          <h1>Photo</h1>
          <p>Berikut adalah beberapa foto saya:</p>
          <div class="photos">
            <img src="jaket putih.jpg" alt="Photo 1">
            <img src="ijo.jpeg" alt="Photo 2">
            <img src="kin.jpeg" alt="Photo 3">
          </div>
        </section>
      `;
    });
  
    document.getElementById('kontak').addEventListener('click', () => {
      content.innerHTML = `
        <section>
          <h1>Kontak Saya</h1>
          <p>Jika ingin menghubungi saya, silakan melalui:</p>
          <ul>
            <li><strong>no WHatsAPP:</strong> +62 087858328027</li>
            <li><strong>Phone:</strong> +62 081915966658</li>
          </ul>
        </section>
      `;
    });
  });