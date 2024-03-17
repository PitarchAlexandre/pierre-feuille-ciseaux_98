/**
 * Permet d'ouvrir le menu aide
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-17
 */

'use strict'; // Active le mode strict du JavaScript

//Permet d'aller chercher différentes variables
const btnAide = document.getElementById('btnAide');
const btnFermer = document.getElementById('fermerAide');
const popUp   = document.getElementById('popUpAide');

btnAide.addEventListener('click',function () {
    popUp.style.display = 'block'
});

btnFermer.addEventListener('click', function () {
    popUp.style.display = 'none';
})