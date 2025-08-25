function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a img dark
    img.setAttribute("src", "./assets/avatar.png")
  }
}

function showFeatureAlert(feature) {
  const messages = {
    currículo: "📋 Meu currículo está sendo atualizado! Volte em breve.",
    agendamento: "🗓️ Sistema de agendamento em desenvolvimento!",
    email: "📧 Configurando meu email profissional. Em breve!",
  }

  alert(messages[feature] || "🚧 Recurso em desenvolvimento!")
  return false
}
