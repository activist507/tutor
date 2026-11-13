// let letters = ["a", "b", "c", "d", "e", "h", "c", "g", "b"];

// letters.splice(2, 3);
// const spliced = letters.toSpliced(2,3);

// console.log(letters);
// console.log(spliced);

//.at(index): it returns the item
// const fetched = letters.at(3);
// console.log(fetched);

// const i = letters.lastIndexOf("b");
// console.log(i)

// const yes = letters.includes("b", -1);
// console.log(yes)

let users = [
	{ name: "Abirah", age: 17, isMarried: false },
	{ name: "Amirah", age: 19, isMarried: true },
	{ name: "Afeshetu", age: 21, isMarried: false },
	{ name: "Anabverokha", age: 23, isMarried: true },
	{ name: "Musa", age: 25, isMarried: true },
	{ name: "Ngozi", age: 37, isMarried: false }
];

let married = users.find(
	function(user) {
		return user.age > 21 && user.isMarried;
	}
);
console.log(married); // { name: "Musa", age: 25 }