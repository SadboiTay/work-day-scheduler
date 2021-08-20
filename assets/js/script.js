var currentTime = moment().format("dddd, MMM Do");

// display current date/time in header
$("#currentDay").text(currentTime);

// schedule area was clicked
// click event on .col-10?
$("#block").on("click", function() {
    // opens input for text
    var textInput = $("<textarea>")
        .addClass("textarea")
        
    $("#block").append(textInput);
    
    
    // focus on input
    textInput.trigger("focus");
    // create function for save button click
})

// save button was clicked


// save function
    // get text value from #text

    // push to array

    // save to localStorage


// load function
    //  get from localStorage


