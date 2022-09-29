const elementoMain = document.querySelector(".container");

function adicionarItem(){
    const novoItem = document.createElement("article");
    const conteudo = document.createTextNode ("Novo Item");
    novoItem.appendChild(conteudo);
    elementoMain.insertAdjacentElement("beforeend", novoItem);
    novoItem.setAttribute("class", "estiloNovo");
    novoItem.addEventListener("click", (item) => {removeItem(item)});
}

function removeItem(event){
    event.target.remove()
}