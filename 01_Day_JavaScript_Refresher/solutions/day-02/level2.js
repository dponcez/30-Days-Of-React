// create a log function and print the value on JavaScript console
const log = values => console.log(values);

// 1 -> create a countries and a webTechs array
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

// 2 -> change the string to array and get
// the number of words in the array
let text =
  'I love teaching and empowering people I teach HTML CSS JS React Python'
const words = text.split(' ')
log(words)
log(words.length);

// 3 -> add, remove and edit item from the array
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
log(shoppingCart.unshift('Meat'));
log(shoppingCart.pop());
log(shoppingCart.push('Sugar'));;
log(shoppingCart[3] = 'Green Tea')
log(shoppingCart);

// 4 -> print 'Ethiopia' as upper string if it exists in the array
const checkCountry = (countries.includes('Ethiopia')) ? log(countries[4].toUpperCase()) : log(countries)
log(checkCountry);

// 5 -> check if Sass exists in the array and print
// 'Sass is a CSS propocess'.
// If it doesn't exist add Sass to the array list.
const checkCertainSubject = webTechs.indexOf('Sass');
const index = (checkCertainSubject != -1) ? log('Sass is a CSS preprocess') : log(webTechs.push('Sass'));
log(webTechs);

// 6 -> concatenate the following two array variables
// and store it in a fullStact variable
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
log(fullStack)