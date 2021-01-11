let userBirthday = prompt ("Please enter your birthday date (DD.MM.YYYY) ");
let stringFormatedDate = userBirthday.match (/(\d\d)(\d\d)(\d\d\d\d)/);

let birthDate = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);

let birthDateDate = birthDate.getDate();
let birthDateMonth = birthDate.getMonth() + 1;
let birthDateFullYear = birthDate.getFullYear();

let todayDate = new Date();

let todayDateDate = todayDate.getDate();
let todayDateMonth = todayDate.getMonth() + 1;
let todayDateFullYear = todayDate.getFullYear();

let ageDifference = todayDateFullYear - birthDateFullYear

if ( ageDifference < 18 ) {
    alert ("You are minor");
}
else if ( ageDifference == 18 && todayDateMonth == birthDateMonth && todayDateDate == birthDateDate ) {
    alert ("Happy Birthday, you are adult");
}
else if ( ageDifference ==18 && todayDateMonth < birthDateMonth ) {
    alrt ("You are minor");
}
else if ( ageDifference == 18 && birthDateMonth == todayDateMonth && todayDateDate < birthDateDate ) {
    alrt ("You are minor");
}
else {
    alert ("You are adult");
}


// sakam da prasam zosto kaj getDate i getFullYear nema +1 kako kaj getMonth