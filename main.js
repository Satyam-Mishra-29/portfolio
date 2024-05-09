

        /*================================  TOGGLE Icon  NAVBAR   =================================*/
        let menuIcon = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        menuIcon.onclick = () =>{
          menuIcon.classList.toggle('fa-x');
          navbar.classList.toggle('active');
        }
         /*================================  Scroll Section active list  =================================*/

         let sections = document.querySelectorAll('section');
         let navLinks = document.querySelectorAll('header nav a');

         window.onscroll= () =>{
          sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
              navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              });
            };
          });

          /*================================= Sticky NavBar ==============================================*/
          let header = document.querySelector('header');
          header.classList.toggle('sticky', window.scrollY > 100);

          /*================================== Remove Toggle Icon And NavBar ================================================ */
          menuIcon.classList.remove('fa-x');
          navbar.classList.remove('active');
         };

/*==================================================== Scroll reveal =================================================== */
ScrollReveal({
  distance: '80px',
  duration: 2000, 
  delay: 50,
});
ScrollReveal().reveal('.first, .fifth',{origin :'top'});
ScrollReveal().reveal('.fourth', {origin :'bottom'});
ScrollReveal().reveal('.second', {origin :'left'});
ScrollReveal().reveal('.third', {origin :'right'});

/*================================================= Typed Js =============================================================== */
const typed = new Typed('#element', {
  strings: [' A FRONTEND DEVELOPER.', ' A SOFTWARE DEVELOPER.', 'A SQL DEVELOPER.'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*================================================ Onclicked event =====================================*/
document.getElementById("myButton").onclick = function () {
  location.href = "resume.pdf";
}

function sendEmail() {
  var email = document.getElementById("email").value;
  var subject = "Subject of the email";
  var body = "Body of the email";

  // Check if email is not empty
  if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
  }

  var mailtoLink = "mailto:" + email +
                   "?subject=" + encodeURIComponent(subject) +
                   "&body=" + encodeURIComponent(body);

  window.location.href = mailtoLink;

  // Display confirmation message
  alert("Email sent successfully!");
}

