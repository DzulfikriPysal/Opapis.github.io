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
				<p>Text File Data</p>
					<form method='post' action='download-zip.php'>
						<input type='submit' name='create' value='Download Zip File' />
					</form>
			</div>
			<div class="card-tabs">
				
			</div>
			<div class="card-content grey lighten-4">
				<div id="test4">
					<table class="centered" id="table1">
						<tr>
							<td>
							File name
							</td>
							<td>
							Date Created
							</td>
							<td>
							File
							</td>
							<td>
							File
							</td>
						</tr>
						<?php
						$a = glob("logfile/"."*.txt",GLOB_BRACE);
						array_multisort(array_map( 'filemtime', $a ),SORT_NUMERIC,SORT_DESC,$a);
						
							foreach ($a as $filename){
								$phpexplode = $filename;
								echo "<tr>";
									echo "<td>";
									echo $phpexplode;
									echo "</td>";
									echo "<td>";
									echo date ("F d Y H:i:s.", filemtime($filename));
									echo "</td>";
									echo "<td>";
									echo'<a href="'.$filename.'" download><input type="button" value="Download"></a><br/>';
									echo "</td>";
									echo "<td>";
									echo'<a href="'.$filename.'"><input type="button" value="View"></a><br/>';
									echo "</td>";
								echo "</tr>";
							}
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
