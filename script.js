// documant.geElementById("circle")

$("#circle").click(function() {
	$(".square").css('background-color', 'purple');
	$("p").append(" name");
	value = $("input").val();
	$("p").prepend(value);
	$("p").after("<div></div>")
	$("p").before("<div></div>")
});

$(".square").click(function() {
	console.log(this);
	$(this).css('background-color', 'pink');
	$(this).toggleClass("shadow")
});

$(".square").mouseover(function(){
	console.log(this);
	$(this).css('width', '100px')
});

$(".square").mouseout(function(){
	console.log(this);
	$(this).css('width', '50px')
});

console.log(
	$("input").val()
)
	

// $("#circle").click(function(){
// 	$("p").html("We've changed the p."
// });