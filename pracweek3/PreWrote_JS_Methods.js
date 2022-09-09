let webIntro = 
"Hello! Rather than having to rewrite this text several times over" + 
" I can simply write it into a variable and then when it needs to change, I can just change the variables content!";
//Due to the length of my desired text I used + to link my sentences so that it was more readable!
let webIntLength = webIntro.length; //This will return the length of all the string characters, by adding .length to the end of a string variable

let myShoppingList = "Strawberries, Rasberries, Chocolate";
let snippedList = myShoppingList.slice(7);
//How it works is by having a number like 7, it'll start the string at the 7th character, in this case the first r in strawberries
//If I use -7 it'll only leave the last 7 characters
let weirdList = myShoppingList.substring(3,8);
//Where the first number works like a slice, removing all the letters up the the designated number, where the second one
//determines the length of the numbers given after that, so once we get to character 3, we count 8 more, then snip the rest.
let fixList = myShoppingList.replace("Strawberries", "Blueberries"); //replaces my designated string with new string
//IMPORTANT: ALL STRING METHODS RETURN A NEW STRING AND DONT MODIFY ORIGINAL

//Number methods
let num = 782
num.toString(); //By turning this into a string, I can handle it like I would a standard string.
//ToString doesn't work please use toString, else you'll look silly
num.valueOf(); //By returning this as a number I can handle it like a number.
//These conversions on such a simple task don't do much but can do wonders on a large scale project.

parseFloat("51") + "<br>" +
parseFloat("78 34") + "<br>" +
parseFloat("She's 27 years old");
//These methods check the string to see if theres a number but will only recognise if the number is the first character in the string, else returns NaN.
//And theres also arrays, which work like arrays but use the same syntax as cpp vectors or c# lists.. goodness
const names = ["Kira", "Milly", "Grace", "Katie"];
names.pop();
names.push("Amanda");
names.join(", ");

//Now for prac three, dates and time API
//I'll attempt to implement 3 different types of methods associated with using dates
