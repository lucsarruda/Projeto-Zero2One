const formulario = {}
var idItem = 1

function chamaBotao() {
    const nome = document.getElementById("nome").value
    const valor = document.getElementById("valor").value
    const URL = document.getElementById("URL").value
    const Descricao = document.getElementById("Descricao").value


    this.formulario = {
            nome: nome,
            valor: valor,
            URL: URL,
            Descricao: Descricao
        }
        //adiciona item
    additem()
        //Limpa formulario
    clearForm()
}

function additem() {

    var idItemD = this.idItem

    let strDiv = `            
                                                
    	<div id="Contador">                      
    		<h3>item:${idItemD}</h3>                     
    	</div>                                   
                                                
    	<div id="produtos">                      
    		<h3>Produto:${this.formulario.nome}</h3>    
    	</div>                                   
                                                
    	<div id="valor">                         
    		<h3>Valor:${this.formulario.valor}</h3>                    
    	</div>                                   
                                                
    	<div id="descri">                        
    		<h3> Descrição:${this.formulario.Descricao} </h3> 
    	</div>                                   
                                                
                                                
    	<img src="${this.formulario.URL}" alt="produto ${this.formulario.nome}" class="imgitem"> 
        
        <button type="button" class="remove" onclick="removeElement(this)">Remover</button>
        
        `

    var div = document.createElement("div");
    div.setAttribute("class", "item")
    div.setAttribute("id", "itens_" + idItemD)
    this.idItem = idItemD + 1
    div.innerHTML = strDiv;
    document.getElementById("divItens").appendChild(div);


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