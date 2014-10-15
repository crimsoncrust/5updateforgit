//Brandon C Varn
// SDI1410
// Week 3 Project


//Global Variables
var ChildrenNames = ["Jocelyn", "Jeffrey"];

var ChildrenAges = [5, 3]


// functions

console.log("My first two children's names are " + ChildrenNames);

console.log("I had " + ChildrenNames.length + " children.");

console.log ("Three months ago I had a new baby Justice.");

ChildrenNames[ChildrenNames.length] = "Justice";

console.log ("Now I have " + ChildrenNames.length + " who's names are " + ChildrenNames + ".");

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




