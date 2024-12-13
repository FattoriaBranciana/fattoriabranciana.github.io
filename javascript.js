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
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active"); // Aggiungi la classe active
        } else {
            link.classList.remove("active"); // Rimuovi la classe active
        }
    });
}

// Aggiungi un listener per lo scroll
window.addEventListener("scroll", updateNavbar);

// Esegui la funzione anche al caricamento della pagina per gestire il caso in cui la pagina venga caricata direttamente in una sezione
document.addEventListener("DOMContentLoaded", updateNavbar);

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('navbar a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 10) {
                currentSection = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previene il comportamento predefinito

        // Ottieni la sezione target dall'attributo href
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Verifica se il target esiste
        if (targetSection) {
            // Scroll animato verso la sezione
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' // Scroll fluido
            });
        }
    });
});

// Aggiungi un listener per lo scroll
window.addEventListener("scroll", updateNavbar);

// Esegui la funzione anche al caricamento della pagina per gestire il caso in cui la pagina venga caricata direttamente in una sezione
document.addEventListener("DOMContentLoaded", updateNavbar);

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('navbar a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 10) {
                currentSection = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});