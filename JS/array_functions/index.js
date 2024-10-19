// alert("I am linked");

let names = ["Zeeshan", "Ali", "Asad", "Zsdf", "dsfg", "dlskjj"];

console.log(names[3]);
console.log(names[0]);
console.log(names[-1]);

// Add in end
names.push("Faiq");
// names.push("Faiq");
// names.push("Faiq");
// names.push("Faiq");
// names.push("Faiq");
// names.push("Faiq");

// Add in start
names.unshift("Ali");
names.unshift("Ali");
names.unshift("Ali");
names.unshift("Ali");

// Removes from end
names.pop();
// Removes from start
names.shift();
// console.log(names.length);

const arrayLeng = names.length;

// console.log(names[arrayLeng - 1]);

let newNames = names.reverse();
console.log(newNames);

// console.log(newNames.lastIndexOf("Ali"));
// Start Index, End Index(+1)
let temp = newNames.slice(5, 7);
// console.log(temp);

// Start Index, Delete Count Including Starting Index
newNames.splice(2, 3);
console.log(newNames);

for (let i = 0; i < newNames.length; i++) {
  console.log(newNames[i]);
}

newNames.map((value, index) => {
  console.log(value, index);
});

const ages = [
  3, 54, 65, 67, 8, 322, 245, 32, 32, 43, 54, 5, 12, 43, 17, 5, 656, 54,
];

let above18Ages = ages.filter((value) => {
  if (value < 18) {
    return value;
  }
});
above18Ages.forEach((value, index) => {
  console.log(value, index);
});

let findedIndex = names.find((value, index) => {
  if (value === "Zeeyhgshan") {
    return value;
  }
});
console.log(findedIndex);

names = names.concat(above18Ages);

console.log(names);

const twoD = [
  [2, 3, 4, 5, 5],
  [3, 4, 5, 6, 6],
  [3, 4, 5, 6, 6],
  [3, 4, 5, 6, 6],
  [3, 4, 5, 6, 6],
  [3, 4, 5, 6, 6],
  [3, 4, 5, 6, 6],
];
console.log(twoD[2][3]);

const threeD = [
  [
    [2, 3, 4, 5, 5],
    [2, 3, 4, 5, 5],
    [2, 3, 4, 5, 5],
  ],
  [
    [2, 3, 4, 5, 5],
    [2, 3, 4, 5, 5],
    [2, 3, 4, 5, 5],
  ],
];

console.log(threeD[0][2][4]);

// Functions Declaration/ Function Definition
function sayGreetings() {
  let userName = prompt("Enter your name?");
  console.log("Welcome", userName);
}

// Function Call
// sayGreetings();
// sayGreetings();
// sayGreetings();
// sayGreetings();
// sayGreetings();
// sayGreetings();

function payCheckValidity(chequeNumber) {
  if (!chequeNumber) {
    return false;
  }

  if (chequeNumber.includes("456")) {
    return true;
  } else {
    return false;
  }
}

let isChequeValid = payCheckValidity("12346789");
console.log(isChequeValid);

// Arrow Function
let checkValidity = (chequeNumber) => {
  if (!chequeNumber) {
    return false;
  }

  if (chequeNumber.includes("456")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkValidity("123456789"));



