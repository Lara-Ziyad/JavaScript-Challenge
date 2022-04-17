module.exports = {
    valueAtBit: function(num, bit) {

        n = num.toString(2)
    

        return bit > n.length? 0 : +n[n.length - bit]

    },

    base10: function(str) {
        
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
    
           return  num.toString(2).length < 8 ?"0"+ num.toString(2): num.toString(2)

    },

    multiply: function(a, b) {
        
        const commonMultiplier = Math.pow(10,6);
        console.log(commonMultiplier);

        a *= commonMultiplier;
        b *= commonMultiplier;
    
        return (a * b) / (commonMultiplier * commonMultiplier);
    }
};
