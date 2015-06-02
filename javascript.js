$(document).ready(function(){
	$("#off1").hide();
	$("#off2").hide();
	$("#button1").click(function(){
		$("#on1").toggle();
		$("#off1").toggle();
		$("#on2").toggle();
		$("#off2").toggle();
	});
});

$(document).ready(function(){
	$("#button2").click(function(){
		$("#button1").css("color", "green");
		$("#button2").css("color", "blue");
		$("#button3").css("color", "yellow");
		$("h1").css("font-family", "Verdana","sans-serif"); //CHECK font-family written correctly
	});
});

$(document).ready(function(){
	$("#button3").click(function(){
		$("#mainnav").animate({width:'+=800px',opacity: '0.75'});
	});
});