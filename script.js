// variable for time/date at header
var today = moment();
// var input = $(".input");

// variables for local storage 
var timeColumn = $(".timeColumn");
var saveButton = $(".saveBtn");

console.log(timeColumn);

// Display Day/Date at Header
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// local storage for "input"
function saveFormInput (event) {
    event.preventDefault();
    
    var toDoItem = $('[name=fname]').val();

    var toDoDisplay = {
        time: $('.timeColumn'),
        toDoItem: toDoItem,
    };

    if (!toDoItem) {
        console.log("No to do items in form!");
        return;
    } else {
       for (let i=0; i <localStorage.length; i++) {
           localStorage.setItem("activities", JSON.stringify(toDoDisplay));
    }
}
    console.log(toDoDisplay);
}


// function to change color for past/present/future

// get data from time column for use in for each loop
// $(".timeColumn").map(function() {
//     return((timeColumn).outerText());
// }).get().join();

// console.log("after joining"+timeColumn);

// run for each loop to change class/color
// var currentHour = moment().format("hh mm");
// console.log (currentHour);

//  $(".timeColumn").each(function (i) {
//      if (timeColumn===currentHour) {
//        input.addClass("present");
//      } else {
//          input.addClass("future");
//      }
//  })

 saveButton.on('click', saveFormInput);