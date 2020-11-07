# GOAL


## CLIENTELE


## PROCESS


## BEFORE AND AFTER SCREENSHOTS

![Starting Code.] (./assets/S)


var save = document.querySelector('section');
var savedText = document.querySelector('#input');
var text = document.querySelector('#input');

save.addEventListener('submit', function ( event ) {
    //Don't save..
    event.preventDefault();
        //if empty
        if (savedText.value.length < 1) return;

    //Add item 
    text.innerHTML;
    //Clear ?
    savedText.value= ' ';

    //Save to localStorage
    localStorage.setItem('savedText', text.innerHTML);

console.log(localStorage);

}, false);

//Check for saved items and show saved
var saveHistory = localStorage.getItem('savedText');

    if (saveHistory) {
        text.innerHTML = saved;
    }

//var myStorage = window.localStorage;
//document.getElementById(".userTextArea").style.color = "grey";
//onclick = document.getElementById


 //   document.getElementById("p2").style.color = "blue";

   // function changeBackground(color) {
   //     document.body.style.background = color;
   //  }
     
   //  window.addEventListener("load",function() { changeBackground('red') });

   // $('.saveBtn').on('click', (e) => {
    // LET hourClicked equal the buttons clicked sibling textarea's date-time.
  //  let hourClicked = $(e.target).siblings('textarea').data('time')
    // LET notesSaved equal the buttons clicked sibling textarea's value.
 //   let notesSaved = $(e.target).siblings('textarea').val()
    
  //  localStorage.setItem('hour' + hourClicked, notesSaved)
// });