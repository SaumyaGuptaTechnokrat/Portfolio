var typed = new Typed('#text', {
    strings: ['FrontEnd Developer', 'Web Developer', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function animateProgressBar() {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const fill = bar.querySelector('.progress-fill');
    const width = parseInt(bar.style.width);
    let currentWidth = 0;
    const interval = setInterval(() => {
      if (currentWidth >= width) {
        clearInterval(interval);
      } else {
        currentWidth++;
        fill.style.width = `${currentWidth}%`;
      }
    }, 10);
  });
}

// Call the animation function on scroll
window.onscroll = animateProgressBar;
