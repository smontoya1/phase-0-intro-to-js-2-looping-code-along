// Code your solutions in this file
/*
const names = ['Guadalupe', 'Ollie', 'Aki'];
const occasion = "surprise";
*/
function writeCards (names, occasion) {
    const message = [];
    for(let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    return message;
}

writeCards(['Guadalupe', 'Ollie', 'Aki'], "surprise");


function countDown(i) {
    while (i >= 0) {
        console.log(i--);
    }
}