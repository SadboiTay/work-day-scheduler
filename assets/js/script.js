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
    // reset 'saved' array to empty
    saved = [];

    // iterate over each time block to grab potential text data
    $(".col-10").each(function() {
        // grab text
        var text = $(this).text().trim();

        // grab timeSlot 
        var timeSlot = $(this).attr("id");
        
        // package into object
        savedObj = {
            text: text,
            timeSlot: timeSlot
        }
        
        // push to array
        saved.push(savedObj);
    })

    saveText(saved);
})

// save function
var saveText = function(saved) {
    // save to localStorage
    localStorage.setItem("saved", JSON.stringify(saved));
}
    

// load function
var loadText = function () {
    //  get from localStorage
    loaded = JSON.parse(localStorage.getItem("saved"));
    
    // if nothing to load, make empty array
    if (!loaded) {
        saved = [];
    }
    
    // loop through array and get each timeblock
    for (var i = 0; i < loaded.length; i++) {
        // grab text
        var text = loaded[i].text

        // grab timeSlot
        var blockId = loaded[i].timeSlot

        // target each timeblock according to timeslot id and load text
        $("#"+blockId).children("p").text(text);

    }
}

loadText();
