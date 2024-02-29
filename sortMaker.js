function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else {
    if (arr[0] < arr[1]) {
      let temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    } else if (arr[0] === arr[1]) {
      return "equal";
    }
    return arr;
  }
}

// let result = sortMaker([-1,2]);
// let result = sortMaker([1,-2]);
let result = sortMaker([2,3]);
// let result = sortMaker([4,2]);
// let result = sortMaker([4,4]);
// let result = sortMaker([1,2]);
// let result = sortMaker([4,-2]);

console.log(result);