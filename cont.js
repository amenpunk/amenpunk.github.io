$('document').ready(function(){
    
    var back = $('#agregar');
    var front = document.getElementById("agregar");
 //   alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 

    if(screen.width < 750){
    //if(screen.width < 767){
       front.classList.add('unoe');
    }

    $(window).resize(function(){

    if(screen.width < 770){
       front.classList.add('unoe');
    }else{
       front.classList.remove('unoe');
    }
    var alto=$(window).height();
        var ancho=$(window).width();
//      alert("alto: "+alto+" ancho:"+ancho);
    })
        //alert("die fix");
});
