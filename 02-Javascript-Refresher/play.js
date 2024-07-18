const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

// function summarizeUser(userName, userAge, userHasHobby) {
//     return (
//         'Name is ' + 
//         userName + 
//         ', age is ' +
//         userAge + 
//         ' and the user had hobbies: ' +
//         userHasHobby
//     );
// }

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' +
        userAge + 
        ' and the user had hobbies: ' +
        userHasHobby
    );
};

// const add = (a,b) => {
//     return a + b;
// };

const add = (a,b) => a + b; //arrow function with 2 arguments and one line of output
const addOne = a => a + 1; //arrow function with only 1 argument (parentheses is optional) and one line of output
const addRandom = () => 7 + 4; //arrow function without arguments (parentheses is mandatory)

console.log(add(2,5))
console.log(addOne(age))
console.log(summarizeUser(name,addOne(age),hasHobbies))