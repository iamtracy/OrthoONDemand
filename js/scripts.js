/*
g_ = global
o = object
a = array
i = integer
c = character string
b = boolean 
*/

//Initiates CSS3 Animation
$('.panel-title').click(function(){
	var oFontIcon = $(this).find('i');
	if(oFontIcon.hasClass('fa-transition')){
		oFontIcon.removeClass('fa-transition')
	}else{
		oFontIcon.addClass('fa-transition');
	}
});

//Dropdown toggle onDemand.html
$('#viewMore').click(function(){ 
	if($(this).html() == 'Load Less'){ 
		$(this).html('Load More'); 
	}else{ 
		$(this).html('Load Less'); 
	} 
}); 




