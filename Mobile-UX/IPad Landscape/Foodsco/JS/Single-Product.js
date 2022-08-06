// #######################################################################################
// #######################################################################################


// Js for the nav menu
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
  
    document.querySelector("#btnNav").addEventListener("click", () => {
      nav.classList.add("nav--open");
    });
  
    document.querySelector(".nav__overlay").addEventListener("click", () => {
      nav.classList.remove("nav--open");
    });
  
    document.querySelector("#close-icon").addEventListener("click", () => {
      nav.classList.remove("nav--open");
    });

    var params = new URLSearchParams(window.location.search);
    var productid = params.get('prod_id');

    // document.getElementById('loc').innerHTML = 'params : ' + (window.location.href);

    // document.getElementById('prodID').innerHTML = 'prod id : ' + productid;
    console.log('prod id :' + productid);

    $.getJSON("products.json", function (data) {
        
        $.each(data, function (key, val) {
            if(val.prod_id==productid){
                var prod_name = val.prod_name;
                var prod_category = val.prod_category;
                var prod_price = val.prod_price;
                var prod_img = val.prod_img;
                var prod_rating = val.prod_rating;
                var prod_decription = val.prod_decription;
                
                var img ='<img src="../Images/Products/'+prod_img+'" class="sin-prod-img" alt="'+prod_img+'">';

                if(prod_rating==1){
                    var star = '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>';

                }else if(prod_rating==2){

                    var star = '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>';

                }else if(prod_rating==3){

                    var star = '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>';

                }else if(prod_rating==4){
                    
                    var star = '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star" style="font-size:24px; margin-right:5px;"></i>';

                }else if(prod_rating==5){

                    var star = '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>'+
                                '<i class="bi bi-star-fill" style="color:rgb(255,187,0); font-size:24px; margin-right:5px;"></i>';

                }

                

                $(".sin-desc-name").html(prod_name);
                $(".sin-desc-cat").html(prod_category);
                $("#sin-price-value").html(prod_price);
                $("#sin-prod-img").html(img);
                $(".star-rating").html(star);
                $(".avg-rate").html(prod_rating);
                $(".sin-description").html(prod_decription);

                console.log('prod_name : ',prod_name)
            }
            });
        
      });


  });
  
  // #######################################################################################
  // #######################################################################################
  



