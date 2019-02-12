$(function(){
    /***************************************************************************************
    WOW SECTION
    ****************************************************************************************/
    
              new WOW().init();
    /****************************************************************************************
    WORK SECTION
    *******************************************************************************************/
    $('#work').magnificPopup({
        delegate:'a',//child items selector,by clicking on i popup will open
        type:'image',
        gallery:{
            enabled:true
        },
        mainClass:'mfp-with-zoom',
        zoom:{
            enabled:true,
            duration:300,
            easing:'ease-in-out',
            opener:function(openerElement){
                // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }


    });
    /****************************************************************************************
    TEAM SECTION
    *******************************************************************************************/
       $(".team-members").owlCarousel({
        items:3,
        autoplay: true,
        smartSpeed:700,
        loop: true,
        autoplayHoverPause:true,
           responsive:{
               0:{
                   items:1,
               },
               480:{
                   items: 2,
               },
               768:{
                   items: 3,
               },
           },
    });
    
    
       /****************************************************************************************
    TESTIMONIAL
    *******************************************************************************************/
    $(".customer-testimonials").owlCarousel({
        items:1,
        autoplay: true,
        smartSpeed:700,
        loop: true,
        autoplayHoverPause:true,
    });
   /*********************************************************************************
    Stats section Wavepoint
    *******************************************************************************************/
    var waypoint = new Waypoint({
  element: document.getElementById('stats'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
});
    $('.counter').counterUp({
    delay: 10,
    time: 1000
});
       /****************************************************************************************
   Client section
    *******************************************************************************************/
    $(".clients-list").owlCarousel({
        items:6,
        autoplay: true,
        smartSpeed:700,
        loop: true,
        autoplayHoverPause:true,
        responsive:{
               0:{
                   items:2,
                   autoplayHoverPause:false,
               },
               480:{
                   items: 4,
               },
               768:{
                   items: 6,
               },
           },
    });
    
       /****************************************************************************************
   NAVIGATION section
    *******************************************************************************************/
    $(window).scroll(function(){
        if($(this).scrollTop()<65){
            $("nav").removeClass("wg-top-navbar");
            $(".btn-back-to-top").fadeOut();
        }else{
              $("nav").addClass("wg-top-navbar");
                $(".btn-back-to-top").fadeIn();
        }
    });
    
    $("a.smooth-scroll").click(function(){
        //don't perform your default action
        event.preventDefault();
        
        var section = $(this).attr("href");
        
        $("html,body").animate({
            scrollTop: $(section).offset().top -64,
        },1500,"easeOutExpo")
        });
    
 if( $(window).scrollTop()>100){
      $("nav").addClass("wg-top-navbar");
      $(".btn-back-to-top").fadeIn();
  };


    });