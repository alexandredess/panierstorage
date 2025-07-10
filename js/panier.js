// ========================================
// FICHIER : panier.js
// Description : Gestion de l'affichage du panier d'achat
// ========================================

// Récupération de la quantité depuis le localStorage
// Cette valeur a été sauvegardée lors de la validation du panier sur la page précédente
let quantity = localStorage.getItem("quantité");

// Définition du prix unitaire du produit (en euros)
let price = 6999.99;

// Calcul du montant total : quantité × prix unitaire
let total = quantity * price;

// Affichage dans la console pour le débogage
// Note: il y a une erreur dans la variable utilisée (quant au lieu de quantity)
console.log("Quantité récupérée :", quant);

// Affichage de la quantité dans l'élément HTML avec l'ID "quant"
document.getElementById("quant").innerHTML = quantity;

// Affichage du montant total dans l'élément HTML avec l'ID "total"
// Le symbole € est ajouté à la fin pour indiquer la devise
document.getElementById("total").innerHTML = total + "€";