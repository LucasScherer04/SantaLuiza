let section = document.getElementById("Abas-pesquisa");
let resultado = "";

for(let dado of dados){
    resultado += 
    `<div class="card">
    <img src=${dado.imagem}>
    <h3><a href=${dado.link}>${dado.titulo}</a></h3>
    </div>`
}

section.innerHTML = resultado;