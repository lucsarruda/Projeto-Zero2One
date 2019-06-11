const concluidas = []

// @loadConcluidas()
// Funcao para carregar e criar table com tarefas concluidas
function loadConcluidas() {

    document.getElementById("divItens").innerHTML = ""

    if (concluidas.length === 0) {
        return
    }

    let strDiv = `            
                                                
            <h2>Concluidas</h2>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Status</th>
                </tr> `

    for (let index = 0; index < concluidas.length; index++) {
        strDiv += `
                <tr>
                    <td>${concluidas[index].nome}</td>
                    <td><input type="checkbox" checked disabled></td>
                </tr>
                `

    }
    strDiv += `</table>`

    var div = document.createElement("div");
    div.setAttribute("class", "item")
    div.innerHTML = strDiv;
    document.getElementById("divItens").appendChild(div);

}

// @checarCheck(obj)
//     - Parametro : obj - Objeto vindo do evento onclik
// Funcao de verificação de check ou uncheck no evento do input
function checarCheck(obj) {

    const varobj = obj

    //Chama função para alterar API - Metodo PUT
    PutAPI(varobj.id , varobj.value  , varobj.checked )

    if (varobj.checked) {
        concluidas.push({ 'id': varobj.id, 'nome': varobj.value })
        loadConcluidas()
    } else {
        for (let index = 0; index < concluidas.length; index++) {
            if (concluidas[index].id === varobj.id) {
                concluidas.splice(index, 1);
                loadConcluidas()
                return
            }
        }

    }

}

// @CarregaGet()
// Funcao para chamada de API das tarefas inicias
function CarregaGet() {

     const URL = 'http://localhost:8080/tarefas' //'https://api.myjson.com/bins/jh0yn';
    const username = 'usuario1'
    const password = '1'

    fetch(URL, {
            metodo: 'GET',
            headers: {
                'Authorization': 'Basic ' +  btoa(username + ":" + password),
                'Content-type': 'application/json'
            }
        })
        .then(async response => {
            CarregaTarefasCabec(await response.json())
        })
        .catch(error => {
            console.log(error)
        });


}

// @CarregaTarefasCabec(json)
//      - Parametro : json - RETORNO DA API INICIAL
// Funcao para criação inicial da carga das tarefas
function CarregaTarefasCabec(json) {
    document.getElementById("divTarefas").innerHTML = ""

    let strDiv = ''

    for (let index = 0; index < json.length; index++) {
        let checkvar = ""
        if (json[index].status) {
            checkvar = "checked"
            concluidas.push({
                'id': json[index].id.toString(),
                'nome': json[index].nome
            })
            loadConcluidas()
        }
        strDiv += `                                          
            <input type="checkbox" class="checks" name="${json[index].id}" id="${json[index].id}" value="${json[index].nome}" onclick="checarCheck(this)" ${checkvar} > ${json[index].nome}<br>
        `
    }

    var div = document.createElement("div");
    div.innerHTML = strDiv;
    document.getElementById("divTarefas").appendChild(div);
}


function PutAPI(id , varnome , check){

    const URL2 = 'http://localhost:8080/tarefas/' + id //'https://api.myjson.com/bins/jh0yn';
    const username = 'usuario1'
    const password = '1'

    fetch(URL2, {
            method: 'PUT',
            headers: {
                'Authorization': 'Basic ' +  btoa(username + ":" + password),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                    nome: varnome ,
                    status: check
            })
        })
        .then(async response => {
            await console.log("Alterado PUT API ")
        })
        .catch(error => {
            console.log(error)
            alert(error)
        });
}