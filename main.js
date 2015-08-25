//module: this encapsulates all related code into a single unit of code. We can access it
//frome one file to another by using the code below...

//example taken from:http://www.sitepoint.com/understanding-module-exports-exports-node-js/

var greetings = require("./greetings.js");

// "Hello"
console.log(greetings.sayHelloInEnglish());
        
// "Hola"  
greetings.sayHelloInSpanish();

