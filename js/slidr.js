$(document).ready(function(){ 
// this java script is set up the repetive function of 
// of the page slider


$('.car').each(function(){
	item = $(this);
	item.find('.car').each(function(i,e){
		if(i==0){
			item.addClass('active');
		}else if(i==1){
			item.addClass('next');
		}
	});
	setInterval(function(){
		item.find('.active').fadeOut(function(){
			item.find('.active').removeClass('active');

			nextItem = item.find('.next');
			nextItem.removeClass('next').addClass('active');

			nextListItem = nextItem.next();
			if(nextListItem.is('.car')){
				nextListItem.addClass('next');
			}else{
				nextListItem = item.find('.car:first-child');
				nextListItem.addClass('next');
			}
			nextListItem.fadeIn();
		});
	}, 3000);
});


// function fadeoutslider(){ 
// 	setInterval(function(){ 
// 		$('#my_imgcont #img4').fadeOut('slow')
// 	}, 3000);
	
// 	setInterval(function(){ 
// 		$('#my_imgcont #img3').fadeOut('slow')
// 	}, 6000);

// 	setInterval(function(){ 
// 		$('#my_imgcont #img2').fadeOut('slow')
// 	}, 9000);

// 	setInterval(function(){ 
// 		$('#my_imgcont #img1').fadeOut('slow')
// 	}, 12000);

	
// }
// function fadeinslider(){ 
// 	setInterval(function(){ 
// 		$('#my_imgcont #img4').fadeIn('slow');
		
// 	}, 12000);
	
// 	setInterval(function(){ 
// 		$('#my_imgcont #img3').fadeIn('slow')
// 	}, 15000);

// 	setInterval(function(){ 
// 		$('#my_imgcont #img2').fadeIn('slow')
// 	}, 18000);

// 	setInterval(function(){ 
// 		$('#my_imgcont #img1').fadeIn('slow')
// 	}, 21000);

	
// }
	// playslider(); // starts the function up the first time
	// setTimeout("playslider()", 12000); // causes the function to loop
	// setTimeout(fadeoutslider(), 12000);
	// setTimeout(fadeinslider(), 24000);



});
