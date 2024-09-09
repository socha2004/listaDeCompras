const botaoAdicionar = document.querySelector(".botao-adicionar");
const campoAdicionar = document.querySelector(".campo-adicionar");
const tabela = document.querySelector("tbody");
const listaElementos = [];

function somaNaTabela() {
    let elementoDoCampo = campoAdicionar.value;
    elementoDoCampo.trim();

    if (elementoDoCampo == "") {
        alert("Insira algum valor no campo.")

    } else {
        listaElementos.push(elementoDoCampo);
        let tabelaLinha = document.createElement("tr");

        let indice = listaElementos.length - 1;
        let campoIndice = document.createElement("td");
        let campoElemento = document.createElement("td");
        let campoExcluir = document.createElement("p");

        tabelaLinha.appendChild(campoIndice);
        tabelaLinha.appendChild(campoElemento);
        tabelaLinha.appendChild(campoExcluir);

        campoIndice.innerHTML = indice + 1;
        campoIndice.className = "indice";
        campoElemento.innerHTML = listaElementos[indice];
        campoExcluir.innerHTML = "X";

        campoExcluir.className = "excluir";
        campoExcluir.style.color = "#ff0000";

        tabela.appendChild(tabelaLinha);
    }
}

function removeCampo() {
    const linhaTabela = document.querySelector(".indice");
}

botaoAdicionar.addEventListener("click", function () {
    somaNaTabela();
    var botaoExcluir = document.querySelector(".excluir");
    console.log(botaoExcluir);
});


