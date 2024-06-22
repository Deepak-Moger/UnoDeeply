document.addEventListener('DOMContentLoaded', function() {
    const treeMascot = document.getElementById('tree-mascot');
    const mascotPopup = document.getElementById('mascot-popup');
    const closePopup = document.getElementById('close-popup');
    
    treeMascot.addEventListener('click', function() {
        mascotPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        mascotPopup.style.display = 'none';
    });

    // Close popup when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == mascotPopup) {
            mascotPopup.style.display = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});