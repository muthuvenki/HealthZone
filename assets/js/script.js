jQuery(function($){

	$( "#side-menu" ).hover(
  function() {
//	  	  $( "#side-menu" ).addClass('hover');
//    $( "#page-wrap" ).addClass('side-menu-hover');

  }, function() {
//    $( "#page-wrap" ).removeClass('side-menu-hover');
//	   $( "#side-menu" ).removeClass('hover');
  }
);
	
//	$("a").click(
//	function(){
//		 $( "#page-wrap" ).addClass('side-menu-open');
//		 $( "#side-menu" ).addClass('fully-open');
//	}
//	);
	
	
	
	
});

$(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            opacityVal = (s / 300);
			var scale = 1 + (opacityVal/5);
        $('.overlay-full').css('opacity', opacityVal);
	
	        
	
	$( '.fade-in-anim' ).each(function( index ) {
     if ($(this).isOnScreen()) {
            // The element is visible, do something
            $(this).addClass('show');
        } 
//		else {
//            // The element is NOT visible, do something else
//			 $(this).removeClass('show');
//        }
});
	
//        $('.bg-image').css('transform', 'scale(' + scale + ')');

	
				var services = $( ".bg-parallax" );
			var servicePosition = services.offset();
			
	var yPos = -(s / 2);
			yPos = yPos + (servicePosition.top / 2);
	

			// background position
			var coords = '50% ' + yPos + 'px';
			if($( window ).width() < 1125){
			coords = '50% 0px';
			}

			// move the background
			$( ".bg-parallax" ).css({
				backgroundPosition: coords
			});
	
	
	

    });




	function initializeMap() {
   console.info('initialize map'); 
//			  var image = '<?php echo get_template_directory_uri(); ?>/assets/img/map-icon.png';
			   var myLatlng = new google.maps.LatLng(51.519724, -0.147147);
		 var isDraggable = $(document).width() > 480 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false

    
  var mapOptions = {
    zoom: 14,
    center: myLatlng,
	   scrollwheel: false,
	   draggable: isDraggable,
	  styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}],
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
//	  icon: image
	

  });
		
		  marker.addListener('click', function() {
window.location.href = "https://www.google.co.uk/maps/place/London+Cardiovascular+Clinic/@51.5197118,-0.1493355,17z/data=!3m1!4b1!4m2!3m1!1s0x48761ad3fbc449bf:0x1f9691e0f05dbfb3";
  });
      }

$('#more-lcc').click(function(){
	if($(window).width() > 1024){
	$('html, body').animate({
        scrollTop: $("#why-lcc").offset().top
    }, 1200);
	}else{
	$('html, body').animate({
        scrollTop: $("#why-lcc").offset().top - 70
    }, 1200);	
	}
});

	function init_owl() {
	
		 $("#full-image-carousel .owl-carousel").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 900,
        paginationSpeed : 400,
			 autoplayTimeout: 5000,
			 autoplaySpeed: 1500,
			 autoplayHoverPause: true,
        items: 1,
        loop: true,
        autoplay:true,
        dots: false,
//			   animateOut: 'fadeOut',
		
  }); 
		
		$("#home-banner .owl-carousel").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 900,
        paginationSpeed : 400,
        items: 1,
        loop: true,
        autoplay:true,
        dots: true,
			   animateOut: 'fadeOut',
		
  });
	
	 $("#article-carousel .owl-carousel").owlCarousel({
        nav : true, // Show next and prev buttons
		 navText: false,
        slideSpeed : 900,
        paginationSpeed : 400,
        loop: true,
		 
        autoplay:false,
        dots: false,
		 responsive : {
    // breakpoint from 0 up
    0 : {
        items : 1,

    },
    // breakpoint from 480 up
    480 : {
        items : 2,

    },
	769 : {
       autoWidth: true,

    }
		 }
  });
	
	var owl_consult =	 $(".consultations-carousel .owl-carousel").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 900,
        paginationSpeed : 400,
			 items: 1,
        dots: false,
  });

		$('.consultations-carousel .owl-carousel').on('change.owl.carousel', function(e) {
if (e.namespace && e.property.name === 'position' 
&& e.relatedTarget.relative(e.property.value) === e.relatedTarget.items().length - 1) {
// put your stuff here ...
            $('.cta').addClass('show');
}else{
	            $('.cta').removeClass('show');

}
});
		
		$('.next-step').click(function() {
    owl_consult.trigger('next.owl.carousel');
})
		
			$('.consultations-carousel .owl-stage').click(function() {
    owl_consult.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev-step').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl_consult.trigger('prev.owl.carousel');
})
	
	}

function init_misc(){
	console.info('initiate misc');
		$('.accordian-container h2').click(function(){
  		$(this).parent().toggleClass('open');
  		});
	
	$('.video-lightbox').magnificPopup({type: 'iframe'});
	
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 600,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
	
	 $(".custom-select").each(function(){
            $(this).wrap("<span class='select-wrapper'></span>");
            $(this).after("<span class='holder'></span>");
        });
        $(".custom-select").change(function(){
            var selectedOption = $(this).find(":selected").text();
            $(this).next(".holder").text(selectedOption);
        }).trigger('change');
	
	$(".hamburger-mobile").click(function(){
		$("#mobile-menu").toggleClass('hide-menu');
	});
	
}


$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};




function load_page_scripts(){
	init_owl();
	init_misc();
	initializeMap();
	addthis.init()
} 

$( document ).ready(function() {
	load_page_scripts();
});
