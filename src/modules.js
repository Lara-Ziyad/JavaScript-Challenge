module.exports = {
    createModule : function(str1, str2) {
        const myObject = {
            greeting : str1,
            name : str2,
            sayIt : function () {
                return `${this.greeting}, ${this.name}`;
            }
        };
        const greetingMatt = `${myObject.greeting}, ${myObject.name}`;

        return myObject ;
    }
};

