/**
 * Let's try JavaScript, again!
 * Multi-line comment uses slashes and asterisks!
 * @author  TECHCareers
 * @date    2020.03.06
 * @git     https://github.com/TECHCareers-by-Manpower/wb-lets-try-javascript-again.git
 * @link    https://github.com/TECHCareers-by-Manpower/wb-lets-try-javascript-again
 * @summary Testing out some wicked JavaScript!
 */

// Single line, comment!
//alert("Hey..whats up!!");
// Basic assignment:
var myVariable = '38.9587'; // Variable set as a string.

myVariable =  myVariable + 5;
console.log( myVariable ); // Oop, one of these is a string so plus is concatenating!

// Type-handling:
myVariable = parseFloat( myVariable ); // Floating point number, decimal maintained.
console.log( myVariable ); // Is now a numeric value.

myVariable = parseInt( myVariable ); // Converted to integer, decimal removed.
console.log( myVariable ); // 38

myVariable = Number( myVariable ); // Converted to any number type it can.
console.log( myVariable ); // No change here.

myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
console.log( myVariable );

myVariable = myVariable.toString(); // Convert back to a string.
console.log( myVariable );

/**
 * Other types?
 */
var myArrayOfDataTypes = [
    //Boleans:
    true,
    false,
    //Null
    null,
    34,
    168.345,
    //String
    "Hello World",
    //Value not defined
    undefined,
    //Not a number
    NaN,
    //array in array
    [1,2,3,4,5]
];
/**
 * creating elements for webpage
 */

var myDataList = document.createElement("dl");//will not show up yet ,we didnt tell where it goes

//lets loop through the array 
for( var i=0; i<myArrayOfDataTypes.length ; i++) {
    //create datalist title
    var dataListTitle = document.createElement("dt");
    dataListTitle.textContent = typeof myArrayOfDataTypes[i];//output the datatype which myabe string or integer or bolean

    //Create datalist data
    var dataListData = document.createElement("dd");
    dataListData.textContent = myArrayOfDataTypes[i]; 

    //add our new elements to our datlist
    myDataList.appendChild(dataListTitle);
    myDataList.appendChild(dataListData);
}
console.log(myDataList);

var myHeadingText = "Our datatype test:";
//This is adding HTML to the end of our body
document.body.innerHTML += `
    <h2>
        ` + myHeadingText/*Contacting Strings*/ + `
    </h2>
`;

document.body.appendChild(myDataList);

var myHeading = document.getElementById("my-heading");
myHeading.title = "This is a heading.";
//myHeading.style.color = "darkgrey";//please avoid using inline style

myHeading.className = "grey-text";

/**
 * Events!!
 */
//we can add event listner to a targeted element.
myHeading.addEventListener("mouseover", function(event){//here we are saying which element we are tageting
     this.className="salmon-text";//here this keyword saying represents our element (myHeading)
 });

myHeading.addEventListener("mouseleave", function(event){//here we are saying which element we are tageting
    this.className="indigo-text";//here this keyword saying represents our element (myHeading)
});

myHeading.addEventListener("click", function(event){//here we are saying which element we are tageting
    var bigClass = "big-text";
    if(!this.className.includes(bigClass))
    {
    this.className +=" big-text";//space is mandatory because we give a space between 2 classes. we are clicking on heading and there is already mouseover event happens..this big-text is second class . if we do 2nd class activity then we have to put space before a class name,
    }
});


/*
Make a function
*/
//Function keyword, followwed by function name
function addTwoNumbers(x,y){
    x=Number(x);// enforce data-type (number)
    y=Number(y);
    return (x+y);
}

function currentDayString(){
    //new date object
    var date = new Date();
    //daclare a string we canstore data info in.
    var dateString="";
    //console.log(dateString);
    dateString += date.getFullYear();
    // console.log(typeof date.getFullYear());
    dateString += ".";
    dateString += date.getMonth();
    dateString += ".";
    dateString += date.getDay();
    return dateString;
}
//output to console
console.log("The current date is :\r\n" + currentDayString());