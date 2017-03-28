function toRoman (num) {
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman   = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var results = '';
    for(var i = 0; i<decimal.length; i++){   // loop through all elements in the array
        while (num % decimal[i] < num) {     // continue to check all number until one is smaller than our number
            results += roman[i];             // Add the smaller number to the matching results string.
            num -= decimal[i];               // Subtract the decimal value of the roman number from the given number
        }
    }
    console.log(results);
}
toRoman(4);
