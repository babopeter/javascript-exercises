const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/gi, "");
    return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
