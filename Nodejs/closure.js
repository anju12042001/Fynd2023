// var:global scope(visit anywhere)
// require: import the module
// module:alert
// npm install alert
var alert=require("alert"); 
function init() // function1-outer/parent
{// initialization
    var name= "Chrome"; // name is a local variable created by init
    function displayName() // displayName() is the inner function, a closure
    // execution:output
    {
        alert(name);
        // use variable declared in the parent function,body of the child function
    }
    // declaring a function doesn't call it
    // so  we are calling it explicityly here
    displayName(); // inner/closure/child function
}
init();