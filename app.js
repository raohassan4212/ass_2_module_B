// 1- overwrite value while making new object using Object.assign
let obj_1 = {
    value_1: "one",
    value_2: "two",
    value_3: "three"
};

let obj_2 = {
    a_4: "four",
    a_5: "five",
    a_6: "six"
};

let newObject = Object.assign({},obj_1,obj_2);
console.log(newObject);

newObject.a_6 = "Seven";
console.log(newObject);

// 2- nested ternary operator

let some = 2;
let xyz = true;

let color = some == 1 ? "Blue" : some == 2 ? "Green" : "black";
console.log(color);


// 3- for in and for of loop

let arr = [10,20,30,40,50,60,70,80,];
console.log(arr);
for (val in arr) {
    console.log(val);
}


let num = [1,2,3];
let sum = 0;

for (a of num) {
    sum += a;
}
console.log(sum);


// 4- What is arrow function?

let arrowFn = () => {
    console.log("Hello Arrow Function");
};

arrowFn();
