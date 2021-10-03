var topbutton = document.getElementById("toTop");
// get/link to the button Id


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.getElement.scrollTop > 20) {
            topbutton.style.display = "block";
        }else{
            topbutton.style.display = "none";
        }
}

function toTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }