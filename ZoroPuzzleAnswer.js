let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",/*middle*/"n","o","p","q","r","s","t","u","v","w","x","y","z"];
var swapResult;
var code;
var codeArray;


function decipher(){
    code = document.getElementById("ta").value;
    codeArray = code.split("");
    input = codeArray;

    for(let i = 0; i < input.length; i++){
        if(isLowerCase(input[i])){ //check for lower case
            letterSwap(i);
            input[i] = alphabet[swapResult];
        }
    }
    window.alert(input.join(""));
    return input.join("");
}

function letterSwap(letterPosition){
    var alphabetPosition;
    let mid = 13;
    alphabet.forEach(function(element){
        if(codeArray[letterPosition] == element){
            alphabetPosition = alphabet.indexOf(element);
        }
    })
    
    if(alphabetPosition < mid){
        swapResult = 25 - alphabetPosition;
    }else if (alphabetPosition > mid){
        let x = alphabetPosition - mid + 1;
        swapResult = mid - x;
    }else if (alphabetPosition == mid){
        swapResult = mid -1;
    }
}

function isLowerCase(letter){
    return letter == letter.toLowerCase() && letter != letter.toUpperCase();
}

