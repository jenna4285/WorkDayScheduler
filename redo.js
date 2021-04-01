var today = moment();
var saveButton = $(".saveBtn");
// var now = moment().format("HH");
var now = 12;
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

    for (i=0; i<timeColumn.length; i++)
       var temp = timeColumn[i];
       console.log(timeColumn)
    if (timeColumn[i]===now) {
       temp.classList.remove("past");
       temp.classList.remove("future");
       temp.classList.add("present");
    } else if (timeColumn[i]<now) {
       temp.classList.add("past");
       temp.classList.remove("future");
       temp.classList.remove("present");
    } else if (timeColumn[i]>now) {
       temp.classList.remove("past");
       temp.classList.add("future");
       temp.classList.remove("present");
    }


saveButton.on('click', saveFormInput);