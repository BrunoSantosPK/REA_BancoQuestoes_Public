function sortear(lista, quantidade) {
    const total = lista.length;
    if(quantidade > total) {
        return lista;
    }

    const aleatorio = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const sorteio = [];
    const sorteado = [];
    const min = 0;
    const max = total - 1;

    while(sorteio.length < quantidade) {
        let i = aleatorio(min, max);
        if(sorteado.indexOf(i) == -1) {
            sorteio.push(lista[i]);
            sorteado.push(i);
        }
    }

    return sorteio;
}

module.exports = sortear;