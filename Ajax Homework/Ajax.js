document.getElementById("buttonPost").addEventListener("click",function() {
    let userNumber = Number($("#numberInput").val());
    if (userNumber > 99 || userNumber < 1){
        alert("Please enter a number between 1 to 100")
    }

    else{
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(sum => sum.json())
            .then(info => { 
                if (info !== undefined && info.length > 0) {
                    document.getElementById("div").innerHTML = (
                        `
                            <ul>
                                ${info.map(info =>{
                                    if(userNumber=== info.id) {
                                        return (
                                            `
                                                <li>
                                                    Id : ${info.id} </br>
                                                    Title: ${info.title} </br>
                                                    Body: ${info.body} </br>
                                                </li>  
                                            `
                                        )
                                    }
                                }).join("")}
                            <ul> 
                        `
                    )
                }
                }
            )
            .catch(error => {
                console.error(error);
            })
    }
},false)


document.getElementById("button").addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(sum => sum.json())
        .then(json => {
            if (json !== undefined && json.length > 0){
                document.getElementById("divOmnisWord").innerHTML = (
                    `
                        <ul>
                            ${json.map(json => {
                                if (json.title.match("omnis")){
                                    return (
                                        `
                                            <li>
                                                    Id: ${json.id}
                                                    Title: ${json.title}
                                            </li>
                                        `
                                    )
                                }
                            }).join("")}
                            </ul>
                    `
                )
            }
        })
})



document.getElementById("register").addEventListener("click",function() {

    let userFName = $("#userFName").val();
    let userLName = $("#userLName").val();
    let userName = $("#userName").val();
    let userEmail = $("#userEmail").val();
    let userPhone = $("#userPhone").val();
    
    function registerUser(userFName, userLName,userName,userEmail, userPhone){
        if (userName !== "" && userLName !== "" && userEmail !== "" && userPhone !== ""){
            fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                body: JSON.stringify( {
                    
                    "First Name": userFName,
                    "Last Name": userLName,
                    "Username": userName,
                    "e-mail": userEmail,
                    "User phone": userPhone
                }),
                headers: {
                    "Content-type": "registration/json; charset=UTF-8", 
                }
            })

            .then(response => response.json())
            .then(registerUser => console.log("success", registerUser))
            .catch(error => {
                console.error(error);
            })
        } 
    }
    registerUser(userFName, userLName, userName, userEmail, userPhone);
})