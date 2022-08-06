//current position
var pos = 0;
//number of slides
// var totalSlides = $('#slider-wrap ul li').length;

var totalSlides = 3;
//get the slide width
var sliderWidth = 637;



$(document).ready(function(){
	
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 3000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 
	   //set its color
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	   
	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});
	
	//counter
	countSlides();
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
	
	//reload pages...
    $('#shopping-cart').click(() => {
        window.location.href = 'Cart.html';
    });

    $('#favourites-page').click(() => {
        window.location.href = 'Favourites.html';
    });

	$('#home-page').click(() => {
        window.location.href = 'Home.html';
    });
	
	$('#products-page').click(() => {
        window.location.href = 'Products.html';
    });

	$('#checkout-page').click(() => {
        window.location.href = 'Checkout.html';
    });

	$('#loginBtn').click(() => {

		localStorage.clear();

		var str = $("#inputEmail3").val();
		if(localStorage.getItem('name') == null){
			localStorage.setItem('name', JSON.stringify(str));
		}

        window.location.href = 'Home.html';
    });

	$('#logOut').click(() => {

		localStorage.clear();

        window.location.href = 'Login.html';
    });

});//DOCUMENT READY
	


/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-
		1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}		

// Function for the products display

// 	$(document).ready(function(){
//     $.getJSON("products.json", function(data){
//         var product_data = '';

//         $.each(data, function(key, value){
// 		    product_data += '<li class="product" id="product'+value.prod_id+'">'+
// 		            '<a href="#" class="pro-link">'+
// 		                '<div class="product-loop-custom-img-wrap">'+
// 		                    '<img src="../Images/'+value.prod_img+'">'+ 
// 		                '</div>'+
// 						'</a> '+
// 		               '<div class="product-content">'+
// 		                    '<h2 class="product-title">' + value.prod_name+'</h2>'+
// 		                    '<h3 class="pro-sub-title">' + value.prod_category+'</h3>'+
// 		                    '<span class="price">LKR ' + value.prod_price+'</span>'+
// 		               '</div>'+
// 		            '<a href="#" class="cart-icon">'+
// 		                '<i class="bi bi-bag-fill"></i>'+
// 		            '</a>'+
// 					'<div class="heart-wrapper">'+
//                         '<img id="heart" class="heart-icon" src="../Images/love.png">'+
//                     '</div>'+
// 		        '</li>';

//         });
//         $('#product-list').html(product_data);
//     });
// });

function showaddtocartPopup() {
    $("#addtocartPopup").popup("open");

}
