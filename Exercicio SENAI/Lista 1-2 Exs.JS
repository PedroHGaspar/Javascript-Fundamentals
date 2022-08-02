//EXERCÍCIO 1
/*
var altura = parseFloat(prompt("Digite a altura do retângulo: "))
var base = parseFloat(prompt("Digite a base do retângulo: "))

var area = base * altura
console.log(area)

if (altura === base) {
  console.log("O retângulo é quadrado")
}
else {
  console.log("O retângulo não é quadrado")
}
*/

// Exercício 2 
/*
var lado1 = parseFloat(prompt("Digite a altura do triângulo"))
var lado2 = parseFloat(prompt("Digite base do triângulo"))

var base = (lado1 * lado2) / 2
console.log(base)
*/

// Exercício 3
/*
var raio = parseFloat(prompt("Digite o raio da circunferência: "))
var area =  Math.PI * raio * raio

console.log("A área da circunferência é: " + area)

var perimetro = (2 * Math.PI) * raio
console.log("O perímetro vale: " + perimetro)
if(area > 2){
  console.log("A área da circunferência é maior que 2.")
}else{
  console.log("a área da circunferência é menor que 2.")
}
*/

// EXERCÍCIO 4
/*
var a = parseInt(prompt("Digite qualquer número: "))

console.log("O sucessor do número digitado é: " + ++a)

console.log("O antecessor do número digitado é: " + --a)

console.log("O antecessor do número digitado é: " + --a)
*/

// EXERCíCIO 5
/*
var idade = parseInt(prompt("Digite a sua idade: "))
console.log(idade)

var meses = idade * 12
console.log(meses)

var dias = idade * 365
console.log(dias)

if(idade < 18){
  console.log("A pessoa é menor de idade.")
}else{
  console.log("A pessoa é maior de idade")
}
*/
/*
// EXERCíCIO 6
var C = parseInt(prompt("Digite a temperatura em Celcius"))
var F = (C * 1.8) + 32
console.log(C)
console.log(F)

if(C <= 0){
  console.log("A temperatura é congelante")
}else{
  console.log("A temperatura não irá congelar a água.")
}
*/
/*
// EXERCÍCIO 7
var C = parseInt(prompt("Digite a temperatura em Fahreheint"))
var F = (C - 32) / 1.8
//-32 / 1.8
console.log(C)
console.log(F)

if (C <= 0) {
  console.log("A temperatura é congelante")
} else {
  console.log("A temperatura não irá congelar a água.")
}
*/

//EXERCÍCIO 8
/*
var nota1 = parseInt(prompt("Digite a primeira nota: "))
var nota2 = parseInt(prompt("Digite a segunda nota: "))
var nota3 = parseInt(prompt("Digite a terceira nota: "))

var media = (nota1 + nota2 + nota3) / 3
console.log(media)
if(media < 7){
  console.log("Você está reprovado")
}else{
  console.log("Você está aprovado!")
}
*/

//EXERCÍCIO 9 
/*
var num1 = parseInt(prompt("Digite o primeiro número: "))
var num2 = parseInt(prompt("Digite o segundo número: "))
var num3 = parseInt(prompt("Digite o terceiro número: "))

var menor, maior

if(num1 < num2){
  menor = num1
  maior = num2
}else{
  menor = num2
  maior = num1
}

if (menor > num3) {
  menor = num3
}
if(maior < num3){
  maior = num3
}
if ((num2 === menor) && (num3 === maior) || (num3 === menor) && (num2 === maior)){
  medio = num1
}
if((num1 === menor) && (num3 === maior) || (num3 === menor) && (num1 === maior)){
  medio = num2
}
if((num1 === menor) && (num2 === maior) || (num2 === menor) && (num1 === maior)){
  medio = num3
}

console.log("O menor número é: " + menor)
console.log("O maior número é: " + maior)
console.log("Os números em ordem são: " + menor + ', ' + medio + ', ' + maior)
*/


//----------------------------------------------------------------------------------------------------------------------

//LISTA 2

//EXERCÍCIO 1---EXERCÍCIO 1---EXERCÍCIO 1---EXERCÍCIO 1---EXERCÍCIO 1---EXERCÍCIO 1---EXERCÍCIO 1---EXERCÍCIO 1---

/*
var comp1 = Boolean(false)
var comp2 = Boolean(true)
var comp3 = Boolean(false)


if (comp1 === true) {
  console.log("O computador está ligado")
}
*/

//EXERCÍCIO 2---EXERCÍCIO 2---EXERCÍCIO 2---EXERCÍCIO 2---EXERCÍCIO 2---EXERCÍCIO 2---EXERCÍCIO 2---EXERCÍCIO 2---

/*
var c1 = parseInt(prompt("Informe se o computador 1  está ligado (1) ou está desligado (0)"))
var c2 = parseInt(prompt("Informe se o computador 1  está ligado (1) ou está desligado (0)"))
var c3 = parseInt(prompt("Informe se o computador 1  está ligado (1) ou está desligado (0)"))

if (c1 === 1) {
  c1 = true
} else {
  c1 = false
}
if (c2 === 1) {
  c2 = true
} else {
  c2 = false
}
if (c3 === 1) {
  c3 = true
} else {
  c3 = false
}

console.log(c1, c2, c3)
*/

//EXERCÍCIO 3---EXERCÍCIO 3---EXERCÍCIO 3---EXERCÍCIO 3---EXERCÍCIO 3---EXERCÍCIO 3---EXERCÍCIO 3---EXERCÍCIO 3---

/*

var SSsubir = true            //A ÚNICA OPÇÃO DE QUEM ESTÁ NO SS É SUBIR, ENTÃO JÁ DECLAREI TRUE(1) COMO PADRÃO
var TerreoSubir = true        //A OPÇÃO AQUI PARA QUEM ESTÁ NO TÉRREO PODE SER SUBIR, ENTÃO DECLAREI COMO TRUE(1)
var TerreoDescer = false      //A PESSOA QUE ESTÁ NO TÉRREO TAMBÉM TEM A OPÇÃO DE DESCER, ENTÃO DECLAREI COMO FALSE(0)[NOTE QUE AS VARS SÃO DIFERENTES, ENTÃO CADA UMA TEM SEU VALOR]
var PrimeiroDescer = false    //A ÚNICA OPÇÃO DE QUEM ESTÁ NO PRIMEIRO ANDAR É DESCER, ENTÃO JÁ DECLAREI FALSE(0) COMO PADRÃO
var AndarDoido
var AndarElevador = prompt("Digite 0 se o elevador está parado no SS, 1  se está parado no térreo ou 2 se está parado no primeiro andar.")   //A PESSOA DIGITA EM QUAL ANDAR ESTÁ O ELEVADOR. (IMPORTANTE SER A PRIMEIRA LINHA DO CÓDIGO, POIS A PRIMEIRA INFORMAÇÃO NECESSÁRIA É AONDE O ELEVADOR SE ENCONTRA.)

if(AndarElevador === '0'){     //ANDAR EM QUE O ELEVADOR ESTÁ PARADO INICIALMENTE(caso digitado 0)
  console.log("O elevador está parado no SS.")
  console.log("O elevador irá subir para o Térreo.")
  var SSsubir = '1'
}
if(AndarElevador === '1'){    //ANDAR EM QUE O ELEVADOR ESTÁ PARADO INICIALMENTE(caso digitado 1)
  console.log("O elevador está parado no Térreo.")
  var AndarDoido = prompt("Digite 1 para subir para o Primeiro andar ou 0 para descer para o SS.") // ESSA VAR SERVE PARA A PESSOA DIGITAR 1 PARA SUBIR OU 0 PARA DESCER.

}
if(AndarDoido === '0'){   //SE A PESSOA DIGITAR 0, ELA IRÁ DESCER PARA O SS.
  console.log("O elevador irá descer para o SS.")
  var TerreoDescer = '0'

}
if(AndarDoido === '1'){    // SE A PESSOA DIGITAR 1, ELA IRÁ SUBIR PARA O PRIMEIRO ANDAR
  console.log("O elevador irá subir para o Primeiro Andar.")
  var TerreoSubir = '1'
}
if(AndarElevador === '2'){    //ANDAR EM QUE O ELEVADOR ESTÁ PARADO INICIALMENTE(caso digitado 2)
  console.log("O elevador está parado no Primeiro Andar.")  // SE A PESSOA DIGITAR QUE O ELEVADOR ESTÁ NO SEGUNDO ANDAR, AUTOMATICAMENTE IRÁ APARECER A MENSAGEM QUE ELA IRÁ DESCER.
  console.log("O elevador irá descer para o Térreo.")
  var PrimeiroDescer = '0'
}


if(SSsubir === '1'){          //TUDO QUE SOBE TEM QUE SER 1(FIZ COMO STRING)
  SSsubir = true
} else{
  SSsubir = false
}


if(TerreoSubir === '1'){      //TUDO QUE SOBE TEM QUE SER 1(FIZ COMO STRING)
  TerreoSubir = true
} else{
  TerreoSubir = false
}


if(TerreoDescer === '0'){      //TUDO QUE DESCE TEM QUE SER 0(FIZ COMO STRING)
  TerreoDescer = true
} else{
  TerreoDescer = false
}


if(PrimeiroDescer === '0'){   //TUDO QUE DESCE TEM QUE SER 0(FIZ COMO STRING)
  PrimeiroDescer = true
} else{
  PrimeiroDescer = false
}


// Cálculo
var LedSubindo = SSsubir || TerreoSubir                     // os únicos que sobem estão aqui(LedSubindo)
var LedDescendo = TerreoDescer || PrimeiroDescer            // os únicos que descem estão aqui(LedDescendo)

//Saídas
if(LedSubindo === true){
  console.log("Em todos os andares está aceso o Led do elevador subindo.")
}
if(LedDescendo === true){
  console.log("Em todos os andares está aceso o Led do elevador descendo.")
}
*/

//EXERCÍCIO 4---//EXERCÍCIO 4---//EXERCÍCIO 4---//EXERCÍCIO 4---//EXERCÍCIO 4---//EXERCÍCIO 4---//EXERCÍCIO 4---

/*

var SSsubir = true            //A ÚNICA OPÇÃO DE QUEM ESTÁ NO SS É SUBIR, ENTÃO JÁ DECLAREI TRUE(1) COMO PADRÃO
var TerreoSubir = true        //A OPÇÃO AQUI PARA QUEM ESTÁ NO TÉRREO PODE SER SUBIR, ENTÃO DECLAREI COMO TRUE(1)
var TerreoDescer = false      //A PESSOA QUE ESTÁ NO TÉRREO TAMBÉM TEM A OPÇÃO DE DESCER, ENTÃO DECLAREI COMO FALSE(0)[NOTE QUE AS VARS SÃO DIFERENTES, ENTÃO CADA UMA TEM SEU VALOR]
var PrimeiroDescer = false    //A ÚNICA OPÇÃO DE QUEM ESTÁ NO PRIMEIRO ANDAR É DESCER, ENTÃO JÁ DECLAREI FALSE(0) COMO PADRÃO
var AndarDoido

var SSsubir1 = true            //A ÚNICA OPÇÃO DE QUEM ESTÁ NO SS É SUBIR, ENTÃO JÁ DECLAREI TRUE(1) COMO PADRÃO
var TerreoSubir1 = true        //A OPÇÃO AQUI PARA QUEM ESTÁ NO TÉRREO PODE SER SUBIR, ENTÃO DECLAREI COMO TRUE(1)
var TerreoDescer1 = false      //A PESSOA QUE ESTÁ NO TÉRREO TAMBÉM TEM A OPÇÃO DE DESCER, ENTÃO DECLAREI COMO FALSE(0)[NOTE QUE AS VARS SÃO DIFERENTES, ENTÃO CADA UMA TEM SEU VALOR]
var PrimeiroDescer1 = false    //A ÚNICA OPÇÃO DE QUEM ESTÁ NO PRIMEIRO ANDAR É DESCER, ENTÃO JÁ DECLAREI FALSE(0) COMO PADRÃO
var AndarDoido1

var AndarElevador = prompt("Digite 0 se o ELEVADOR SOCIAL está parado no SS, 1  se está parado no térreo ou 2 se está parado no primeiro andar.")   //A PESSOA DIGITA EM QUAL ANDAR ESTÁ O ELEVADOR. (IMPORTANTE SER A PRIMEIRA LINHA DO CÓDIGO, POIS A PRIMEIRA INFORMAÇÃO NECESSÁRIA É AONDE O ELEVADOR SE ENCONTRA.)

if (AndarElevador === '0') {     //ANDAR EM QUE O ELEVADOR ESTÁ PARADO INICIALMENTE(caso digitado 0)
  console.log("O ELEVADOR SOCIAL está parado no SS.")
  console.log("O ELEVADOR SOCIAL irá subir para o Térreo.")
  var SSsubir = '1'
}
if (AndarElevador === '1') {    //ANDAR EM QUE O ELEVADOR ESTÁ PARADO INICIALMENTE(caso digitado 1)
  console.log("O ELEVADOR SOCIAL está parado no Térreo.")
  var AndarDoido = prompt("Digite 1 para subir para o Primeiro andar ou 0 para descer para o SS.") // ESSA VAR SERVE PARA A PESSOA DIGITAR 1 PARA SUBIR OU 0 PARA DESCER.

}
if (AndarDoido === '0') {   //SE A PESSOA DIGITAR 0, ELA IRÁ DESCER PARA O SS.
  console.log("O ELEVADOR SOCIAL irá descer para o SS.")
  var TerreoDescer = '0'

}
if (AndarDoido === '1') {    // SE A PESSOA DIGITAR 1, ELA IRÁ SUBIR PARA O PRIMEIRO ANDAR
  console.log("O ELEVADOR SOCIAL irá subir para o Primeiro Andar.")
  var TerreoSubir = '1'
}
if (AndarElevador === '2') {    //ANDAR EM QUE O ELEVADOR ESTÁ PARADO INICIALMENTE(caso digitado 2)
  console.log("O ELEVADOR SOCIAL está parado no Primeiro Andar.")  // SE A PESSOA DIGITAR QUE O ELEVADOR ESTÁ NO SEGUNDO ANDAR, AUTOMATICAMENTE IRÁ APARECER A MENSAGEM QUE ELA IRÁ DESCER.
  console.log("O ELEVADOR SOCIAL irá descer para o Térreo.")
  var PrimeiroDescer = '0'
}

//----------------------------------ELEVADOR DOIS-----------------------------

var AndarElevador2 = prompt("Digite 0 se o ELEVADOR DE SERVIÇO está parado no SS, 1  se está parado no térreo ou 2 se está parado no primeiro andar.")   //A PESSOA DIGITA EM QUAL ANDAR ESTÁ O ELEVADOR. (IMPORTANTE SER A PRIMEIRA LINHA DO CÓDIGO, POIS A PRIMEIRA INFORMAÇÃO NECESSÁRIA É AONDE O ELEVADOR SE ENCONTRA.)

if(AndarElevador2 === '0') {     //ANDAR EM QUE O ELEVADOR ESTÁ PARADO INICIALMENTE(caso digitado 0)
  console.log("O ELEVADOR DE SERVIÇO está parado no SS.")
  console.log("O ELEVADOR DE SERVIÇO irá subir para o Térreo.")
  var SSsubir1 = '1'
}
if (AndarElevador2 === '1') {    //ANDAR EM QUE O ELEVADOR ESTÁ PARADO INICIALMENTE(caso digitado 1)
  console.log("O ELEVADOR DE SERVIÇO está parado no Térreo.")
  var AndarDoido1 = prompt("Digite 1 para subir para o Primeiro andar ou 0 para descer para o SS.") // ESSA VAR SERVE PARA A PESSOA DIGITAR 1 PARA SUBIR OU 0 PARA DESCER.

}
if (AndarDoido1 === '0') {   //SE A PESSOA DIGITAR 0, ELA IRÁ DESCER PARA O SS.
  console.log("O ELEVADOR DE SERVIÇO irá descer para o SS.")
  var TerreoDescer1 = '0'

}
if (AndarDoido1 === '1') {    // SE A PESSOA DIGITAR 1, ELA IRÁ SUBIR PARA O PRIMEIRO ANDAR
  console.log("O ELEVADOR DE SERVIÇO irá subir para o Primeiro Andar.")
  var TerreoSubir1 = '1'
}
if (AndarElevador2 === '2') {    //ANDAR EM QUE O ELEVADOR ESTÁ PARADO INICIALMENTE(caso digitado 2)
  console.log("O ELEVADOR DE SERVIÇO está parado no Primeiro Andar.")  // SE A PESSOA DIGITAR QUE O ELEVADOR ESTÁ NO SEGUNDO ANDAR, AUTOMATICAMENTE IRÁ APARECER A MENSAGEM QUE ELA IRÁ DESCER.
  console.log("O ELEVADOR DE SERVIÇO irá descer para o Térreo.")
  var PrimeiroDescer1 = '0'
}

//-----------------------------CONDIÇÕES ELEVADOR SOCIAL---------------------------------//

if (SSsubir === '1') {          //TUDO QUE SOBE TEM QUE SER 1(FIZ COMO STRING)
  SSsubir = true
} else {
  SSsubir = false
}


if (TerreoSubir === '1') {      //TUDO QUE SOBE TEM QUE SER 1(FIZ COMO STRING)
  TerreoSubir = true
} else {
  TerreoSubir = false
}


if (TerreoDescer === '0') {      //TUDO QUE DESCE TEM QUE SER 0(FIZ COMO STRING)
  TerreoDescer = true
} else {
  TerreoDescer = false
}


if (PrimeiroDescer === '0') {   //TUDO QUE DESCE TEM QUE SER 0(FIZ COMO STRING)
  PrimeiroDescer = true
} else {
  PrimeiroDescer = false
}

//-----------------------------CONDIÇÕES ELEVADOR DE SERVIÇO---------------------------------//

if (SSsubir1 === '1') {          //TUDO QUE SOBE TEM QUE SER 1(FIZ COMO STRING)
  SSsubir1 = true
} else {
  SSsubir1 = false
}


if (TerreoSubir1 === '1') {      //TUDO QUE SOBE TEM QUE SER 1(FIZ COMO STRING)
  TerreoSubir1 = true
} else {
  TerreoSubir1 = false
}


if (TerreoDescer1 === '0') {      //TUDO QUE DESCE TEM QUE SER 0(FIZ COMO STRING)
  TerreoDescer1 = true
} else {
  TerreoDescer1 = false
}


if (PrimeiroDescer1 === '0') {   //TUDO QUE DESCE TEM QUE SER 0(FIZ COMO STRING)
  PrimeiroDescer1 = true
} else {
  PrimeiroDescer1 = false
}
//-------------------------------ABAIXO ESTÃO OS LEDS DOS DOIS ELEVADORES---------------------------//

var LedSubindo = SSsubir || TerreoSubir                     // os LEDS do elevador SOCIAL que sobe está aqui.
var LedDescendo = TerreoDescer || PrimeiroDescer            // os LEDS do elevador SOCIAL que desce está aqui.
var DoisLedsSubindo = SSsubir1 || TerreoSubir1              // os LEDS do elevador de SERVIÇO que sobe está aqui.
var DoisLedsDescendo = TerreoDescer1 || PrimeiroDescer1     // os LEDS do elevador de SERVIÇO que desce está aqui.
//Saídas
if (LedSubindo === true) {
  console.log("Em todos os andares está aceso o Led do ELEVADOR SOCIAL subindo.")
}
if (LedDescendo === true) {
  console.log("Em todos os andares está aceso o Led do ELEVADOR SOCIAL descendo.")
}
if(DoisLedsSubindo === true){
  console.log("Em todos os andares está aceso o Led do ELEVADOR DE SERVIÇO subindo.")
}
if(DoisLedsDescendo === true){
  console.log("Em todos os andares está aceso o Led do ELEVADOR DE SERVIÇO descendo.")
}

*/