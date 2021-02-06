function User (userTitle, userAuthor) {
    this.title = userTitle,
    this.author = userAuthor
}

document.getElementById("buttonClickYes").addEventListener("click", function () {
    let userTitle = document.getElementById("inputTitle").value;
    let userAuthor = document.getElementById("inputAuthor").value;
    
    let user = new User(userTitle, userAuthor);
    console.log(`You have read ${user.title} by ${user.author}`);

}, false)
    
document.getElementById("buttonClickNo").addEventListener("click", function () {
    let userTitle = document.getElementById("inputTitle").value;
    let userAuthor = document.getElementById("inputAuthor").value;

    let user = new User(userTitle, userAuthor);
    console.log(`You still need to read ${user.title} by ${user.author}`);

}, false);