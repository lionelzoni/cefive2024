document.getElementById("cvForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var email = document.getElementById("email").value;
  var telephone = document.getElementById("telephone").value;
  var experience = document.getElementById("experience").value;
  var competences = document.getElementById("competences").value;
  var formation = document.getElementById("formation").value;
  
  console.log("Nom: " + nom);
  console.log("Prénom: " + prenom);
  console.log("Email: " + email);
  console.log("Téléphone: " + telephone);
  console.log("Expérience: " + experience);
  console.log("Compétences: " + competences);
  console.log("Formation: " + formation);
});
