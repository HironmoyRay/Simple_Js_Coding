function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Invalid Input";
  } else {
    let result = string1.match(string2);
    console.log(result);
    if (result === null) {
      return false;
    } else {
      return true;
    }
  }
}

let myResult = matchFinder("JavaScript", "Code");
console.log(myResult);
