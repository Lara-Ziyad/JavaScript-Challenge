
exports = typeof window === 'undefined' ? global : window;

module.exports = {
    async : function(value) {
        return new Promise(function(resolve) {
            setTimeout( resolve(value)
            , 200);
        });
        
        
    },

  

    manipulateRemoteData :  function  (url)  {
        new Promise(function(resolve ) {
            names =  fetch (url).then(res => res.json()).then(data =>  data.people.map(person => person.name ));

    
        });
        return names;
      
    
        }
       
    
};
