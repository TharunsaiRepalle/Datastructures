//Approach1
const reverseString = (str) => str.split("").reverse().join("");

//Approach2
function reverseString (str) {
    let newStr = "";
    for(let i= str.length-1; i >= 0 ; i--) {
        newStr += str[i]
    }
    return newStr;
}

//Approach3
function reverseString (str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0); 
}
