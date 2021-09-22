$(document).ready(function(){
    $("#AboutUs").click(function(){ //variable #visible de un id de algun boton o lo que gusten
        $("#img-first").hide();
        $("#img-second").load("/img");
        $("#Contenido").load("/about_");
    });
  });
  //ocultar footer
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.fondo').fadeOut();
    } else {
      $('.fondo').fadeIn();
    }
  });