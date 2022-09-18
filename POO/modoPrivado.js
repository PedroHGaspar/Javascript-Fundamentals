class Exemplo {
    algumMetodoPublico() {
      this.#algumMetodoPrivado();
    }
  
    #algumMetodoPrivado() {//Tem que ter a # na frente para se tornar um método privado.
      console.log('Você me chamou??');
    }
  }
  
  const myExemplo = new Exemplo();
  
  myExemplo.algumMetodoPublico(); // >>>>> 'Você me chamou?'
  
  myExemplo.#algumMetodoPrivado(); // >>>>> SyntaxError
  //Métodos privados não podem ser acessados se não for pela função principal.