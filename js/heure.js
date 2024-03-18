/**
 * Permet d'afficher l'heure
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-18
 */

'use strict';

let horloge = document.getElementById('horloge');

let temps = new Date();
let heures = temps.getHours();
let minutes = temps.getHours();
let secondes = temps.getSeconds();

let heureActuel = heures + ':' + minutes + '.' + secondes;

horloge.innerHTML = heureActuel;
