<?php
$a1 = $_GET["seq1"];
$a2 = $_GET["seq2"];
$a3 = $_GET["seq3"];

$b1 = $_REQUEST["param1"];
$b2 = $_REQUEST["param2"];
$b3 = $_REQUEST["param3"];

$c1 = $_REQUEST["a1_time"];
$c2 = $_REQUEST["a2_time"];
$c3 = $_REQUEST["a3_time"];

$d1 = $_REQUEST["str1"];
$d2 = $_REQUEST["str2"];
$d3 = $_REQUEST["str3"];

$e1 = $_REQUEST["penlift_1_no"];
$e2 = $_REQUEST["penlift_2_no"];
$e3 = $_REQUEST["penlift_3_no"];

$f1 = $_REQUEST["x_1"];
$f2 = $_REQUEST["x_2"];
$f3 = $_REQUEST["x_3"];
$f1 = explode(",",$f1);
$f2 = explode(",",$f2);
$f3 = explode(",",$f3);

$g1 = $_REQUEST["y_1"];
$g2 = $_REQUEST["y_2"];
$g3 = $_REQUEST["y_3"];
$g1 = explode(",",$g1);
$g2 = explode(",",$g2);
$g3 = explode(",",$g3);

function GeraHash($qtd){ 
$Caracteres = 'ABCDEFGHIJKLMOPQRSTUVXWYZ0123456789'; 
$QuantidadeCaracteres = strlen($Caracteres); 
$QuantidadeCaracteres--; 

$Hash=NULL; 
    for($x=1;$x<=$qtd;$x++){ 
        $Posicao = rand(0,$QuantidadeCaracteres); 
        $Hash .= substr($Caracteres,$Posicao,1); 
    } 

return $Hash; 
} 


$a = GeraHash(30); 
$b = "logfile/";
$c = ".txt";
$d = $b.$a.$c;
$myfile = fopen( $d, "wb") or die("Unable to open file!");

$txt = "Drawing 1 \r\n";
fwrite($myfile, $txt);
$txt = "Sequence = " . $a1 . "\r\n" . "Strategy = " . $d1 . "\r\n" . "Parameter = " . $b1 . "\r\n" . "Time taken to finish = " . $c1 . "\r\n";
fwrite($myfile, $txt);

for($x = 0; $x < $e1; $x++){
	$y = $x + 1;
	$txt = "Penlift " . $y . ", x: " . $f1[$x] . ", y 1: " . $g1[$x] . "\r\n";
	fwrite($myfile, $txt);	
}


$txt = "\r\n\r\nDrawing 2 \r\n";
fwrite($myfile, $txt);
$txt = "Sequence = " . $a2 . "\r\n" . "Strategy = " . $d2 . "\r\n" . "Parameter = " . $b2 . "\r\n" . "Time taken to finish = " . $c2 . "\r\n";
fwrite($myfile, $txt);

for($x = 0; $x < $e2; $x++){
	$y = $x + 1;
	$txt = "Penlift " . $y . ", x: " . $f2[$x] . ", y 1: " . $g2[$x] . "\r\n";
	fwrite($myfile, $txt);	
}

$txt = "\r\n\r\nDrawing 3 \r\n";
fwrite($myfile, $txt);
$txt = "Sequence = " . $a3 . "\r\n" . "Strategy = " . $d3 . "\r\n" . "Parameter = " . $b3 . "\r\n" . "Time taken to finish = " . $c3 . "\r\n";
fwrite($myfile, $txt);

for($x = 0; $x < $e3; $x++){
	$y = $x + 1;
	$txt = "Penlift " . $y . ", x: " . $f3[$x] . ", y 1: " . $g3[$x] . "\r\n";
	fwrite($myfile, $txt);	
}

fclose($myfile);




#CSV

$list = array
(
$d1. "," . $a1 . "," .$a1,
$d2,
$d3
);

$file = fopen("csv/data.csv","a");

foreach ($list as $line)
  {
  fputcsv($file,explode(',',$line));
  }

fclose($file);

?>
