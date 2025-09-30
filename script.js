// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                menu.classList.remove('active');
            }
        });
    });

    // Form Submission
    const form = document.getElementById('formContato');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado pela mensagem! Entraremos em contato em breve.');
            form.reset();
        });
    }

    // Mapa
    if (document.getElementById('map')) {
        const map = L.map('map').setView([-23.305, -47.065], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([-23.305, -47.065])
            .addTo(map)
            .bindPopup('JSP Lavadoras<br>R. Francisco Nunes, 592')
            .openPopup();
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0,123,255,0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#007bff';
            header.style.backdropFilter = 'none';
        }
    });
});