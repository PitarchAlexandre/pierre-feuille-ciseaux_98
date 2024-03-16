/**
 * Démo mon premier JavaScript
 * @author  Alexandre Pitarch
 * @version 1.0
 * @since   2024-03-14
 */

'use strict'; // Active le mode strict du JavaScript

const pierre = document.getElementById('pierre');
const feuille = document.getElementById('feuille');
const ciseaux = document.getElementById('ciseaux');
let jeuOrdi;

let signeImg = document.getElementById('signeImg');
let signeOrdi = document.getElementById('signeOrdi');
let resultat = document.getElementById('vainqueur');

let scoreUtilisateur = document.getElementById('scoreJoueur1');
let scoreOrdi = document.getElementById('scoreBot');

let compteurScoreUti = 0;
let compteurScoreBot = 0;


const tabOrdi = [
    { choix: 'pierre', image: 'img/pierre.png' },
    { choix: 'feuille', image: 'img/feuille.png' },
    { choix: 'ciseaux', image: 'img/ciseaux.png'}
];

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

            jeuOrdiIndex = Math.floor(Math.random() * tabOrdi.length);
            jeuOrdi = tabOrdi[jeuOrdiIndex];
            //signeOrdi.innerText = jeuOrdi.choix;
            signeImg.src = jeuOrdi.image;

            console.log(signeUtilisateur)
            console.log(jeuOrdi.choix)

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

                compteurScoreUti = String(compteurScoreUti);
                compteurScoreBot = String(compteurScoreBot);

                scoreUtilisateur.innerText = compteurScoreUti;
                scoreOrdi.innerText = compteurScoreBot

        if (compteurScoreUti >= 10){
            alert('Félicitations!\n' +
                'Vous avez gagné! 😎 ');
            compteurScoreUti = 0;
            compteurScoreBot = 0;
            scoreUtilisateur.innerText = compteurScoreUti;
            scoreOrdi.innerText = compteurScoreBot
        }
        else if (compteurScoreBot >= 10){
            alert('Vous avez perdu 😕 \n' +
                  'Vous ferez mieux la prochaine fois! 💪')
            compteurScoreUti = 0;
            compteurScoreBot = 0;
            scoreUtilisateur.innerText = compteurScoreUti;
            scoreOrdi.innerText = compteurScoreBot
        }
    }

function compteur(){

}

