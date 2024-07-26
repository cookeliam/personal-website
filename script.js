window.onload = function() {
    var nav = document.getElementById("nav")
    document.getElementById("menu").addEventListener("click", toggleMenu)
    window.addEventListener('resize', function() {
      var navList = document.getElementById("nav-list");
      if (window.innerWidth > 930) {
        navList.style.display = "block";
      } else {
        navList.style.display = "none";
      }
    }, true);

    window.onscroll = function() {
        if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) {
          nav.classList.add("scroll");
        } else {
          nav.classList.remove("scroll");
        }
    }

    function toggleMenu() {
      var navList = document.getElementById("nav-list");
      console.log("000");
      if (navList.style.display === "block") {
        navList.style.display = "none";
      } else {
      navList.style.display = "block";
      }
    }
};



