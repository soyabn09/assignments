// DATES //

var UNIT2301 = new Date("May 1, 2020 23:00:00 GMT+00:00").getTime();
var UNIT2302 = new Date("May 1, 2020 23:00:00 GMT+00:00").getTime();
var UNIT2303 = new Date("May 14, 2020 23:00:00 GMT+00:00").getTime();
var UNIT4201 = new Date("Apr 24, 2020 23:59:00 GMT+00:00").getTime();
var UNIT4202 = new Date("May 5, 2020 23:59:00 GMT+00:00").getTime();
var UNIT4203 = new Date("May 15, 2020 23:59:00 GMT+00:00").getTime();

// Update the date every second //
var A = setInterval(function() {

    var d = new Date();
    var n = d.toUTCString();
    document.getElementById("DATE").innerHTML = "Today: " + n;

    // Get today's date and time
    var NOW = new Date().getTime();

    // Find the distance between now and the count down date

    var DISTANCE10 = UNIT2301 - NOW;

    var DAYS10 = Math.floor(DISTANCE10 / (1000 * 60 * 60 * 24));
    var HOURS10 = Math.floor((DISTANCE10 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var MINS10 = Math.floor((DISTANCE10 % (1000 * 60 * 60)) / (1000 * 60));
    var SECS10 = Math.floor((DISTANCE10 % (1000 * 60)) / 1000);

    var DISTANCE11 = UNIT2302 - NOW;

    var DAYS11 = Math.floor(DISTANCE11 / (1000 * 60 * 60 * 24));
    var HOURS11 = Math.floor((DISTANCE11 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var MINS11 = Math.floor((DISTANCE11 % (1000 * 60 * 60)) / (1000 * 60));
    var SECS11 = Math.floor((DISTANCE11 % (1000 * 60)) / 1000);

    var DISTANCE12 = UNIT2303 - NOW;

    var DAYS12 = Math.floor(DISTANCE12 / (1000 * 60 * 60 * 24));
    var HOURS12 = Math.floor((DISTANCE12 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var MINS12 = Math.floor((DISTANCE12 % (1000 * 60 * 60)) / (1000 * 60));
    var SECS12 = Math.floor((DISTANCE12 % (1000 * 60)) / 1000);

    var DISTANCE13 = UNIT4201 - NOW;

    var DAYS13 = Math.floor(DISTANCE13 / (1000 * 60 * 60 * 24));
    var HOURS13 = Math.floor((DISTANCE13 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var MINS13 = Math.floor((DISTANCE13 % (1000 * 60 * 60)) / (1000 * 60));
    var SECS13 = Math.floor((DISTANCE13 % (1000 * 60)) / 1000);

    var DISTANCE14 = UNIT4202 - NOW;

    var DAYS14 = Math.floor(DISTANCE14 / (1000 * 60 * 60 * 24));
    var HOURS14 = Math.floor((DISTANCE14 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var MINS14 = Math.floor((DISTANCE14 % (1000 * 60 * 60)) / (1000 * 60));
    var SECS14 = Math.floor((DISTANCE14 % (1000 * 60)) / 1000);

    var DISTANCE15 = UNIT4203 - NOW;

    var DAYS15 = Math.floor(DISTANCE15 / (1000 * 60 * 60 * 24));
    var HOURS15 = Math.floor((DISTANCE15 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var MINS15 = Math.floor((DISTANCE15 % (1000 * 60 * 60)) / (1000 * 60));
    var SECS15 = Math.floor((DISTANCE15 % (1000 * 60)) / 1000);

    document.getElementById("U23.1").innerHTML = DAYS10 + "d " + HOURS10 + "h " + MINS10 + "m " + SECS10 + "s ";

    document.getElementById("U23.2").innerHTML = DAYS11 + "d " + HOURS11 + "h " + MINS11 + "m " + SECS11 + "s ";

    document.getElementById("U23.3").innerHTML = DAYS12 + "d " + HOURS12 + "h " + MINS12 + "m " + SECS12 + "s ";

    document.getElementById("U42.1").innerHTML = DAYS13 + "d " + HOURS13 + "h " + MINS13 + "m " + SECS13 + "s ";

    document.getElementById("U42.2").innerHTML = DAYS14 + "d " + HOURS14 + "h " + MINS14 + "m " + SECS14 + "s ";

    document.getElementById("U42.3").innerHTML = DAYS15 + "d " + HOURS15 + "h " + MINS15 + "m " + SECS15 + "s ";

}, 1000);