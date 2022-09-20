const today = new Date();

         document.querySelector("footer div span").textContent = today.getFullYear();
       //  document.getElementById("datediv").textContent= document.lastModified;
       const lastmodified = new Date(document.lastModified);
       document.getElementById("datediv").textContent = `${"Last Modified: "+ lastmodified.getDate()}/${lastmodified.getMonth()+1}/${lastmodified.getFullYear()}`