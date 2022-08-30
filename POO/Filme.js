class Filme {

    constructor(nome, genero, lancamento, elenco, faixaEtaria) {
        this.nome = nome;
        this.genero = genero;
        this.lancamento = lancamento;
        this.elenco = elenco;
        this.faixaEtaria = faixaEtaria;
        //Aqui vai os parâmetros do filme, ou seja, suas CARACTERÍSTICAS que fazem parte do filme. 
    }

    iniciar() {
        return "O filme começou.";
    }
    pausar() {
        return "O filme está pausado.";
    }
    finalizar() {
        return "O filme finalizou.";
    }

    //  Aqui é onde vai os métodos(AÇÕES) da classe filme. Ou seja: O que o filme faz? O que ele pode fazer? Qual os comportamentos
    //  do filme? O filme pode pausar, avançar, iniciar, finalizar... Porém o filme não pode assistir. Como o filme
    //  irá assistir o filme? Ou seja, aqui são os métodos sobre o próprio filme, ou seja, suas AÇÕES.


}

let filme = new Filme("Um Sonho de Liberdade", "Suspense", "25/01/1995", "Tim Robbins, Morgan Freeman, Bob Guntan", "14 anos");
console.log(filme);
console.log(filme.iniciar());