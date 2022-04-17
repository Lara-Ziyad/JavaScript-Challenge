module.exports = {
    alterContext : function(fn, obj) {
       
        return fn.bind(obj)(obj);

        //or return fn.call

    },

    alterObjects : function(constructor, greeting) {

        return constructor.prototype.greeting = greeting;

    },

    iterate : function(obj) {

    let  properties = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        properties.push(`${key}: ${obj[key]}`);
      }
    }
    return properties ;
    }
};
