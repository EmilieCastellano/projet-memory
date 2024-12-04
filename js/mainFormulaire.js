import {
  nameValidator,
  emailValidator,
  passwordValidator,
  prenomValidator,
  messageError,
  clearErreur,
} from "./modules/Formulaire.js";



window.addEventListener("load", function () {
  const mdp = document.getElementById("mdp");

  mdp.addEventListener("input", function () {
    if (mdp.value.length === 0) {
      document.getElementById("progresslabel").innerHTML = "";
      document.getElementById("progress").value = "0";
      progress.style.backgroundColor = "transparent";
      return;
    }

    let matchs = ["[$@$!%*#?&]", "[0-9]", "[a-z]"];

    let progress = 0;
    for (const match of matchs) {
        if (new RegExp(match).test(mdp.value)) {
        progress++;
       }
    }

    if (progress > 2 && mdp.value.length > 6) {
      progress++;
    }

    let niveau = "";
    let barre = 0;

    switch (progress) {
      case 0:
      case 1:
      case 2:
        barre = 33;
        niveau = "Faible (33%)";
        break;
      case 3:
        barre = 67;
        niveau = "Moyenne (67%)";
        break;
      case 4:
        barre = 100;
        niveau = "Forte (100%)";
        break;
      
    }
    document.getElementById("progressLabel").innerHTML = niveau;
    document.getElementById("progress").value = barre;
  });
});
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErreur();

  const formData = {
    nom: document.getElementById("nom").value,
    prenom: document.getElementById("prenom").value,
    email: document.getElementById("email").value,
    mdp: document.getElementById("mdp").value,
  };

  console.log(formData);

  let valid = false;

  if (!nameValidator(formData.nom)) {
    valid = true;
    messageError("nom", "* Nom Invalide");
  }

  if (!prenomValidator(formData.prenom)) {
    valid = true;
    messageError("prenom", "* Prenom Invalide");
  }
  if (!emailValidator(formData.email)) {
    valid = true;
    messageError("email", "* Email Invalide");
  }
  if (!passwordValidator(formData.mdp)) {
    valid = true;
    messageError("mdp", "* Mot de passe Invalide");
  }

  if (valid) {
    console.log("formulaire non valide");
    return;
  }

  console.log("formulaire valide");
});
