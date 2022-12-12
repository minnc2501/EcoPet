// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
// };
window.onload = function () {
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop + 1;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  }
  window.onscroll = function () {
    myFunction();
  };
  var products = document.getElementsByClassName('product-card')
  if(products.length>0){
    for(let i = 0; i<products.length;i++){
      products[i].onclick = function(){
        window.location.href="detail.html"
      }
    }
  }
};
// Get the navbar

// Get the offset position of the navbar

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position





const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})