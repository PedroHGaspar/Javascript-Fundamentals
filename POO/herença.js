class Professor extends Pessoa {

    ensina;
  
    constructor(nome, ensina) {
      super(nome);
      this.ensina = ensina;
    }
  
    introduceSelf() {
      console.log(`Meu nome é ${this.nome}, e eu serei seu professor de ${this.ensina}.`);
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  
  }