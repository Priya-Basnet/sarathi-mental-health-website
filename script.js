// <!-- Setup and start animation! -->
      var typed = new Typed("#element", {
        strings: [
          "<i>Your companion on </i>  the path to mental wellness.",
          " Empowering your journey to inner peace.",
        ],
        typeSpeed: 50,
      });

      function toggleMenu(){
        const menu=document.querySelector(".menu-links")
        const icon=document.querySelector(".hamburger-icon")
        menu.classList.toggle("open");
       icon.classList.toggle("open");
    
    }