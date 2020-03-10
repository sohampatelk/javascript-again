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
function myMath(operation){
    switch(operation){
        case "add":
            return addNum(x,y); //return kills the function, sobreaks are not necessary,
        case "subtract":
            return subtractNum(x,y);
        case "multiply":
            return multiplyNum(x,y);
        case "divide":
            return divideNum(x,y);
        default:
            return "Invalid Operation.";
    }
}

//console.log(myMath("add",10,18));
//console.log(myMath("add")(10,18));

/**
 * Lets try with anonoumous function
 */
function newTestFunction(myString1){
    myString1 = "Entred String is  : "+myString1;
    return function(additionalString){
        if (additionalString != undefined){
            myString1 += ", "+additionalString;
        }
        return function(yetAnotherString){
            if(yetAnotherString != undefined){
                myString1 += ", "+yetAnotherString + "!!!";
            }
            return myString1;
        }
    }
}

console.log(newTestFunction("A B C D E F G")("H I J K L M N")("P Q R S X Y Z"));