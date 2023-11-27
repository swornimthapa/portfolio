let squareCaretdown = document.querySelector(".caretDown");
squareCaretdown.onclick=function(){
    let navbar = document.querySelector(".navbar .navbar-box ul");
    navbar.classList.toggle("active");
}

projectContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
      container.classList.add('zoomed');
    });
  
    container.addEventListener('mouseleave', () => {
      container.classList.remove('zoomed');
    });
  });



