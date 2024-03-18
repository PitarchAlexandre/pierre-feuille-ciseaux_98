/**
 * Permet d'ouvrir le menu aide
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-17
 */

'use strict'; // Active le mode strict du JavaScript

//Permet d'aller chercher différentes variables
const btnAide = document.getElementById('btnAide');
const popUp = document.getElementById('popUp-container');
const btnFermerPopUp = document.getElementById('fermerAide');

btnAide.addEventListener('click', function () {
    popUp.style.display = 'block';
    console.log('ok')
});

btnFermerPopUp.addEventListener('click', function () {
    popUp.style.display = 'none';
});

