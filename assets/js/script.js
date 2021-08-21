var currentTime = moment().format("dddd, MMM Do");

var saved = [];

// display current date/time in header
$("#currentDay").text(currentTime);

// schedule area was clicked
$(".col-10").on("click", function() {
    // find this blocks unique id
    var blockId = $(this).attr('id');

    // grabs current text, if any
    var text = $(this).children("p").text().trim();

    // create textarea
    var textInput = $("<textarea>").addClass("textarea").val(text);
    
    // swap <p> with texarea
    $(this).children("p").replaceWith(textInput);
    
    // focus on input
    textInput.trigger("focus");
})

// textarea is blurred
$(".col-10").on("blur", "textarea", function() {
    // grab value from textarea
    var text = $(this).val().trim();

    // create <p>
    var textP = $("<p>").addClass("p-3").attr("id", "text").text(text);

    // swap textarea with <p>
    $(this).replaceWith(textP);
})

// save button was clicked
$("button").on("click", function() {
    // grab time slot
    var timeSlot = $(this).siblings(".col-10").attr('id');

    // grab text value
    var text = $(this).siblings(".col-10").children("p").text();

    saveText(text, timeSlot);
})

// save function
var saveText = function(text, timeSlot) {
    // package into object
    savedObj = {
        text: text,
        timeSlot: timeSlot
    }

    console.log(savedObj);

    // push to array
    saved.push(savedObj);

    console.log(saved);
    // save to localStorage
    
}
    

// load function
    //  get from localStorage


