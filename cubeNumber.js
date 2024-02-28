function cubeNumber(number) {
  if (typeof number !== 'number') {
    return "Invalid Input.";
  } else {
    return number*number*number;
  }
}

const output = cubeNumber(3);
console.log(output);