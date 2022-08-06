var leaderBoard = [{"Name":"Sanuri", "Score":30}, {"Name":"Shenal", "Score":9}, {"Name":"Gayani", "Score":25}, {"Name":"Shane", "Score":18}];
var name ="Thomas";
 // Seting up the leader board to local storage
//  localStorage.setItem('leaderBoard',JSON.stringify(leaderBoard));

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard1 = false;
let hasFlippedCard2 = false;
let hasFlippedCard3 = false;

let noOfAttempts = 3;
var total_points=0;

var discount_5_count =0;
var discount_10_count =0;
var discount_15_count =0;
var discount_20_count =0;

var overlay_data ='';

var dis_coupon ='';
var dis_code ='';
var dis_img ='';

let firstCard, secondCard, thirdCard;



function flipCard(){
    // console.log('fliped');
    this.classList.add('flip');

    if(hasFlippedCard1 !=true){
        // first click
        hasFlippedCard1 =true;
        noOfAttempts = noOfAttempts-1;
        firstCard =this;
        
        var selectedCard1 =firstCard.dataset.id;

        if(selectedCard1==='discount_5'){
            total_points = total_points+3;
            discount_5_count =discount_5_count+1;
        }else if(selectedCard1==='discount_10'){
            total_points = total_points+5;
            discount_10_count =discount_10_count+1;
        }else if(selectedCard1==='discount_15'){
            total_points = total_points+7;
            discount_15_count =discount_15_count+1;
        }else if(selectedCard1==='discount_20'){
            total_points = total_points+10;
            discount_20_count =discount_20_count+1;
        }

        document.getElementById("score").innerHTML = total_points;
        document.getElementById("attempts").innerHTML = noOfAttempts;
        document.getElementById("sc-how-to-play").style.display ='none';
        document.getElementById("bk-btn").style.display ='none';
    }
    else if((hasFlippedCard1 == true) && (hasFlippedCard2 !=true)){

        // hasFlippedCard =false;

        hasFlippedCard2 =true;
        noOfAttempts = noOfAttempts-1;
        secondCard =this;
        
        var selectedCard1 =secondCard.dataset.id;

        if(selectedCard1==='discount_5'){
            total_points = total_points+3;
            discount_5_count =discount_5_count+1;
        }else if(selectedCard1==='discount_10'){
            total_points = total_points+5;
            discount_10_count =discount_10_count+1;
        }else if(selectedCard1==='discount_15'){
            total_points = total_points+7;
            discount_15_count =discount_15_count+1;
        }else if(selectedCard1==='discount_20'){
            total_points = total_points+10;
            discount_20_count =discount_20_count+1;
        }

        
        document.getElementById("score").innerHTML = total_points;
        document.getElementById("attempts").innerHTML = noOfAttempts;
    }
    else if((hasFlippedCard2 ==true)&&(hasFlippedCard3 !=true)){
        
        hasFlippedCard3 =true;
        noOfAttempts = noOfAttempts-1;
        thirdCard =this;
        
        var selectedCard1 =thirdCard.dataset.id;

        if(selectedCard1==='discount_5'){
            total_points = total_points+3;
            discount_5_count =discount_5_count+1;
        }else if(selectedCard1==='discount_10'){
            total_points = total_points+5;
            discount_10_count =discount_10_count+1;
        }else if(selectedCard1==='discount_15'){
            total_points = total_points+7;
            discount_15_count =discount_15_count+1;
        }else if(selectedCard1==='discount_20'){
            total_points = total_points+10;
            discount_20_count =discount_20_count+1;
        }

        document.getElementById("score").innerHTML = total_points;
        document.getElementById("attempts").innerHTML = noOfAttempts;


        // var max_count_dis = Math.max(discount_5_count, discount_10_count, discount_15_count,discount_20_count);

        const arr_dis = [discount_5_count, discount_10_count, discount_15_count, discount_20_count];

        const max_count_dis = Math.max(...arr_dis);
            

        if(max_count_dis!=1){
            
            const index = arr_dis.indexOf(max_count_dis);

            // console.log('index : ',index);

            if(index==0){
                dis_coupon = '5%';
                dis_code = '9566';
                dis_img = 'c4.png';
            }
            else if(index==1){
                dis_coupon = '10%';
                dis_code = '9567';
                dis_img = 'c3.png';
            }
            else if(index==2){
                dis_coupon = '15%';
                dis_code = '9568';
                dis_img = 'c2.png';
            }
            else if(index==3){
                dis_coupon = '20%';
                dis_code = '9569';
                dis_img = 'c1.png';
            }

            
            document.getElementById("game-overlay").style.display ='block';

            overlay_data = '<div class="ov_content">'+
                                    '<div class="ov_title">Congratulations!!!</div>  '+
                                    '<div class="code_p">You Have Won ' + dis_coupon + ' Discount <br> Coupon</div>'+
                                    '<div class="code_p">You Have got ' + total_points + ' points</div>'+
                                    '<div class="ov_image"><img src="../Images/Game/' + dis_img + '" alt="img"></div>'+
                                    '<div class="code_p">Use Code ' + dis_code + ' to redeem your discount when you order next time</div>'+
                                    '<div class="" id=""><button id="exit-bt" type="button" value="All" onClick="getexitbtn()">Exit</button></div>'+
                                '</div>';

            
            leaderBoard.push({"Name": "Thomas", "Score":total_points});

        }else{
            overlay_data = '<div class="ov_content">'+
                                    '<div class="ov_title" style="margin-top:229px;">Better Luck Next Time!!!</div>  '+
                                    '<div class="code_p">You Have got ' + total_points + ' points</div>'+
                                    '<div class=""><button id="exit-bt" type="button" value="All" onClick="getexitbtn()">Exit</button></div>'+
                                '</div>';

            
            leaderBoard.push({"Name": "Thomas", "Score":total_points});

            
        }
        $("#game-overlay").append(overlay_data);
        
        console.log("leaderboard : ",leaderBoard)

        // Seting up the leader board to local storage
        localStorage.setItem('leaderBoard',JSON.stringify(leaderBoard));

        
        
    }
}
cards.forEach(card=>card.addEventListener('click', flipCard));

// localStorage.setItem('leaderBoard',JSON.stringify(leaderBoard));

document.addEventListener("DOMContentLoaded", () => {
    
    getLeaderboard();
        
});
    
function getexitbtn(){
    console.log("click function is working");
    // location.href('#')
    
    getLeaderboard();
    window.location.href = "#leader-board";
}

function getLeaderboard(){
    // $(document).ready(function () {
        var leader_data = "";
    
        var retrievedDatas = localStorage.getItem("leaderBoard");
        var retrievedData = JSON.parse(retrievedDatas);
    
        console.log('retrievedData : ',retrievedData)
        
        var sortedLeaderboard = retrievedData.sort(function (a, b) {
            if (a.Score < b.Score) {
                return 1;
            }
            if (a.Score > b.Score) {
                return -1;
            }
    
            return 0;
            });
        
        $.each(sortedLeaderboard, function (key, value) {
    
    
            leader_data +='<div class="lc">'+
                            '<div class="lc-rank" id="lc-value">'+(key+1)+'</div>'+
                            '<div class="lc-name" id="lc-value">'+value.Name+'</div>'+
                            '<div class="lc-score" id="lc-value">'+value.Score+'</div>'+
                        '</div>';
            
        });
    
        $("#leader-content").html(leader_data);
}