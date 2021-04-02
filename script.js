var today = moment();
var saveButton = $(".saveBtn");
var now = moment().format("HH");
// var now = 12;
var desc = $(".description");
console.log(now);

var timeColumn = $(".time-block");
console.log(timeColumn);
console.log(timeColumn[0].id);


// Display Day/Date at Header
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// render page load persist local storage

    $('#9am').val(localStorage.getItem('9am'));
    $('#10am').val(localStorage.getItem('10am'));
    $('#11am').val(localStorage.getItem('11am'));
    $('#12pm').val(localStorage.getItem('12pm'));
    $('#13pm').val(localStorage.getItem('1pm'));
    $('#14pm').val(localStorage.getItem('2pm'));
    $('#15pm').val(localStorage.getItem('3pm'));
    $('#16pm').val(localStorage.getItem('4pm'));
    $('#17pm').val(localStorage.getItem('5pm'));


function saveFormInput (event) {
    event.preventDefault();
    var timeBlock = $(this).val();
    console.log(timeBlock);

    $(".description").each(function( index, text ) {
        var x = $(text).attr("id");
        console.log(x);
        var toDoItem = $(text).val();
        console.log(toDoItem);
        if (timeBlock===x) {
            localStorage.setItem(timeBlock, toDoItem);
        }
    });

}

// if statement for color class (past present future)

    // for (var i=0; i<timeColumn.length; i++){
     $(".hour").each (function (){   
       var timeStamp = $(this).attr("value");

    //    console.log(timeStamp);
    //    console.log(now);
    //    console.log($(this));

    if (timeStamp===now) {
       desc.removeClass("past");
       desc.removeClass("future");
       desc.addClass("present");
    } else if (timeStamp<now) {
       desc.addClass("past");
       desc.removeClass("future");
       desc.removeClass("present");
    } else if (timeStamp>now) {
       desc.removeClass("past");
       desc.addClass("future");
       desc.removeClass("present");
    }
 }
)  

saveButton.on('click', saveFormInput);