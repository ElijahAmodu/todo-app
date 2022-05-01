var list = [];

//Button
document.getElementById('add-button').addEventListener('submit  ', guardNumerous());


//Getting value from input
/*function inputText() {
    let arrayValue = document.getElementById('input').value
    list.push(arrayValue);
    console.log(list);
}*/

function guardNumerous() {
    boxvalue = document.getElementById('input-sentence').value;
    list.push(boxvalue);
    console.log(list);return list; // stop submission
  }