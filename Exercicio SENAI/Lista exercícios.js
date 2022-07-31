// 1. Desenvolva uma lógica onde o usuário digita um texto qualquer e esse texto é concatenado 
// no console após a seguinte frase: 'O texto digitado é: ';
/*

var txt1 = prompt("Digite um texto quaquer: ")
console.log("O texto digitado é: " + txt1)
*/

// 2. Desenvolva uma lógica onde o usuário digita um texto qualquer e o sistema indica de forma
// coerente no console uma das frases 'Você digitou um texto.' ou 'Você digitou um número'.
/*
var val = prompt("Digite um número ou uma letra.")
if(isNaN(val) === true){
  console.log("Você digitou uma String")
}else{
  console.log("Você digitou um número")
}
*/

//3. Desenvolva uma lógica onde o usuário digita dois números e o sistema, após validar se são números,
//   imprime no console o resultado das 4 operações aritméticas básicas utilizando os dois números.
/*

var num1 = prompt("Digite um número qualquer: ")
var num2 = prompt("Digite outro número qualquer: ")

if (isNaN(num1, num2) !== false) { //isNaN para ver se é número ou não.
  console.log("Você não digitou corretamente.")
} else {
  var multi = parseInt(num1) * parseInt(num2) // parseint para não ocorrer concatenação
  var div = parseInt(num1) / parseInt(num2)
  var adic = parseInt(num1) + parseInt(num2)
  var sub = parseInt(num1) - parseInt(num2)
  console.log("O valor da multiplicação é: " + multi)
  console.log("O valor da divisão é: " + div)
  console.log("O valor da adição é: " + adic)
  console.log("O valor da subtração é: " + sub)
}
*/

//4. Desenvolva uma lógica onde o usuário digita dois números e o sistema, após validar se são números,
//   identifica se são iguais ou diferentes entre si.
/*

var num1 = parseInt(prompt("Digite um número qualquer: "))
var num2 = parseInt(prompt("Digite outro número qualquer: "))
var confirm1 = num1 && num2
if(confirm1 === parseInt){
  console.log("Você não digitou números.")
}
else if(num1 != num2){
  console.log("Você não digitou números iguais.")
}
  else{
  console.log("Você digitou números iguais!")
}
*/

//5. Desenvolva uma lógica onde o usuário digita um número e o sistema,
//   após validar se é um número, identifica se ele é par ou ímpar.
/*
var valor = parseInt(prompt("Digite um número: "))
if((valor % 2) === 1){
  console.log("Esse número é ímpar.")
}
else{
  console.log("Esse número é par.")
}
*/

//6. Desenvolva uma lógica onde o usuário digita dois números e o sistema,
//   após validar se são números, identifica qual deles é o maior.
/*

var num1 = parseInt(prompt("Digite um número qualquer: "))
var num2 = parseInt(prompt("Digite um segundo número qualquer"))
if(num1 === num2){
  console.log("Os números são iguais")
}
if(num1 > num2){
  console.log(`O primeiro número ${num1} é maior que o segundo número ${num2}`)
}
if(num1 < num2){
  console.log(`O segundo número ${num2} é maior que o primeiro número ${num1}`)
}
else{
  console.log("Você não digitou os números corretamente.")
}
*/

//7. Desenvolva uma lógica onde o usuário digita três números e o sistema,
//   após validar se são números, imprime eles em ordem crescente.
/*
//--------NÃO ENTENDI ESSE EXERCÍCIO, PEGUEI AJUDA EM FÓRUNS PARA OBTER UM RESULTADO
//--------PORÉM NÃO ENTENDI MUITO BEM A LÓGICA. E COM NÚMEROS MUITO GRANDES ELE NÃO FUNCIONA POR ALGUM MOTIVO.

var num = []
for (var prim = 0; prim < 3; prim++)
  num[prim] = prompt("Digite três números: ")
num.sort()
for (var prim = 0; prim < 3; prim++)
  console.log(num[prim])

*/

//8. Desenvolva uma lógica onde o usuário digita três números e o sistema,
//   após validar se são números, imprime eles em ordem decrescente.
/*
var num = parseInt(prompt("Digite um número: "))
if (isNaN( num1 === true)) {
  console.log("Você não digitou um número. Tente novamente")
} if (isNaN(num1 === false)) {
  var num2 = parseInt(prompt("Digite um número novamente"))
} if (isNaN(num2 === true)) {
  console.log("Você não digitou um número. Tente novamente")
} if (isNaN(num2 === false)) {
  var num3 = parseInt("Digite um número novamente")
} if (isNaN(num3 === true)) {
  console.log("Você não digitou um número. Tente novamente")
}
var ordem = [num1, num2, num3]
ordem.sort(a, b => b - a)
console.log(ordem)
*/


//9. Desenvolva uma lógica onde o usuário digita um nome e o sistema valida se esse nome é o seu.
/*
var nome = prompt("Digite o seu nome verdadeiro")
if (nome != 'Pedro') {
  console.log("Esse não é o seu nome.")
} else {
  console.log("Esse é o seu nome.")
}
*/

//10. Desenvolva uma lógica onde o usuário digita três números e o sistema, após validar se são números,
//realiza a divisão do primeiro número ímpar digitado pelo primeiro número par e apresenta como resultado o resto da divisão.
//Caso não haja um número par e um número ímpar deve ser emitido uma mensagem de aviso de valores inválidos.

//NÃO ENTENDI A LÓGICA PEDIDA NO EXERCÍCIO.