$(document).ready(function () {

    let netTotal = localStorage.getItem("TotalPrice");
    console.log(netTotal);

    var path = window.location.pathname;
    var page = path.split("/").pop();

jQuery(function($) {
    var $form = $('#ctb-payment');
    var handler = StripeCheckout.configure({
      key: 'pk_test_cp21BcECf4kMMUbSlRlZlsMo',
      token: function(token) {

        if(token.id){
            if (page === "Checkout.html") {
                window.location.href = 'Payment-successful.html';
            }
        }
      }
    });
    
    $('#place-order').on('click', function(e) {
      // Code Section B  Open Checkout with further options
      handler.open({
        name: 'Foodsco',
        currency: 'LKR',
        amount: netTotal * 100
      });
      e.preventDefault();
    });

    // Code Section C  Close Checkout on page navigation
    $(window).on('popstate', function() {
      handler.close();
    });
    });
});