function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        // fetch = promessa de busca ao serviço //
        .then(res => res.json())
        .then(states => {

            for (const state of states) {
                ufSelect.innerHTML += `<option value ="${state.id}">${state.nome}</option>`

            }
        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {


            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })
}



document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

/* .addEventListener = Sempre para ouvir eventos. Ex.: De quando a pagina carrega, quando clica em algo e etc, é mostrada a ação executada */

/* array = coleção de dados */

// Itens de Coleta
// Coletar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []


function handleSelectedItem(event) {

    const itemLi = event.target

    // Adicionar ou Remover uma classe com JS
    itemLi.classList.toggle("selected")

    // Toggle = Faz o processo de adicionar ou remover a classe, não precisando usar o "add or remove"


    const itemId = ItemLi.dataset.id

    console.log('ITEM ID: ', itemId)

}

// Adicionar ou Remover valores do input
// 1-passo: Verificar se existem items selecionados, se sim pegá-los;
const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound

        // Sinal de "==" serve para igualar os lados, no caso ITEM e ITEMID - COMPARAR VALORES
    })
    // 2-passo: Se já selecionado, tirar da seleção (coleção=array)
if (alreadySelected >= 0) {
    // Tirar da seleção. Qual estrategia usar?

    const filteredItems = selectedItems.filter(item => {
        const itemIsDifferent = item != itemId // false
        return itemIsDifferent
    })

    selectedItems = filteredItems

} else {
    // 3-passo: Se não selecionado, adicionar à seleção
    selectedItems.push(itemId)
}
// 4-passo: Atualizar o campo escondido com os items selecionados
collectedItems.value = selectedItems