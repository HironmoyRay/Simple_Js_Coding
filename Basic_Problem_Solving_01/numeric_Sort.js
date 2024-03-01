const roll_Numbers = [3, 60, 34, 11, 45];

const new_Sorting_Array = roll_Numbers.sort(function (a, b) {
  return a - b; // min to max
  //   return b - a; // max to min
});

console.log(new_Sorting_Array);
