$(document).ready(function(){
	setTimeout(function() {
		$('.content').fadeOut(2000);
    }, 2000); // <-- time in milliseconds


    setTimeout(function(){
   $('.category_container').show();
   }, 4000);


/*contenido comida*/

	$('.category_item').click(function(){
		var category = $(this).attr('id');


		if(category == 'all'){
			$('.comida_item').addClass('hide');
			setTimeout(function(){
				$('.comida_item').removerClass('hide');
			}, 300);
    } else {
   	$('.comida_item').addClass('.hide');
   	setTimeout(function(){
				$('.' + category).removeClass('hide');
			}, 300);
   }
   });
});



