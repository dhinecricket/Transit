/*-----------------------------------------------------------------------------------

    Theme Name: Bemax
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function() {

    "use strict";

    var wind = $(window);



    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -80            // offste (in px) for fixed top navigation
    });



    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            navbloglogo = $(".blog-nav .logo> img"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
            navbloglogo.attr('src', 'img/logo-dark.png');
        }
    });

    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });



    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });



    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    // === owl-carousel === //

    // Testimonials owlCarousel
    $('.testimonails .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 15,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });

    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // Blog owlCarousel
    $('.blog .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // YouTubePopUp
    $("a.vid").YouTubePopUp();


    // countUp
    $('.numbers .count').countUp({
        delay: 10,
        time: 1500
    });


    // Services Tabs
    $(".tabs-icon").on("click", ".item", function(){

        var myID = $(this).attr("id");

        $(this).addClass("active").siblings().removeClass("active");

        $("#" + myID + "-content").fadeIn(700).siblings().hide();

    });


    // Map Show
    $(".info").on("click", ".icon-toggle", function(){

        $(".info").toggleClass("map-show");
        $(".map").toggleClass("o-hidden");

    });


});


// === window When Loading === //

$(window).on("load",function (){

    var wind = $(window);

    // Preloader
    $(".loading").fadeOut(500);


    // stellar
    wind.stellar();


    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

	
    $('#myModal').on('hidden.bs.modal', function () {
	    $('#vhelp-form .messages').html('');
	    $('#vhelp-form .alert.red').addClass('hide');
	});
    // contact form validator
    $('#vhelp-form').validator();
    $('#vhelp-form button').on('click', function (e) {

	var validate1 = true;

	$.each($('input, select ,textarea', '#vhelp-form'),function(k){
   		attr = $(this).attr('name');
		val = $(this).val().trim();
	
		if(attr == 'email' && val!=''){
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(val.match(mailformat) == null){
				val = '';
			}
		}
		if(attr == 'pn' && val!=''){
			var phoneno = /^\d{10}$/;

			if(val.match(phoneno) == null){
				val = '';
			}
		}

		if(val == '' && attr!='cname'){
			$('.vinvalid-'+attr).removeClass('hide');
			validate1 = false;
		}else{
			$('.vinvalid-'+attr).addClass('hide');
		}

	});
	if(validate1 == true){
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $('#vhelp-form').serialize(),
                success: function (data)
                {   
		    if(data ==1){
			    var messageText = "Message has been Sent Successfully!!!";
			    var type = 'success';
		    }else{
		    	var messageText = "Message has not Sent. Try after sometime!!!";
                        var type = 'danger';
		    }

                    var alertBox = '<div class="alert alert-'+type+'  alert-dismissable"><button id=valert style="font-size: 22px;margin-right: 15px;" type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageText) {
                        $('#vhelp-form').find('.messages').html(alertBox);
                        $('#vhelp-form')[0].reset();
                    }
                }
            });
            return false;
        }
	}
    });
    $('#contact-form').validator();
 

    $('#contact-form').on('submit', function (e) {

	var validate = true;

	$.each($('input, select ,textarea', '#contact-form'),function(k){
   		attr = $(this).attr('name');
		val = $(this).val().trim();
		
		if(attr == 'email' && val!=''){
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(val.match(mailformat) == null){
				val = '';
			}
		}

		if(val == ''){
			$('.invalid-'+attr).removeClass('hide');
			validate = false;
		}else{
			$('.invalid-'+attr).addClass('hide');
		}

	});	
	if(validate == true){
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    
		    if(data ==1){
			    var messageText = "Message has been Sent Successfully!!!";
			    var type = 'success';
		    }else{
		    	var messageText = "Message has not Sent. Try after sometime!!!";
                        var type = 'danger';
		    }

                    var alertBox = '<div class="alert alert-'+type+'  alert-dismissable"><button style="font-size: 22px;margin-right: 15px;" type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
	}
    });

});


// Slider 
$(document).ready(function() {

    var owl = $('.header .owl-carousel');


    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500
    });

    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h3').removeClass('animated fadeInLeft');
        $('h1').removeClass('animated fadeInRight');
        $('p').removeClass('animated fadeInUp');
        $('.butn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });

});
