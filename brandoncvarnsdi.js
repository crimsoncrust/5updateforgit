//Brandon C Varn
// SDI1410
// Week 3 Project


//Global Variables
var ChildrenNames = ["Jocelyn", "Jeffrey"];

var ChildrenAges = [5, 3];

// local variables
var numberOfpops;
var boughtPopsicles

// functions

var ChildrenVerification = function (argArray) {
        
  console.log("I now have " + argArray + " children.");
        
};

var timeToChildrensBirthDates = function (ttcbd){
  
  
};

var childrenBuy = function (popsicles) {
  var amountPerPopsicles = 2;
  var numberOfpopsicles;
  if (popsicles < amountPerPopsicles) {
    console.log("I am not going to be able to get any popsicles for my kids if they are that much!");
    return;
  }
  
  numberOfpopsicles = Math.floor(popsicles / amountPerPopsicles);
  return numberOfpopsicles;
  
};

//json function

var childrenData = function (json) {
   console.log(json);
};

//Main Code


console.log("My first two children's names are " + ChildrenNames);

console.log("I had " + ChildrenNames.length + " children.");

console.log ("Three months ago I had a new baby Justice.");

ChildrenNames[ChildrenNames.length] = "Justice";

ChildrenVerification(ChildrenNames.length);

for (var i = 0; i < ChildrenNames.length; i++) { 
    
        if (ChildrenNames[i] === "Jocelyn") {
            //code
            console.log (ChildrenNames[i] + " is my first born child and she is great.");
         
        } else {
            
            console.log(ChildrenNames[i] + " is also a great child.");
    
        };
};

console.log("My first two childrens ages are " + ChildrenAges + ".");

ChildrenAges.push(0);

console.log("After Justice was born the new ages are " + ChildrenAges + ".");

childrenData(json);

console.log("I think I am going to take my kids and buy them some popsicles.");

promptAnswer = prompt ("How much do you want to spend on popsicles?");
numberOfpops = parseInt (promptAnswer);

boughtPopsicles = childrenBuy (numberOfpops);
console.log ("I went and bought my children " + boughtPopsicles + " popsicles because I love them.");
