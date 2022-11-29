






/*       FOOTER   */
const todayy = new Date();
document.querySelector("#year").textContent = todayy.getFullYear();

document.getElementById("modify").innerHTML = document.lastModified;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
let day = days[todayy.getDay()] + ", " + (todayy.getDate()) + " " + (months[todayy.getMonth()]) + " " + (todayy.getFullYear());
document.querySelector("#date").textContent = day;



/* Hamburger Menu  */

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
