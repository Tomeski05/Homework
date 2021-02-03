let userTitle = document.getElementById("inputTitle").value;
    let userAuthor = document.getElementById("inputAuthor").value;

    function User (userTitle, userAuthor) {
        this.title = userTitle,
        this.author = userAuthor
    }

document.getElementById("buttonClickYes").addEventListener("click", function () {
    
    let User = new User (userTitle, userAuthor);
    console.log(`You have read ${userTitle.userTitle} by ${userAuthor.userAuthor}`);

}, false)
    
document.getElementById("buttonClickNo").addEventListener("click", function () {
    
    let User = new User (userTitle, userAuthor);
    console.log(`You still need to read ${userTitle.userTitle} by ${userAuthor.userAuthor}`);

}, false)


// Zdravo Darko, imam nekoja greska ama ne mozam da ja najdam, koga ke vnesam nesto vo poleto title ili author
// vo console.log mi dava prazno mesto ili mi dava greska na 11 red, cannot access `User`
