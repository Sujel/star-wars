// JavaScript (script.js)

// Fonction pour changer la couleur de fond au survol des éléments de la navigation
function changeColorOnHover() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ffc107';
            this.style.transition = 'background-color 0.3s ease';
        });

        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transition = 'background-color 0.3s ease';
        });
    });
}

// Ajout de l'animation de défilement pour les divs de film spécifiques
document.addEventListener('scroll', () => {
    const movie = document.querySelectorAll('.movie.movie2, .movie.movie3, .movie.movie4, .movie.movie5');
    movie.forEach(movie => {
        const moviePosition = movie.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Modifiez la valeur pour ajuster le moment de l'animation
        if (moviePosition < screenPosition) {
            movie.style.opacity = 1;
            movie.style.transform = 'translateY(0)';
        }
    });
});

