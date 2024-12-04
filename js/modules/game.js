// MELANGE

export function shuffle(gameCartesDuplicate) {
  let currentIndex = gameCartesDuplicate.length; // currentIndex = reste à mélanger

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex); // RandomIndex = aléatoire
    currentIndex--;
    [gameCartesDuplicate[currentIndex], gameCartesDuplicate[randomIndex]] = [
      gameCartesDuplicate[randomIndex],
      gameCartesDuplicate[currentIndex],
    ]; //Echange
  }
}
export function match() {
  let selected = document.querySelectorAll(".select");
  selected.forEach((carte) => {
    carte.classList.add("match");
    carte.classList.remove("select");
    carte.style.pointerEvents = "none";
  });
}

export function resetSelect() {
  let beforeClique = document.querySelectorAll(".select");
  beforeClique.forEach((carte) => {
    carte.classList.remove("select");
  });
}


    

