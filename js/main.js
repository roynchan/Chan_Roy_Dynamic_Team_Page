(() => {console.log('click and view');

let imgbutton = document.querySelector(".royimg"),

    imgbutton2 = document.querySelector(".waltimg");
  

function royshowabout(){
  rabout.classList.toggle("show")
  rname.classList.toggle("show")}

  function waltshowabout(){
    wabout.classList.toggle("show")
    wname.classList.toggle("show")}


imgbutton.addEventListener('click', royshowabout);
imgbutton2.addEventListener('click', waltshowabout);
})();