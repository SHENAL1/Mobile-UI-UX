$(document).ready(function () {

    var path = window.location.pathname;
    var page = path.split("/").pop();
   

    var addButtons = document.querySelectorAll("[id='add-to-cart']");
    

    for (addBtn of addButtons) {
        addBtn.addEventListener("click", function () {
            document.getElementById("addtocartPopup").classList.add("open");
            const addtoCartID = $(this).prevAll(".prod-id").text();
            let addtocartlist = localStorage.getItem("addtocartList");
            let newAddtocart = '';
            if (!addtocartlist) {
                newAddtocart = `${addtoCartID}`;
            } else {
                newAddtocart = `${addtocartlist},${addtoCartID}`;
            }

            localStorage.setItem("addtocartList", newAddtocart);

        });
    }

    var removePopup = document.getElementById("continuePopup");

    removePopup.addEventListener("click",function(){
        document.getElementById("addtocartPopup").classList.remove("open");
    });
})



function addtoCart() {

}
