// Contact form Feedback Submisson
var loginData = [];

function loginPopup(){
  document.getElementById('submit-popup-overlay').style.display ='block';
  document.getElementById('show-popup').style.display ='block';

  console.log(document.getElementById("inputEmail3").value);
  console.log(document.getElementById("inputPassword3").value);

    var inputEmail3 =document.getElementById("inputEmail3").value;
    var inputPassword3 =document.getElementById("inputPassword3").value;

    loginData.push({"UserName ": inputEmail3, "Password ":inputPassword3});

    var popup ='<div class="contact-feedback-response">'+
                    '<div class="popup-title"><p>Welcome</p></div>'+
                    '<div class="popup-description"><p>Login was Sucessfull <br>Welcome to FOODSCO</p></div>'+
                    '<div class="popup-btn">'+
                        '<button id="popup-continue" type="button" value="All" onClick="feedbackContinue()"><span>Continue</span></button>'+
                    '</div>'+
                    '</div>';

    $("#show-popup").html(popup);

    // Seting up the leader board to local storage
    localStorage.setItem('loginData',JSON.stringify(loginData));

    document.querySelector("#submit-popup-overlay").addEventListener("click", () => {
        location.href='Index.html';

  });
}



function feedbackContinue(){
    location.href='Index.html';
}
