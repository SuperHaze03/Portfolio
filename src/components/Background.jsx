import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 400;
    const particlesCount = 60;
    const maxDistance = 120; // jarak maksimum untuk menghubungkan garis
    let animationFrameId;

    // Buat array partikel
    const particles = [];

    // Inisialisasi partikel dengan posisi dan kecepatan acak
    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: 3 + Math.random() * 3,
      });
    }

    // Fungsi untuk menggambar garis antara dua titik
    function drawLine(p1, p2, opacity) {
      ctx.strokeStyle = `rgba(0, 150, 255, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    // Fungsi render animasi
    function render() {
      ctx.clearRect(0, 0, width, height);

      // Update posisi partikel dan gambar lingkaran
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Jika partikel keluar dari canvas, balik arah
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Gambar partikel
        ctx.fillStyle = "rgba(0, 150, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Gambar garis antar partikel jika jarak dekat
      for (let i = 0; i < particlesCount; i++) {
        for (let j = i + 1; j < particlesCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            let opacity = 1 - dist / maxDistance;
            drawLine(particles[i], particles[j], opacity);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    // Resize canvas jika window diresize
    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 400;
    }
    window.addEventListener("resize", handleResize);

    // Cleanup saat unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "1000px",
      zIndex: 0, 
        pointerEvents: "none",
      }}
    />
  );
};

export default Background;
