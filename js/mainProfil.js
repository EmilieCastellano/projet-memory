document.addEventListener("DOMContentLoaded", function () {
  // Récupérer les informations de l'utilisateur depuis localStorage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    const login = document.getElementById("login");
    login.innerText = "Bienvenue " + currentUser.nom;
    login.style.fontSize = "2em";
    const info = document.getElementById('info');
    info.innerText = "Votre email est : " + currentUser.email;
  } else {
    console.error("Aucun utilisateur connecté.");
  }
});

 