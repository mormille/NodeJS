//OBJECTS
const person = {
    name: 'Luiz',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

const printName2 = ({ name }) => {
    console.log(name);
}

printName2(person);

const { name, age } = person;
console.log(name, age);

// const person2 = {
//     name: 'Tokugawa',
//     age: 65,
//     greet: function() {
//         console.log('Hi, I am ' + this.name)
//     }
// };

// // person.greet();
// // person2.greet();

// //ARRAYS
const hobbies = ['Sports','Cooking']; // arrays are a reference type, which means they can be modified after being declaerd with const

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);



// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }

// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby)); //map() allows you to transform your array into a new array
// // console.log(hobbies) // the old array still remains

// // hobbies.push('Programming'); // the thing stored at the variable is the pointer (stack memory), and the pointer is not changed, only the pointer points to in the heap memory
// // console.log(hobbies)

// const copiedArray = hobbies.slice(); // slice() copies an array
// console.log(copiedArray);

// // const copiedArray2 = [...hobbies]; // ... --> spread operator
// // console.log(copiedArray2);

// const copiedPerson = {...person}; // ... --> spread operator (extract elements of an object)
// console.log(copiedPerson);

// const toArray = (...args) => { // ... ---> rest operator (bundle arguments into an object)
//     return [...args]
// }

// console.log(toArray(1,2,3,4,5,6))
