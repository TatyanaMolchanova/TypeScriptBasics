export {}
let message = 'Hello World';
console.log(message);

let x = 10;
const y = 20;

let sum;

const title = 'Tatyana';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';


let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];  //array of 1 type variables - number
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Cris', 22];

enum Color {Red = 5, Green, Blue};

let c: Color = Color.Blue;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVariable)) {
    console.log(myVariable.name);
}

// (myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;
// b = true;
b.toString();
console.log(b);
typeof(b);
console.log(typeof(b));

let multitype: number | boolean;
multitype = 20;
multitype = true;

let anyType: any;
anyType = 'string';
anyType = 20;
anyType = undefined;

// function add(num1: number, num2?: number): number {
function add(num1: number, num2: number = 10): number {
    if(num2)
        return num1 + num2;
    else
        return num1;
}

add(5, 10);
// add(5, '10');
// add()
add(5);
console.log('1', add(5, 10));
console.log('2', add(5));

// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }

// let p = {
//     firstName: 'Bruce',
//     lastName: 'Wayne'
// }

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    // lastName: 'Wayne'
}

fullName(p);

class Employee {
    // public employeeName: string;
    // private employeeName: string;
    protected employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks ${this.employeeName}`);

        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);