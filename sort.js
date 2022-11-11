// In JavaScript we can use the sort() built-in function to sort elements in array
// However since the functions sorts elements lexicographically, we maintain the below callback
// To compare two integers and sort them in ascending order

const compare = (a, b) => {
    return a - b;
}

let list = [10, 4, 3, 8, 2, 9];

console.log(list.sort(compare));
