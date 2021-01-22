//Convert Kilometer To Meter

function kilometerToMeter(kilometer) {
  let meter = kilometer * 1000;
  return meter;
}
let result = kilometerToMeter(15);
console.log(result);

//Budget Calculator

function budgetCalculator(watch, mobile, laptop) {
  if (watch > 1) {
    watch = watch * 50;
  }
  if (mobile > 1) {
    mobile = mobile * 100;
  }
  if (laptop > 1) {
    laptop = laptop * 500;
  }
  let total = watch + mobile + laptop;
  return total;
}
var price = budgetCalculator(3, 2, 2);
console.log(price);

//Hotel Cost

function hotelCost(days) {
  let cost = 0;
  if (days <= 10) {
    cost = days * 100;
  } else if (days <= 20) {
    let firstTenDay = 10 * 100;
    let remaining = days - 10;
    let secondTenDay = remaining * 80;
    cost = firstTenDay + secondTenDay;
  } else {
    let firstTenDay = 10 * 100;
    let secondTenDay = 10 * 80;
    let remaining = days - 20;
    let thirdTenDay = remaining * 50;
    cost = firstTenDay + secondTenDay + thirdTenDay;
  }
  return cost;
}
let totalCost = hotelCost(11);
console.log(totalCost);

//Mega Friend

function megaFriend(name) {
  let max = name[0];
  for (let i = 0; i < name.length; i++) {
    let element = name[i];
    if (element.length > max.length) {
      max = element;
    }
  }
  return max;
}
let friendName = ["Rakib", "Sakib", "Rahat", "Rashed", "Rifat", "Sohidul"];
let biggerName = megaFriend(friendName);
console.log(biggerName);
