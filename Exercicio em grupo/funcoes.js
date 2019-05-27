const formulario = {}
var idItem = 1

function chamaBotao() {
    const nome = document.getElementById("nome").value
    const valor = document.getElementById("valor").value
    const URL = document.getElementById("URL").value
    const Descricao = document.getElementById("Descricao").value

    const URL2 = 'https://api.conexaonfe.com.br/v1/produtos';

    fetch(URL2, {
            method: 'POST',
            headers: {
                'Authorization': 'bbb',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                descricao: Descricao,
                imagem: URL,
                preco: valor
            })
        })
        .then(async response => {
            await ListaProdutos()
        })
        .catch(error => {
            console.log(error)
        });



    //Limpa formulario
    clearForm()
}

function additem(jsonItens) {

    var idItemD = this.idItem

    document.getElementById("divItens").innerHTML = ""

    for (let index = 0; index < jsonItens.length; index++) {

        let strDiv = `            
                                                
    	<div id="Contador">                      
    		<h3>item:${jsonItens[index].codigo}</h3>                     
    	</div>                                   
                                                
    	<div id="produtos">                      
    		<h3>Produto:${jsonItens[index].nome}</h3>    
    	</div>                                   
                                                
    	<div id="valor">                         
    		<h3>Valor:${jsonItens[index].preco}</h3>                    
    	</div>                                   
                                                
    	<div id="descri">                        
    		<h3> Descrição:${jsonItens[index].descricao} </h3> 
    	</div>                                   
                                            
    	<img src="${jsonItens[index].imagem}" alt="produto" class="imgitem"> 

        <button type="button" class="remove" onclick="removeElement(this)">Remover</button>
        
        `

        var div = document.createElement("div");
        div.setAttribute("class", "item")
        div.setAttribute("id", "itens_" + idItemD)
        this.idItem = idItemD + 1
        div.innerHTML = strDiv;
        document.getElementById("divItens").appendChild(div);

    }

}


function removeElement(element) {
    // Removes an element from the document
    var element = element.parentElement
    var elementID = element.id
    var el = document.getElementById(elementID);
    element.parentNode.removeChild(el);
}

function clearForm() {
    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("URL").value = ""
    document.getElementById("Descricao").value = ""
}


function ListaProdutos() {

    const URL = 'https://api.conexaonfe.com.br/v1/produtos';

    fetch(URL, {
            metodo: 'GET',
            headers: {
                'Authorization': 'bbb',
                'Content-type': 'application/json'
            }
        })
        .then(async response => {
            this.additem(await response.json());
        })
        .catch(error => {
            console.log(error)
        });

    console.log(`teste`)
}