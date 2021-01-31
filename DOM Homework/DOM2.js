function listArray (myArrayList, header) {

let container = 0;
for ( let i = 0; i < myArrayList.length; i++) {
    container += myArray[i];
    }

 console.log(container)

 header.innerHTML = `<h3> Array </h3>`;
 for ( let x of myArrayList) {
     header.innerHTML += `<li>${x}</li>`;
 }
}

let myArray = [15, 25, 10];
console.log(myArray)

let list = document.getElementsByClassName("arrayList");
listArray (myArray, list);