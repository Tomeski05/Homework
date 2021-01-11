let userInput=prompt("Please enter your year");
let convertedInput=parseInt(userInput);
var result=((convertedInput-4)%12);

if (result==0) {
    alert ("Rat");
}
if (result==1) {
    alert ("Ox");
}
if (result==2) {
    alert ("Tiger");
}
if (result==3) {
    alert ("Rabbit");
}
if (result==4) {
    alert ("Dragon");
}
if (result==5) {
    alert ("Snake");
}
if (result==6) {
    alert ("Horse");
}
if (result==7) {
    alert ("Goat");
}
if (result==8) {
    alert ("Monkey");
}
if (result==10) {
    alert ("Dog");
}
if (result==11) {
    alert ("Pig");
}
else ("Please enter a number");