// use jquery to get from id to the type number w/ a value of the last place of the id by stripping away "hour-"
// traverse dom to the element testarea associated w/ its id
// use moment to get the current hour
// if hour of the day is less than 
// combine selecting dom traversal
// or grab div w/ id and grab second child which is the text area
// add text to hour-9 second child text area


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = moment().format("h");

if (time > 9) {
$("#hour-9").addClass("past");
}
if (time > 10) {
$("#hour-10").addClass("past");
}
if (time > 11) {
$("#hour-11").addClass("past");
}
if (time > 12) {
$("#hour-12").addClass("past");
}
if (time > 13) {
$("#hour-13").addClass("past");
}
if (time > 14) {
$("#hour-14").addClass("past");
}
if (time > 15) {
$("#hour-15").addClass("past");
}
if (time > 16) {
$("#hour-16").addClass("past");
}
if (time > 17) {
$("#hour-17").addClass("past");
}

if (time < 9) {
$("#hour-9").addClass("future");
}
if (time < 10) {
$("#hour-10").addClass("future");
}
if (time < 11) {
$("#hour-11").addClass("future");
}
if (time < 12) {
$("#hour-12").addClass("future");
}
if (time < 13) {
$("#hour-13").addClass("future");
}
if (time < 14) {
$("#hour-14").addClass("future");
}
if (time < 15) {
$("#hour-15").addClass("future");
}
if (time < 16) {
$("#hour-16").addClass("future");
}
if (time < 17) {
$("#hour-17").addClass("future");
}
if (time == 9) {
$("#hour-9").addClass("present");
}
if (time == 10) {
$("#hour-10").addClass("present");
}
if (time == 11) {
$("#hour-11").addClass("present");
}
if (time == 12) {
$("#hour-12").addClass("present");
}
if (time == 13) {
$("#hour-13").addClass("present");
}
if (time == 14) {
$("#hour-14").addClass("present");
}
if (time == 15) {
$("#hour-15").addClass("present");
}
if (time == 16) {
$("#hour-16").addClass("present");
}
if (time == 17) {
$("#hour-17").addClass("present");
}





var saveBtn9El = $(".saveBtn9");
if (localStorage.getItem("hour-9Input") === null) {
    var hour9Input = "";
} else {
    var hour9Input = localStorage.getItem("hour-9Input");
    $("#hour-9").children("textarea").val(hour9Input);
}
function saveInput9() {
    hour9Input = $("#hour-9").children("textarea").val();
    localStorage.setItem("hour-9Input", hour9Input);
}
saveBtn9El.on("click", saveInput9);


var saveBtn10El = $(".saveBtn10");
if (localStorage.getItem("hour-10Input") === null) {
    var hour10Input = "";
} else {
    var hour10Input = localStorage.getItem("hour-10Input");
    $("#hour-10").children("textarea").val(hour10Input);
}
function saveInput10() {
    hour10Input = $("#hour-10").children("textarea").val();
    localStorage.setItem("hour-10Input", hour10Input);
}
saveBtn10El.on("click", saveInput10);

var saveBtn11El = $(".saveBtn11");
if (localStorage.getItem("hour-11Input") === null) {
    var hour11Input = "";
} else {
    var hour11Input = localStorage.getItem("hour-11Input");
    $("#hour-11").children("textarea").val(hour11Input);
}
function saveInput11() {
    hour11Input = $("#hour-11").children("textarea").val();
    localStorage.setItem("hour-11Input", hour11Input);
}
saveBtn11El.on("click", saveInput11);

var saveBtn12El = $(".saveBtn12");
if (localStorage.getItem("hour-12Input") === null) {
    var hour12Input = "";
} else {
    var hour12Input = localStorage.getItem("hour-12Input");
    $("#hour-12").children("textarea").val(hour12Input);
}
function saveInput12() {
    hour12Input = $("#hour-12").children("textarea").val();
    localStorage.setItem("hour-12Input", hour12Input);
}
saveBtn12El.on("click", saveInput12);

var saveBtn13El = $(".saveBtn13");
if (localStorage.getItem("hour-13Input") === null) {
    var hour13Input = "";
} else {
    var hour13Input = localStorage.getItem("hour-13Input");
    $("#hour-13").children("textarea").val(hour13Input);
}
function saveInput13() {
    hour13Input = $("#hour-13").children("textarea").val();
    localStorage.setItem("hour-13Input", hour13Input);
}
saveBtn13El.on("click", saveInput13);

var saveBtn14El = $(".saveBtn14");
if (localStorage.getItem("hour-14Input") === null) {
    var hour14Input = "";
} else {
    var hour14Input = localStorage.getItem("hour-14Input");
    $("#hour-14").children("textarea").val(hour14Input);
}
function saveInput14() {
    hour14Input = $("#hour-14").children("textarea").val();
    localStorage.setItem("hour-14Input", hour14Input);
}
saveBtn14El.on("click", saveInput14);

var saveBtn15El = $(".saveBtn15");
if (localStorage.getItem("hour-15Input") === null) {
    var hour15Input = "";
} else {
    var hour15Input = localStorage.getItem("hour-15Input");
    $("#hour-15").children("textarea").val(hour15Input);
}
function saveInput15() {
    hour15Input = $("#hour-15").children("textarea").val();
    localStorage.setItem("hour-15Input", hour15Input);
}
saveBtn15El.on("click", saveInput15);

var saveBtn16El = $(".saveBtn16");
if (localStorage.getItem("hour-16Input") === null) {
    var hour16Input = "";
} else {
    var hour16Input = localStorage.getItem("hour-16Input");
    $("#hour-16").children("textarea").val(hour16Input);
}
function saveInput16() {
    hour16Input = $("#hour-16").children("textarea").val();
    localStorage.setItem("hour-16Input", hour16Input);
}
saveBtn16El.on("click", saveInput16);

var saveBtn17El = $(".saveBtn17");
if (localStorage.getItem("hour-17Input") === null) {
    var hour17Input = "";
} else {
    var hour17Input = localStorage.getItem("hour-17Input");
    $("#hour-17").children("textarea").val(hour17Input);
}
function saveInput17() {
    hour17Input = $("#hour-17").children("textarea").val();
    localStorage.setItem("hour-17Input", hour17Input);
}
saveBtn17El.on("click", saveInput17);



