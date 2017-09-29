/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $("#main").append("Insoo Kim");
 $("#main").append(" is awesome.");
 $("#main").append(" is awesome.");
 var firstName = "Insoo";
 var age = 47;
 console.log(firstName);

 var email="lastkiss@lastkiss.net";
 var name="Insoo Kim";
 var role="Developer";
 // var newEmail = email.replace("lastkiss", "gmail");
 console.log(email);
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole).prepend(formattedName);

 var s = "audacity";

 var udacityizer = function(s) {  
    s=s.slice(1);
    s=s.charAt(0).toUpperCase() + s.slice(1);
    return s;
 };

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!

    for(var i=0;i<_array.length; i++){
        newArray[i] = _array[i];
    }
    
    newArray[_array.length - 1] += 1;
    newArray[_array.length] = 1;
    
    // Don't delete this line!
    return newArray;
};

// // Did your code work? The line below will tell you!
// console.log(incrementLastArrayElement(sampleArray));

// var name = "AlbERt EINstEiN";

// function nameChanger(oldName) {
//     var finalName = oldName;
//     // Your code goes here!

//     var names = finalName.split(' ');
//     var firstName = names[0].toLowerCase().charAt(0).toUpperCase() 
//     + names[0].toLowerCase().slice(1);
//     var lastName = names[1].toUpperCase();
    
//     finalName = firstName + " " + lastName;
    
//     // Don't delete this line!
//     return finalName;
// };

// Did your code work? The line below will tell you!
// console.log(nameChanger(name));

var bio = {
	"name":name,
	"role":role,
	"contacts":{
		"email":"bettertoday@gmail.com",
		"mobile":"010-3932-8848"
	},

	"bioPic":"images/fry.jpg",
	"welcomeMessage": "welcome!",
	"skills":["Java", "Java Script"]
}

var formattedContact 
		= HTMLcontactGeneric.replace("%data%", bio.contacts.email)
				.replace("%contact%", "email");
$("#topContacts").append(formattedContact);