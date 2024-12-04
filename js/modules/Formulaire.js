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

