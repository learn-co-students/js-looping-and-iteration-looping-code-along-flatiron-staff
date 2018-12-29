// Code your solutions in this file

const badges = ['Ada', 'Brendan', 'Ali']

function printBadges(badges) {
  for (let i=0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${i + 1}.`)
  }
  return badges;
}

printBadges(badges)


// function tailsNeverFails() {
//   let coin = Math.random() >= 0.5;
//   let counter = 1;
// ​
//   while (coin === true) {
//     console.log(`You got ${counter} tails in a row!`)
//     counter += 1;
//   }
// ​
// }
// function maybeTrue() {
//     return Math.random() >= 0.5;
// }
//
//
// function tailsNeverFails() {
//
//   let counter = 1;
//
//   while (maybeTrue()) {
//     console.log(`You got ${counter} tails in a row!`);
//     counter += 1;
//   }
//
// }
// tailsNeverFails()

function maybeTrue() {
    return Math.random() >= 0.5;
}


function tailsNeverFails() {

  let counter = 1;
  let coin;

  while (maybeTrue()) {
    coin = `You got ${counter} tails in a row!`;
    counter += 1;
  }
return coin
}
tailsNeverFails()
