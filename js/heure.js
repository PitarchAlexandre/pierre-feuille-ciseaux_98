/**
 * Permet d'afficher l'heure
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-18
 */

'use strict';

//appel la function qui fait fonctionner l'horloge
function horlogeFun() {

//Va chercher l'élément HTML 'horloge'
    let horloge = document.getElementById('horloge');

//Déclaration de la variable temps qui permet stocker l'année, la date, l'heure, minute et miliseconde ACTUELLE.
//Date permet d'avoir la date et new de la réinitianilser à chaque fois qu'elle est exécutée.
    let temps = new Date();

//Déclaration de la variable heure qui va chercher l'heure qu'il est actuellement grace à la variable temps et connaît l'heure grace à la méthode getHours();
    let heures = temps.getHours();
//Déclaration de la variable minute qui va chercher la minute qu'il est actuellement grace à la variable temps et connaît l'heure grace à la méthode getMinutes();
    let minutes = temps.getMinutes();
//Déclaration de la variable minute qui va chercher la minute qu'il est actuellement grace à la variable temps et connaît l'heure grace à la méthode getSeconds();
    let secondes = temps.getSeconds();

//Conditions qui permettent de rajouter un zéro devant les nombres le nombres est inférieures à 10.
//Sans cette condition, s'il est 09:09.09, l'horloge afficherait 9:9.9
    if (heures < 10) {
        heures = '0' + heures;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (secondes < 10) {
        secondes = '0' + secondes;
    }

//Déclaration de la variable qui permet de stocker l'heure actuelle
    let heureActuel = heures + ':' + minutes + '.' + secondes;

//Permet d'afficher dans l'HTML l'heure actuelle
    horloge.innerHTML = heureActuel;

//Permet d'appeler la fonction toutes les 1000 milisecondes (1 seconde)
    setInterval('horlogeFun()', 1000)
}

document.body.onload  = horlogeFun
