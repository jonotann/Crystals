var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var images = [
    'https://img.pngmix.com/pm/crystals/crystals_004.png',
    'http://tavernofdreams.com/wp-content/uploads/2016/01/Clear-quartz-crystals-for-lucid-dreaming-400x250.png',   
    'https://i.pinimg.com/originals/0e/e4/d1/0ee4d155315e22bb8148f9092c422c43.png',  
    'http://goodvibrationcrystals.com/wp-content/uploads/2015/11/amethyst.png'
];

$(".crystal").attr('class');

//Hoisting
var resetAndStart = function () {

    $(".crystals").empty();


    random_result = Math.floor(Math.random() * 69) + 30;

    //Writing to doc
    $("#result").html('Random Result: ' + random_result);

    //Looping random command onto crystals
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images [i] + "')",
            "background-size":"contain",
            "background-repeat":"no-repeat",
            
        })

        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);

}



resetAndStart();

var reset = function () {

}

//event delegation
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous)

    console.log(previous);

    if (previous > random_result) {
        lost++;

        $("#lost").html("You lost: " + lost);

        previous = 0;

        resetAndStart();
    }
    else if (previous === random_result) {
        win++;

        $("#win").html("You win: " + win);

        previous = 0;

        resetAndStart();
    }



});