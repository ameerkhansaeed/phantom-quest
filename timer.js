// Set the end date and time
var endDate = new Date('2024-03-25T00:00:00+05:00'); // Tashkent time
    
// Update the countdown every second
var timerInterval = setInterval(function () {
    var now = new Date().getTime();
    var timeRemaining = endDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // If the countdown is over, clear the interval
    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        document.getElementById('days').innerHTML = '0';
        document.getElementById('hours').innerHTML = '0';
        document.getElementById('minutes').innerHTML = '0';
        document.getElementById('seconds').innerHTML = '0';
    }
}, 1000);