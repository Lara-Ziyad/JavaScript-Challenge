
module.exports = {
    count : function (start, end) {
      
        let timeout;
       const logCount = () =>
                            {
        console.log(start ++ );
        start <= end ? timeout = setTimeout(logCount, 100) :  
                                clearTimeout(timeout)
                            };

             logCount()
   
         return { cancel: ()  =>  clearTimeout(timeout)}
        
        }
};

