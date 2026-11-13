//Array task 1
// let groceries = [ "rice", "beans", "yams"];
// groceries.push("tomatoes");
// groceries.unshift("bread");
// let removedFirst = groceries.shift();
// let removedLast = groceries.pop();
// console.log(groceries);
// console.log(removedLast);
// console.log(removedFirst);

//task 2
 //  let nums =[10, 20, 30];
 //  nums.push(40,50);
 //  nums.unshift(0);
   //.push is use to add an element to the last of an array
   //.unshift is use to add an element to the first of an array
   //.pop is use to remove the last element of an array
   //.shift is use to remove the first element of an array

    //task 3
    // let queue =["ada","musa","ngozi"];
    // queue.push("tunde");
    // queue.unshift("chief");
    // let served = queue.shift();
    // console.log( "now serving:" + served);

    // let left = queue.pop();
    // console.log(left + " left the queue");
    // console.log("final queue: ", queue);

//task 4 section B
  //  let cities = ["Lagos","Abuja","Kano","Enugu"];
  //   cities.forEach(function(city,index) {console.log((index + 1) +"."+ city);});


     //task 5
  //  let price = [1500, 2300, 800, 4200];
  //   let total = 0;
  //    price.forEach(function(price){
  //      total = total + price;
  //    })
  //    console.log ("total:", total);
     
   
     // Task 6
     let students = [
       {name: "Amaka", score: 88},
       {name: "Bayo", score: 54},
        {name: "Chidi", score: 71},
      ];
       students.forEach(function(student) {
           console.log(student.name + " scored " + student.score);
       });

//Task 7
  // let numbers = [1, 2, 3, 4, 5];

  // let doubled = numbers.map (function(number) {
  //   return number * 2
  // });

  // let squared = numbers.map(function(number) {
  //     return number * number;
  // });

  // let labels = numbers.map(function(number){
  //   return "Number" + number;
  // });
  //   console.log("Original:", numbers);
  //   console.log("doubled:", doubled);
  //   console.log("squared:", squared);
  //   console.log("labels:", labels);

    //task 8
    //   let names = ["Ada", "Musa", "ngozi", "Tunde"];
    //    let formattedNames= names.map(function(name){
    //     return name.charAt(0).toUpperCase() + name.slice(1);
    //    });
    // console.log("original names:", names);
    // console.log("formatted names:", formattedNames);

    //Task 9
    // let priceInNaira=[1500,3000, 4500, 12000];
    // let discounted price;