function calcularTotal(preco: number, quantidade: number): number {
    return preco * quantidade;
}

const total: number = calcularTotal(49.9, 3);
console.log(`O total do estoque é: R$ ${total.toFixed(2)}`);