// Завдання 1
const number = Number(prompt("Введіть число:"));

if (number === 10) {
  console.log("Вірно");
} else {
  console.log("Невірно");
}


// Завдання 2
const min = Math.floor(Math.random() * 60); 

let quarter;

if (min >= 0 && min < 15) {
  quarter = "першу";
} else if (min >= 15 && min < 30) {
  quarter = "другу";
} else if (min >= 30 && min < 45) {
  quarter = "третю";
} else {
  quarter = "четверту";
}

console.log(`${min} входить в ${quarter} чверть`);


// Завдання 3
const num = prompt("Введіть число від 1 до 4:");
let result;

switch (num) {
  case '1':
    result = 'зима';
    break;
  case '2':
    result = 'весна';
    break;
  case '3':
    result = 'літо';
    break;
  case '4':
    result = 'осінь';
    break;
  default:
    result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
}

console.log(result);

// Завдання 4
const input = prompt("Введіть кількість хвилин:");
const totalMinutes = Number(input);

if (isNaN(totalMinutes) || totalMinutes < 0) {
  console.log("Будь ласка, введіть коректне число.");
} else {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  console.log(`${formattedHours}:${formattedMinutes}`);
}

// Завдання 5
const login = prompt("Введіть логін:");

if (login === "Адмін") {
  const password = prompt("Введіть пароль:");

  if (password === null || password === "") {
    console.log("Скасовано");
  } else if (password === "Я головний") {
    console.log("Добрий день!");
  } else {
    console.log("Невірний пароль!");
  }

} else if (login === null || login === "") {
  console.log("Скасовано");
} else {
  console.log("Я вас не знаю");
}

// Завдання 6
let i = 0;

while (i <= 20) {
  console.log(i);
  i++;
}

// Завдання 7
function getNumbers(min, max) {
  let total = 0;

  for (let i = max; i >= min; i--) {
    console.log(i);

    if (i % 2 === 0) {
      total += i;
    }
  }

  return total;
}

const result = getNumbers(5, 20);
console.log("Сума парних:", result);

// Завдання 8
function min(a, b) {
  
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    return "Not a number!";
  }

  
  return a < b ? a : b;
}


console.log(min(5, 2));     
console.log(min(10, 10));   
console.log(min("5", 2));   
console.log(min(3, NaN));   


// Завдання 9
function isAdult(age) {
  if (typeof age !== "number" || Number.isNaN(age)) {
    return false; 
  }

  if (age >= 18) {
    return true;
  } else {
    
    return confirm("Вам ще немає 18 років. Ви підтверджуєте вхід?");
  }
}


console.log(isAdult(20)); 
console.log(isAdult(16)); 

// Завдання 10
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);


