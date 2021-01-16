const firstWord = ['you are ', 'you will ', "you're family "];
const secondWord = ['become ', 'soon ', 'on the way '];
const thirdWord = ['the best', 'rich', 'love'];

console.log(Math.floor(Math.random()*3));
const firstRandomWord = Math.floor(Math.random()*3);
const secondRandomWord = Math.floor(Math.random()*3);
const thirdRandomWord = Math.floor(Math.random()*3);

function fortuneTeller () {
    console.log(firstWord[firstRandomWord]+ secondWord[secondRandomWord]
        + thirdWord[thirdRandomWord])
}

fortuneTeller();