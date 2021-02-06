let dog = {
    name: "Toto",
    kind: "Pug",
    speak: document.getElementById("submitButton").addEventListener("click", function () {
        
        userInput = document.getElementById("input").value
        dog.speak = userInput;
        console.log (`${dog.name} the ${dog.kind} says: `);

    },false)
}