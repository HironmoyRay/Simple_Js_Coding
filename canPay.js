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

let result = canPay([1, 5, 5],10);

console.log(result);
