// 4 - Trouvez comment arrondir ce nombre et affichez le.
let nombre; // pour etre utilisé dans les 2 fonctions

function nombreAleatoire() {
  nombre = Math.random(); // code manquant : il faut appeler la fonction Math.random()
  console.log(nombre);
}
nombreAleatoire();

function arrondirNombre(nombre) {
  var arrondi = Math.round(nombre); // code non fonctionnel : il faut passer le nombre en paramètre de la fonction Math.round()
  console.log(arrondi);
}
arrondirNombre(nombre);
