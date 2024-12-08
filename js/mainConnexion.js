import { 
    messageErrorLogin
 } 
 from "./modules/Formulaire.js";


document.addEventListener("DOMContentLoaded", function () {
      const loginForm = document.getElementById("loginForm");

      if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const emailInput = document.getElementById("emailUsers");
          const mdpInput = document.getElementById("mdpUsers");

          if (!emailInput || !mdpInput) {
            console.error("Les champs de formulaire n'ont pas été trouvés.");
            return;
          }

          const emailUsers = emailInput.value;
          const mdpUsers = mdpInput.value;

          const storageUsers =
            JSON.parse(localStorage.getItem("formData")) || [];
          const formData = storageUsers.find(
            (user) => user.email === emailUsers && user.mdp === mdpUsers
          );

          if (!formData) {
            if (!storageUsers.some((user) => user.email === emailUsers)) {
              messageErrorLogin(
                "emailUsers",
                "* Email Inconnu, Veuillez vous inscrire"
              );
            }
            messageErrorLogin("mdpUsers", "* Mot de passe Invalide");
          } else {
            console.log("Connexion réussie");
            localStorage.setItem("currentUser", JSON.stringify(formData));            
            document.location.replace("compte.html");
            
          }
        });
      } else {
        console.error("Le formulaire de connexion n'a pas été trouvé.");
      }
    });
 
