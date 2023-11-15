//Tyes
type Order = {
  id: string;
  price: number;
};

type User = {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
  order?: Order[];
};

const user: User = {
  firstName: "vitor",
  lastName: "kravszenko",
  age: 20,
  order: [{ id: "1", price: 15 }],
};

//Unions
type Author = {
  books: string[];
};

const author: User & Author = {
  firstName: "vitor",
  lastName: "kravszenko",
  age: 20,
  books: ["livro1", "livro2"],
};

//Interfaces
interface Loja {
  nome: string;
  produtos: string;
}

const loja: Loja = {
  nome: "vitor",
  produtos: "roupas",
};

console.log({ user });
