// DISPLAYS ALERT ON CLICK
$( "#clicktarget" ).click(function() {
    alert( "Handler for .click() called." );
});

// HIDES TEXT ON CLICK
$( "#hidetarget" ).click(function() {
    $("#hidetexttarget").hide();
});

// HIDES ON LOAD THEN SHOWS SOMETHING ON CLICK
$(document).ready(function(){
    $("#showtexttarget").hide();
});
$( "#showtarget" ).click(function() {
    $("#showtexttarget").show();
});

// HIDES 1 STRING ON LOAD THEN TOGGLES BETWEEN THE TWO
$(document).ready(function(){
    $("#toggletexttarget2").hide();
});
$( "#toggletarget" ).click(function() {
    $("#toggletexttarget1").toggle();
});
$( "#toggletarget" ).click(function() {
    $("#toggletexttarget2").toggle();
});

// SLIDEDOWN A PICTURE
$(document).ready(function(){
    $("#picture1").hide();
});
$( "#slidedowntarget" ).click(function() {
    $( "#picture1" ).slideDown();
});

// SLIDEUP A PICTURE
$( "#slideuptarget" ).click(function() {
    $( "#picture2" ).slideUp();
});

// SLIDETOGGLE A PICTURE
$( "#slidetoggletarget" ).click(function() {
    $( "#picture3" ).slideToggle();
});

// FADEIN A PICTURE
$(document).ready(function(){
    $("#picture4").hide();
});
$( "#fadeintarget" ).click(function() {
    $( "#picture4" ).fadeIn();
});

// FADEOUT A PICTURE
$( "#fadeouttarget" ).click(function() {
    $( "#picture5" ).fadeOut();
});

// ADDCLASS 
$( "#addclasstarget" ).click(function() {
    $( "#addclasstexttarget" ).addClass("selected highlight");
});

// BEFORE 
$( "#beforetarget" ).click(function() {
    $( "#beforetexttarget" ).before("<b>I GO FIRST!</b>");
});

// AFTER 
$( "#aftertarget" ).click(function() {
    $( "#aftertexttarget" ).after("<b>I GO LAST!</b>");
});

// APPEND 
$( "#appendtarget" ).click(function() {
    $( "#appendtexttarget" ).append("<b>I'VE BEEN APPENDED!");
});

// HTML 
$( "#htmltarget" ).click(function() {
    $( "#htmltargettext" ).html("<b>WOW!</b>");
});

// ATTR
$( "#attrtarget" ).click(function() {
    $( "#picture6" ).attr("width","500");
});

// VAL 
$( "#valtarget" ).click(function() {
    $( "input:text" ).val("humphrey bogart");
});

// TEXT
$( "#texttarget" ).click(function() {
    $( ".text p" ).text("humphrey bogart");
});