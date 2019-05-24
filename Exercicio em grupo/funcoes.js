const formulario = {}

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

    additem()

}

function additem() {

    let strDiv = `
    <div class="item" id="itens">               
                                                
    	<div id="Contador">                      
    		<h3>item: XXX</h3>                     
    	</div>                                   
                                                
    	<div id="produtos">                      
    		<h3>Produto:${this.formulario.nome}</h3>    
    	</div>                                   
                                                
    	<div id="valor">                         
    		<h3>${this.formulario.valor}</h3>                    
    	</div>                                   
                                                
    	<div id="descri">                        
    		<h3> Descrição:${this.formulario.Descricao} </h3> 
    	</div>                                   
                                                
                                                
    	<img src="https://www.empreendaecommerce.com.br/wp-content/uploads/2018/07/prodBlog-696x479.png" alt="Smiley face" class="imgitem"> 
    </div> `

    document.getElementById("divItens").innerHTML = strDiv


}