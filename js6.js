// 6 - Affichez une boîte "alert" lorsque l'utilisateur fait un clic droit.
window.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // code manquant : il faut empêcher le comportement par défaut du clic droit
  alert("Vous avez fait un clic droit");
});
