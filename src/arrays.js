
module.exports = {
    indexOf: function(arr, item) {
       const index = arr.indexOf(item);
       return index
      }, 
   sum: function(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr);
    return sum
  },

    remove : function(arr, item) {
        const newArray = arr.filter(element => element !== item);
    return newArray
    },

    removeWithoutCopy : function(arr, item) {
            let i;
            let arraylength = arr.length;
        
            for (i = 0 ; i < arraylength ; i++) {
              if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
                arraylength--;
              }
            }
            return arr;
        
    },
    
    append : function(arr, item) {
        arr.push(item);
        return arr
    },

    truncate : function(arr) {
        arr.pop();
        return arr

    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr

    },

    curtail : function(arr) {
        arr.shift()

        return arr
    },

    concat : function(arr1, arr2) {
       return arr1.concat(arr2);
        

    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;

    },

    count : function(arr, item) {
        const count = arr.reduce ((acc, element)=>
        element == item? acc+1 : acc ,0);
            return count; 
    },

    duplicates : function(arr) {
        const duplicate = arr.filter((item,i) => arr.splice(i,1).includes(item));
        // console.log(duplicate );
        let duplicateObject = new Set (duplicate)
        // console.log(duplicateObject);
        const duplicateArray = Array.from( duplicateObject ).sort((a,b) => a-b)
        // console.log(duplicateArray);
        return [... duplicateArray]
    },

    square : function(arr) {
        const squareArray = arr.map(ele => Math.pow(ele,2) )
        return squareArray;

    },

    findAllOccurrences : function(arr, target) {
        const index = arr.reduce((acc, element, i) => element === target ? acc.concat(i) : acc
       , []);
        return index;
    }
};

