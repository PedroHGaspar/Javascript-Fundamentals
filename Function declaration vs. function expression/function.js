//A function declaration defines a function that will be executed when it is invoked.

//Uma funcção de declaração define uma função que será executada quando a mesma for chamada.

function declaration() {
    // body
  }


//--------------------------------//


//A function expression is similar to a function declaration, with the difference that it can be stored in a variable. As soon as the function is defined with an expression, it is invoked

//A função de expressão é similar à função de declaração, com a diferença que pode ser armazenada em uma variável. Quando uma função é definida por uma expressão, ela é chamada.

const expression = function() {
  // body
}


//--------------------------------//


//DIFFERENCES
//1. Hoisting:

//In JavaScript, hoisting refers to the availability of the variables and the functions at the beginning of the code.
//Function declarations are similar to var; they will be automatically hoisted, whereas function expressions will not be hoisted.
//In simple terms, function declarations will load before any other code, and function expressions will load when the interpreter reaches it.

//1. Içamento:

//No JavaScript, içamento refere-se a disponibilidade das variáveis e das funções no começo do código.
//Funções de declaração são similares a "var"; elas serão içadas automaticamente, enquanto a função de expressão não será içada.
//Em termos simples, funções de declaração serão carregadas antes de qualquer outro código, enquanto as funções de expressão se rão carregadas quando o usuário/intérprete chegar nelas naquele ponto específico do código.


//--------------------------------//


//Defining a function using function declaration:

declarationTwo();

function declarationTwo() {
  console.log("I am created using function declaration!");
}



//Defining a function using function expression:

// calling function before its declaration will stop its execution.
// chamar a função antes da declaração irá parar sua execução.

// comment out following line and then the code will work fine.
// comente essa linha de baixo e o código irá funcionar.

expressionTwo();//This must be commented so that the code can work.

const expressionTwo = function() {
  console.log("I am created using function expression");
}

expressionTwo();


//--------------------------------//


//2. Callback:

//In JavaScript, a callback is a function that is passed to another function as an argument.
//If a callback is a function declaration, it will be available in the global scope, which is not necessary most of the time.
//If a callback is a function expression, it will not be available outside of the function that uses it.

//No JavaScript, um "callback" é uma função que é passada para outra função como um argumento.
//Se um "callback" é uma função de declaração, estará disponível no escopo global, o que não é necessário na maioria das vezes.
//Se um "callback" é uma função de expressão, não estará disponível fora da função que o usa.


//Callback using function declaration:

function isSmaller(num) {
    return num < 5;
  }
  const arr = [1, 8, 7, 4 ,3, 10];
  console.log(arr.filter(isSmaller));


//Callback using function expression:

const arr = [1, 8, 7, 4 ,3, 10];
console.log(arr.filter(num => num < 5));//Isso é MUITO bom, pode evitar de se fazer funções grandes e inúteis, fazendo com que o código fique mais enxuto, organizado e rápido.


//--------------------------------//


//3. IIFE:

//An Immediately-invoked Function Expression (IIFE) is a way to execute functions immediately, as soon as they are created.
//As the name suggests, IIFEs can be created using function expression.

// Uma Função de Expressão Invocada Imediatamente (FEII) é uma forma de executar funções imediatamente, logo quando são criadas.
//Como o nome sugere, FEIIs podem ser criadas usando funções de expressão.

(() => {
    console.log("I am a IIFE.");
  })();//Mais avançado, mas muito bom para se usar!


//--------------------------------//


//Summary

//These are some basic differences between function declaration and function expression. The usage of them depends on the use case. If the function is required globally, use function declaration. If the scope of the function needs to be limited, use function expression.

//Existem algumas diferenças básicas entre funções de declaração e funções de expressão. O uso delas depende de cada caso. Se uma função é necessária globalmente, use a função de declaração. Se o escopo da função precisa ser limitado, use uma função de expressão!