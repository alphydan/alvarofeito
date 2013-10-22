jQuery(document).ready(function($) {

	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

	// Create a newDate() object
	var newDate = new Date();
	// Extract the current date from Date object
	newDate.setDate(newDate.getDate());
         
              setInterval( function() {
              var seconds = new Date().getSeconds();
              var sdegree = seconds * 6;
              var srotate = "rotate(" + sdegree + "deg)";
              
              $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
                  
              }, 1000 );
         
              setInterval( function() {
              var hours = new Date().getHours();
              var mins = new Date().getMinutes();
              var hdegree = hours * 30 + (mins / 2);
              var hrotate = "rotate(" + hdegree + "deg)";
              
              $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
                  
              }, 1000 );
        
              setInterval( function() {
              var mins = new Date().getMinutes();
              var mdegree = mins * 6;
              var mrotate = "rotate(" + mdegree + "deg)";
              
              $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
                  
              }, 1000 );
});

jQuery(document).ready(function($) {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var x ="Endormi"

    if ( hours >=18 || hours <=6)
    {
	 $('#clock').css('background-image','url(http://sixroupillons.fr/wp-content/uploads/2012/09/clockface1.png)');
    }

	if (hours >= 6 && hours < 7 && minutes > 30)
               {$("#awake-asleep").text(x);
        	$("#sleepy-fig").append(im);} 
	else if (hours >= 3 && hours < 4 && minutes < 30)
               {$("#awake-asleep").text(x);
        	$("#sleepy-fig").append(im);} 
        else if (hours >= 10 && hours < 11 && minutes > 30)
               {$("#awake-asleep").text(x);
        	$("#sleepy-fig").append(im);} 
        else if (hours >= 18 && hours < 19 && minutes > 30)
               {$("#awake-asleep").text(x);
        	$("#sleepy-fig").append(im);} 
        else if (hours >= 14 && hours < 15 && minutes > 30)
               {$("#awake-asleep").text(x);
        	$("#sleepy-fig").append(im);} 
    else if ((hours >= 22 && minutes > 30 && hours <23) || (hours > 23 && hours > 24))
               {$("#awake-asleep").text(x);
        	$("#sleepy-fig").append(im);} 

});

