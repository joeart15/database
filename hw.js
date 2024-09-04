
function toUpperCase(text) {
    return text.toUpperCase();
}


function toLowerCase(text) {
    return text.toLowerCase();
}


function iterateThroughString(text) {
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
}


function splitStringToArray(text) {
    return text.split('');
}


function reverseString(text) {
    return text.split('').reverse().join('');
}


const sampleText = "hello world";


console.log(toUpperCase(sampleText)); 


console.log(toLowerCase(sampleText)); 


iterateThroughString(sampleText); 


console.log(splitStringToArray("HELLO")); 


console.log(reverseString("HELLO")); 
