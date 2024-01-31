// 8 - Faites une boucle qui affiche le contenu du tableau js "petitTableau1" dans la console
var petitTableau1 = ["un", "deux", "trois"];
for (var i = 0; i < petitTableau1.length; i++) {
  console.log(petitTableau1[i]);
}

// 9 - Faites une boucle qui insère une <div> pour chaque item du tableau js "petitTableau2" avec son contenu à l'intérieur.
var petitTableau2 = ["quatre", "cinq", "six"];
var body = document.body; // code manquant : il faut sélectionner l'élément body
for (var i = 0; i < petitTableau2.length; i++) {
  var div = document.createElement("div"); // code manquant : il faut créer un élément div
  div.textContent = petitTableau2[i]; // code manquant : il faut assigner le contenu du tableau à la propriété textContent du div
  body.appendChild(div); // code manquant : il faut ajouter le div au body
}
// 10 - Créez une variable "grandTableau" et insérez y le contenu des deux petits tableaux précédents
var grandTableau = petitTableau1.concat(petitTableau2); // code non fonctionnel : il faut utiliser la méthode concat() pour fusionner les deux tableaux
console.log(grandTableau);
