<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Protein Press - The true source of information for bodybuilders</title>

  <!--////////CSS REFERENCE///////-->
  <link rel="stylesheet" href="css/style.css">
</head>

  <!--////////WEBSITE START///////-->
  	
<body class="background">

	<!--////////SOCIAL///////-->

	<div id="social">
      <a class="twit" href="#" title="Twitter">Twitter</a>
      <a class="fbook" href="#" title="Facebook">Facebook</a>
      <a class="gplus" href="#" title="Google Plus">Google Plus</a>
    </div>

  <!--////////HEADER///////-->

	<header>
  <div class="wrapper">
    <div id="logo">
      <a href="index.html"><img src="images/protein_logo.png" alt="Protein Press Logo"></a>
      <a href="index.html"><h1>PROTEIN-PRESS</h1></a>
    </div>
  </div><!--wrapper-->

	<div class="wrapper">	
		<div id="navbar">
			<nav>
				<a class="border-right" href="index.html">HOME</a>
				<a class="border-right" href="html/diet.html">DIET</a>
				<a class="border-right" href="html/supplements.html">SUPPLEMENTATION</a>
				<a href="contact.php">CONTACT</a>
			</nav>
		</div><!--#navbar-->
	</div><!--wrapper-->

	</header>

	<!--////////MAIN START///////-->

	<div class="wrapper divider row">

		<main id="contact-form" class="row">

			<div class="first col-12 shadow">

      <?php if($_GET['s'] == 'success') {  ?>
      <p>Thank you. Your message has been sent successfully!</p>
      <?php } else if ($_GET['s'] == 'error') { ?>
      <p>Error. Your message was not sent! Make sure you type in the proper verification numbers. <a href="contact.php">
        Click here to try again.</a>If issues persist please send an email to the site admin (thiagonucci@gmail.com).</p>

      <?php } else{ ?>

				<h1>Send us your recipe!</h1>

				<form action="mailer.php" method="post">
					
					<label for="fullname">Name</label>
					<span id="fullname-error" class="error">Sorry, your name must be at least 3 letters.</span> <!-- error span trigger by JS -->
					<input type="text" id="fullname" name="fullname" placeholder="your name">

					<label for="email">Email</label>
					<span id="email-error" class="error">Sorry, must be a valid email.</span>
        	<input type="text" id="email" name="email" placeholder="your email">

        	<label for="title">Write the recipe title here</label>
        	<span id="title-error" class="error">Sorry, cannot be empty.</span>
         	<textarea id="title" name="title" rows="1"></textarea>
        
        	<label for="message">Write your recipe here</label>
        	<span id="message-error" class="error">Sorry, cannot be empty.</span>
        	<textarea id="message" name="message" rows="16"></textarea>

          <input type="text" name="verify" class="verify-box" placeholder="verify you are human">
          <img class="verify-img" src="verificationimage.php?<?php echo rand(0, 9999) ?>" alt="verification image">

        	<input id="contact-btn" type="submit" value="send">

				</form>

        <?php } ?>
        
			</div>

		</main>

		<section id="map" class="first col-12 shadow">
	    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.760881033193!2d-73.99517294629514!3d40.69863072747073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc889234bc07c42ee!2sBrooklyn+Heights!5e0!3m2!1sen!2sus!4v1393612605402"></iframe>
    </section>
	

    <h1 id="motivation">-MOTIVATION-HEART-STRENGTH-DETERMINATION-</h1>

	</div> <!-- wrapper-->

	<!--////////MAIN END///////-->

<footer>
	<p>&copy; 2015 Protein Press. All rights reserved.</p>
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="js/main.js"></script>
<script src="js/contact.js"></script>
	

</body>
</html>