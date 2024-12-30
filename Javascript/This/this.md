// 1. will point to global window object
function test() {
    console.log('this in a function', this); 
}
// test() // [object Window].

// 2. But if we call this within an object method, 
// we can use this to access other properties and methods from the same object:
const person = {
    firstName: 'shobika',
    lastName: "sarav",
    age: '26',
    getThis: function (){
        return this;
    }
}
// console.log('this in Object method', person.getThis());

// 3. Arrow Function - JavaScript sets the this lexically. 
// This means that the arrow function doesn't create its own execution context
// but inherits the this from the outer function where the arrow function is defined.

const show = () => this // console.log('arrow function this', show()) -> window object

// 4. this and object method
//It's important to notice this because, for example, 
// if we try to implement an arrow function to it as an object method, 
// we won't be able to access the object through the this keyword:

const persona = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: () => this.name + ' * ' + this.surname
}

// console.log(persona.sayName());  //undefined * undefined

// 5. When using strict-mode, calling this within a function will return undefined.
// "use strict";

function showw() {
    console.log(this);
}

// showw(); // undefined

// 6. How to Use this in an Event Listener
// document.getElementById('testBtn').addEventListener('click', function() {
//     console.log('this in a event', this);
// })
// <button id="testBtn">TEST</button>
// this is an event <button id="testBtn">TEST</button>

// 7. this Methods (call, apply and bind)
// With call we can invoke a method passing an owner object as an argument. 
// Said in a simpler way, we can call a method indicating to which object the 
// keyword this will refer to.

const person1 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function() {
        return this.name + " " + this.surname;
    }
}

const person2 = {
    name: 'Jimena',
    surname: 'Juarez'
}

// console.log(person1.sayName.call(person2));

// By doing this, we're indicating that when the sayName method executes,
// the this keyword won't refer to the object that "owns" the method (person1) 
// but to the object we passed as parameter (person2).

const persona1 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(city, country) {
        return this.name + " " + this.surname + ", " + city + ", " + country;
    }
}

const persona2 = {
    name: 'Jimena',
    surname: 'Juarez'
}

// console.log(persona1.sayName.call(persona2, "DF", "Mexico"));

// 8. Apply Method
// The apply method works very similarly to call. The only difference between them is that call 
// accepts parameters as a list separated by colons (as the last example we saw), and apply accepts them as an array.
// So if we want to replicate the same example using apply we'd have to do it like this:

const person11 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(city, country) {
        return this.name + " " + this.surname + ", " + city + ", " + country;
    }
}

const person12 = {
    name: 'Jimena',
    surname: 'Juarez'
}

// console.log(person11.sayName.apply(person12, ["DF", "Mexico"]));

// 9. How to Use the Bind Method
// Same as call and apply , the bind method indicates the object to which the this keyword will refer when a given method executes.

// But the difference with bind is that it will return a new function, without executing it. 
// While with call and apply the function executed right away, using bind we must execute it separately.

const person22 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function() {
        return this.name + " " + this.surname
    }
}

const person21 = {
    name: 'Jimena',
    surname: 'Juarez'
}

const sayPerson2Name = person22.sayName.bind(person21)

// console.log(sayPerson2Name())

const person22 = {
    name: 'Pedro',
    surname: 'Sanchez',
    sayName: function(age) {
        return this.name + " " + this.surname + " "+age
    }
}

const person21 = {
    name: 'Jimena',
    surname: 'Juarez'
}

const sayPerson2Name = person22.sayName.bind(person21, 33)

<!-- console.log(sayPerson2Name()) -->

const myMethod = () => {
    console.log(this, "now");
};
  
myMethod() // window

const myObject = {};

myMethod.call(myObject) // {}

