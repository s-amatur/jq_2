$(document).ready(function() {
    // alert
    $('#alert').click(function() {
        alert("Welcome to my page");
    });
    // hide
    $('#hide').click(function() {
        $('p').hide("fast");
    });
    // show
    $('#show').click(function() {
        $('p').show(5000);
    });
    // toggle
    $('#toggle').click(function() {
        $('p').toggle("slow");
    });
    // fade 
    $('#hide2').click(function() {
        $('h4').fadeOut(1000);
    });
    // fade 
    $('#show2').click(function() {
        $('h4').fadeIn(1000);
    });
    // fade toggle
    $('#toggle2').click(function() {
        $('h4').fadeToggle(1000);
    });
    // panel
    $('.panel').click(function() {
        $('.content').slideToggle(1000)
    });
    // draggable
    $("#draggable").draggable();
    // autocomplete
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
    // datepicker
    $("#datepicker").datepicker();

    // widget
    $(".widget input[type=submit], .widget a, .widget button").button();
    $("button, input, a").click(function(event) {
        event.preventDefault();
    });

    // selectable
    $("#selectable").selectable();
    // tool tip
    $(document).tooltip();

});