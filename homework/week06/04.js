// $(document).ready(function(){
//     $("#switcher-default").click(function(){
//         $('#container').css({ 'font-size': '12px' });
//     });
// });
//
// $(document).ready(function(){
//     $("#switcher-large").click(function(){
//         $('#container').css({ 'font-size': '20px' });
//     });
// });
//
// $(document).ready(function(){
//     $("#switcher-small").click(function(){
//         $('#container').css({ 'font-size': '10px' });
//     });
// });

// $("body").fadeIn();
// ​
// $(document).on("mouseenter", "p", function() {
//     $(this).css("background-color", "yellow");
// });
//
// $(document).on("mouseleave", "p", function() {
//   $(this).css("background-color", "white");
// });

$('body').css('display', 'none').fadeIn('slow');

$('p').on('mouseover', function() {
	$('p').css('background', 'yellow');
});
$('p').on('mouseout', function() {
	$('p').css('background', 'none');
});


$('h2').on('click', function () {
	$('h2').css('margin-left', '20px');
	$('h2').fadeTo(400, 0.25, function() {
		$('.speech').fadeTo(400, 0.50);
	});
});

$('#switcher-default').on('click', function () {
	$('.speech').css('font-size', '12px');
});

$('#switcher-large').on('click', function () {
	$('.speech').css('font-size', '20px');
});

$('#switcher-small').on('click', function () {
	$('.speech').css('font-size', '10px');
});
