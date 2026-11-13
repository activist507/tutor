// let letters = ["a", "b", "c", "d", "e","f","g","h","i"];

//splice(start, numberOfItemsToremove, ...itemsToReplace);
// const removed = letters.splice(1, 2); // to remove
// console.log(letters);
// console.log(removed)

// letters.splice(2, 2, "Z","Y"); // to replace


// letters.splice(1, 0, "x", "y"); // to insert

// letters.splice(-3); //remove from the end

// console.log(letters);

// let original = [1, 2, 3, 4];
// let copy = original.toSpliced(1, 2, "a", "b", "c");

// console.log(original);
// console.log(copy);

// let numbers = [1,2,3,4,5,6,7,8];

// .map(function(ref){})
// const mapped = numbers.map(function(num){
// 	return num + num;
// })

// const mapped = numbers.map( n => n * 2 );

// console.log(mapped);

// .filter(function(ref){ condition });

// const filtered = numbers.filter(function(num) {
// 	return num > 5;
// })
// console.log(filtered)

// % 5 % 2
let numbers = [1,2,3,4,5,6,7,8];

// const evenNumbers = numbers.filter( function(num) {
// 	return (num % 2 == 0 && num > 5) ;
// })

const evenNumbers = numbers.filter( num => (num % 2 == 0 && num > 5))

console.log(evenNumbers);