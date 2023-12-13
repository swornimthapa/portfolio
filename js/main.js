let squareCaretdown = document.querySelector(".caretDown");
squareCaretdown.onclick=function(){
    let navbar = document.querySelector(".navbar .navbar-box ul");
    navbar.classList.toggle("active");
}



let navbarBox=document.querySelector(".navbar-box");
let currentscrollpostion=window.scrollY;
window.addEventListener('scroll',function(){
    let nextscrollpostion= window.scrollY;
    let navbarUl = this.document.querySelector(".navbar .navbar-box ul");
    let isCaretactive = navbarUl.classList.contains("active");
    // console.log(isCaretactive);
    if(isCaretactive){
        navbarBox.classList.add('fixed');
    }else{
        if(nextscrollpostion>currentscrollpostion){
        
            navbarBox.classList.remove('fixed');
        
        }else{
            navbarBox.classList.add('hide');

            navbarBox.classList.add('fixed');
        }
    }
    currentscrollpostion=nextscrollpostion;
    
})

