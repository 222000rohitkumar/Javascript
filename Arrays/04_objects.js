const obj1 = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five'   
}   
const obj2 = {
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten'
}   
//const obj3 = Object.assign({}, obj1, obj2);
//console.log(obj3); // {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten'}
// Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
const obj3 = {...obj1, ...obj2};
console.log(obj3); // {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten'}
// The spread operator is used to spread the elements of an array or object into a new array or object. It is a more concise way to copy the values of all enumerable own properties from one or more source objects to a target object. It will return a new object.
console.log(Object.keys(obj3)); // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
console.log(Object.values(obj3)); // ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']