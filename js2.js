// 2 - Réalisez une fonction "nombrePair" qui affiche dans la console les nombres pairs de 0 à 100.
function nombrePair() {
  for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
nombrePair(); // ajout de l'appel de la fonction
