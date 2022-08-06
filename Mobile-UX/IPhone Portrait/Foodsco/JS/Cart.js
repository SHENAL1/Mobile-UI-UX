$(document).ready(function() {

    let addtocartlist = localStorage.getItem("addtocartList");

    const AddToCartIDArray = addtocartlist.split(",");

    const noOfItems = AddToCartIDArray.length;

    // document.getElementById('delete-txt').innerHTML = '(' + noOfItems + ')' + 'Items';

    for (cartItem of AddToCartIDArray) { 
        var cartProduct;
        
        for (var i = 0; i < Products.length; i++) {
            if (Products[i].prod_id === cartItem) {
                const CartHTML = '<div class="cb-row">' +
                '<div class="cbr-img">' +
                    '<img src="../Images/' + Products[i].prod_img + '">' +
                '</div>' +
                '<div class="cbr-product">' +
                    '<div class="cbr-product-name">' + Products[i].prod_name + '</div>' +
                    '<div class="cbr-cat-name">' + Products[i].prod_category + '</div>' +
                '</div>' + 
                '<div class="cbr-quantity">x1</div>' +
                '<div class="cbr-price" id="single-price" data-value="' + Products[i].prod_price + '">LKR ' + Products[i].prod_price + '</div>' +
            '</div>'

                document.getElementsByClassName('cart-box')[0].innerHTML += CartHTML;
                break;
            }
        }
        console.log(cartProduct);
    }

    // Clear the products in the cart......
    
    $('#delete-icon').click(function() {
        localStorage.clear('addtocartList');
        location.reload();
    });


    // calculate the total price of the products in the cart.........

    var checkedItemsList = [];
    var checkedNameList=[];

    var itemprice = $('.cbr-price').text().split("LKR");
    var total = 0;
    
    i = itemprice.length;

    while( i-- ) {
        total += parseInt( itemprice[i], 10 ) || 0; 
    }

    var itemName=$('.cbr-product-name').text();
    console.log(itemprice);

    checkedItemsList.push(itemprice);
    checkedNameList.push(itemName);

    document.getElementsByClassName('ctb-price')[0].innerText = 'LKR.' + total + '.00';
    localStorage.setItem('TotalPrice', total);
    localStorage.setItem('ItemNames',checkedNameList);


});