<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        
        <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
        <link rel="Stylesheet" href="../CSS/main-style.css"> <!--Link to connect the css file-->
        <link rel="Stylesheet" href="../CSS/poi.css">
        <script  type="text/javascript" src="../JS/POI.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    </head>
<body>
    <div data-role="page" id="pageone">
        <div data-role="header">
            <nav class="navbar navbar-fixed-top navbar-default" id="site-header">
                <div class="container">
                    <div class="flex-parent">
                        <div class="navbar-header">

                            <a class="navbar-brand header-logo" href="#">
                                <img src="../Images/LOGO.png" class="main-logo" alt="img">
                            </a>
                            <a class=" navbar-brand ham-icon" href="#">
                                <img src="../Images/menu.png" class="ham-icon" alt="img">
                            </a>
                        </div>

                        <div class="collapse navbar-collapse" id="main-navbar">

                        </div>

                    </div>
                </div>
            </nav><!-- /#site-header -->
        </div>
        <div data-role="main" class="ui-content">
            
            <div class="ProductDetails"><!--Product Details-->
                
                <div class="back-button1">
                    <a class="backButton" href="#">
                            <img src="../Images/back-button.png" class="back-button" alt="img">
                    </a>
                </div>
                <div>
                    <img src="../Images/lemon.png" class="lemon" alt="img">
                </div>
                <div class="ProductName">
                    <h1 style="font-size:100px">Lemon</h1>
                    <div class="StarDisplay"><!--Average Rating Display-->
                    
                        
                        
                                    <div class="col-sm-4 text-center">
                                        
                                        <div class="StarContainer">
                                            <h1 class="text-warning mt-4 mb-4">
                                                <b><span id="average_rating">0.0</span> / 5</b>
                                            </h1>
                                            <div class="mb-3">
                                                <i class="fas fa-star star-light mr-1 main_star"></i>
                                                <i class="fas fa-star star-light mr-1 main_star"></i>
                                                <i class="fas fa-star star-light mr-1 main_star"></i>
                                                <i class="fas fa-star star-light mr-1 main_star"></i>
                                                <i class="fas fa-star star-light mr-1 main_star"></i>
                                            </div>
                                            <h3><span id="total_review">0</span> Reviews</h3>
                                        </div>
                                    </div>
                                              
                                    
                            
                    
                </div>
                </div>
                
                
               
                <div class="ProductType">
                    <h2>Fruit</h2>
                </div>
                <div class="ProductTypeDes">
                    <h1>Description</h1>
                </div>
                <div class="ProductDescription">
                    <h3>The lemon (Citrus limon) is a species of small evergreen tree in the flowering plant family Rutaceae, native to Asia, primarily Northeast India (Assam), Northern Myanmar or
                        China</h3>
                </div>

                <div class=PriceContainer>
                    <div class="price"> 
                        <h2>Price</h2>
                        <h1>LKR 180.00</h1>
                        <div class="get-started-btn">
                            <button class="purchase">Add To Cart</button>
                        </div>
                    </div>
                    
                    
                </div>
                <div class="Rating">
                    <div class="Rating-topic">
                        <h3>Ratings & Reviews</h3>
                        <div class="get-started-btn">
    					    <button type="button" name="add_review" id="add_review" class="rate"> Tap to Rate</button>
                        </div>
                       
                    </div>
    			    <div class="mt-5" id="review_content"></div>
    


                    <div id="review_modal" class="modal" tabindex="-1" role="dialog"><!--pop up for rating-->
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Submit Review</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <h4 class="text-center mt-2 mb-4">
                                        <i class="fas fa-star star-light submit_star mr-1" id="submit_star_1" data-rating="1"></i>
                                        <i class="fas fa-star star-light submit_star mr-1" id="submit_star_2" data-rating="2"></i>
                                        <i class="fas fa-star star-light submit_star mr-1" id="submit_star_3" data-rating="3"></i>
                                        <i class="fas fa-star star-light submit_star mr-1" id="submit_star_4" data-rating="4"></i>
                                        <i class="fas fa-star star-light submit_star mr-1" id="submit_star_5" data-rating="5"></i>
                                    </h4>
                                    <div class="form-group">
                                        <input type="text" name="user_name" id="user_name" class="form-control" placeholder="Enter Your Name" />
                                    </div>
                                    
                                    <div class="form-group text-center mt-4">
                                        <button type="button" class="btn btn-primary" id="save_review">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            
            </div>
        </div>
        <footer>
            <div data-role="footer">
                    <div id="footer-bottom">
                        <div class="container">
                            <div class="footer-b-wrap">
                                <div class="ftb-left-col">
                                    <div class="ftbl-logo">
                                        <a href="/">
                                            <img src="../Images/logo-2.png" alt="img">
                                        </a>
                                    </div>
                                    <div class="ftbl-des">
                                        <p>KEEPING IT SIMPLE, Foodsco objective is to “Keep It Simple” by providing quality and fresh products.</p>
                                    </div>
                                </div>
                                <div class="ftb-right-col">
                                    <div class="ftbr-main-menu">
                                        <div class="ftbr-heading">Important Links</div>
                                        <ul id="menu-important-links-menu" class="foot-link-nav">
                                            <li id="menu-item-318" class="menu-item">
                                                <a title="My account" href="/">My Account</a>
                                            </li>
                                            <li id="menu-item-317" class="menu-item ">
                                                <a title="Contact Us" href="/">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="ftbr-main-menu">
                                        <div class="ftbr-heading">Categories</div>
                                        <ul id="menu-account-menu" class="foot-link-nav">
                                            <li id="menu-item-76" class="menu-item">
                                                <a title="Vegitables" href="/">Vegitables</a>
                                            </li>
                                            <li id="menu-item-77" class="menu-item">
                                                <a title="Fruits" href="/">Fruits</a>
                                            </li>
                                            <li id="menu-item-78" class="menu-item">
                                                <a title="Meats" href="/">Meats</a>
                                            </li>
                                            <li id="menu-item-79" class="menu-item">
                                                <a title="Beverages" href="/">Beverages</a>
                                            </li>
                                            <li id="menu-item-80" class="menu-item">
                                                <a title="Grocery" href="/">Grocery</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="ftbr-contact">
                                        <div class="ftbr-heading">Get in Touch</div>
                                        <div class="contact-group">
                                            <h4 class="cg-heading">
                                                <span class="cg-h-icon">
                                                    <i class="bi bi-telephone-fill"></i>
                                                </span>
                                            </h4>
                                            <p class="cg-text">
                                                <a href="tel:+94 71 08903455">+94 71 08903455</a>
                                            </p>
                                        </div>
                                        <div class="contact-group">
                                            <h4 class="cg-heading">
                                                <span class="cg-h-icon">
                                                    <i class="bi bi-envelope-fill"></i>
                                                </span>
                                            </h4>
                                            <p class="cg-text">
                                                <a href="mailto:medvouniforms@gmail.com">foodsco@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ft-bottom">
                            <div class="container">
                                <div class="ft-bottom-row">
                                    <div class="ft-copyright">
                                        <p class="copyright-note">Foodsco © 2021</p>
                                    </div>
                                    <div class="company-text">
                                    Project by foodsco</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </footer>
            </div>    
    </div>
</body>
</html>