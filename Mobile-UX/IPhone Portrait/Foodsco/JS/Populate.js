$(document).ready(function () {
    let eventData;
    populateProductCard()
  
    var heartIcons = document.querySelectorAll("[id='heart']");
  
    var FavouriteList=[];
    
    $(".heart-icon").click(function () {
  
          if ($(this).attr('src') == "../Images/love.png") {
            $(this).attr('src', "../Images/heart.png");
            FavouriteList.push($('.prod-id').eq($('.heart-icon').index(this)).text());
          }
          else {
            var prodID=$('.prod-id').eq($('.heart-icon').index(this)).text();
            $(this).attr('src', "../Images/love.png");
              for( var i = 0; i < FavouriteList.length; i++){ 
                if ( FavouriteList[i] === prodID) {
                  FavouriteList.splice(i, 1); 
                }
            }
          }
  
        localStorage.setItem('FavouritesList',FavouriteList);
  
    });
  
  });
  
  function populateProductCard() {
    var cardNum = document.getElementsByClassName("card");
    var images = document.querySelectorAll("[id='product-image']");
    for (var i = 0; i < cardNum.length; i++) {
      images[i].src = Products[i].prod_img;
      document.getElementsByClassName("product-title")[i].innerHTML = Products[i].prod_name;
      document.getElementsByClassName("prod-id")[i].innerHTML = Products[i].prod_id;
      document.getElementsByClassName("price")[i].innerHTML = 'LKR. ' + Products[i].prod_price;
    }
  }
  
  
