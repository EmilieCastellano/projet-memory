import { shuffle, match, resetSelect } from "./modules/game.js";
///////////////////     GAME    ///////////////////
let gameCartes = [
  {
    name: "aligator",
    img: "./img/choix/aligator.webp",
  },

  {
    name: "elephant",
    img: "./img/choix/elephant.webp",
  },

  {
    name: "felin",
    img: "./img/choix/felin.webp",
  },

  {
    name: "lion",
    img: "./img/choix/lion.webp",
  },

  {
    name: "oiseau",
    img: "./img/choix/oiseau.webp",
  },

  {
    name: "singe",
    img: "./img/choix/singe.webp",
  },
];
// console.log(gameCartes);

// Creation plateau Jeu
const game = document.getElementById("tabJeu");
const plateau = document.createElement("section");
plateau.setAttribute("class", "plateau");
game.appendChild(plateau);

let gameCartesDuplicate = gameCartes.concat(gameCartes);
console.log(gameCartesDuplicate);

//Mélanger tableau

shuffle(gameCartesDuplicate);

gameCartesDuplicate.forEach((item) => {
  const carte = document.createElement("div");
  carte.classList.add("carte");
  carte.dataset.name = item.name;

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = "url(" + item.img + ")";

  plateau.appendChild(carte);
  carte.appendChild(front);
  carte.appendChild(back);
});

// CONTROLE JEU

let compteur = 0;
let firstCarte = null;
let secondCarte = null;
let beforeTarget = null;
let nbErreur = 0;
const affichErreur = document.getElementById("nbErreur");
let pair = 0;

plateau.addEventListener("click", (e) => {
  let clique = e.target;
  let carteParent = clique.parentNode;

  if (
    clique.nodeName === "SECTION" ||
    clique === beforeTarget ||
    carteParent.classList.contains("select") ||
    carteParent.classList.contains("match")
  ) {
    return;
  }

  if (compteur < 2) {
    carteParent.classList.add("select");

    if (compteur === 0) {
      firstCarte = carteParent;
      beforeTarget = clique;
      compteur++;
    } else if (compteur === 1) {
      secondCarte = carteParent;
      compteur++;

      if (firstCarte.dataset.name === secondCarte.dataset.name) {
        pair++;
        setTimeout(() => {
          match();
          firstCarte = null;
          secondCarte = null;
          compteur = 0;
        }, 1000);
        if (pair === 6) {
          const bravo = document.getElementById("bravo");
          bravo.innerText = "Gagné !!";
          bravo.style.fontSize = "2em";
        }
      } else {
        nbErreur++;
        affichErreur.innerText = "Nombre de tentative :" + nbErreur;
        setTimeout(() => {
          resetSelect();
          firstCarte = null;
          secondCarte = null;
          compteur = 0;
          beforeTarget = null;
        }, 2000);
      }
    }
  }
});
// RECOMMENCER
document.addEventListener("keypress", (e) => {
  if (e.key === " ") {
    location.reload();
  }
});

//////////////////////  FORMULAIRE    //////////////////
