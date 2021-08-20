var currentTime = moment().format("dddd, MMM Do");

// display current date/time in header
$("#currentDay").text(currentTime);

// schedule area was clicked
// click event on .col-10?
$("#block").on("click", function() {
    // grabs current text, if any
    var text = $("#text").text().trim();
    
    // create textarea
    var textInput = $("<textarea>")
    .addClass("textarea")
    .val(text);
    
    // swap <p> with texarea
    $("#text").replaceWith(textInput);
    
    // focus on input
    textInput.trigger("focus");
})

// textarea is blurred
$("#block").on("blur", "textarea", function() {
    console.log("blur")
    // grab value from textarea
    var text = $(this).val().trim();

    // create <p>
    var textP = $("<p>").addClass("p-3").attr("id", "text").text(text);

    // swap textarea with <p>
    $(this).replaceWith(textP);
})

// save button was clicked
$("button").on("click", function() {
    saveText();
})

// save function
var saveText = function() {
    // get text value from textarea
    var text = $("textarea").text().trim();
    console.log(text);
    
    // push to array
    
    // save to localStorage
    
}
    

// load function
    //  get from localStorage


