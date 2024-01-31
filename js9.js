// 9 - Faites une boucle qui insère une <div> pour chaque item du tableau js "petitTableau2" avec son contenu à l'intérieur.
var petitTableau2 = ["quatre", "cinq", "six"];
var body = document.body; // code manquant : il faut sélectionner l'élément body
for (var i = 0; i < petitTableau2.length; i++) {
  var div = document.createElement("div"); // code manquant : il faut créer un élément div
  div.textContent = petitTableau2[i]; // code manquant : il faut assigner le contenu du tableau à la propriété textContent du div
  body.appendChild(div); // code manquant : il faut ajouter le div au body
}
