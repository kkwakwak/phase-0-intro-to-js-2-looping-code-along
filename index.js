// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);


const names = ['Charlie', 'Samip', 'Ali'];
const event = 'birthday';
let message = [];

function writeCards(names, event) {
    for (let a = 0; a < names.length; a++) {
        message.push(`Thank you, ${names[a]}, for the wonderful ${event} gift!`)
    }
    return message;
}

let n
function countDown(n) {
    while (n >= 0) {
        console.log(n--);
    }
}
