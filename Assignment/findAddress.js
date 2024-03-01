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

// let result = findAddress({ street: 10, house: "15A", society: "Earth Perfect" });
// let result = findAddress({ house: "15A", society: "Earth Perfect" });
// let result = findAddress({ street: 10, society: "Earth Perfect" });
// let result = findAddress({ street: 10, house: 15 });
let result = findAddress({ street: 10 });

console.log(result);
