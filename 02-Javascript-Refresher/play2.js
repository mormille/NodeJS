//OBJECTS
const person = {
    name: 'Luiz',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

const person2 = {
    name: 'Tokugawa',
    age: 65,
    greet: function() {
        console.log('Hi, I am ' + this.name)
    }
};

// person.greet();
// person2.greet();

//ARRAYS
const hobbies = ['Sports','Cooking']
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

console.log(hobbies.map(hobby => 'Hobby: ' + hobby)); //map() allows you to transform your array into a new array
console.log(hobbies) // the old array still remains



