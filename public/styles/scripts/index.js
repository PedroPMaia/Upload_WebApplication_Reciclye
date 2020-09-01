/* Pesquisar dentro do MAIN, o button search */
const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

// SelectorAll não funciona com addEventListener pois ele não atribuí listas, apenas elementos em si //

// Identificar um evento de click //
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
    // Quando houver um click, ele remove //
})

// Quando clicar no a, executar a funcao anonima, pegar o modal e adicionar a classe hide // 
close.addEventListener("click", () => {
    modal.classList.add("hide")
})

