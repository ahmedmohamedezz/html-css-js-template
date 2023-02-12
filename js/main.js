var arr = [
    "../imgs/medic-1.jpg",
    "../imgs/medic-7.jpg",
] ;

// var i = 0 ;
// window.setInterval(function(){
//     document.getElementById("header-img").src = arr[i%arr.length] ;
//     i++ ;
// },1500) ;


window.onscroll = function(){
    // document.getElementById("nav").classList.toggle
    // toggle : add if don't exist , remove if exists
    if(window.scrollY >= 100){
        document.getElementById("go-up").classList.add("show") ;
        document.getElementById("go-up").classList.remove("hide") ;
    }
    else{
        document.getElementById("go-up").classList.add("hide") ;
        document.getElementById("go-up").classList.remove("show") ;
    }
}