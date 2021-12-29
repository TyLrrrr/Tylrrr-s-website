$(document).ready(function(){ 
  $("#slide3A").click(function(){
      $("#slide3B").slideToggle();
	  $("#carrot3").toggleClass('flip');
	  
  });
   
  $("#slide2A").click(function(){
      $("#slide2B").slideToggle();
	  $("#carrot2").toggleClass('flip');
  });

  $("#slide1A").click(function(){
      $("#slide1B").slideToggle();
	  $("#carrot1").toggleClass('flip');
	  
  });
}); 
