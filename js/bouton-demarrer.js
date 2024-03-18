/**
 * Menu démarrer Windows (start)
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-16
 */

'use strict'; // Active le mode strict du JavaScript

const btnWindows = document.getElementById('btnWindows');
const menuStart = document.getElementById('listeStart')

menuStart.style.display = 'none';
btnWindows.addEventListener('click', function () {
    if (menuStart.style.display === 'none') {
        menuStart.style.display ='block';
    }

    else {
        menuStart.style.display ='none';
    }

});