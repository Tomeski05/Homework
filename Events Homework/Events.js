document.getElementById ("submit").addEventListener ("click", function() {
    let generatedTable = document.createElement ("dynamicTable");
    document.body.appendChild (submit);
    submit.innerText = "Dynamic Table"

    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value;
    
    for ( i = 0; i <= rows; i++ ) {

        let row = document.createElement ("tr");
        generatedTable.appendChild (row);

    for ( x = 0; x <= columns; x++ ) {

        let column = document.createElement ("td")
        column.innerText = (`Row ${[i + 1]} Column ${[x + 1]}`);
        row.appendChild (column)
        }

        table.appendChild (row);
        table.setAttribute ("border", "4")     // Decki probav da stavam border ama ne mozam da ja najdam greskata zasto ne mi dava, na prethodnata domasna so DOM uspeav

    }

},false)