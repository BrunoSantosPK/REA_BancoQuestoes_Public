function contarTopicos(questoes) {
    const contagem = [];

    for(let i = 0; i < questoes.length; i++) {
        let indc = contagem.findIndex(item => item.topico == questoes[i].topico);
        if(indc == -1) {
            contagem.push({ topico: questoes[i].topico, quantidade: 1 });
        } else {
            contagem[indc].quantidade++;
        }
    }

    return contagem;
}

module.exports = contarTopicos;