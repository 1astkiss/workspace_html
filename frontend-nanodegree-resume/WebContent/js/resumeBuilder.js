/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").prepend("<h1>Insoo Kim</h1>");

 //$("#main").append("insoo kim");
 //$("#main").append(" is awesome.");
 //$("#main").append(" is awesome.");
 var firstname = "insoo";
 var age = 47;
 console.log(firstname);

 var email="lastkiss@lastkiss.net";
 var name="insoo kim";
 var role="developer";
 // var newemail = email.replace("lastkiss", "gmail");
 console.log(email);
 var formattedname = HTMLheaderName.replace("%data%", name);
 var formattedrole = HTMLheaderRole.replace("%data%", role);

 $("#main").prepend(formattedrole).prepend(formattedname);

// var s = "audacity";

// var udacityizer = function(s) {  
//    s=s.slice(1);
//    s=s.charat(0).touppercase() + s.slice(1);
//    return s;
// };

//// did your code work? the line below will tell you!
//console.log(udacityizer(s));

//var samplearray = [0,0,7];

//var incrementlastarrayelement = function(_array) {
//    var newarray = [];
//    // your code should make newarray equal to an array that has the same
//    // values as _array, but the last number has increased by one.
    
//    // for example:
//    // _array = [1, 2, 3];
//    // turns into:
//    // newarray = [1, 2, 4];
    
//    // your code goes in here!

//    for(var i=0;i<_array.length; i++){
//        newarray[i] = _array[i];
//    }
    
//    newarray[_array.length - 1] += 1;
//    newarray[_array.length] = 1;
    
//    // don't delete this line!
//    return newarray;
//};

// // did your code work? the line below will tell you!
// console.log(incrementlastarrayelement(samplearray));

// var name = "albert einstein";

// function namechanger(oldname) {
//     var finalname = oldname;
//     // your code goes here!

//     var names = finalname.split(' ');
//     var firstname = names[0].tolowercase().charat(0).touppercase() 
//     + names[0].tolowercase().slice(1);
//     var lastname = names[1].touppercase();
    
//     finalname = firstname + " " + lastname;
    
//     // don't delete this line!
//     return finalname;
// };

// did your code work? the line below will tell you!
// console.log(namechanger(name));

//var bio = {
//	"name":name,
//	"role":role,
//	"contacts":{
//		"email":"bettertoday@gmail.com",
//		"mobile":"010-3932-8848"
//	},

//	"biopic":"images/fry.jpg",
//	"welcomemessage": "welcome!",
//	"skills":["java", "java script"]
//}

//var formattedcontact 
//		= htmlcontactgeneric.replace("%data%", bio.contacts.email)
//				.replace("%contact%", "email");
//$("#topcontacts").append(formattedcontact);