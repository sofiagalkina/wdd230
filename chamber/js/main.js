






/*       FOOTER   */
const today = new Date();
document.querySelector("#year").textContent = today.getFullYear();

document.getElementById("modify").innerHTML = document.lastModified;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
let day = days[today.getDay()] + ", " + (today.getDate()) + " " + (months[today.getMonth()]) + " " + (today.getFullYear());
document.querySelector("#date").textContent = day;


