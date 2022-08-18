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


//Differences
//1. Hoisting:

//In JavaScript, hoisting refers to the availability of the variables and the functions at the beginning of the code.
//Function declarations are similar to var; they will be automatically hoisted, whereas function expressions will not be hoisted.
//In simple terms, function declarations will load before any other code, and function expressions will load when the interpreter reaches it.

//1. Içamento:

//No JavaScript, içamento refere-se a disponibilidade das variáveis e das funções no começo do código.
//Funções de declaração são similares a "var"; elas serão içadas automaticamente, enquanto a função de expressão não será içada.
//Em termos simples, funções de declaração serão carregadas antes de qualquer outro código, enquanto as funções de expressão se rão carregadas quando o usuário/intérprete chegar nelas naquele ponto específico do código.




//