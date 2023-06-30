const sumAll = function(int1, int2) {
    let sum = 0;
    
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return 'ERROR';
    if (int1 < 0 || int2 < 0) return 'ERROR';
    if (int1 > int2) {
        const temp = int1;
        int1 = int2;
        int2 = temp;
    }
    for (let i = int1; i < int2 + 1; i++) {
        sum += i;
    }
    return sum;

    /* while (typeof(int1) == "number" && typeof(int2) == "number") {
        if (Math.sign(int1) === 1 && Math.sign(int2) === 1) {
            if (int1 < int2) {
                for (let i = int1; i <= int2; i++) {
                    sum = sum + i;
                }
            } else if (int1 > int2){
                for (let i = int2; i <= int1; i++) {
                    sum = sum +i;
                }
            }
            return sum;
        } else {
            return 'ERROR';
        }
    }
    return 'ERROR' */
};

// Do not edit below this line
module.exports = sumAll;