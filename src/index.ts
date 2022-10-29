// string, boolean, number...

let x: number = 10;

x = 12;

console.log(x);

// inferencia x annotation

let y = 12; //inferencia
// y = "teste"

let z: number = 12; //annotation

// tipos básicos

let firstName: string = "Letícia";
let age: number = 27;
const isAdmin: boolean = true;

// String != string

firstName = "João";
console.log(firstName);

// object

const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5)

console.log(myNumbers);

// tuplas -> tuple

let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

// object literals -> {prop: value}

const user: {name: string, age: number} = {
    name: "Letícia",
    age: 27,
};

console.log(user);

// any (raramente é usado/não é recomendado)

let a: any = 0;

a = "teste";
a = true;
a = [];

// union type (solução para o any, quando tem mais de um tipo de dado retornado)

let id: string | number = 10;

id = 200;

//id = true; - erro
//id = []; - erro

// type alias (pode colocar quantos quiser)

type myIdType = number | string

const userId: myIdType = 10;
const productId: myIdType = "0001";

// enum (para deixar o código sem muitas repetições)
// tamanho de roupas

enum Size {
P = "Pequeno",
M = "Médio",
G = "Grande"
}

const blusa = {
name: "Blusa reglan",
size: Size.P,
};

console.log(blusa);

// literals types (valor literal para um tipo)

let teste: "autenticado" | null //muito utilizado como null para mudar o valor em um determinado momento

teste = "autenticado";
teste = null;

// funçoes

// nos parametros é obrigatório tipar
function sum(a: number, b: number) {
return a + b;
};

console.log(sum(12, 12));

// tipar o retorno da funçao
function sayHelloTo(name: string): string {
return `Hello ${name}`;
};

console.log(sayHelloTo("Letícia"));

// funçao que não retorna nada - void (ex: eventos de dom)
function logger(msg: string): void {
console.log(msg);
};

logger("teste");

// funçao opcional
function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    };

    console.log(`Olá ${name}`);
};

greeting("João");
greeting("Letícia", "Miss");

// interfaces (interessante para padronizar estruturas)

interface MathFunctionParams {
    n1: number;
    n2: number;
};

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;    
};

console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
};

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
};

console.log(multiplyNumbers(someNumbers));

// narrowing / checagem de tipos

function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    };

    console.log("Não foi passado um número");
};

doSomething(5);
doSomething(true);

// generics (independe do tipo, geralmente são utilizados para qualquer coisa e funcionam em diferentes situaçoes)

function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    });
};

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

// classes

class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    };

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    };
};

const sirius = new User("Sirius", "Admin", true);
console.log(sirius);
sirius.showUserName();

// interfaces em classes

interface IVehicle {
    brand: string
    showBrand(): void
};

class Car implements IVehicle {

    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    };

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    };
};;

const fusca = new Car("VW", 4);
fusca.showBrand();

// herança

class SuperCar extends Car {
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    };
};

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();

// decorators = @ (todo decorator é uma funçao e deve retornar uma outra funçao)

// constructor decorator

function BaseParamters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date();
        };
    };
}

@BaseParamters()

class Person {
    name;

    constructor(name: string) {
        this.name = name
    };
};

const sam = new Person("Sam");
console.log(sam);