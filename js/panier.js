let quantity = localStorage.getItem("quantité");
let price = 6999.99;
let total = quantity * price;
console.log("Quantité récupérée :", quant);

document.getElementById("quant").innerHTML = quantity;
document.getElementById("total").innerHTML = total + "€";