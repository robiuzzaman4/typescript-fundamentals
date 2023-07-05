// string type variable
let variable = "Hello TypeScrilpt";
variable = "variable value must be a string";

// NUMBER
let num = 21;
num = 10;

// variable assign with type
let ageWithType: number = 21;

// STRING
let testString: string = "Test";
testString = "Test 2"

// BOOLEAN
let testBoolean: boolean = true;
testBoolean = false;

// check multiple type
let testStringOrNumber: string | number;
testStringOrNumber = "String";
testStringOrNumber = 10;
// testStringOrNumber = [10, 20]; get error
// testStringOrNumber = {id: 1}; get error

// ARRAY
let names = ["ruhan", "zaman"];
// names.push(10); get error
names.push("salsabil");

let nums = [10, 20, 30];
// nums.push(true); get error
nums.push(40);

let testStringArray: string[];
// testStringArray = [10, 20]; // get error
testStringArray = ["only string", "not others"];

let testNumberArray: number[];
// testNumberArray = ["only string", "not others"]; // get error
testNumberArray = [10, 20];

let testStringOrNumberArray: (string | number)[];
// testStringOrNumberArray = [10, 20, true]; get error
testStringOrNumberArray = ["work", 20];

// OBJECT
let user = {
    name: "jhon",
    age: 21,
    isAdmin: false
}

// user.name = 10; // get error
// user.age = "twenty one"; // get error
// user.isAdmin = "yes"; // get error
// user.phone = "++801707776435"; // phone doesn't exist // get error

let userObj: {
    userName: string,
    age: number,
    isAdmin: boolean,
}

userObj = {
    userName: "Jhon",
    age: 23,
    isAdmin: true,
}

let userObj2: {
    userName: string,
    age: number,
    isAdmin: boolean,
    phone?: string, // optional key
}

userObj2 = {
    userName: "Jhon",
    age: 23,
    isAdmin: true,
    phone: "++80110000000" // you can use it or not
}

// ANY
let testAny: any;
testAny = 10;
testAny = "any";
testAny = { feature: "any type" };
testAny = ["can be an array"];
testAny = true;
testAny = null;

let testAnyArray: any[];
testAnyArray = ["string", 10, false, { name: "Jhon" }]

// FUNCTION
let sayHi = () => {
    console.log("Hi!");
}

// sayHi = "Hi"; // get error

let functionReturnString = (): string => {
    console.log("hello");
    return "return string";
}

let multiple = (num: number) => {
    return num * 2;
}
// multiple & multiple2 are exactly same
let multiple2 = (num: number): number => {
    return num * 2;
}

let multiple3 = (num: number): void => {
    // use void when you don't need to return anything

    // your code
}

let sum = (num1: number, num2: number, num3?: number) => {
    return num1 + num2;
}
sum(1, 2);

let userInfo = (user: { userName: string, age: number, phone?: string }) => {
    console.log(user.userName);
    
}