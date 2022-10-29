"use strict";
// string, boolean, number...
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 12;
console.log(x);
// inferencia x annotation
let y = 12; //inferencia
// y = "teste"
let z = 12; //annotation
// tipos básicos
let firstName = "Letícia";
let age = 27;
const isAdmin = true;
// String != string
firstName = "João";
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
// tuplas -> tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// object literals -> {prop: value}
const user = {
    name: "Letícia",
    age: 27,
};
console.log(user);
// any (raramente é usado/não é recomendado)
let a = 0;
a = "teste";
a = true;
a = [];
// union type (solução para o any, quando tem mais de um tipo de dado retornado)
let id = 10;
id = 200;
const userId = 10;
const productId = "0001";
// enum (para deixar o código sem muitas repetições)
// tamanho de roupas
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const blusa = {
    name: "Blusa reglan",
    size: Size.P,
};
console.log(blusa);
// literals types (valor literal para um tipo)
let teste; //muito utilizado como null para mudar o valor em um determinado momento
teste = "autenticado";
teste = null;
// funçoes
// nos parametros é obrigatório tipar
function sum(a, b) {
    return a + b;
}
;
console.log(sum(12, 12));
// tipar o retorno da funçao
function sayHelloTo(name) {
    return `Hello ${name}`;
}
;
console.log(sayHelloTo("Letícia"));
// funçao que não retorna nada - void (ex: eventos de dom)
function logger(msg) {
    console.log(msg);
}
;
logger("teste");
// funçao opcional
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    ;
    console.log(`Olá ${name}`);
}
;
greeting("João");
greeting("Letícia", "Miss");
;
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
;
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
;
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// narrowing / checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    ;
    console.log("Não foi passado um número");
}
;
doSomething(5);
doSomething(true);
// generics (independe do tipo, geralmente são utilizados para qualquer coisa e funcionam em diferentes situaçoes)
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
;
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
// classes
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    ;
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    ;
}
;
const sirius = new User("Sirius", "Admin", true);
console.log(sirius);
sirius.showUserName();
;
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    ;
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
    ;
}
;
;
const fusca = new Car("VW", 4);
fusca.showBrand();
// herança
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
    ;
}
;
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators = @ (todo decorator é uma funçao e deve retornar uma outra funçao)
// constructor decorator
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
};
Person = __decorate([
    BaseParamters()
], Person);
;
const sam = new Person("Sam");
console.log(sam);
