
//Récuperer l'element quantité
let quantity = document.getElementById("quant");
console.log("quantité :", quant.value)

// //Pour récuperer la valeur lors de la validation du panier
 document.getElementById("submit").addEventListener("click", function (e) {

     e.preventDefault();//empeche l'envoie du formulaire en boucle

     console.log("quantité:", quant.value);
     localStorage.setItem("quantité",quant.value); //envoie dans le localStorage

 });

