$(document).ready(function(){

	// $('.arrowR').on('click', function(){
	// 	$('.ct1 , .ct2 , .ct3 ').css("transform", "translate(1500px)");
		

	// 	$(".ct1, .ct2, .ct3").css("transition", "1s");
	// 	setTimeout(function(){
	// 		$(".ct1 , .ct2, .ct3").css("display", "none");
	// 	}, 500);

	// 	$('.arrowL').on('click', function(){
	// 			$(".ct1 , .ct2, .ct3").css("display", "block");
	// 		setTimeout(function(){
	// 		$('.ct1 , .ct2 , .ct3 ').css("transform", "translate(0px)");		
	// 		$(".ct1, .ct2, .ct3").css("transition", "1s");
			
	// 		}, 10);
	// 	})

	// })



	$(".arrowR").on('click', function(){
		$(".ct1, .ct2, .ct3").css("transform", "translate(1400px)");
		$(".ct1, .ct2, .ct3").css("transition", "1s");

		setTimeout(function(){
			$(".ct3").css("display", "none");
		},400);

		setTimeout(function(){
			$(".ct2").css("display", "none");
		},401);
		setTimeout(function(){
			$(".ct1").css("display", "none");
		},550);
	});









		$(".arrowL").on('click', function(){
		$(".ct1, .ct2, .ct3").css("transform", "translate(-600px)");
		$(".ct1, .ct2, .ct3").css("transition", "1s");

		setTimeout(function(){
			$(".ct3").css("display", "block");
		},400);

		setTimeout(function(){
			$(".ct2").css("display", "block");
		},401);
		setTimeout(function(){
			$(".ct1").css("display", "block");
		},550);

			
	});



});

