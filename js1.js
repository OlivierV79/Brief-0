// 1 - A l'aide des boites de dialogue du navigateur, créez un console.log qui réalise l'addition de deux nombres entiers entrés par l'utilisateur.
var nombre1 = prompt("Entrez un nombre entier");
var nombre2 = prompt("Entrez un autre nombre entier");
nombre1 = parseInt(nombre1);
nombre2 = parseInt(nombre2);
console.log(nombre1 + nombre2); // erreur : il faut convertir les chaînes de caractères en nombres
