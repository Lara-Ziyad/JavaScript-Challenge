module.exports = {
    argsAsArray : function(fn, arr) {
        return fn(...arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return  (str2) => `${str}, ${str2}`
    
    },

    makeClosures : function(arr, fn) {
        return arr.map(x => () => fn(x));
    },

    partial : function(fn, ...str) {

        return function(str1) {
            return fn(...str, str1);
        }

    },

    useArguments : function() {
    const sum = (...args) => args.reduce((a, b) => a + b);
    return sum (...arguments);
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {    

    },

    curryIt : function(fn) {
   

    }
};

