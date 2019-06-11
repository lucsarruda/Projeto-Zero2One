function GetAPI(FuncaoCallBack) {

    //const URL = 'http://192.168.25.160:3000/todos' //'https://api.myjson.com/bins/jh0yn';
     const URL = 'http://localhost:8080/tarefas' //'https://api.myjson.com/bins/jh0yn';
        const username = 'usuario1'
        const password = '1'

    FuncaoCallBack = eval(FuncaoCallBack)
    fetch(URL, {
            metodo: 'GET',
            headers: {
                'Authorization': 'Basic ' +  btoa(username + ":" + password),
                'Content-type': 'application/json'
            }
        })
        .then(async response => {
            FuncaoCallBack(await response.json())
        })
        .catch(error => {
            console.log(error)
        });

}

function ListaInicial(json) {


    document.getElementById("tbodytarefas").innerHTML = ""
    limpaGeral()

    for (let index = 0; index < json.length; index++) {

        let checkvar = ""
        if (json[index].status) {
            checkvar = "checked"
        }
        let newRow = $("<tr>");
        let cols = "";
        cols += `<td>${json[index].id}</td>
        <td>${json[index].nome}</td>
        <td><input type="checkbox" ${checkvar} disabled></td>
        <td><button type="button" class="btn btn-waring" onclick='ModalAlterar(this)'><span class="glyphicon glyphicon-pencil"></span>Alterar</button></td>
        <td><button type="button" class="btn btn-danger" onclick='ModalExcluir(${json[index].id})'><span class="glyphicon glyphicon-trash"></span>Excluir</button></td>
        `
        newRow.append(cols);
        $("#tarefas").append(newRow);

    }

}


function cadastrar() {

   //const URL2 = 'http://192.168.25.160:3000/todos';
    const URL2 = 'http://localhost:8080/tarefas' //'https://api.myjson.com/bins/jh0yn';
    const username = 'usuario1'
    const password = '1'


    fetch(URL2, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' +  btoa(username + ":" + password),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nome: $("#nometarefa_novo").val(),
                status: $('#checkada_novo').is(':checked')
            })
        })
        .then(async response => {
            await GetAPI('ListaInicial')
        })
        .catch(error => {
            console.log(error)
        });

    $('#myModal').modal('toggle');
}

function excluir(id) {

    //const URL2 = 'http://192.168.25.160:3000/todos/' + $("#IDEXCLUI").val();
    const URL2 = 'http://localhost:8080/tarefas/' + $("#IDEXCLUI").val(); //'https://api.myjson.com/bins/jh0yn';
    const username = 'usuario1'
    const password = '1'

    fetch(URL2, {
            method: 'DELETE',
            headers: {
                 'Authorization': 'Basic ' +  btoa(username + ":" + password),
                'Content-type': 'application/json'
            }
        })
        .then(async response => {
            await GetAPI('ListaInicial')
        })
        .catch(error => {
            console.log(error)
        });

    $('#myModalExcluir').modal('toggle');
}


function ModalExcluir(id) {
    $("#IDEXCLUI").val(id)
    $('#myModalExcluir').modal('show');
}

function limpaGeral() {
    $("#IDEXCLUI").val("")
    $("#IDALTERA").val("")
    $("#nometarefa_novo").val("")
    $("#checkada_novo").prop('checked', false)
    $("#nometarefa_altera").val("")
    $("#checkada_altera").prop('checked', false)
}

function ModalAlterar(lineobj) {
    //lineobj.parentElement.parentElement.children[0].innerText
    //lineobj.parentElement.parentElement.children[1].innerText
    //lineobj.parentElement.parentElement.children[2].children[0].checked
    $("#IDALTERA").val(lineobj.parentElement.parentElement.children[0].innerText)
    $("#nometarefa_altera").val(lineobj.parentElement.parentElement.children[1].innerText)
    $("#checkada_altera").prop('checked', lineobj.parentElement.parentElement.children[2].children[0].checked)
    $('#myModalAlterar').modal('show');
}



function alterar() {

    //const URL2 = 'http://192.168.25.160:3000/todos/' + $("#IDALTERA").val();
    const URL2 = 'http://localhost:8080/tarefas/' + $("#IDALTERA").val(); //'https://api.myjson.com/bins/jh0yn';
    const username = 'usuario1'
    const password = '1'

    fetch(URL2, {
            method: 'PUT',
            headers: {
                'Authorization': 'Basic ' +  btoa(username + ":" + password),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                    nome: $("#nometarefa_altera").val(),
                    status: $('#checkada_altera').is(':checked')
            })
        })
        .then(async response => {
            await GetAPI('ListaInicial')
        })
        .catch(error => {
            console.log(error)
        });

    $('#myModalAlterar').modal('toggle');
}