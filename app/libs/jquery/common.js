$(document).ready(function() {
// 	$("body").niceScroll({
// horizrailenabled:false
// });


// одинаковой высоты разные по длине ашки


if (screen.width > 568) {
$('.features_items_text').equalHeights();
}
 // $(".features_items_text").equalHeights();

// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
  mainClass:'mfp-fade',
  removalDelay:400,
  type:'inline',
});


/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
  var dataForm = $(this).data("form");
  var dataText = $(this).data("text");
  $(".forms-call h4").text(dataText);
  $(".forms-call [name=admin-data]").val(dataForm);
});


// слайдер отзывов
	$('.owl-carousel').owlCarousel({
loop:true,
items: 1,
margin:130,
autoplay:true,
autoplayTimeout:1500,
autoplayHoverPause:true,
stagePadding: 30,
dots: true
});






//Ajax push mesege http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
//castom code



});