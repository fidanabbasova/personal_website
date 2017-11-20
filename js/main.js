var viewportheight;
var viewportwidth;


 if (typeof window.innerWidth != 'undefined')
 {
    viewportheight = window.innerHeight;
    viewportwidth = window.innerWidth;
 }

 else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0)
 {
    viewportheight = document.documentElement.clientHeight;
    viewportwidth = window.documentElement.clientWidth;
 }

 else
 {
    viewportheight = document.getElementsByTagName('body')[0].clientHeight;
    viewportwidth = window.getElementsByTagName('body')[0].clientWidth;
 }
navCircleTop = (viewportheight - 162) / 2;
navCircleTop += "px";

function loadFunction() {
 	document.getElementById("loader").style.display = "none";
  	document.getElementById("nav-button").style.display = "block";
  	document.getElementById("nav-circle").style.display = "block";
  	document.getElementById("header").style.display = "block";
  	document.getElementById("container").style.display = "block";
}

$('a[href^="#"]').click(function () {
	
	$('nav ul li a').removeClass('active');
	var href = $.attr(this, 'href');
	while(href.charAt(0) === '#'){
		href = href.substr(1);
	}
	$("."+href).addClass('active');
    $('html, body').animate({ scrollTop: $( $.attr(this, 'href') ).offset().top }, 1000);
    return false;
});

 $(document).ready(function () {
	$(document).on("scroll", onScroll);

});

function onScroll(event){
	var scrollPosition = $(document).scrollTop();
    $('nav ul li a').each(function () {
    	var href = $.attr(this, 'href');
		while(href.charAt(0) === '#'){
			href = href.substr(1);
		}
		var currentLink = $("."+href);
		var refElement = $(currentLink.attr('href'));
		if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('nav ul li a').removeClass('active');
			currentLink.addClass('active');
		}else{
        	currentLink.removeClass('active');
      	}
    });
}

window.addEventListener('load', function () {
particlesJS('particles-js','assets/particles.json');
});

// var imgH = 0;

// $(document).ready(function() {
//     imgH = $('#portfolio img').outerHeight();
//     console.log(imgH);
// });

// $(document).trigger('ready');


// $(window).load( function() {
// 	imgH = $('#portfolio img').outerHeight();
// 	console.log(imgH);
// });

$(document).ready( function() {

	$('canvas').attr("width", viewportheight);
	$('canvas').attr("height", viewportwidth);

	var navLightboxH = $('#nav-lightbox').innerHeight();
	var navLightboxT = (viewportheight - navLightboxH) / 2;
	navLightboxT += "px";
	$('#nav-lightbox').css('paddingTop', navLightboxT);
	$('#nav-lightbox').css('paddingBottom', navLightboxT);
	$('#nav-button button').animate({opacity: '1', right: '0'});
	$('#nav-circle ul').animate({opacity: '1', top: navCircleTop});
	$('.hidden').fadeIn("slow");
	$('#nav-button button').click( function() {
		$(this).toggleClass('active');
		$('#nav-lightbox').fadeToggle();
		// $('#container').fadeToggle();
		if ($('#nav-button button').hasClass('active')) {
			$('#nav-lightbox a').animate({letterSpacing: '-1px' });
		}else {
			$('#nav-lightbox a').animate({letterSpacing: '-40px' });
		}
	});
	$('#nav-lightbox li a').click(function() {
		// $('#nav-lightbox li a').removeAttr('class');
		$(this).addClass('active');
		$('#nav-button button').click();
	});
});


$(document).ready( function() {
  
});
