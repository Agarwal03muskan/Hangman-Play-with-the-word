const wordEl=document.getElementById("word");
const wronglettersEl=document.getElementById("wrong-letter");
const playAgainbtn=document.getElementById("play-button");
const notification=document.getElementById("notification-container");
const popup=document.getElementById("popup-container");
const finalmsg=document.getElementById("final-message");
const figureparts=document.querySelectorAll(".figure-part");
const words=[
    "Application","interface","programming","wizard"
];
let selectedWord=
                words[Math.floor(Math.random() * words.length)];
const correctletters=[];
const wrongletters=[];
function dispalyWord(){
   wordEl.innerHTML=`${selectedWord .split("").map((letter)=>`<span class="letter">${correctletters.includes(letter)?letter:""}</span>`).join("")}`;
   const innerWord=wordEl.innerText.replace(/\n/g,"")
  if(innerWord===selectedWord){
    finalmsg.innerText="Congratulation!! You Won :)";
    popup.style.display="flex";
}
}
function updateWrongLetterEl(){
    wronglettersEl.innerHTML=`${
        wrongletters.length>0 ?"<p>Wrong</p>":""}
        ${wrongletters.map((letter)=>`<span>${letter}</span>`)}
    `;

    figureparts.forEach((part,index)=>{
        const errors=wrongletters.length;
        if(index < errors){
            part.style.display="block";
        }
        else{
            part.style.display="none"; 
        }
    });
    if(wrongletters.length===figureparts.length){
        finalmsg.innerText="Unforntunately, You Lost :(";
        popup.style.display="flex";
    }
}
  function showNotification(){
    notification.classList.add("show");
    setTimeout(()=>{
        notification.classList.remove("show");},2000);
  }
window .addEventListener("keydown",(e)=>{
    if(e.keyCode>=65 && e.keyCode<=90){
    const letter=e.key;
      if(selectedWord.includes(letter)){
        if(!correctletters.includes(letter)){
            correctletters.push(letter);
            dispalyWord();
        }
        else{
          showNotification();
        }
    }   
     else{
            if(!wrongletters.includes(letter)){
                wrongletters.push(letter);
                updateWrongLetterEl();
            }
            else{
                showNotification();
            }
        }
      
}
}
);
playAgainbtn.addEventListener("click",()=>{
 correctletters.splice(0);
 wrongletters.splice(0);
 selectedWords=words[Math.floor(Math.random() * words.length)];
 dispalyWord();
 updateWrongLetterEl();
 popup.style.display="none";
});
dispalyWord();