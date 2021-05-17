
// menu burger
$('#menuBurger').click(function(){

        $('#bandeau').slideToggle();
        
})
// infinite scroll
var loading = $('#load');

loading.hide();

$(window).scroll(function(){
        
        loading.fadeIn(1500);
})





// background

$ ('header'). backstretch ( [
        "img/background1.jpg"
      , "img/background2.jpg"
    ] ,  {duration: 15000 , fade: 750 } ) ;