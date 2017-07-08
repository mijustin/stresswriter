var initialText = $(".splitText").text();
var type = splitLetters(initialText);

$(document).ready(function(){
$("#letters").on('click',function(){


		$(".splitText").empty();
		$(".splitText").html(type);
		explodeLetters();
	});

  $("#reverse").on('click',function(){
		threeDTimeline.reverse();
	});

});

function explodeLetters(){

	threeDTimeline = new TimelineLite({align:'start'});

	var children = $('.splitText').children().length;
	for(var i=0;i<children;i++){

         for(var i=0;i<children;i++){

         	var element = $(".splitText").children().eq(i);
         	var pos = element.offset();
         	element.css({'left':pos.left,'top':pos.top});

         	threeDTimeline.insert(TweenMax.to(element,1.5, {
         	'position':'absolute',
         	left:Math.random() * 650 - 100,
         	top:Math.random() * 350 - 100,
         	ease:Quad.easeIn,
          fontSize: '+=35',
         	autoAlpha:0}));

		}

		threeDTimeline.play();
	}


}


function splitLetters(userInput){
	var a;
	var arr = userInput.split("");

	for(var i=0;i<arr.length;i++) {

		if(arr[i] == " "){
				arr[i] = '<div class="letter-measure blank">' + arr[i] + '</div>';
		}
		else{

      		if(!arr[i].match(/\s\n\t\r/g) && arr[i]!="") arr[i] = '<div class="letter-measure">' + arr[i] + '</div>';

     	}
   }

   //$(this).html(arr.join(" "));

   return arr.join(" ");

};
