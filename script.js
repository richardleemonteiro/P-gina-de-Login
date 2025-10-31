// Captura o formulário
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita o envio padrão

    // Aceita qualquer usuário e senha
    window.location.href = "index.html"; // Redireciona para página de filmes
});
