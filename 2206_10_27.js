// let c = new Array("name", 24, true);
// let c = new Array(3);
// let c =  Array.of(3);
// let c = Array.from("Hello");
// let c = Array.from({length:5}, (_, i) => i * i);
// console.log(Array.isArray("c"))

// let fruits = ["apple","banana","carrot","Orange"];
// const removedItem = fruits.pop();
// console.log(fruits);
// console.log(removedItem);

let letters = ["e", "b", "c", "d", "e"];

// const removedLetters = letters.splice(0,4);
// console.log(letters);
// console.log(removedLetters);
// letters.splice(0,1,"a");
// letters.splice(-2);
// console.log(letters);

// let original = [1, 2, 3, 4, 5, 6, 7];
// let copy = original.toSpliced(1, 2, "a", "b", "c");
// console.log(copy);
// console.log(original);

let original = ["one","two","three","four","five","six","seven","eight"]
original.fill(9,1,4);

console.log(original);