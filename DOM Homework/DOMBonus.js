let recipeName = prompt("Please enter the name of the recipe");
let recipe = document.createElement ("h2");
recipe.innerText = `Recipe for ${recipeName}`;
document.body.appendChild (recipe)


let ingredients = Number(prompt("Please enter the number of the ingredients"));
let ingredientsRecipe = document.createElement ("p");
ingredientsRecipe.innerText = `You will need ${ingredients} ingredients` ;
document.body.appendChild (ingredientsRecipe)

let ingredientsArray = [];

for ( let i = 0; i < ingredients; i++ ) {

    ingredientsArray.push(prompt(`Enter your ingredients`));

 }

function newTable () {
    let table = document.createElement ("table");
    document.body.appendChild(table);

for ( let x = 0; x < ingredientsArray.length; x++ ) {

    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement ("td");
    column.innerText = `${ingredientsArray[x]}`;
    row.appendChild (column);

    }

    table.setAttribute ("border", "4");

}

newTable ();