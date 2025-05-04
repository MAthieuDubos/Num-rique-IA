// script.js - Fonctions interactives pour le site Numérique & IA

// Message de bienvenue dynamique en fonction de l'heure
document.addEventListener("DOMContentLoaded", () => {
  const nom = "Mathieu";
  const heure = new Date().getHours();
  let message = "";

  if (heure < 12) {
    message = "Bonjour";
  } else if (heure < 18) {
    message = "Bon après-midi";
  } else {
    message = "Bonsoir";
  }

  const accueil = document.getElementById("accueil");
  if (accueil) {
    accueil.innerText = `${message} ${nom}, bienvenue sur votre espace numérique et IA !`;
  }
});

// Réponse IA simulée pour les questions
function repondreIA() {
  const question = document.getElementById("question").value.toLowerCase();
  const reponse = document.getElementById("reponse");

  if (question.includes("ia") || question.includes("intelligence")) {
    reponse.innerText = "🤖 L’intelligence artificielle permet aux machines d'apprendre à résoudre des problèmes comme les humains.";
  } else if (question.includes("numérique") || question.includes("ordinateur")) {
    reponse.innerText = "💻 Le numérique regroupe les technologies liées à l'information, à l'internet et aux usages digitaux.";
  } else if (question.includes("pix")) {
    reponse.innerText = "📚 PIX est une plateforme d’évaluation des compétences numériques. Un bon réflexe pour progresser.";
  } else {
    reponse.innerText = "😅 Je suis encore en formation... Essayez une autre question liée à l’IA ou au numérique.";
  }
}
