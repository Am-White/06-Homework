var clearBtn = $('clearBtn');
const currentDay = moment();

//Shows current time in Header when page loads
setInterval (function() {
    var date = moment();
    $(".date").text(date.format("[Today is:] MMM DD, YYYY"));
    }, 1000);


 // saveBtn event
 $('.saveBtn').on('click',(event) => {
    let saveButton = $(event.target).siblings('textarea').data('time')
    let savedText = $(event.target).siblings('textarea').val()
    
    localStorage.setItem('hour' + saveButton, savedText)
});

// Accessing localStorage
// Military time
for (let hourIndex = 9; hourIndex <= 24; hourIndex++) {
    let savedTodo = localStorage.getItem('hour' + hourIndex);
    $(`#hour${hourIndex}`).text(savedTodo)
        // If nothing is in the box then nothing will be saved= reset
    if ($(`#hour${hourIndex}`).text() == null) {
        $(`#hour${hourIndex}`).text().empty();
    }
    
}

//console.log(localStorage);//

// Military time
for (let timeIndex = 9; timeIndex <= 24; timeIndex++) {
    const timeCurrent = $(`#hour${timeIndex}`).data('time');

    if (parseInt(currentDay.format('H')) > timeCurrent) {
        $(`#hour${timeIndex}`).addClass('past')
    }
    else if (parseInt(currentDay.format('H')) == timeCurrent) {
        $(`#hour${timeIndex}`).addClass('present')
    }
    else if (parseInt(currentDay.format('H')) < timeCurrent) {
        $(`#hour${timeIndex}`).addClass('future')
    }
}

// Refreshing the planner!! WORK IN PROGRESS 
//$('clearBtn').on('click', (event) => {
//    event.preventDefault();
//        localStorage.empty();
//});

//console.log(clearBtn);
