// put your globals here - hint: select elements from the HTML
const textArea = document.getElementById("text-area");
const countBtn = document.getElementById("countBtn");
const findWordInput = document.getElementById("findWordInput");
const findBtn = document.getElementById("findBtn");
const wordCountInput = document.getElementById("wordCountInput");
const wordFoundInput = document.getElementById("wordFoundInput");

// dont' forget to add event listeners to teh buttons
countBtn.addEventListener("click", countWords);
findBtn.addEventListener("click", findWords);

function countWords() {
    // your code here
    // call printData
    printData(textArea.value.split(" ").length + " words", wordCountInput);
}

function findWords() {
    // put your local variable for the empty array here
    // remainder of your code follows
    // call printData
    let foundwords = [];
    foundwords = textArea.value.split(" ").filter(Word => Word === findWordInput.value)
    console.log(foundwords);
    printData(foundwords.length + " instances", wordFoundInput);
}

// change param1 and param2 to identifiers that make sense
function printData(data, node) {
    // your code here... one line!
    node.value = data;
}


