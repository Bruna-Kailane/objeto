//funcao
function calcularGorjeta() {
    parseFloat(this.valorConta);

    if (this.valorConta < 50) {        
        return this.valorConta * 0.2;
    }
    else if(this.valorConta >= 50 && this.valorConta <= 200){
        return this.valorConta * 0.15;
    }else{
        return this.valorConta * 0.1;
    }
}

function calcularTotal() {
    return parseFloat(this.calcularGorjeta()) + parseFloat(this.valorConta);
   
}

function toString() {
    console.log(`Restaurante do(a) ${this.nome} - [Valor: R$ ${this.valorConta} | Gorjeta: R$ ${this.calcularGorjeta()} | Total: R$ ${this.calcularTotal()}]`);
}
const qtdRestaurante = prompt ("Quantidade de restaurantes visitados?")
console.log(qtdRestaurante);
const restaurantes = new Array();

for (let i = 0; i < qtdRestaurante; i++) {
    const rest = prompt ("Nome do Restaurante:");
    const ContaRest = prompt("Valor da conta:");

    const restaurante = {
        nome: rest,
        valorConta: ContaRest,
        calcularGorjeta,
        calcularTotal,
        toString: toString,
    }
    restaurante.calcularGorjeta();
    restaurante.calcularTotal();
    restaurantes.push(restaurante);
}

restaurantes.gastoTotal = function () {
    let gastoTotal = 0;

    for (const restaurante of this) {
        gastoTotal += restaurante.calcularTotal();
    }
   return gastoTotal;
}

restaurantes.mediaGasto = function (){
    let media =0;

    for (let i = 0; i < restaurantes.length; i++) {
        const rest = restaurantes[i];
        media = media + rest.calcularTotal();
        media = media / qtdRestaurante;
    }
    return media;
}

restaurantes.maiorGasto = function (){
    let maior;

    for (let i = 0; i < restaurantes.length; i++) {
        let rest = restaurantes[i];
        maior = restaurantes[0];
        if(maior.calcularTotal() < rest.calcularTotal()){
            maior = rest.nome;
        }
    }

    return maior;
}

restaurantes.imprimir = function () {
    console.log(`Restaurantes visitados no feriado: ${qtdRestaurante}
    Lista de gastos:`)

    for (let i = 0; i < restaurantes.length; i++) {
        let rest = restaurantes[i];
        rest.toString();
        console.log(i);
        
    }
    console.log(`Total gasto: R$ ${restaurantes.gastoTotal()}
    Média de gastos: R$ ${restaurantes.mediaGasto()}
    Restaurante com maior gasto total: ${restaurantes.maiorGasto()}`);   
}

restaurantes.imprimir();