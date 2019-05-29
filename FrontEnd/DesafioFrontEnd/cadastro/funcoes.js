function GetAPI(FuncaoCallBack) {

    const URL = 'http://192.168.25.160:3000/todos' //'https://api.myjson.com/bins/jh0yn';
    FuncaoCallBack = eval(FuncaoCallBack)
    fetch(URL, {
            metodo: 'GET',
            headers: {
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
        <td><button type="button" class="btn btn-waring" data-toggle="modal" data-target="#myModalAlterar"><span class="glyphicon glyphicon-pencil"></span>Alterar</button></td>
        <td><button type="button" class="btn btn-danger" onclick='ModalExcluir(${json[index].id})'><span class="glyphicon glyphicon-trash"></span>Excluir</button></td>
        `
        newRow.append(cols);
        $("#tarefas").append(newRow);

    }

}


function cadastrar() {

    const URL2 = 'http://192.168.25.160:3000/todos';

    fetch(URL2, {
            method: 'POST',
            headers: {
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

function alterar() {
    $('#myModalAlterar').modal('toggle');
}


function excluir(id) {

    const URL2 = 'http://192.168.25.160:3000/todos/' + $("#IDEXCLUI").val();

    fetch(URL2, {
            method: 'DELETE',
            headers: {
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
    $("#nometarefa_novo").val("")
    $("#checkada_novo").prop('checked', false)
    $("#nometarefa_altera").val("")
    $("#checkada_altera").prop('checked', false)
}

function ModalAlterar() {

}