let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById("areaLista")

function addTarefa(){
    //Pegar o valor digitado pelo input
    let valorInput = input.value; 

    if((valorInput !== "") && (valorInput !== null) && (valorInput!== undefined)){
        ++contador;
        let novoItem = ` <div id = "${contador}" class="item">
        <div onclick = "marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>

        </div>
        <div class="item-nome"> ${valorInput}

        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class ="mdi mdi-delete">Deletar</i> </button>
    </div> 
    </div>`
        // adiciona novo item no main
        main.innerHTML += novoItem;

        // zerar tela de input
        input.value=""
        input.focus()
    }
    
}

    function deletar(id){
        var tarefa = document.getElementById(id);
        tarefa.remove();

      

    }

    function marcarTarefa(id){
        var item = document.getElementById(id);
        var classe = item.getAttribute('class');
        console.log(classe);

        if (classe == "item"){
            item.classList.add('clicado');

            var icone = document.getElementById('icone_' +id)
            icone.classList.remove('mdi-circle-outline');
            icone.classList.add('mdi-check-circle');

            item.parentNode.appendChild(item);

        } else{
            item.classList.remove('clicado')
        }

    }

input.addEventListener("keyup",function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();

    }})