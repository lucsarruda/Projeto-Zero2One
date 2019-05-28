const formulario = {}
var idItem = 1

function chamaBotao() {
    const codigo = document.getElementById('codigo').value;
    const nome = document.getElementById("nome").value
    const valor = document.getElementById("valor").value
    const URL = document.getElementById("URL").value
    const Descricao = document.getElementById("Descricao").value
    if (codigo === '') {

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
    } else {
        const URL2 = 'https://api.conexaonfe.com.br/v1/produtos/';

        fetch(URL2, {
                method: 'POST',
                headers: {
                    'Authorization': 'bbb',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    codigo: codigo,
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


    }


    //Limpa formulario
    clearForm()
}

function additem(jsonItens) {

    var idItemD = this.idItem

    document.getElementById("divItens").innerHTML = ""

    for (let index = 0; index < jsonItens.length; index++) {

        let strDiv = `            
                                                
    	<div id="Contador">                      
    		<h3 id="codigo_${jsonItens[index].codigo}">item:${jsonItens[index].codigo}</h3>                     
    	</div>                                   
                                                
    	<div id="produtos">                      
    		<h3 id="nome_${jsonItens[index].codigo}" >Produto:${jsonItens[index].nome}</h3>    
    	</div>                                   
                                                
    	<div id="valor">                         
    		<h3 id="Valor_${jsonItens[index].codigo}" >Valor:${jsonItens[index].preco}</h3>                    
    	</div>                                   
                                                
    	<div id="descri">                        
    		<h3 id="descri_${jsonItens[index].codigo}" > Descrição:${jsonItens[index].descricao} </h3> 
    	</div>                                   
                                            
        <img id="imagem_${jsonItens[index].codigo}" src="${jsonItens[index].imagem}" alt="produto" class="imgitem"> 
        <div id="descri">   
            <button type="button" class="altera" id='${jsonItens[index].codigo}' onclick="alteraProdutos(this.id)">Altera</button>
            <button type="button" class="remove" id='${jsonItens[index].codigo}' onclick="removeElement(this.id)">Remover</button>
        </div> 
        
        `

        var div = document.createElement("div");
        div.setAttribute("class", "item")
        div.setAttribute("id", "itens_" + idItemD)
        this.idItem = idItemD + 1
        div.innerHTML = strDiv;
        document.getElementById("divItens").appendChild(div);
        //<button type="button" class="altera" id='${jsonItens[index].codigo}' onclick="">altera</button>
    }

}


function removeElement(id) {
    // Removes an element from the document
    //var element = element.parentElement
    //var elementID = element.id

    //var el = document.getElementById(elementID);
    //element.parentNode.removeChild(el); 
    const URL3 = 'https://api.conexaonfe.com.br/v1/produtos/' + id + '/remover';

    fetch(URL3, {
            method: 'GET',
            headers: {
                'Authorization': 'bbb',
                'Content-type': 'application/json'
            }

        })
        .then(async response => {
            await ListaProdutos()
        })
        .catch(error => {
            console.log(error)
        });





}

function clearForm() {
    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("URL").value = ""
    document.getElementById("Descricao").value = ""
    document.getElementById("incluioraltera").innerHTML = "Adicionar!"
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

function alteraProdutos(id) {

    document.getElementById('codigo').value = document.getElementById("codigo_" + id).innerText.split(":")[1]
    document.getElementById("nome").value = document.getElementById("nome_" + id).innerText.split(":")[1]
    document.getElementById("valor").value = document.getElementById("Valor_" + id).innerText.split(":")[1]
    document.getElementById("URL").value = document.getElementById("imagem_" + id).src
    document.getElementById("Descricao").value = document.getElementById("descri_" + id).innerText.split(":")[1]

    document.getElementById("incluioraltera").innerHTML = "Alterar!"

    window.scrollTo(0, 0);


}