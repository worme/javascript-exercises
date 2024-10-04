const repeatString = function(string, num) {
    let newString = "";
    if (num < 0) {
        newString = "ERROR";
    } else {
    
        for (let index = 0; index < num; index++) {
            newString = newString + string; 
        }
    }
    return newString;   
};

// Do not edit below this line
module.exports = repeatString;
