// create a log function and print their values on JavaScript console
const log = value => console.log(value); 

// 1 -> declare an empty array
const empty = [];
// 2 -> declare an array with more than 5 numbers of elements
const numbers = [1,2,3,4,5,6,7,8,9,10];
// 3 -> find the length of the array number
const lengths = numbers.length;
log(lengths);

// 4 -> get the first item, the middle item and the last item of an array
log(numbers[0]);
log(numbers[4]);
log(numbers[numbers.length - 1]);

// 5 -> declare an array called mixedDataTypes  
// and put different data type into it and find the length of the array. 
// The size of the array should be greater than x value
const mixedDataType = [
    1, 
    'hello', 
    false, 
    {
        fName: 'Brian',
        lName: 'Doe'
    },
    function(){
        log('hello, world')
    },
    [1,2,3],
    0,
    true
];

const arraySize = mixedDataType.length;
const getSizeOfAnArray = (arraySize > 5) ? log('Yes, the size of the array is greater than 5') : log('No, the size of the array is not greater than 5');
log(getSizeOfAnArray);

// 6 -> declare an array called itCompanies and assing them an initial values: 
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];
// 7 -> print in console the array itCompanies
log(itCompanies);
// 8 -> prit the total number of companies
log(itCompanies.length);
// 9 -> print the fist, middle and last company
log(itCompanies[0]);
log(itCompanies[3]);
log(itCompanies[itCompanies.length - 1]);
// 10 -> print out each company name
log(itCompanies[0]);
log(itCompanies[1]);
log(itCompanies[2]);
log(itCompanies[3]);
log(itCompanies[4]);
log(itCompanies[5]);
log(itCompanies[6]);
// 11 -> change each company name to uppercase
log(itCompanies[0].toUpperCase());
log(itCompanies[1].toUpperCase());
log(itCompanies[2].toUpperCase());
log(itCompanies[3].toUpperCase());
log(itCompanies[4].toUpperCase());
log(itCompanies[5].toUpperCase());
log(itCompanies[6].toUpperCase());
// 12 -> print the array like as a sentences:
log(itCompanies.slice(0, 6) + ' and ' + itCompanies.slice(6, 7) + ' are big IT companies');
// 13 -> check if a certain company exists in the
// itCompanies array. If it exist return the company name
// else return is not found
let index = itCompanies.indexOf('Facebook');
let isFound = (index != -1) ? log(itCompanies[0]) : log('Not Found!');
log(isFound);
// 14 -> filter out companies which have more than one 'o'
function itHasMoreRepeatLetter(letter){
    const filterByOLetter = letter.toString().split();
    for(let i = 0; i < filterByOLetter.length; i++){
        log(filterByOLetter[i].includes('o'))
    }
}
const output = itHasMoreRepeatLetter(itCompanies);
// 15 -> sort the array
const sorted = itCompanies.sort();
log(sorted);
// 16 -> reverse the array
const reversed = itCompanies.reverse();
log(reversed);
// 17 -> slice out the first 3 companies
const getThreeFirstCompanies = itCompanies.slice(0, 3);
log(getThreeFirstCompanies);
// 18 -> slide out the last 3 companies
const getLastThreeCompanies = itCompanies.slice(4, 7);
log(getLastThreeCompanies);
// 19 -> slice out the middle IT company
const getMiddleCompany = itCompanies.slice(3, 4);
log(getMiddleCompany)
// 20 -> remove the first IT company
const removeFirstItCompany = itCompanies.shift();
log(removeFirstItCompany);
// 21 -> remove the middle IT company
const removeMiddleItCompany = itCompanies.splice(3,1);
log(removeMiddleItCompany);
// 22 -> remove the last IT company
const removeLastItCompany = itCompanies.pop();
log(removeLastItCompany);
// 23 -> remove all IT companies
const removeAllItCompany = itCompanies.splice();
log(removeAllItCompany);
