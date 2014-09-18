$(document).ready(function(){ 
// this java script is set up the repetive function of 
// of the page slider

function fadeoutslider(){ 
	setInterval(function(){ 
		$('#my_imgcont #img4').fadeOut('slow');
		
	}, 3000);
	
	setInterval(function(){ 
		$('#my_imgcont #img3').fadeOut('slow')
	}, 6000);

	setInterval(function(){ 
		$('#my_imgcont #img2').fadeOut('slow')
	}, 9000);

	setInterval(function(){ 
		$('#my_imgcont #img1').fadeOut('slow')
	}, 12000);

	
}
function fadeinslider(){ 
	setInterval(function(){ 
		$('#my_imgcont #img4').fadeIn('slow');
		
	}, 3000);
	
	setInterval(function(){ 
		$('#my_imgcont #img3').fadeIn('slow')
	}, 6000);

	setInterval(function(){ 
		$('#my_imgcont #img2').fadeIn('slow')
	}, 9000);

	setInterval(function(){ 
		$('#my_imgcont #img1').fadeIn('slow')
	}, 12000);

	
}
	// playslider(); // starts the function up the first time
	// setTimeout("playslider()", 12000); // causes the function to loop
	setTimeout(fadeoutslider(), 12000);
	setTimeout(fadeinslider(), 24000);



});
