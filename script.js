// put your globals here - hint: select elements from the HTML
let textArea= document.getElementById("text-area");
let countBtn=document.getElementById("countBtn");
let findWordInput = document.getElementById("findWordInput");
let findBtn=document.getElementById("findBtn");



// dont' forget to add event listeners to teh buttons
countBtn.addEventListener("click",function(){
  let WordsCount = (textArea.value.split(" ")).length;
  console.log(WordsCount);
  });

  let array=[];
  let foundWords=[];
  findBtn.addEventListener("click",function(){
  array.forEach((each)=>{
      if(each===findWordInput.value){
          foundWords.push(each);
      }
  });
  });
  console.log(foundWords);

  function printData(){
    countBtn.addEventListener("click",function(){
    let WordsCount = (textArea.value.split(" ")).length;
    console.log(WordsCount);
    });

    let array=[];
    let foundWords=[];
    findBtn.addEventListener("click",function(){
    array.forEach((each)=>{
        if(each===findWordInput.value){
            foundWords.push(each);
        }
    });
    });
    console.log(foundWords);
}
printData();
