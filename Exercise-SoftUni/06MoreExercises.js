//1. Sort Numbers in Descending order

function sortNumbersDescending(n1, n2, n3) {
  if (n1 >= n2 && n1 >= n3) {
    console.log(n1);
    if (n2 >= n3) {
      console.log(n2);
      console.log(n3);
    } else {
      console.log(n3);
      console.log(n2);
    }
  } else if (n2 >= n1 && n2 >= n3) {
    console.log(n2);
    if (n1 >= n3) {
      console.log(n1);
      console.log(n3);
    } else {
      console.log(n3);
      console.log(n1);
    }
  } else {
    console.log(n3);
    if (n1 >= n2) {
      console.log(n1);
      console.log(n2);
    } else {
      console.log(n2);
      console.log(n1);
    }
  }
}

// Example usage:
sortNumbersDescending(-2, 1, 3); // Replace with your values

//2. English name Last digit
function solve(num) {
  let myArr = num.toString().split("");
  let lastDigit = Number(myArr[myArr.length - 1]);
  switch (lastDigit) {
    case 0:
      console.log("zero");
      break;
    case 1:
      console.log("one");
      break;
    case 2:
      console.log("two");
      break;
    case 3:
      console.log("three");
      break;
    case 4:
      console.log("four");
      break;
    case 5:
      console.log("five");
      break;
    case 6:
      console.log("six");
      break;
    case 7:
      console.log("seven");
      break;
    case 8:
      console.log("eight");
      break;
    case 9:
      console.log("nine");
      break;
  }
}

//03. Next Day

function nextDay(year, month, day) {
  let date = new Date(year, month - 1, day);
  let oneDay = 24 * 60 * 60 * 1000; //86 400 000 milliseconds in one day
  let nextDate = new Date(date.getTime() + oneDay);
  console.log(
    nextDate.getFullYear() +
      "-" +
      (nextDate.getMonth() + 1) +
      "-" +
      nextDate.getDate()
  );
}
nextDay(2016, 9, 30);

//04. Reverse String

function reverseString(word) {
  let result = "";
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  console.log(result);
}
reverseString("Hello");

//05. Distance between Points

function distanceBetweenPoints(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  console.log(Math.sqrt(x * x + y * y));
}
distanceBetweenPoints(2, 4, 5, 0);
