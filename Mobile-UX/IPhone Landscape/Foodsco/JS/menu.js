
// A $( document ).ready() block.
console.log('before doc ready ...')
$( document ).ready(function() {
   console.log('document ready ...')
   $('.ham-icon-wrp').click(function(){
      console.log('ham icon click ...')
    $('.sidenav').toggle('slide');
   });
   $('.sidemenu-close').click(function(){
    $('.sidenav').toggle('slide');
   });

});

// $(document).on("pageshow","#home", function() {
//   console.log('show home page ...')
// })

// $(document).on("pageshow","#product", function() {
//    console.log('show product page ...')
//  })