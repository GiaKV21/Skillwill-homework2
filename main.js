//დავალება 1

const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function youngestName(usersArr) {
  let youngest = usersArr[0];

  for (let i = 1; i < usersArr.length; i++) {
    if (usersArr[i].age < youngest.age) {
      youngest = usersArr[i];
    }
  }

  return youngest.name;
}

console.log(youngestName(users));

//დავალება 2

function cloneUser(user) {
  let copy = {
    name: user.name,
    age: user.age,
  };
  return copy;
}

let ana = { name: "Ana", age: 28 };
let anaCopy = cloneUser(ana);

console.log(anaCopy);
console.log(anaCopy === ana);

//დავალება 3

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
  let aAttempts = 0;
  let bAttempts = 0;

  let roll;
  do {
    roll = rollDie();
    aAttempts++;
  } while (roll !== 3);

  do {
    roll = rollDie();
    bAttempts++;
  } while (roll !== 3);

  if (aAttempts < bAttempts) {
    console.log("Player A wins in " + aAttempts + " attempts!");
  } else if (bAttempts < aAttempts) {
    console.log("Player B wins in " + bAttempts + " attempts!");
  } else {
    console.log("It's a tie! Both needed " + aAttempts + " attempts.");
  }
}

playGame();
