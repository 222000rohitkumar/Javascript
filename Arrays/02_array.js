/*const myArray = [1, "Batman", true, null, undefined, { name: "Bruce Wayne" }, [1, 2, 3]];

console.log(myArray);
//Accessing elements

console.log(myArray[0]);

//array Methods
myArray.push("Wolverine")
console.log(myArray)
myArray.pop(1)
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.unshift("Superman")
console.log(myArray) */   
const MarvelHeros = ["Spider-Man", "Iron Man", "Thor", "Hulk", "Black Widow"];

const DC_Heros = ["Superman", "Batman", "Wonder Woman"];

const allHeros = MarvelHeros.concat(DC_Heros);
console.log(allHeros)

const slicedHeros = allHeros.slice(2, 5);
console.log(slicedHeros)
