$(function(){
	//window.onload = function(){


	$("h1").RisingSun({
		timer:300,duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
	});
	$("h4").RisingSun({
		timer:800,wipe:"LR",duration:500,ease:"linear"
	});
	$("#auther").RisingSun({
		timer:1500,duration:300,fadeIn:1.0,ease:"easeOutCubic"
	});
	$("#down").RisingSun({
		timer:1500,duration:300,ease:"easeOutCubic"
	});
	$("#fadein").RisingSun({duration:300,startPosition:0.65});
	$("#scalein").RisingSun({duration:500,scale:0.1,ease:"easeInCubic",startPosition:0.6});
	$("#movein").RisingSun({duration:800,x:50,y:100,ease:"easeOutCubic",startPosition:0.55});
	$("#popin").RisingSun({
		duration:300,scale:0.1,popanime:true,ease:"easeOutCubic"
	});


	$("#sceneHowto h2").RisingSun({
		duration:900,wipe:"LR",startPosition:0.7,ease:"easeOutCubic"
	});
	$("#scene1 h2").RisingSun({
		duration:900,wipe:"LR",startPosition:0.7,ease:"easeOutCubic"
	});
	$("#scene2 h2").RisingSun({
		duration:900,wipe:"LR",startPosition:0.7,ease:"easeOutCubic"
	});
	$("#reference h2").RisingSun({
		duration:900,wipe:"LR",startPosition:0.7,ease:"easeOutCubic"
	});
	$(".textbox").RisingSun({
		duration:400,startPosition:0.7,wipe:"LR"
	});
});




