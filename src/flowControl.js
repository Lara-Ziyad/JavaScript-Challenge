module.exports = {
    fizzBuzz : function(num) {
        
        if (typeof num !== 'number') {
            return false;
          }     
          if (num % 3 === 0 && num % 5 === 0) {
            return 'fizzbuzz';
          }
          if (num % 3 === 0) {
            return 'fizz';
          }
          if (num % 5 === 0) {
            return 'buzz';
          }
          else {
          return num;
          }
      
    }
};
