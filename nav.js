window.onscroll = function(){
    
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("foto_personaje");
    var elemento2 = document.getElementById("foto_guardia");

    elemento1.style.bottom = posicion * 0.5 + "px";
    elemento2.style.top = posicion * 0.2 + "px";
}

function animar(){
    document.getElementById("myModal").classList.add ("abajo");  
}
function cerrarModal(){
    document.getElementById("myModal").classList.remove ("abajo");
}
function openNav(){
    document.getElementById("mobile-menu").classList.add ("func");
}
function closeNav(){
    document.getElementById("mobile-menu").classList.remove ("func");
}