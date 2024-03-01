const vowels = ['a','e','i','o','u','A','E','I','O','U'];
function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    // console.log(letters);
    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    })
    return count;
}

console.log(countVowels("Hello, Bangladesh!"));