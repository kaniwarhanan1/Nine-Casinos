$(document).ready(function() {
   $('#registration-form').submit(function(e) {
  // Validate the name field
 var name = $('#name').val();
  if (!/^[a-zA-Z]+$/.test(name)) {
     alert('Invalid name');
      return false;
       }
          
    // Validate the surname field
var surname = $('#surname').val();
  if (!/^[a-zA-Z]+$/.test(surname)) {
    alert('Invalid surname');
     return false;
      }
      
     // Validate the phone field
var phone = $('#phone').val();
  if (!/^\d+$/.test(phone)) {
     alert('Invalid phone number');
           return false;
         }
   // Validate the email field
var email = $('#email').val();
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
     alert('Invalid email');
     return false;
  }
   // If all fields are valid, submit the form
        return true;
   });
});

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i <faq.length; i++) {
    faq[i].addEventListener( "click" , function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

//document.getElementById("login-button").addEventListener("click", function() {
 // alert("You are logged in");
  //});
 
const button = document.getElementById("my-button");
const nav = document.getElementById("mynav");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});

function myFunction() {
  alert("You are logged in");
  window.location.href = "games.html";
}