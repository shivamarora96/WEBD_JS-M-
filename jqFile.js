/**
 * Created by SHIVAM on 10-03-2017.
 */


$(document).ready(function(){
    // $('.carousel').carousel({duration:1000 , dist:-100 , shift:25 , indicators:true });
    $('.carousel.carousel-slider').carousel({fullWidth:true ,indicator:true});
});


$(document).ready(function(){
    $('.carousel').carousel({duration:1000 , dist:-100 , shift:25 , indicators:true });
    autoplay()
    function autoplay() {
        $('.carousel.carousel-slider').carousel('next');
        setTimeout(autoplay, 3000);
    }
    // $('.carousel.carousel-slider').carousel({fullWidth:true ,indicator:true});
});
