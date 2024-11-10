document.querySelectorAll('nav ul li').forEach((item) => {
    item.addEventListener('mouseenter', () => {
        document.querySelectorAll('nav ul li').forEach((other) => {
            if (other !== item) {
                other.classList.add('red');
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        document.querySelectorAll('nav ul li').forEach((other) => {
            other.classList.remove('red');
        });
    });
});

function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    // Toggle the 'open' class on the nav menu for animation
    navMenu.classList.toggle("open");

    // Switch between hamburger and "X" icon
    if (navMenu.classList.contains("open")) {
        menuToggle.innerHTML = "✖";  // Change to "X" when open
    } else {
        menuToggle.innerHTML = "☰";  // Change to hamburger when closed
    }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}