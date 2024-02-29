function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Invalid Input.";
  } else {
    return number * number * number;
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Invalid Input";
  } else {
    let result = string1.match(string2);
    // console.log(result);
    if (result === null) {
      return false;
    } else {
      return true;
    }
  }
}

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

function findAddress(obj) {
  let newArray = [];
  let blank = "__";
  if (obj.street) {
    newArray.push(obj.street);
  } else {
    newArray.push(blank);
  }
  if (obj.house) {
    newArray.push(obj.house);
  } else {
    newArray.push(blank);
  }
  if (obj.society) {
    newArray.push(obj.society);
  } else {
    newArray.push(blank);
  }

  return newArray[0] + "," + newArray[1] + "," + newArray[2];
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "Invalid Input";
  } else {
    let totalCost = 0;
    for (let i = 0; i < changeArray.length; i++) {
      totalCost = totalCost + changeArray[i];
    }

    if (totalCost >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}
