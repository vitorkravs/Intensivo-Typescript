//Tipos Básicos

let age: number = 5;
let firtsNamee: string = "vitor";
let lindo: boolean = true;
let tentarEvitar: any = "saí da tipagem estática";

const listaDeNumeros: number[] = [1, 2, 3];
const listaDeNomes: string[] = ["ola", "meu", "nome", "é", "vitor"];
const listaDeBooleans: boolean[] = [true, false, true, false];

//Tuplas

const dados: [string, number] = ["vitor", 2];

//Lista de Tuplas

const dados2: [number, number][] = [
  [1, 2],
  [3, 4],
];

//Intersections

const productId: string | number = 2;

//Enum

enum Direction {
  up = 1,
  down = 2,
}

//Assertions

const meuTipo: any = 12;

//const meuTipo2 = meuTipo as string
const meuTipo2 = <string>meuTipo;

console.log(age);
