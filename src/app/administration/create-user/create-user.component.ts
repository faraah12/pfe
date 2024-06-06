import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  matricule: string = ''; // Initialisation avec une valeur par défaut
  nom: string = '';
  prenom: string = '';
  password: string = '';
  confirmPassword: string = '';
  selectedProfil: string = '';
  profils: string[] = [];
  passwordsMatch: boolean = true; // Déclaration explicite de la propriété passwordsMatch
  passwordValidationMessage: string | undefined;
  matriculeExists: boolean = false;
  matriculeFormatValid: boolean = true;
  formValidationError: string | undefined; // Variable pour stocker le message d'erreur du formulaire


  constructor() {
    // Vous pouvez également initialiser les propriétés dans le constructeur si nécessaire
    // Cela peut être utile si vous avez besoin de valeurs dynamiques ou de logique d'initialisation plus complexe
  }

  addProfil() {
    // Valider le formulaire avant d'ajouter un profil
    if (this.validateForm()) {
      if (this.selectedProfil && !this.profils.includes(this.selectedProfil)) {
        this.profils.push(this.selectedProfil);
      }
    }
  }


  moveProfil(direction: string) {
    if (direction === 'left') {
      this.profils.pop();
    }
  }


  // addProfile(): void {
  //   // Ajouter le profil sélectionné à la liste des profils
  //   // Vous pouvez récupérer la valeur sélectionnée depuis le formulaire et l'ajouter à la liste
  //   // Ici, nous ajoutons simplement un exemple de profil
  //   this.selectedProfiles.push('Responsable de prévision');
  // }
  //
  // removeProfile(): void {
  //   // Supprimer le dernier profil ajouté de la liste des profils
  //   this.selectedProfiles.pop();
  // }
  checkPasswords() {
    // Vérifiez si les deux mots de passe sont identiques
    this.passwordsMatch = this.password === this.confirmPassword;
  }
  validatePassword() {
    // Expression régulière pour valider le mot de passe
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

    if (passwordRegex.test(this.password)) {
      this.passwordValidationMessage = ''; // Le mot de passe est valide
    } else {
      this.passwordValidationMessage = "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial, et avoir une longueur d'au moins 8 caractères.";
    }
  }
  checkMatricule() {
    // Expression régulière pour vérifier si le matricule contient à la fois des lettres et des chiffres
    const matriculeRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]*$/;

    if (matriculeRegex.test(this.matricule)) {
      this.matriculeFormatValid = true; // Le format du matricule est valide
    } else {
      this.matriculeFormatValid = false; // Le format du matricule est invalide
    }

    // Vous devez implémenter votre logique pour vérifier si le matricule existe déjà ici
    // Ici, je simule la vérification en vérifiant si le matricule est égal à '123456'
    if (this.matricule === '123456') {
      this.matriculeExists = true;
    } else {
      this.matriculeExists = false;
    }
  }
  validateForm(): boolean {
    // Vérifier chaque champ du formulaire
    if (!this.matricule || !this.nom || !this.prenom || !this.password || !this.confirmPassword || !this.selectedProfil) {
      this.formValidationError = 'Veuillez remplir tous les champs du formulaire.';
      return false; // Le formulaire est invalide
    } else {
      this.formValidationError = ''; // Le formulaire est valide
      return true;
    }
  }
}

