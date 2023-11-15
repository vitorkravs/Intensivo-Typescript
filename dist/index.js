"use strict";
//Tipos Básicos
let age = 5;
let firtsNamee = "vitor";
let lindo = true;
let tentarEvitar = "saí da tipagem estática";
const listaDeNumeros = [1, 2, 3];
const listaDeNomes = ["ola", "meu", "nome", "é", "vitor"];
const listaDeBooleans = [true, false, true, false];
//Tuplas
const dados = ["vitor", 2];
//Lista de Tuplas
const dados2 = [
    [1, 2],
    [3, 4],
];
//Intersections
const productId = 2;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
//Assertions
const meuTipo = 12;
//const meuTipo2 = meuTipo as string
const meuTipo2 = meuTipo;
console.log(age);
