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

    
});

// #######################################################################################
// #######################################################################################

// Js for the products 
$(document).ready(documentReady);

function documentReady() {
    $.getJSON("products.json", function(data){
        var product_data = '';

        $.each(data, function(key, value){
            product_data += '<div class="product" id="product'+value.prod_id+'">'+
                    '<a href="#">'+
                        '<img src="../Images/Products/'+value.prod_img+'" alt="prod_img" class="prod_img" id="prod_img">'+
                    '</a>'+
                    '<hr class="hr">'+
                    '<div class="row" id="prod_descr_area">'+
                        '<div class="col-sm-8" id="">'+
                            
                            '<div class="prod_name" id="prod_name">'+
                                '<a href="#">' + value.prod_name+'</a>'+
                            '</div>'+
                            
                        '</div>'+
                        '<div class="col-sm-3" id="">'+
                            '<img src="../Images/cart_icon.png" alt="cart_img" class="cart_img" id="cart_img">'+
                        '</div>'+
                    '</div>'+
                    '<div class="prod_category" id="prod_category">' + value.prod_category+'</div>'+
                    '<div class="prod_price" id="prod_price">LKR ' + value.prod_price+'</div>'+
                '</div>';
        });
        $('#product_row').html(product_data);
    });
};

// #######################################################################################
// #######################################################################################


// Function for the cancel button
$(function() {
    $('#apply-btn').on('click', function() {
        const nav1 = document.querySelector(".f-space");
        nav1.classList.remove("filter--open");
    });
});

// #######################################################################################
// #######################################################################################


// Function for the cancel button
$(function() {
    $('#cancel-btn').on('click', function() {
        location.reload();
    });
});

// #######################################################################################
// #######################################################################################


// Js for the filter icon

document.addEventListener("DOMContentLoaded", () => {
    const nav1 = document.querySelector(".f-space");

    document.querySelector("#btn-filter").addEventListener("click", () => {
        nav1.classList.add("filter--open");
    });

    document.querySelector(".filter__overlay").addEventListener("click", () => {
        nav1.classList.remove("filter--open");
    });

    document.querySelector("#filter-close-icon").addEventListener("click", () => {
        nav1.classList.remove("filter--open");
    });
});
    

// #######################################################################################
// #######################################################################################



// Function for the sorting A-Z

$(function() {
    $('#sort_A_Z').on('click', function() {
        $.ajax({
            url: 'products.json',
            dataType: 'json',
            data: null,
            type: 'GET',
            success: function(json) {
                
                // Sorting: typeof json === Array
                
                var sorted = json.sort(function (a, b) {
                    if (a.prod_name > b.prod_name) {
                        return 1;
                    }
                    if (a.prod_name < b.prod_name) {
                        return -1;
                    }

                    return 0;
            });
            
                var str = '';
                
                $.each(sorted, function(index, value) {
                    str += '<div class="product" id="product'+value.prod_id+'">'+
                        '<a href="#">'+
                            '<img src="../Images/Products/'+value.prod_img+'" alt="prod_img" class="prod_img" id="prod_img">'+
                        '</a>'+
                        '<hr class="hr">'+
                        '<div class="row" id="prod_descr_area">'+
                            '<div class="col-sm-8" id="">'+
                                
                                '<div class="prod_name" id="prod_name">'+
                                    '<a href="#">' + value.prod_name+'</a>'+
                                '</div>'+
                                
                            '</div>'+
                            '<div class="col-sm-3" id="">'+
                                '<img src="../Images/cart_icon.png" alt="cart_img" class="cart_img" id="cart_img">'+
                            '</div>'+
                        '</div>'+
                        '<div class="prod_category" id="prod_category">' + value.prod_category+'</div>'+
                        '<div class="prod_price" id="prod_price">LKR ' + value.prod_price+'</div>'+
                    '</div>';	
                    
                });
                
                $("#product_row").html(str);
            },
            
            error: function(xhr, status, text) {
                console.log(status + ' ' + text);
            }
        });
    });
});

// #######################################################################################
// #######################################################################################


// Function for the sorting Z-A

$(function() {
    $('#sort_Z_A').on('click', function() {
        $.ajax({
            url: 'products.json',
            dataType: 'json',
            data: null,
            type: 'GET',
            success: function(json) {
                
                // Sorting: typeof json === Array
                
                var sorted = json.sort(function (a, b) {
                    if (a.prod_name < b.prod_name) {
                        return 1;
                    }
                    if (a.prod_name > b.prod_name) {
                        return -1;
                    }

                    return 0;
            });
            
                var str = '';
                
                $.each(sorted, function(index, value) {
                    str += '<div class="product" id="product'+value.prod_id+'">'+
                        '<a href="#">'+
                            '<img src="../Images/Products/'+value.prod_img+'" alt="prod_img" class="prod_img" id="prod_img">'+
                        '</a>'+
                        '<hr class="hr">'+
                        '<div class="row" id="prod_descr_area">'+
                            '<div class="col-sm-8" id="">'+
                                
                                '<div class="prod_name" id="prod_name">'+
                                    '<a href="#">' + value.prod_name+'</a>'+
                                '</div>'+
                                
                            '</div>'+
                            '<div class="col-sm-3" id="">'+
                                '<img src="../Images/cart_icon.png" alt="cart_img" class="cart_img" id="cart_img">'+
                            '</div>'+
                        '</div>'+
                        '<div class="prod_category" id="prod_category">' + value.prod_category+'</div>'+
                        '<div class="prod_price" id="prod_price">LKR ' + value.prod_price+'</div>'+
                    '</div>';	
                    
                });
                
                $("#product_row").html(str);
            },
            
            error: function(xhr, status, text) {
                console.log(status + ' ' + text);
            }
        });
    });
});

// #######################################################################################
// #######################################################################################


// Search auto complete function
$(document).ready(function() {

    $.getJSON("products.json", function(data){
        let prodName = data.map(value => { return value.prod_name });
    
        $( "#search_box" ).autocomplete({
        source: prodName
        });
    });
    
});


// #######################################################################################
// #######################################################################################


// Search Function
$('#search_box').keyup(function(){
    $.getJSON("products.json", function(data){
        //  document.getElementById('product_row').innerHTML='it works';
        var searchField = $('#search_box').val();

        // if(searchField === '')  {
        //     $('#product_row').html('');
        //     return;
        // }
        
        var regex = new RegExp(searchField, "i");
        var output = '';
        // var count = 1;
        
        $.each(data, function(key, val){
            if (val.prod_name.search(regex) != -1){

                output += '<div class="product" id="product'+val.prod_id+'">'+
                        '<a href="#">'+
                            '<img src="../Images/Products/'+val.prod_img+'" alt="prod_img" class="prod_img" id="prod_img">'+
                        '</a>'+
                        '<hr class="hr">'+
                        '<div class="row" id="prod_descr_area">'+
                            '<div class="col-sm-8" id="">'+
                                
                                '<div class="prod_name" id="prod_name">'+
                                    '<a href="#">' + val.prod_name+'</a>'+
                                '</div>'+
                                
                            '</div>'+
                            '<div class="col-sm-3" id="">'+
                                '<img src="../Images/cart_icon.png" alt="cart_img" class="cart_img" id="cart_img">'+
                            '</div>'+
                        '</div>'+
                        '<div class="prod_category" id="prod_category">' + val.prod_category+'</div>'+
                        '<div class="prod_price" id="prod_price">LKR ' + val.prod_price+'</div>'+
                    '</div>';	

                // if(count%2 == 0){
                //     // output += '</div><div class="row">'
                // }
                // count++;
            }
        });
        // output += '</div>';

        $('#product_row').html(output);
    });
});


// #######################################################################################
// #######################################################################################

// Price range filter
$(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 2000,
            values: [0, 2000],

            change:function(event, ui){
                getFilterResults(ui.values[0], ui.values[1])
            },
            slide: function (event, ui) {
            $("#low-range").val("Min : LKR " + ui.values[0]);
            $("#high-range").val("Max : LKR " + ui.values[1]);
            }
        });
        
        var current = $("#slider-range").slider("option", "values");
        getFilterResults(current[0], current[1]);
    
});
    
function getFilterResults(minimum, maximum){
    $.getJSON("products.json", function(data){
        var product_data = '';

        $("#low-range").val("Min : LKR " + minimum);

        $("#high-range").val("Max : LKR " + maximum);
        
        // for(var product in data){
        $.each(data, function(key, product){

            if(product.prod_price >= minimum && product.prod_price <= maximum){

                product_data += '<div class="product" id="product'+product.prod_id+'">'+
                                '<a href="#">'+
                                    '<img src="../Images/Products/'+product.prod_img+'" alt="prod_img" class="prod_img" id="prod_img">'+
                                '</a>'+
                                '<hr class="hr">'+
                                '<div class="row" id="prod_descr_area">'+
                                    '<div class="col-sm-8" id="">'+
                                        
                                        '<div class="prod_name" id="prod_name">'+
                                            '<a href="#">' + product.prod_name+'</a>'+
                                        '</div>'+
                                        
                                    '</div>'+
                                    '<div class="col-sm-3" id="">'+
                                        '<img src="../Images/cart_icon.png" alt="cart_img" class="cart_img" id="cart_img">'+
                                    '</div>'+
                                '</div>'+
                                '<div class="prod_category" id="prod_category">' + product.prod_category+'</div>'+
                                '<div class="prod_price" id="prod_price">LKR ' + product.prod_price+'</div>'+
                            '</div>';
            }
        });$('#product_row').html(product_data);
    });

}

// #######################################################################################
// #######################################################################################


// Category filter Function

$('.cat_item').on('click',function(){
    
    var searchField = $(this).val();

    if(searchField !="All"){
        $.getJSON("products.json", function(data){
            
            document.getElementById("active").style.color = "#7B837C";
            document.getElementById("active").style.background = "white";

            var regex = new RegExp(searchField, "i");
            var output = '';
            // var count = 1;
            
            $.each(data, function(key, val){
                if (val.prod_category.search(regex) != -1){

                    output += '<div class="product" id="product'+val.prod_id+'">'+
                            '<a href="#">'+
                                '<img src="../Images/Products/'+val.prod_img+'" alt="prod_img" class="prod_img" id="prod_img">'+
                            '</a>'+
                            '<hr class="hr">'+
                            '<div class="row" id="prod_descr_area">'+
                                '<div class="col-sm-8" id="">'+
                                    
                                    '<div class="prod_name" id="prod_name">'+
                                        '<a href="#">' + val.prod_name+'</a>'+
                                    '</div>'+
                                    
                                '</div>'+
                                '<div class="col-sm-3" id="">'+
                                    '<img src="../Images/cart_icon.png" alt="cart_img" class="cart_img" id="cart_img">'+
                                '</div>'+
                            '</div>'+
                            '<div class="prod_category" id="prod_category">' + val.prod_category+'</div>'+
                            '<div class="prod_price" id="prod_price">LKR ' + val.prod_price+'</div>'+
                        '</div>';	

                    // if(count%2 == 0){
                    //     // output += '</div><div class="row">'
                    // }
                    // count++;
                }
            });
            // if(output==null){
            //     output += '<b>No products to be found</b>';
            // }

            $('#product_row').html(output);
        });
    }
    // This is to ge the document ready function so that all the products will be loaded
    else{
        document.getElementById("active").style.color = "white";
        document.getElementById("active").style.background = "#5DC466";
        documentReady();
    }
});


