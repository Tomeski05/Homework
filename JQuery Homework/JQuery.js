  
$(document).ready(function() {

  $("#button").click(function () {
  
     let userInput =  $("#inputText").val();
  
$("#inputText").after(`<h1> Hello there ${userInput}!</h1>`);
  
})

$("#generateText").click(function () {
    let userTextInput = $("#textInput").val();
    let userColorInput = $("#inputColor").val();
    let validationText = (userTextInput.length > 0)
 
    
    if ((validationText == true)) {
        $("div").after(`<h1 id="myHeading"> ${userTextInput}</h1>`);
       $("#myHeading").css("color", userColorInput);

    }

    else{
        $("div").after("<h4> Enter text and a valid color </h4>") 

    }
 })

 })