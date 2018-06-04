var startDay = new Date(2009, 0);
var today = new Date();
document.getElementById("yearOfExperience").innerHTML = Math.floor(Math.abs(today.getTime() - startDay.getTime()) / (1000 * 3600 * 24 * 365));