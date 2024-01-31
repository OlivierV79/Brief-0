// 5 - Générez un nombre entre 0 et 1000, demandez un chiffre à l'utilisateur et affichez dans la console si votre nombre est divisible par le chiffre de l'utilisateur.
var nombre = Math.floor(Math.random() * 1000); // code manquant : il faut utiliser la fonction Math.floor() pour obtenir un nombre entier
var chiffre = prompt("Entrez un chiffre");
if (nombre % chiffre == 0) {
  console.log("Le nombre " + nombre + " est divisible par " + chiffre);
} else {
  console.log("Le nombre " + nombre + " n'est pas divisible par " + chiffre);
}
