const reverseString = function(inString) {
    let newString = "";
    let lastElement = -1;
    for (let index = 0; index < inString.length; index++) {
        const element = inString[index];
        // console.log(element)
        if (newString === "") { 
            newString = newString + inString.slice(lastElement);
        } else {
            newString = newString + inString.slice(lastElement, lastElement+1);
        }
        lastElement--;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
// reverseString("Hello!")