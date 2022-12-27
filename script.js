function selecionar(link){
    var opciones =document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
opciones[2].className="";
opciones[3].className="";
opciones[4].className="";
link.className="seleccionado";
}


//funcion que muestra el menu responsive
function responsiveMenu(){
    var x= docuent.getElemenById("nav");
    if(x.className ==="") {
        x.className="responsive";
    }else{
        x.className="";
    }
}