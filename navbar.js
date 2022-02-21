// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 105 || document.documentElement.scrollTop > 105) {
    document.getElementById("navbar").style.padding = "10px";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("Titre").style.opacity = "0%";
    //document.getElementById("competence").style.opacity = "0%";
    //document.getElementById("veille").style.opacity = "0%";

  } else {
    document.getElementById("navbar").style.padding = "50px";
    document.getElementById("logo").style.fontSize = "40px";
    document.getElementById("Titre").style.opacity = "100%";
    //document.getElementById("competence").style.opacity = "100%";
    //document.getElementById("veille").style.opacity = "100%";
  }
}
