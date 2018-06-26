<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <title>Welcome To Joins The Dots</title>

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/styles.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
</head>
<body class="grey lighten-3">
	<nav class="deep-purple" role="navigation">
		<div class="nav-wrapper container">
			<a id="logo-container" href="#" class="brand-logo">Welcome To Joins The Dots</a>
			<ul class="right hide-on-med-and-down">
				<li><a href="dots.html">Home</a></li>
				<li><a href="textfile.php">Text File</a></li>
				<li><a href="csv.php">Csv</a></li>
				<li><a href="#">Statistic</a></li>
			</ul>

			
		</div>
	</nav>
	<div class="container">
		<div class="section">
		<div class="card">
			<div class="card-content">
				<p>Drawing Information</p>
			</div>
			<div class="card-tabs">
				<ul class="tabs tabs-fixed-width">
					<li class="tab"><a class="active" href="#test4">Drawing 1</a></li>
					<li class="tab"><a href="#test5">Drawing 2 </a></li>
					<li class="tab"><a href="#test6">Drawing 3</a></li>
				</ul>
			</div>
			<div class="card-content grey lighten-4">
				<div id="test4">
					<table class="centered" id="table1">
					
					</table>
				</div>
				<div id="test5">
					<table class="centered" id="table2">
						
					</table>
				</div>
				<div id="test6">
					<table class="centered" id="table3">
						<?php
							echo "<html><body><table>\n\n";
							$f = fopen("csv/data.csv", "r");
							while (($line = fgetcsv($f)) !== false) {
									echo "<tr>";
									foreach ($line as $cell) {
											echo "<td>" . htmlspecialchars($cell) . "</td>";
									}
									echo "</tr>\n";
							}
							fclose($f);
							echo "\n</table></body></html>";

							?>
					</table>
				</div>
			</div>
		</div>
		
		</div>
		</div>
		
		
		
  


  

  <footer class="page-footer orange">
    <div class="container">
      <div class="row">
        <div class="col l8 s22">
          <h5 class="white-text">Welcome To Joins The Dots</h5>
          <p class="grey-text text-lighten-4">Talk about this syatem, the objective and more...</p>


        </div>
        
        <div class="col l3 s12">
          <h5 class="white-text">Navigation</h5>
          <ul>
            <li><a class="white-text" href="dots.html">Home</a></li>
            <li><a class="white-text" href="textfile.php">Text File</a></li>
			<li><a class="white-text" href="csv,php">Csv</a></li>
            <li><a class="white-text" href="#!">Statistic</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3" href="">UTP</a>
      </div>
    </div>
  </footer>




  </body>
</html>
