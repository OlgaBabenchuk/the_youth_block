$(document).ready(function() {

	$(".toggle-wrap").click(function() {
		$(this).toggleClass("on");
	});
});


var rangeSlider = function(){
	var slider = $('.range-block'),
		range = $('.range1'),
		value = $('.range1__value');


	$("#progress1").css("width", $("#range1").val()*100/$("#range1").attr("max") +"%");
	$("#progress2").css("width", $("#range2").val()*100/$("#range2").attr("max") +"%");

	slider.each(function(){

		value.each(function(){
			var value = $(this).prev().attr('value');
			$(this).html(value);
    	});

		range.on('input', function(){
			$(this).next(value).html(this.value);
			$("#progress1").css("width", $("#range1").val()*100/$("#range1").attr("max") +"%");
			$("#progress2").css("width", $("#range2").val()*100/$("#range2").attr("max") +"%");
		});
	});
};

rangeSlider();

// var width1 = document.getElementById("range1").value;
// $(".range__progress").css("width", width1*100/$(".range1").attr("max") +"%");
