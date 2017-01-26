grid=16;

$(document).ready(function(){

	$("div").before('<button class="start">start over</button>');
	makenew(grid);

$(".start").click(function(){
	$("#container").empty();
	var num = prompt("Enter grind size");
	grid=num;
	makenew(grid);
});


});




function makenew(grid){
	var size=960/grid;
	
	for(x=0;x<grid;x++){
		for(i=0;i<grid;i++){
			$("#container").append('<div class="box" style="float:left;"></div>');

}
}
				$("#container").append('<div style="clear:both;"></div>');

					$(".box").hover(function(){
						 

						$(this).css("background-color", "black");


});
$(".box").height(size);
    $(".box").width(size);
};