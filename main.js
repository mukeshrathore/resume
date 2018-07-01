var startDay = new Date(2009, 0);
var today = new Date();
document.getElementById("yearOfExperience").innerHTML =
    Math.floor(Math.abs(today.getTime() - startDay.getTime()) / (1000 * 3600 * 24 * 365));

function downloadPDF() {
    window.open('assets/Mukesh_Rathore_BE_Wells_Fargo_Tech_Lead.pdf');
}
function downloadDoc() {
    window.open('assets/Mukesh_Rathore_BE_Wells_Fargo_Tech_Lead.doc');
}