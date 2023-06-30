function sumAll(int1, int2) {
    let sum = 0;
    console.log(Math.sign(int1));
    console.log(Math.sign(int2));
    
    if (Math.sign(int1) == 1 && Math.sign(int2) == 1) {
        console.log("If statement passed");
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
};

sumAll(1, 4000);