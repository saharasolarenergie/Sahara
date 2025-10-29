function envoyerMessage(e) {
  e.preventDefault();
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;

  if (nom && email && msg) {
    alert(`Merci ${nom} 🌞 ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.`);
    document.querySelector("form").reset();
  } else {
    alert("Veuillez remplir tous les champs avant d’envoyer le message.");
  }
}