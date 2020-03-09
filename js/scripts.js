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
var myVariable = "38.9587"; // Variable set as a string.

myVariable = myVariable + 5;
console.log(myVariable); // Oop, one of these is a string so plus is concatenating!

// Type-handling:
myVariable = parseFloat(myVariable); // Floating point number, decimal maintained.
console.log(myVariable); // Is now a numeric value.

myVariable = parseInt(myVariable); // Converted to integer, decimal removed.
console.log(myVariable); // 38

myVariable = Number(myVariable); // Converted to any number type it can.
console.log(myVariable); // No change here.

myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
console.log(myVariable);

myVariable = myVariable.toString(); // Convert back to a string.
console.log(myVariable);

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
    [1, 2, 3, 4, 5]
];
/**
 * creating elements for webpage
 */

var myDataList = document.createElement("dl"); //will not show up yet ,we didnt tell where it goes

//lets loop through the array
for (var i = 0; i < myArrayOfDataTypes.length; i++) {
    //create datalist title
    var dataListTitle = document.createElement("dt");
    dataListTitle.textContent = typeof myArrayOfDataTypes[i]; //output the datatype which myabe string or integer or bolean

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
document.body.innerHTML +=
    `
    <h2>
        ` +
    myHeadingText /*Contacting Strings*/ +
    `
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
myHeading.addEventListener("mouseover", function (event) {
    //here we are saying which element we are tageting
    this.className = "salmon-text"; //here this keyword saying represents our element (myHeading)
});

myHeading.addEventListener("mouseleave", function (event) {
    //here we are saying which element we are tageting
    this.className = "indigo-text"; //here this keyword saying represents our element (myHeading)
});

myHeading.addEventListener("click", function (event) {
    //here we are saying which element we are tageting
    var bigClass = "big-text";
    if (!this.className.includes(bigClass)) {
        this.className += " big-text"; //space is mandatory because we give a space between 2 classes. we are clicking on heading and there is already mouseover event happens..this big-text is second class . if we do 2nd class activity then we have to put space before a class name,
    }
});

/*
Make a function
*/
//Function keyword, followwed by function name
function addTwoNumbers(x, y) {
    x = Number(x); // enforce data-type (number)
    y = Number(y);
    return x + y;
}

function currentDayString() {
    //new date object
    var date = new Date();
    //daclare a string we canstore data info in.
    var dateString; //="";
    //console.log(dateString);
    dateString = date.getFullYear();
    // console.log(typeof date.getFullYear());
    dateString += ".";
    dateString += date.getMonth();
    dateString += ".";
    dateString += date.getDay();
    return dateString;
}
//output to console
console.log("The current date is :\r\n" + currentDayString());

/*
Lets review some conditions
*/

//check for euivalancy
console.log(1 == true); //False
console.log("" == true); //False
console.log(-137 == true); //false
console.log("test" == "test"); //true
console.log(`test` == `test`); //true
console.log(36 == "36"); //true
console.log(0 == false); //true
console.log(1 == true); //true

//check if identical value comaprison and type comparison
console.log(1 === true); //false
console.log("" === true); //false
console.log(-137 === true); //false
console.log("test" === "test"); //true
console.log(`true` === `true`); //true
console.log(0 === false); //false
console.log(1 === true); //false because 1 is integer and true is string

/**
 * HAmberger menu
 */
//lets grab the menu by query selector select nav and menu-button
var myNav = document.querySelector("nav");
//and our menu button
var myNavButton = document.querySelector(".menu-button");

myNavButton.addEventListener("click", function (event) {
    //when clicked, add/remove the "nav-open" class(in html)
    myNav.classList.toggle("nav-open");
});

/*
lets dig into objects
*/
var myObject = {
    name: "Jerry",
    age: 30,
    hobbies: ["snowbording", "action Movies"]
};

console.log(myObject);

//extracting property value
console.log("Object Name : " + myObject.name);
console.log("Object age : " + myObject.age);
console.log(
    "Object Hobbies : " + myObject.hobbies[0] + " , " + myObject.hobbies[1]
);

//Lets add the hpbies array..just like normal!!It is an array afterall.
//Just stored in an object property instead of a variable this time.
myObject.hobbies.push("Programming");
console.log("Updated hobbies : ");
console.log(myObject.hobbies);

/**
 * Lets ramp this with a method.
 */

var newObject = {
    myNum: 5, //property
    updateNum: function () {
        //Here is a method!Note the new syntex, versus function.
        //difference from function
        this.myNum = this.myNum + 5;
        return this.myNum;
    }
};

/**
 * Object Constructor
 */
//leta make an  new instance of "person". this is called an object
function Person(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;

    //adding a method in a constructor function
    this.sayGoodbye = function(){ 
        document.body.innerHTML += `
            <p>
                This is 
                <strong>`+this.name+`</strong>,
                saying <em>goodbye</ed>!
            </p>
        `;
    }

}
//add another!this is not an easier compare than typing the whole object.
var jerry = new Person("jerry",65,["SnowBoarding","Action Movies","Coding"]);

//formated object
var sally = new Person(
    "sally",  //name
    45, //age
    [  //hobies array
        "Biking",
        "hunting",
        "Teaching"
    ]
);

//we can add to blueprint using "prototype", even after its initial declaration,
Person.prototype.introduction = function(){ //this is amethod to our person bluepring /prototype.class!!

    var hobbiesString = "<ul>";  //set up for list HTML
    this.hobbies.forEach( function(value,index) {
        hobbiesString += "<li>"+value+"</li>";  //loop through our hobbies and make a list for each
    });
    hobbiesString +="</ul>"; //we opened ul list and now close it with concatination.

    //add html to body
    document.body.innerHTML += `
        <h2>`+this.name+`</h2>
        <dl>
            <dt>Age</dt>
            <dd>`+this.age+`</dd>
            <dt>Hobbies</dt>
            <dd>`+ hobbiesString /*we built the string above,using this.hobbies, "hobbiesString " is a local variable (born in the method, and it will die in the method.)*/+`</dd>
        </dl>
    `;
}

//extra prototype practice:a property
Person.prototype.nickname = "";
jerry.nickname = "The big jare";
sally.nickname = "Sallers";