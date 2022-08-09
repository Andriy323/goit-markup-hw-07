(() => {
 

  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

})();

var h = document.getElementById("test");
var hh = window.getComputedStyle(h, null).height;
alert(hh);

var foo = getComputedStyle(document.getElementById("test"));
alert(foo); 

// document.querySelector('button').onclick =testFunc;

// function testFunc() {
  
  
//   var aUrl = document.getElementById('a').clientHeight;

  
//   var hImg = document.getElementById('img').clientHeight;
//   var hP =document.getElementById('p').clientHeight;
//    var hD = document.getElementById('hD').clientHeight;
//   var hDall =document.getElementById('hD').offsetHeight;
//   var px = "px \n";


//   alert("картинки - " + hImg+px + "blok p - " + hP+px + "div - " + hD + px + "div all - " + hDall + px);

// }




