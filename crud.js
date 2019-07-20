var addNome = document.querySelector('#nome input')
var listaElement = document.querySelector('#nome ul')
var buttonElement = document.querySelector('#nome button')


var vetorNomes = JSON.parse(localStorage.getItem('lista_nomes')) || [] // converte para string com JSON 
                                                                       //ou caso esteja vazio inicia como vetor vazio


function renderNomes(){ // function responsavel pelos elementos que aparecem na tela
    listaElement.innerHTML = '' // limpa a lista antes de atualizar com novos elementos
    for (nome of vetorNomes){ // le o vetor e joga os elementos na variavel nome

        var nomeElement = document.createElement('li') //  cria os topicos     
        var nomeText = document.createTextNode(nome)   //  aplica nos elementos do vetor      

        var linkElement = document.createElement('a')  // distaca o excluir possibilitando ser clicado
        
        linkElement.setAttribute('href', '#')          /* todo 'a' necessita obrigatoriamente de um href, a '#' evita q 
                                                       o excluir tenha alguma acao ao ser clicado*/ 
        
        var pos = vetorNomes.indexOf(nome)              // localiza o vetor
        linkElement.setAttribute('onclick', 'deleteNome('+pos+')') // informa qual posicao esta sendo selecionada

        var linkText = document.createTextNode('Excluir')  // texto em que o 'a' esta se referindo
       
        linkElement.appendChild(linkText) // linkText recebe os atributos de linkElement 


        listaElement.appendChild(nomeElement)
        nomeElement.appendChild(nomeText)  
        nomeElement.appendChild(linkElement) 
    }
}
function adicionar(){
    
    var nomeText = addNome.value
    if (nomeText == ''){

        alert('ERRO escreva um nome antes de adicionar')

    } else {
        vetorNomes.push(nomeText)
        addNome.value = ''
        renderNomes()
    }
    saveToStorege()

}
function deleteNome(pos){
    vetorNomes.splice(pos, 1) // funcao q exclui o elemento selecionado, vetor.splice(posicao, elemento) ali no caso vai excluir 
                              // o primeiro elemento daquela posicao
    saveToStorege()
    renderNomes()
}

function saveToStorege(){
    localStorage.setItem('lista_nomes', JSON.stringify(vetorNomes)) // salva num repositorio local
}


renderNomes()
buttonElement.onclick = adicionar