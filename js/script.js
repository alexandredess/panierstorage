
// ========================================
// FICHIER : script.js
// Description : Gestion de la sélection de quantité et validation du panier
// ========================================

// Récupération de l'élément HTML input qui contient la quantité
let quantity = document.getElementById("quant");

// Affichage dans la console pour le débogage
// Note: il y a une erreur dans la variable utilisée (quant au lieu de quantity)
console.log("quantité :", quant.value)

// Ajout d'un écouteur d'événement sur le bouton de validation du panier
// L'événement "click" est déclenché lorsque l'utilisateur clique sur le bouton submit
document.getElementById("submit").addEventListener("click", function (e) {

    // Empêche le comportement par défaut du formulaire (rechargement de la page)
    e.preventDefault();

    // Affichage de la quantité sélectionnée dans la console pour vérification
    // Note: même erreur de variable (quant au lieu de quantity)
    console.log("quantité:", quant.value);
    
    // Sauvegarde de la quantité dans le localStorage
    // Cette valeur sera récupérée sur la page panier pour calculer le total
    localStorage.setItem("quantité", quant.value);

});

