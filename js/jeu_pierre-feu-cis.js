/**
 * Démo mon premier JavaScript
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-14
 */

'use strict'; // Active le mode strict du JavaScript

//Prend les différent bouton de l'utilisateur
const pierre = document.getElementById('pierre');
const feuille = document.getElementById('feuille');
const ciseaux = document.getElementById('ciseaux');

//Variable qui contiendra le signe que l'IA fera à chaque tour
let jeuOrdi;

let signeImg = document.getElementById('signeImg');
let resultat = document.getElementById('vainqueur');

let scoreUtilisateur = document.getElementById('scoreJoueur1');
let scoreOrdi = document.getElementById('scoreBot');

let compteurScoreUti = 0;
let compteurScoreBot = 0;

const recommencerParti = document.getElementById('restartGameBtn');

//tableau qui contient les 3 signes de l'ordinateur
const tabOrdi = [
    { choix: 'pierre', image: 'img/pierre.png' },
    { choix: 'feuille', image: 'img/feuille.png' },
    { choix: 'ciseaux', image: 'img/ciseaux.png'}
];

//Evenement qui va se appeler la fonction jouer lorsque l'utilisateur va cliquer sur l'un des trois boutons
pierre.addEventListener('click', function () {
    jouer('pierre');
});

feuille.addEventListener('click', function () {
    jouer('feuille');
});

ciseaux.addEventListener('click', function () {
    jouer('ciseaux');
});

function jouer(signeUtilisateur){


    let jeuOrdiIndex;
    //génération automatique et aléatoire du signe de l'ordinateur
    jeuOrdiIndex = Math.floor(Math.random() * tabOrdi.length);
    jeuOrdi = tabOrdi[jeuOrdiIndex];
    //permettait d'afficher le signe textuellement
    //signeOrdi.innerText = jeuOrdi.choix;
    signeImg.src = jeuOrdi.image;

    console.log(signeUtilisateur)
    console.log(jeuOrdi.choix)

    //Conditions qui permettent de voir si l'utilisateur gagne, perd ou si c'est un égalité
    if (signeUtilisateur === 'pierre' && jeuOrdi.choix === 'ciseaux') {
        resultat.innerText = 'Gagné!';
        compteurScoreUti++;
    } else if (signeUtilisateur === 'feuille' && jeuOrdi.choix === 'pierre') {
        resultat.innerText = 'Gagné!';
        compteurScoreUti++;
    } else if (signeUtilisateur === 'ciseaux' && jeuOrdi.choix === 'feuille') {
        resultat.innerText = 'Gagné!';
        compteurScoreUti++;
    } else if (signeUtilisateur === jeuOrdi.choix) {
        resultat.innerText = 'Egalité!';
    } else {
        resultat.innerText = 'Perdu!';
        compteurScoreBot++;               }

    //converti le score en string
    compteurScoreUti = String(compteurScoreUti);
    compteurScoreBot = String(compteurScoreBot);

    //affiche le score sur le "scoreboard"
    scoreUtilisateur.innerText = compteurScoreUti;
    scoreOrdi.innerText = compteurScoreBot;

    //Affiche le résultat quand un des deux joueurs atteint 10
    if (compteurScoreUti >= 10) {
        alert('Félicitations!\n' +
            'Vous avez gagné! 😎 ');
        compteurScoreUti = 0;
        compteurScoreBot = 0;
        scoreUtilisateur.innerText = compteurScoreUti;
        scoreOrdi.innerText = compteurScoreBot
    };
    else if (compteurScoreBot >= 10){
        alert('Vous avez perdu 😕 \n' +
            'Vous ferez mieux la prochaine fois! 💪')
        compteurScoreUti = 0;
        compteurScoreBot = 0;
        scoreUtilisateur.innerText = compteurScoreUti;
        scoreOrdi.innerText = compteurScoreBot
    }
    else {

    };
};

//Lorsque l'on clique sur restart, ça recommence la partie (compteur à 0:0)
recommencerParti.addEventListener('click', function () {
    nouvelleGame()
});

//Remet les compteurs à zéro et affiche le résultat 0:0
function nouvelleGame() {
    //remet les compteur à zéro
    compteurScoreUti = 0;
    compteurScoreBot = 0;

    //converti les chiffres en string
    compteurScoreUti = String(compteurScoreUti);
    compteurScoreBot = String(compteurScoreBot);

    //affiche les résultats (0:0)
    scoreUtilisateur.innerText = compteurScoreUti;
    scoreOrdi.innerText = compteurScoreBot;
};
