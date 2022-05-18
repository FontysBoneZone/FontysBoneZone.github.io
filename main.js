// var $Game1 = $('.Game1');

// $Game1.on('mouseenter', function () {
//   $Game1.get(0).play();
//   console.log(3);
// });



// var figure = $(".Game1").hover( hoverVideo, hideVideo );

// function hoverVideo(e) {  
//     $('video', this).get(0).play(); 
//     console.log(1);
// }

// function hideVideo(e) {
//     $('video', this).get(0).pause();
//     console.log(0); 
// }



function autoScrollTo(element) {
    var currentY = window.pageYOffset;
	var targetY = document.getElementById(element).offsetTop + 575;
    var speed = 20;
    var step = targetY / speed;
    var navbar = document.getElementById(element).offsetHeight;
    var timer = setTimeout('autoScrollTo(\''+element+'\')', speed);

    if(currentY < targetY - navbar){
		window.scroll(0, currentY + step);
    }
    else if(currentY > targetY + navbar){
		window.scroll(0, currentY - step);
    }
    else{
        clearTimeout(timer);
    }
}
function ScrollDown(element) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(element).offsetTop + 575;
    var speed = 20;
    var step = targetY / speed;
	var timer = setTimeout('ScrollDown(\''+element+'\')', speed);
	var totalPageHeight = document.body.scrollHeight + 500; 
	var scrollPoint = window.scrollY + window.innerHeight;

    if(currentY < targetY){
		window.scroll(0, currentY + step);
    }
	if(scrollPoint >= totalPageHeight)
    {
		clearTimeout(timer);
	}
}



