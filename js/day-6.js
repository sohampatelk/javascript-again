alert("hello");
/* Lets see how scope works*/

var myVariable = 3;
function myFunction(){
    console.log(myVariable);//can we see myVariable in the function!
    //var myFunctionScopeVariable = 64; //daclared in a local function scope.
}

myFunction();//lets run and see..

console.log(myFunctionScopeVariable); //Can we see function run here? nope, because myFunctionScopeVariable defined in a local function.
