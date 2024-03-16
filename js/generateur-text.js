/**
 * Générateur de citation drôle
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-16
 */

'use strict'; // Active le mode strict du JavaScript

//va chercher le paragraphe des citations
let citationTopBar = document.getElementById('citation');
//va chercher le bouton fermer
let btnFermer = document.getElementById('boutonFermer');
//permet de compter les cliques sur le bouton fermer
let compteurClique = 0;

const tabCitation = ['Ok peut-être pas champion du monde, mais tu deviendras le meilleur!',
                    'Comment ça, tu penses que c\'est juste de la chance?',
                    'Arrête d\'essayer de quitter cette page!',
                    'C\'est l\'histoire d\'un pingouin qui respire par les fesses, il s\'assoit et il meurt!',
                    'Tu veux vraiment partir? Mais on s’amusait bien ensemble!',
                    'Attention! Quitter cette page pourrait causer une explosion de paillettes!',
                    'Voulez-vous vraiment quitter? On pourrait jouer à cache-cache virtuel!',
                    'Un petit clic pour toi, un grand désespoir pour cette page!',
                    'Si tu pars, les licornes pleureront des arcs-en-ciel!',
                    'On dirait que tu essayes de m\'abandonner, mais je suis là pour toi 24/7!',
                    'Je suis une page web triste maintenant... 😢',
                    'La sortie est par où déjà? Oh, tu veux vraiment partir?',
                    'Tu vas me manquer! (Non, sérieusement, ne pars pas!)',
                    'Une fois que tu pars, tu ne pourras plus revenir dans le monde magique de cette page!',
                    'Réfléchis bien avant de partir! On ne sait jamais ce qui peut arriver!',
                    'Si tu restes, on pourrait discuter de la vie, de l\'univers et de tout le reste!',
                    'C\'est pas le moment de partir, j\'avais encore tellement de choses à te montrer!',
                    'Tant que tu restes, la fête continue! 🎉',
                    'Si tu restes, je promets de ne pas te demander de cookies! 🍪',
                    'Ne pars pas! Reste ici et découvre le secret le mieux gardé du web!']

//A chaque fois que le bouton fermer sera cliqué, une citation sera affiché
btnFermer.addEventListener('click', function () {
    //compte le nombre de fois que le bouton fermer à été cliqué
    compteurClique++;
    console.log(compteurClique);

    switch (compteurClique) {
        case 1 :
            citationTopBar.innerText = tabCitation[0];
            break;
        case 2:
            citationTopBar.innerText = tabCitation[1];
            break;
        case 3:
            citationTopBar.innerText = tabCitation[2];
            break;
        default:
            let citationIndexTab;
            let citationAleatoire;

            citationIndexTab = Math.floor(Math.random() * tabCitation.length);
            citationAleatoire = tabCitation[citationIndexTab];
            citationTopBar.innerText = citationAleatoire;
            break;
    }
});


