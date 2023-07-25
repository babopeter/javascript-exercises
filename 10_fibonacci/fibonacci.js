const fibonacci = function(n) {
    let arr = [0, 1];
    if(n < 0) return "OOPS";
    for (let i = 2; i < 26; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[parseInt(n)];
};

// Do not edit below this line
module.exports = fibonacci;
