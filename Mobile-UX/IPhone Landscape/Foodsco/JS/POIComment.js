//function for cancle button
function close_reply_form(id){
    document.getElementById(id).style.display = 'none';
}
//create comments array
comments_array = new Array();

$(document).on('pageinit','#pageone',function() {   
    //add comment button function
    $('#add-comment').click(function (){
        document.getElementById('review-form').style.display = 'none';
    });
    $('#hide-form-btn').click(function (){
        document.getElementById('review-form').style.display = 'none';

    });
    $('#show-form-btn').click(function (){
        document.getElementById('review-form').style.display = 'block';
        // console.log('show btn')

    })

    setTimeout(function () {
        var user_name = JSON.parse(localStorage.getItem('name'));
        var user_email = "A@gmail.com";
        let currentUser = JSON.parse(localStorage.getItem('name'));

        $("#add-comment").click(function () {

            var name = currentUser;
            var email = currentUser;
            //handel=title form value
            var handle = $('#handle').val();
            var comment = $('#comment').val();
            
            //call create comment 142
            //send null value to initiate that comment is parent 
            create_comment(name, handle, comment, null,email)
        });

        //comment list div
        $("#commentsList").click(function (event) {

            var tempParts = event.target.id.split('-')
            var comment_type = tempParts[0]
            var comment_id = tempParts[tempParts.length - 1]
            var abc = event.target.id.split("reply-")[1];

            //initiate  the like count 
            if(comments_array[comment_id]['LikeCount'] == null && comments_array[comment_id]['LikeCount'] == NaN || comments_array[comment_id]['LikeCount'] == undefined)
            {
                comments_array[comment_id]['LikeCount'] = 0;
            }
            //create reply comment form
            if (comment_type === 'reply') {
                var reply_form_elem =
                    `
		    		<div class="ui-contents" id="${abc}">
<!--						<span class="foodsco_subtitle_" style="color: black ; font-weight: 700">Reply:</span>-->
						<textarea rows="3" id="content-${abc}" style="border: solid !important; border-color: black !important" class="comment-box" placeholder="Body of review(1500)">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</textarea>

						<span class="ui-grid-solo" >
							<span class="ui-block-a">
                                <span style="display: flex;float:right" >
                                    <button id="addreply-${abc}" class="add-btn" style="width:65px; color: white;background-color: #5DC466;border: 1px solid #5DC466;font-size: 12px;font-weight: 400;margin: 5px;padding: 8px 7px 8px 7px;">Reply</button>
                                    <button id="cancel" class="cancel-btn" onclick="close_reply_form(${abc})" style=" width:65px; padding: 8px 8px 8px 8px;color: #5DC466;background-color: white;border: 1px solid #5DC466;font-weight: 400;margin-right: 10px ;font-size: 12px;">Cancel</button>
                                </span>
                            </span>
						</span>
						
					</div>
					`;


                var child_List_Elem_Id = `childlist-${event.target.id.split("reply-")[1]}`;
                var child_List_Elem = document.getElementById(child_List_Elem_Id);
                if (child_List_Elem == null) {
                    child_List_Elem = `<ul id="childlist-${event.target.id.split("reply-")[1]}"> ${reply_form_elem} </ul>`;
                    document.getElementById(`comment-${abc}`).innerHTML += child_List_Elem;
                } else {
                    child_List_Elem.innerHTML = reply_form_elem + child_List_Elem.innerHTML;
                }
            } else if (comment_type === 'addreply') {
                var content = document.getElementById(`content-${abc}`).value;
                var name = user_name;
                var handle = "";
                var email = user_email
                create_comment(name, handle, content, comment_id,email);
            }else if (comment_type === 'like'){
                console.log('like button clicked',comment_id);
                 //add like button event
                let cl = comments_array[comment_id]['like'];
                
                if(cl === 'undefined' || cl === false){
                    //like clicking event
                    comments_array[comment_id]['like'] = true;
                    
                    if(comments_array[comment_id]['LikeCount'] != null && comments_array[comment_id]['LikeCount'] != NaN)
                    {
                        comments_array[comment_id]['LikeCount'] = comments_array[comment_id]['LikeCount'] + 1;
                    }
                    else{
                        comments_array[comment_id]['LikeCount'] = 1;                   
                   }
                }else{
                    //unlike event
                    comments_array[comment_id]['like'] = false;

                    if(comments_array[comment_id]['LikeCount'] != null)
                    {
                        if(comments_array[comment_id]['LikeCount'] >= 1)
                        {
                            comments_array[comment_id]['LikeCount'] = comments_array[comment_id]['LikeCount'] - 1;
                        }
                    }
                }
                store_comments()
                show_comments()
                 
                
            }
            $('.ui-page').trigger('create');

        });

        // var urlString = window.location.href;
        // var url = new URL(urlString);
        var product_id = '1';
        console.log("id = " + product_id);

        var product_stored_obj = localStorage.getItem('products');
        var products = JSON.parse(product_stored_obj)
        for ( let i =0 ; i < products.length ; i ++) {
            if(products[i]['prod_id'] == product_id ) {               
                comments_array = products[i]['comments'] 
            }
        }
        show_comments()
    },200)
});

function create_comment(name,handle,comment,parent,email){
    console.log(comments_array.length,name,handle,comment,parent,email);
    var comment = string_to_json(comments_array.length,name,handle,comment,parent,email)

    comments_array.push(comment)
    //check the input is reply message (child- array)
    if(parent != null) {
        comments_array[parent].childrenIds.push(comments_array.length-1);
    }
    store_comments()
    show_comments()

}

//create comment object
function string_to_json(id,name,handle,comment,parent,email){
    var commentObj = {}
    // var today = new Date();
    commentObj['id'] = id
    commentObj['name'] = name
    commentObj['email'] = email
    commentObj['handle'] = handle
    commentObj['comment'] = comment
    commentObj['parentId'] = parent
    // commentObj['lastUpdated'] = String(new Date()).split("T")[0]
    commentObj['lastUpdated'] = new Date().toLocaleString();;
    commentObj['childrenIds'] = []

    var json = (commentObj);

    return json
}

function store_comments() {

    var temp = new Array()
    for (var i = 0; i < comments_array.length; i++) {
        temp.push(comments_array[i])
    }

    // var urlString = window.location.href;
    // var url = new URL(urlString);

    var product_id = "1";
    console.log("id = " + product_id);

    var product_stored_obj = localStorage.getItem('products');
    var products = JSON.parse(product_stored_obj)
    console.log('products',products)
    //check the prod_id
    for ( let i =0 ; i < products.length ; i ++) {
        // console.log('--',products[i]['prod_id'],product_id)

        if(products[i]['prod_id'] == product_id ) {

            // console.log('found ... ')
            console.log(products[i]['comments'])
            products[i]['comments'] = temp
            console.log(products[i]['comments'])
            // console.log('found end  ... ')
        }
    }

    console.log(products)
    localStorage.setItem('products', JSON.stringify(products));

}


function show_comments(comment){
    // console.log(comments_array)
    var parentComments = []
    for (var i = 0; i < comments_array.length; i++) {
        if(comments_array[i].parentId == null){
            parentComments.push(comments_array[i])
        }
    }
    let commentList = '';
    for (var i = 0; i < parentComments.length; i++) {
        // console.log(i)
        commentList = commentList + show_comment(parentComments[i]);
    }

    //checked this is the product first comment
    document.getElementById("reviewsCount").innerHTML = (parentComments.length !== 0 )? ((parentComments.length == 1 ) ? parentComments.length+" review" : parentComments.length+" reviews") : "Add first review for this product";
    //comment reply 
    document.getElementById("commentsList").innerHTML = commentList;

}

//The fuction used to display comments
function show_comment(comment){
    // console.log(comment)
    if(comment.parentId == null) {
        // console.log('here 1 ')
        //parent comment
        var display_elem =
            `
			<div class="ui-contents" style="border: 1px solid #C4C4C4; background-color:white; border-radius: 5px ;">
				<li id="comment-${comment.id}">
				<div class="ui-grid-a">
					<!-- user data -->
                    <div class="ui-block-a" style="width: 25%">
                    <img class="profile-img" src="../Images/man.png" alt="avatar"
                    style="width: 50px; height: 50px; border-radius: 50%;border: 1.5px solid #E9F5E8;"/>
                    </div>
                    <div class="ui-block-b"
                    style="width: 75%;padding: 0;margin-top: 5px; margin-left: -100px; margin-bottom: 0;margin-right: 0;">
                    <span class="foodsco_title" style="color: black;font-weight: 700">${comment.name}</span><br/>
                    <span class="foodsco_content" style="color: grey !important"> Reviewed a product - ${comment.lastUpdated}</span>
                </div>
            </div>
            <span class="foodsco_title" style="color: black;font-weight: 700" >${comment.handle}</span><br/>
            <span span class="foodsco_content" style="color: black">${comment.comment}</span><br/>
            <span class="btn-like" id="like-${comment.id}">${comment.like == true ?'unlike :':'like :'} </span>
            <span span class="foodsco_content">
                 <a style="color: #5DC466;text-decoration: none" href="#" role="button" id="reply-${comment.id}">Reply </a>
            </span>
            ${comment.like == true ?' : <img class="profile-img" src="../Images/like.png" alt="avatar" />':' : <img class="profile-img" src="../Images/like.png" alt="avatar" />'}
            <b> ${comment.LikeCount == undefined ? 0 : comment.LikeCount} </b>
            

                    `;
    }else {
        // console.log("first reply");
        //first reply 
        var display_elem =
            `
            <div class="ui-contents" style="padding:0">
                 <li id="comment-${comment.id}">
                 <div class="ui-contents" style="border-left: 4px solid #5DC466; background-color: #DCDCDC;margin-right: 5px;">
                    <span class="foodsco_title" style="color: black;font-weight: 700">Reply from ${comment.name}</span><br/>
                    <span class="foodsco_content" style="color: grey">
                    <img src="./icons/reply.png" style="height: 15px; width: 15px;"> ${comment.lastUpdated}
                    </span><br>
                    <span class="foodsco_title" style="color: black;font-weight: 700;display:none">${comment.handle}</span>
                    <span span class="foodsco_content" style="color: black">${comment.comment}</span><br/>
                    </div>
                    <span span class="foodsco_content">
                    <a style="color: #5DC466;text-decoration: none" href="#" role="button" id="reply-${comment.id}">Reply</a>
                    </span>
                    `;

    }

    if(comment.childrenIds.length != 0) {
        //reply comments show update with ul
        display_elem = display_elem + `<ul id="childlist-${comment.id}">`;

        for (var i = 0; i < comment.childrenIds.length; i++) {

             // console.log('5555555555555');
            // console.log(comment.childrenIds.length);
            // console.log('5555555555555');
            display_elem = display_elem + show_comment(comments_array[comment.childrenIds[i]]);
           
            
        }

        display_elem = display_elem + "</ul>"
    }

    display_elem = display_elem+ "</li></div><br/>";
    // console.log(display_elem)
    return display_elem;
}
