let name = 'Momo';
let age = 21;
let eStatus = true;

let isStudent = '';

if(eStatus){
    isStudent = true;
}

let ageIn8Years = age+8;

let message = document.getElementById("word");

message.textContent = `${name} is ${age} years old, in 8 years he will be ${ageIn8Years}. Is this person a student? ${isStudent}.`;



