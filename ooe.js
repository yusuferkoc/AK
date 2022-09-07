function ooe(num){
    var sum = 0
    var digits = (""+num).split("").map(Number);
 
    for (let i = 0; i<digits.length; i++){
        sum += digits[i];
    }

    console.log(num)
    console.log(digits)
    console.log(sum)

    if(sum % 2 == 0) {
        console.log("The number is even.");
    }
    
    
    else {
        console.log("The number is odd.");
    }
    
}

ooe(43)
ooe(373)
ooe(4433)