document.addEventListener('DOMContentLoaded', function() {
    var box = document.getElementById('bellis-box');

    // Sørger for, at boksen starter skjult
    box.classList.add('slide-top');

    // Vent 2 sekunder før den glider ned
    setTimeout(function() {
        box.classList.remove('slide-top');
        box.classList.add('slide-down');
    }, 2000);

    // Luk boksen
    var closeButton = document.getElementById('bellis-close');
    closeButton.addEventListener('click', function() {
        box.classList.remove('slide-down');
        box.classList.add('slide-top');
    });

    // Knapfunktion – sender brugeren videre til dit link
    var actionButton = document.getElementById('bellis-button');
    actionButton.addEventListener('click', function() {
        window.location.href = 'https://storyscaping.shstudio.dk/elementor-615/home/';
    });
});
