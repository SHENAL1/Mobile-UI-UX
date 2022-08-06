
// ****************** Favourites ********************

$(document).ready(function () {

	const IDs = localStorage.getItem("FavouritesList");
	var noOfItems;
	var FavouriteIDList;

	if (IDs.length != 0) {
		FavouriteIDList = IDs.split(",");
		noOfItems = FavouriteIDList.length;
		} else {
		FavouriteIDList = []
		noOfItems = IDs.length;
		}

		for (favouriteID of FavouriteIDList) {
		for (var i = 0; i < Products.length; i++) {
			if (Products[i].prod_id === favouriteID) {
	
			console.log(Products[i]);
	
	
			const CartHTML = '<li class="product">' +
			'<a href="#">' +
				'<div class="product-loop-custom-img-wrap">' +
					'<img src="../Images/' + Products[i].prod_img + '">' +
				'</div>' +
				'<div class="product-content"> '+
				'<div hidden class="prod-id">' + Products[i].prod_id + '</div>' +
					'<h2 class="product-title">' + Products[i].prod_name + '</h2>' +
					'<h3 class="pro-sub-title">' + Products[i].prod_category + '</h3>' +
					'<span class="price">LKR' + Products[i].prod_price + '</span>' +
				'</div>' +
			'</a>' +
				'<div class="heart-wrapper">'+
					'<img id="heart" class="heart-icon" src="../Images/heart.png">'+
				'</div>'+
			'</li>'
	
			
			document.getElementsByClassName('card-area')[0].innerHTML += CartHTML;
			break;
			}
		}
	}
	
	$(".heart-icon").click(function () {

	var prodID = $('.prod-id').eq($('.heart-icon').index(this)).text()

	for (var i = 0; i < FavouriteIDList.length; i++) {
		if (FavouriteIDList[i] === prodID) {
		FavouriteIDList.splice(i, 1);
		}
	}
	localStorage.setItem('FavouritesList', FavouriteIDList);
	location.reload();
});

//*****************  favourite list email***********************//

$('#enter-email').click(function () {
	$('#enterEmailPopup').addClass('open');
});

var emailProductNames =[];
var productName=$('.product-title').text().split(/(?=[A-Z])/);

emailProductNames.push(productName);

localStorage.setItem('FavoriteProducts',emailProductNames);

var EmailItemList = localStorage.getItem("FavoriteProducts");


$('#submit-mail').click(function () {

	var emailToSend = $('#mail-to').val();		
	var data = {
		service_id: 'service_79j4rvm',
		template_id: 'template_vsbe24h',
		user_id: 'user_evdf04seM3aMERnwZnJZQ',
		template_params: {
			to_name: emailToSend,
			from_name: 'Foodsco',
			message_html: '<b>' + EmailItemList + '</b>'
		}
	};
	$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json'
	}).done(function() {
		alert('Your mail is sent!');
	}).fail(function(error) {
		alert('Oops... ' + JSON.stringify(error));
	});

	});

});
