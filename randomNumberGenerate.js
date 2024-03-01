// Luddo Problem: Print from 1 to 6.

function randomNumberGenerator(min, max) {
  //   const ran = Math.random();
  //   console.log(ran);
  //   const ran_int = ran * (max - min + 1);
  //   console.log(ran_int);
  //   const ran_int_floor = Math.floor(ran_int);
  //   console.log(ran_int_floor);
  //   const random_Number = ran_int_floor + min;

  const random_Number = Math.floor(Math.random() * (max - min + 1)) + 1;
  return random_Number;
}

const random_Num = randomNumberGenerator(1, 6);
console.log(random_Num);
