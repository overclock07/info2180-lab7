<?php
  mysql_connect("0.0.0.0","Overclock07");
  mysql_select_db("world");
  $LOOKUP = $_GET['lookup'];
  $all = $_GET['all'];
  
  if(isset($all)){
    $val = print_r($all);
    $results = mysql_query("SELECT * FROM countries;");
  }
  
  elseif(isset($LOOKUP)){
    $val = print_r($LOOKUP);
    $results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
  }
  print '<p>'.$results.'</p>';
  
  # loop through each country
  while ($row = mysql_fetch_array($results)){ 
  ?>
  <?php
    if($row["name"] == $val){
      echo "<p>".$row["name"]." ruled by ".$row["head_of_state"]."</p>";
    }
    
    else{
      http_response_code(404);
      break; 
    }
  ?>
  <?php
  }
?>
