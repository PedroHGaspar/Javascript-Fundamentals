class Estudante extends Pessoa {

    #ano;
  
    constructor(nome, ano) {
      super(nome);
      this.#ano = ano;
    }
  
  
    introduceSelf() {
      console.log(`Olá! Meu nome é ${this.nome}, e estou no ${this.#ano} ano da faculdade.`);
    }
  
    canStudyArchery() {
      return this.#ano > 1;
    }
  
  }