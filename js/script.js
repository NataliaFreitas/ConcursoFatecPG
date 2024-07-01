document.addEventListener("DOMContentLoaded", (event) => {
    // Colocando elementos em variáveis
    const btnSeguir = document.querySelector(".btnSeguir");
    const iconeSeguir = document.querySelector(".iconeSeguir");
    const textoSeguir = document.querySelector(".textoSeguir");
    const btnMensagem = document.querySelector(".btnMensagem");
    const contSeguidores = document.querySelector(".contSeguidores");
    let seguidores = 0;
    // Função ao clicar nos botões
    btnSeguir.addEventListener("click", function() {
        if (textoSeguir.textContent.trim() === "Seguir") {
            iconeSeguir.classList.remove("fa-user-plus");
            iconeSeguir.classList.add("fa-user-check");
            textoSeguir.textContent = "Seguindo";
            seguidores++;
        } else {
            iconeSeguir.classList.remove("fa-user-check");
            iconeSeguir.classList.add("fa-user-plus");
            textoSeguir.textContent = "Seguir";
            seguidores--;
        }
        contSeguidores.textContent = `Seguido(a) por ${seguidores} pessoas`;
    });
})