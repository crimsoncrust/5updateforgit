//Brandon C Varn
// SDI1410
// Week 3 Project


//Global Variables
var ChildrenNames = ["Jocelyn", "Jeffrey"];

var ChildrenAges = [5, 3];

// local variables
var numberOfpops;
var boughtPopsicles;

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
    //buy them 3 popsicles even if you are to cheap
    return 3;
  }
  
  numberOfpopsicles = Math.floor(popsicles / amountPerPopsicles);
  return numberOfpopsicles;
  
};

//json function w/ boolean

var childrenData = function (json) {
  for (var key in json.birthDates) {
    for (var nextKey in json.birthDates[key]) {
     
      if (json.birthDates[key][nextKey] === "Justice") {
       
        console.log("My newest child's name is Justice");
    
      }
    
    
  };

  };
};

//while function with json this failed miserably
 /*   var childrenDOB = function (json) { //The function is Json. It is storing variables.
      for (var key in json.birthDates) { //establishing variable key in json.birthdates, looping it to what established variable?
        for (var nextKey in json.birthDates[key]){ //doing the same thing here, with the established variable nextkey. 
          while (json.birthDates[key][nextKey] > 0){ 
            nextKey--; //count down next key
            console.log("Kids DOB is " + nextKey); 
            
          }
          
        }
        
      }
      
      
    };
    
*/
//Attempted to nestle a condition and I think it is wrong, I am not sure at this point what to do
var example = function()
{
  var list = json;
  var i = 1;  
  while (i < 9) {
    console.log(json.birthDates[i]);
    i = i + 3;

  }

};
  
  
//Main Code


console.log("My first two children's names are " + ChildrenNames);
//using array length
console.log("I had " + ChildrenNames.length + " children.");

childrenData(json);

//using array length
ChildrenNames[ChildrenNames.length] = "Justice";

ChildrenVerification(ChildrenNames.length);

for (var i = 0; i < ChildrenNames.length; i++) { 
    //true false statement
        if (ChildrenNames[i] === "Jocelyn") {
            //code
            console.log (ChildrenNames[i] + " is my first born child and she is great.");
         
        } else {
            
            console.log(ChildrenNames[i] + " is also a great child.");
    
        };
};

console.log("My first two childrens ages are " + ChildrenAges + ".");
//using the push for adding new age
ChildrenAges.push(0);

console.log("After Justice was born the new ages are " + ChildrenAges + ".");

console.log("I think I am going to take my kids and buy them some popsicles.");

promptAnswer = prompt ("How much do you want to spend on popsicles?");
numberOfpops = parseInt (promptAnswer);

boughtPopsicles = childrenBuy (numberOfpops);
console.log ("I went and bought my children " + boughtPopsicles + " popsicles because I love them.");

console.log("Each child's name in order of birth is.")
example();
