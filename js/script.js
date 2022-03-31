
$(function(){


	/* scroll anchor */
    var link = $('#topmenu a.anchor , .sidenav > ul.snav a.anchor');
    link.on('click',function(e){

        //href 속성을 통해, section id 타겟을 잡음
        var target = $($(this).attr('href')); 
       
        //target section의 좌표를 통해 꼭대기로 이동
        $('html, body').animate({
            scrollTop: target.offset().top - 100
        },600);
        
        //active 클래스 부여
        $(this).addClass('active');
		$('.snavbar').hide();
        //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
        e.preventDefault();
    });
    
    $(window).on('scroll',function(){
        findPosition();
    });

    function findPosition(){
        $('section , .sidenav > ul.snav li a.anchor').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 120){
                link.removeClass('active');
                $('#topmenu , .sidenav > ul.snav li').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
            }
        });
    }

    findPosition();
	/* // scroll anchor */


	/*  scroll animate */

	var controller = new ScrollMagic.Controller();
	var scene1 = new ScrollMagic.Scene({
      triggerHook: 0.8
    })
    .setClassToggle(".visual_contents", "visible")
	 
    .addTo(controller)


	/* // scroll animate */

	/* 아코디언*/
	$('.accordion_type dt.news_dt').on('click', function () {	
	    if ($(this).hasClass('on')) {
	        slideUp();
	    } else {
	        slideUp();
	        $(this).addClass('on').next().slideDown();
	    }
	    function slideUp() {
	        $('dt.news_dt').removeClass('on').next().slideUp();
	    };
	});

	$('.accordion_type dt.news_dt.dt_off').on('click', function () {
		$(this).removeClass('on')
	});

	/* 상단 네비게이션 고정 */
	var navOffset = $( 'html, body , #header , #container' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > navOffset.top ) {
		  $('#header>.top_box' ).addClass( 'naved' );
		  $('.sidenav .side_close').css('top' , '32px');

		  $('.visual_contents').removeClass('visible');
		}
		else {
		  $('#header>.top_box' ).removeClass( 'naved' );
		  $('.sidenav .side_close').css('top' , '62px');
		  $('.visual_contents').addClass('visible');
		}
	});

	$(window).scroll(function () {
		var $this = $(this),
			$head = $('#header>.top_box');
		if ($this.scrollTop() > 0) {
		   $head.addClass('naved');
		   $( '.sidenav .side_close').css('top' , '23px');
		} else {
		   $head.removeClass('naved');
		   $( '.sidenav .side_close').css('top' , '62px');
		}
	});



	/*// 상단 네비게이션 고정 */


	/* side menu */
	$('.snavbar').css('left' ,'100%');
	$('#menu_open').off("click").on('click', function() {
		$('.snavbar').show();
		$('.snavbar').animate({left:'0'}, 100);});
		$('#menu_close').off("click").on('click', function() {
			$('.snavbar').animate({left:'100%'}, 100);
		 });
	});
	/* side menu */


$(function() {

	/* link kor eng */
    $(".link_site li:first-child >button").click(function(){
        location.href = "index.html";//kor index페이지로 감
    });///click///
    
    $(".link_site li:last-child >button").click(function(){
        location.href = "index_eng.html";//eng index페이지로 감
    });///click///
    
	/* // link kor eng */



	function browerW(){
		var width_W = window.matchMedia("screen and (max-width:768px)");
		if (width_W.matches) {
			$('.section01').css('height', $(window).height()); 

		} else {
			//$('section').css('width', $(window).width()); 
			$('.section01').css('height', $(window).height()); 

		}
	}
	browerW();


	$(window).resize(function() { 
		browerW();
	 });


	/* scroll click*/
	$('.scroll_hover a , .bx_service a').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100}, 500, 'linear');
	});


	/* aos js  호출 */
	AOS.init({
	  // Global settings:
	  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	  initClassName: 'aos-init', // class applied after initialization
	  animatedClassName: 'aos-animate', // class applied on animation
	  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	  
	  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	  offset: -90, // offset (in px) from the original trigger point
	  delay: 0, // values from 0 to 3000, with step 50ms
	  duration: 1000, // values from 0 to 3000, with step 50ms
	  easing: 'ease', // default easing for AOS animations
	  once: false, // whether animation should happen only once - while scrolling down
	  mirror: false, // whether elements should animate out while scrolling past them
	  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation+


	});

	// you can also use default option with the line below
	// AOS.init();


});

