//alert("hello");
/* Lets see how scope works*/

var myVariable = 3;

function myFunction(){
    console.log(myVariable);//can we see myVariable in the function!
    var myFunctionScopeVariable = 64; //daclared in a local function scope.
    console.log(myFunctionScopeVariable);//we can see this function 

    function myNestedFunction(){//yes
        var myNestedFunctionVariable = "I\"m very nested!!";
        console.log(myNestedFunctionVariable); //local access works
        console.log(myFunctionScopeVariable); // it works because it is in scope of myfunction(). it is in parent function
        console.log(myVariable); //it works because the variable is in parent-parent function.

        //even more nesting
        function myDoubleNestedFunction(){
            var doubleNestedVar = "double nested var,here!!"
            console.log(doubleNestedVar);
        }
        //myDoubleNestedFunction(); //it works it is inscope.

    }
    myNestedFunction(); //this is run because it is in scope of myFunction()
    //console.log(myNestedFunctionVariable); //we cant see out herer, because it is defined in myNestedFunction(), it is in other function.
    
    //myDoubleNestedFunction(); // it will not work because it is out of scope.
}
console.log(myVariable);
myFunction();//lets run and see...

//console.log(myFunctionScopeVariable); //Can we see function run here? nope, because myFunctionScopeVariable defined in a local function.

//myNestedFunction(); //this is not going to run because it is out of scope. we need to call myFunction(), it is inside scope of muFunction()


/**
 * Function returning function
 */
function addNum(x, y) {
    return (Number(x) + Number(y)); //using number parsing we are not concatination.
}
function subtractNum(x, y) {
    return (x - y);
}
function multiplyNum(x, y) {
    return (x * y);
}
function divideNum(x, y) {
    return (x / y);
}
function myMath(operation,x,y){

}
