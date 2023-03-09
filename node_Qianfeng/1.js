var querystring = require("querystring");
let str = "name=kevin&age=10&location=shanghai";

//console.log(querystring);

var obj = querystring.parse(str);

console.log(obj);

console.log("here");

let myobj = {
    a:1,
    b:2,
    c:3
};

var s2 = querystring.stringify(myobj);
console.log(s2);