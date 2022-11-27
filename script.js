
const textArea= document.getElementById("text-area");
const countBtn=document.getElementById("countBtn");
const findWordInput = document.getElementById("findWordInput");
const findBtn=document.getElementById("findBtn");

countBtn.addEventListener("click",function(){
  const WordsCount = (textArea.value.split(" ")).length;
  console.log(WordsCount);
  });

  const array=[];
  const foundWords=[];
  findBtn.addEventListener("click",function(){
  array.forEach((foundWord)=>{
      if(foundWord===findWordInput.value){
          foundWords.push(foundWord);
      }
  });
  });
  console.log(foundWords);

function printData(){
    countBtn.addEventListener("click",function(){
    const WordsCount = (textArea.value.split(" ")).length;
    console.log(WordsCount);
    });

    const array=[];
    const foundWords=[];
    findBtn.addEventListener("click",function(){
    array.forEach((foundWord)=>{
        if(foundWord===findWordInput.value){
            foundWords.push(foundWord);
        }
    });
    });
    console.log(foundWords);
}
printData();