// Debito = 1
// Dinheiro ou Pix = 2
// Credito em até 2x = 3
// Credito acima de 2x = 4

var preco = 20.00;

var formaPagamento = 4;
var valorPago;

if (formaPagamento === 1){
    valorPago = preco - preco / 100 * 10;
}else if (formaPagamento === 2){
    valorPago = preco - preco / 100 * 15;
}else if (formaPagamento === 3){
    valorPago = preco / 2;
}else {
    valorPago = preco + preco / 100 * 10;
}

console.log(valorPago);