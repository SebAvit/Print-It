const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var slideCount = $('#banner-img').length;
	var slideWidth = $('#banner-img').width();
	var slideHeight = $('#banner-img').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#banner-img').css({ width: slideWidth, height: slideHeight });
	
	$('#banner-img').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#banner-img').prependTo('#banner-img');

    function moveLeft() {
        function ( {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
 		function ( {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

	
