console.log('********** Iniciando... **********')
let novoNome = 'Lucas'

const exibeNome = (nome2) => {
    console.log('*************exibeNome()')
    let nome = 'Lucas';
    console.log(nome);
    nome = nome2;

    return nome
};

function exibeNome2(novoNome, idade) {
    console.log('*************exibeNome2()')
    let nome = novoNome
    if (nome === "joao") {
        console.log("é o " + nome);
    } else {
        console.log("NAO é o JOAO. é " + nome);
    }
    let retorno = novoNome + ' - ' + idade + ' anos'
    return retorno
};

const produtosMarotos = [];

const adicionarNaLista = (produtos) => {
    produtosMarotos.push(produtos)
}

//Alimentando Array
/*for (let index = 0; index <= 10; index++) {
    adicionarNaLista("Produto" + index)
}*/
adicionarNaLista("rodolfo")
adicionarNaLista("matheus")
adicionarNaLista("joana")
adicionarNaLista("maria")
adicionarNaLista("roberta")

console.log("produtosMarotos", produtosMarotos)
    /*
    for (let index = 0; index < produtosMarotos.length; index++) {
        if (produtosMarotos[index] === "rodolfo" || produtosMarotos[index] === "jose" ||
            produtosMarotos[index] === "maria") {
            produtosMarotos.splice(index, 1);
        }

    } */

let produtosMarotos222 = produtosMarotos.filter(produtosMarotos => produtosMarotos.includes("o"));
console.log("produtosMarotos222", produtosMarotos222)

let produtosMarotos333 = []
produtosMarotos.forEach(function(item) {
    if (item.includes("o")) {
        produtosMarotos333.push(item)
    }
});
console.log("produtosMarotos333", produtosMarotos333);

const casa = {
    cor: 'branca',
    rua: 'rua londrina',
    bairro: 'são marcos',
    cidade: 'joinville',
    estado: 'sc'
}
console.log('casa', JSON.stringify(casa))
console.log(casa.rua)



/*
produtosMarotos.splice(produtosMarotos.indexOf("rodolfo"), 1);
produtosMarotos.splice(produtosMarotos.indexOf("jose"), 1);
produtosMarotos.splice(produtosMarotos.indexOf("maria"), 1);
produtosMarotos.push("Renata")
console.log("produtosMarotos", produtosMarotos)
produtosMarotos.pop()
produtosMarotos.shift()




console.log(exibeNome('jao'));
console.log(exibeNome2(novoNome, 24));
console.log("produtosMarotos", produtosMarotos)
*/
console.log('********** Fim. ******************')