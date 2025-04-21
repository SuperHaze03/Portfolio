// src/components/Contact.jsx
import React from 'react';
import "./footer.css";
const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-section">
            <h3>Kontak Kami</h3>
            <p><i class="fas fa-map-marker-alt"></i> Jl. Contoh No. 123</p>
            <p><i class="fas fa-phone"></i> 021-1234567</p>
            <p><i class="fas fa-envelope"></i> info@contoh.com</p>
        </div>
        <div class="footer-section">
            <h3>Tautan Cepat</h3>
            <ul>
                <li><a href="/tentang-kami">Tentang Kami</a></li>
                <li><a href="/layanan">Layanan</a></li>
                <li><a href="/portofolio">Portofolio</a></li>
                <li><a href="/kontak">Kontak</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Ikuti Kami</h3>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="newsletter">
                <h3>Langganan Buletin</h3>
                <form>
                    <input type="email" placeholder="Masukkan email Anda" />
                    <button type="submit">Kirim</button>
                </form>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2023 Contoh.com. Semua hak cipta dilindungi.</p>
    </div>
</footer>
  );
};

export default Footer;  // Pastikan ada export default di sini
