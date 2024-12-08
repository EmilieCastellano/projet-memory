///////////////     VALID       ///////////////// 


export function nameValidator(nom) {
    const regexNom = /^[a-zA-Z]{3,}$/;
    return regexNom.test(nom);
}

export function prenomValidator(prenom) {
    const regexPrenom = /^[a-zA-Z]+$/;
    return regexPrenom.test(prenom);
}

export function emailValidator(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

export function passwordValidator(mdp) {
    const regexMdp = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^_&*]).{6,}$/;
    return regexMdp.test(mdp);
}

//////   Message erreur  /////

export function messageError(fieldId, message) {
  const erreurElement = document.getElementById(fieldId + 'Erreur');
  erreurElement.innerText = message;
}

export function clearErreur() {
   const erreurElements = document.querySelectorAll("[id$='Erreur']"); 
   erreurElements.forEach(element => element.innerText = '' );
}

export function messageErrorLogin(fieldId, message) {
  const errorElement = document.createElement("span");
  errorElement.style.color = "red";
  errorElement.innerText = message;

  const fieldElement = document.getElementById(fieldId);
  if (fieldElement) {
    fieldElement.parentNode.appendChild(errorElement);
  }
}
//////      local storage       //////

export function storageNew(user) {
  let users = JSON.parse(localStorage.getItem("formData"));

  if (!Array.isArray(users)) {
    users = [];
  }

  users.push(user);
  localStorage.setItem("formData", JSON.stringify(users));
  console.log("Utilisateur ajouté :", user);
}

/////       CONNEXION       /////////


