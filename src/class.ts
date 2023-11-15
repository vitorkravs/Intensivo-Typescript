class Person {
  id: number;
  nome: string;
  age: number;

  constructor(id: number, nome: string, age: number) {
    this.id = id;
    this.nome = nome;
    this.age = age;
  }

  sayMyName() {
    return console.log(this.nome);
  }
}

const person = new Person(2, "vitor", 20);

person.sayMyName();
