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

console.log(viewportheight);
console.log(viewportwidth);

tableTop = (viewportheight - 548) / 2;
tableTop += "px";

navCircleTop = (viewportheight - 162) / 2;
navCircleTop += "px";
// document.getElementsByClassName("sections").css("height", 200);

function loadFunction() {
 	document.getElementById("loader").style.display = "none";
  	document.getElementById("nav-button").style.display = "block";
  	document.getElementById("nav-circle").style.display = "block";
  	document.getElementById("container").style.display = "block";
}

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

window.addEventListener('load', function () {
particlesJS('particles-js','assets/particles.json');
});

$(document).ready( function() {
	$('canvas').attr("width", viewportheight);
	$('canvas').attr("height", viewportwidth);

	$('table').css('top', tableTop);
	$('#nav-button button').animate({opacity: '1', right: '0'});
	$('#nav-circle ul').animate({opacity: '1', top: navCircleTop});
	$('.hidden').fadeIn("slow");
	$('#nav-button button').click( function() {
		$(this).toggleClass('active');
		$('#nav-lightbox').fadeToggle();
		// $('#container').fadeToggle();
		if ($('#nav-button button').hasClass('active')) {
			console.log('active');
			$('#nav-lightbox a').animate({letterSpacing: '-1px' });
		}else {
			console.log('deactive');
			$('#nav-lightbox a').animate({letterSpacing: '-40px' });
		}
	});
	$('#nav-lightbox li a').click(function() {
		$('#nav-lightbox li a').removeAttr('class');
		$(this).addClass('active');
		$('#nav-button button').click();
	});
});

$(document).ready(function (e) {
    $('.parallax-window').parallax({imageSrc: 'imgs/contact.jpg'});

});


