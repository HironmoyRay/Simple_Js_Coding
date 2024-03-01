const numbers = [1, 4, 2, 5, 2, 6, 7, 3, 4, 9, 4, 1];

const duplicates = numbers.filter(function(value,index,array){
    return array.indexOf(value) !== index; // return duplicate numbers
    // return array.indexOf(value) === index; //return unique numbers
})

console.log(duplicates);