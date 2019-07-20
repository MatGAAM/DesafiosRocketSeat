var addNome = document.querySelector('#nome input')
var listaElement = document.querySelector('#nome ul')
var buttonElement = document.querySelector('#nome button')


var vetorNomes = JSON.parse(localStorage.getItem('lista_nomes')) || [] 


function renderNomes(){ 
    listaElement.innerHTML = '' 
    for (nome of vetorNomes){ 

        var nomeElement = document.createElement('li')   
        var nomeText = document.createTextNode(nome)      

        var linkElement = document.createElement('a') 
        
        linkElement.setAttribute('href', '#')         
        
        var pos = vetorNomes.indexOf(nome)           
        linkElement.setAttribute('onclick', 'deleteNome('+pos+')') 

        var linkText = document.createTextNode('Excluir')  
       
        linkElement.appendChild(linkText) 


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
    vetorNomes.splice(pos, 1) 
    renderNomes()
}

function saveToStorege(){
    localStorage.setItem('lista_nomes', JSON.stringify(vetorNomes)) 
}


renderNomes()
buttonElement.onclick = adicionar
