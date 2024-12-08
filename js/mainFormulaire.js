import {
  nameValidator,
  emailValidator,
  passwordValidator,
  prenomValidator,
  messageError,
  clearErreur,
  storageNew
} from "./modules/Formulaire.js";




  document.addEventListener("DOMContentLoaded", function () {
    const mdp = document.getElementById("mdp");

    if (mdp) {
      mdp.addEventListener("input", function () {
        if (mdp.value.length === 0) {
          document.getElementById("progresslabel").innerHTML = "";
          document.getElementById("progress").value = "0";
          progress.style.backgroundColor = "transparent";
          return;
        }

        let matchs = ["[a-z]", "[$@$!%*#?&]", "[0-9]", ".{6,}"];

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
            barre = 25;
            niveau = "Faible (25%)";
            break;
          case 3:
            barre = 50;
            niveau = "Moyenne (50%)";
            break;
          case 4:
            barre = 75;
            niveau = "Forte (75%)";
            break;
          case 5:
            barre = 100;
            niveau = "Forte (100%)";
            break;
        }
        document.getElementById("progressLabel").innerHTML = niveau;
        document.getElementById("progress").value = barre;
      });
    } else {
      console.error("L'élément mdp n'a pas été trouvé.");
    }
    const userVerif = [
      {nom: "Dupont", email: "example@email.com"},
      {nom: "Durant", email: "durant@email.com"}
    ];
    const myForm = document.getElementById("myForm");

    if (myForm) {
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

        let invalid = false;

        const userExist = userVerif.some(
          (user) => user.email === formData.nom || user.nom === formData.email
        );

        if (userExist) {
          invalid = true
          messageError('nom ', '* ou email déjà utilisé');
        }

        if (!nameValidator(formData.nom)) {
          invalid = true;
          messageError("nom ", "* Nom Invalide");
        }

        if (!prenomValidator(formData.prenom)) {
          invalid = true;
          messageError("prenom", "* Prenom Invalide");
        }
        if (!emailValidator(formData.email)) {
          invalid = true;
          messageError("email", "* Email Invalide");
        }
        if (!passwordValidator(formData.mdp)) {
          invalid = true;
          messageError("mdp", "* Mot de passe Invalide");
        }

        if (invalid) {
          console.log("formulaire non valide");
          return;
        }

        console.log("formulaire valide");

        /////   LOCAL STORAGE   //////

        storageNew(formData);
        
        setTimeout(() => {
          document.location.replace("connexion.html");
        }, 2000);
      });
    } else {
      console.error("Le formulaire d'inscription n'a pas été trouvé.");
    }
  });
