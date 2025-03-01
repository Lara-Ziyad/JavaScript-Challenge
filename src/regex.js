module.exports = {
    containsNumber : function(str) {
        return (/\d/).test(str);

    },

    containsRepeatingLetter : function(str) {
        return (/([A-Za-z])\1/).test(str);

    },

    endsWithVowel : function(str) {
       return (/[aeiou]$/i).test(str);

    },

    captureThreeNumbers : function(str) {

          const matches = str.match(/\d{3}/);
        return matches ? matches[0] : false;
      
        return str.match(/\d{3}/)

    },

    matchesPattern : function(str) {
        return (/^\d{3}-\d{3}-\d{4}$/).test(str);

    },
    isUSD : function(str) {
        return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);

    }
};
