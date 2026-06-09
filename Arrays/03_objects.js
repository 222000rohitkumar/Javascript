// Objects are a collection of key value pairs. They are used to store data in a structured way.
 // Objects can be created using the object literal syntax or the object constructor syntax.

 //Object Literal Syntax

 const user = {
     name: 'Wolverine',
     age:120,
     isMUtant: true,
     isAlive: false,
     lastMovie: 'Logan',
     friends: ['Professor X', 'Storm', 'Cyclops'],
     [mySym]: Symbol('mySym')
 };
     /*   console.log(user.name); // Wolverine
        console.log(user.age); // 120
        console.log(user.isMUtant); // true
        console.log(user.isAlive); // false
        console.log(user.lastMovie); // Logan
        console.log(user.friends); // ['Professor X', 'Storm', 'Cyclops']
        // if you use space between the key and value it will throw an error
        Object.freeze(user.isMUtant); // This will prevent any changes to the object
        user.isMUtant = false; // This will not change the value of isMUtant
        console.log(user.isMUtant); // true

    `*/
    user.greeting = function() {
        console.log("just a greeting");
    }
    console.log(user.greeting()); // just a greeting