document.addEventListener("DOMContentLoaded", function () {
    // Funzione per inizializzare tutti i caroselli
    function initCarousels() {
        const carousels = document.querySelectorAll('.carousel');

        carousels.forEach(carousel => {
            const images = carousel.querySelectorAll('img');
            const prevButton = carousel.querySelector('.prev');
            const nextButton = carousel.querySelector('.next');
            let currentIndex = 0;

            // Mostra l'immagine corrente
            function showImage(index) {
                images.forEach((img, i) => {
                    img.classList.toggle('active', i === index);
                });
            }

            // Eventi per i pulsanti del carosello
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });

            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });

            // Mostra la prima immagine all'avvio
            showImage(currentIndex);
        });
    }

    // Inizializza tutti i caroselli nella pagina
    initCarousels();




    // Funzione per aggiornare la navbar
    function updateNavbar() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navbar a");

        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute("href") === "#" + currentSection);
        });
    }

    // Scroll Smooth per i Link Navbar
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Eventi per lo Scroll
    window.addEventListener("scroll", updateNavbar);
    updateNavbar(); // Esegui la funzione all'avvio
});
