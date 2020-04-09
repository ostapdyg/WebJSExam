function tune(arr){
    correct = [329.63, 246.94, 196, 146.83, 110, 82.41];
    res = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            res[i] = " - "
        }else{
            percent = (arr[i]-correct[i])/correct[i];
            res[i] = [">>•",">•", "OK", "•<", "•<<"][(percent>-0.03)+(arr[i]-correct[i]>=0)+(arr[i]-correct[i]>0)+(percent>0.03)];
            console.log(percent);

        }
    }
    return res;
}

console.log(tune([0, 246.94, 0, 0, 0, 80])) //➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]

console.log(tune([329, 246, 195, 146, 111, 82])) //➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]

console.log(tune([329.63, 246.94, 196, 146.83, 110, 82.41])) //➞ ["OK", "OK", "OK", "OK", "OK", "OK"]