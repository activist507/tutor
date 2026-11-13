
const objectType = 
{
	"name": "Saeed",
	"age": 12,
	"contact": "hello",
}

// <===== 2026-10-13 ========>
// Arrays
// const arrayNames = [23,45,78,90,98,67];
// console.log(arrayNames[3]);

// let fruits = ["Apple"];
// fruits.push("Tangerine");
// fruits.unshift("Orange");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits)

//.forEach
	// nameOfArray.forEach(function(how_to_identify_each){ write your logic})
	// fruits.forEach(function(a){
	// 	console.log(a + ' is a fruit');
	// });


//.map
// arrayName.map(function(name_of_each){ blcok of code });
	// let numbers = [0,1,2,3,4,5];

	// const double = numbers.map(function(num){
	// 	return num * num;
	// })

	// // const doubled = numbers.map(n => n * n);
	// console.log(double); //[0,1,4,9,16,25]

// .filter
// arrayName.filter(function(Each_element) { condition to be true });
// const evenNumbers = double.filter(function(n){
// 	return n % 2 === 0 ;
// });

// console.log(evenNumbers);

const Cars = ["Honda","Toyota","G-Wagon","BMW","Benz","GLK","GLE", "504", "C-300", "C-500", "Lamboghini"];

const Fruits = ["Apple","Banana","Carrot","Docanut","Eggplant","Groundnut","Grape","Gauva","Lemon","Lime","Mango","Orange","Pineapple","Pear","Peach"];

const mixed = ["BMW","Mango","Honda","Apple","Camry"];

mixed.forEach(function(item){
	if(Cars.includes(item)){
		console.log(item + " is a car");
	}
	else if(Fruits.includes(item)){
		console.log(item + " is a fruit");
	}
	else {
		console.log(item + " does not have a group");
	}
})