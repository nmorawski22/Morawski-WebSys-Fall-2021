<?php 
  session_start();
  $dbhost= "localhost";
$dbusername= "root";
$dbpassword = "";
$dbname = "insecure_login";

$conn = mysqli_connect($dbhost, $dbusername, $dbpassword, $dbname);
if (!$conn) {
    echo "Connection failed!";
}
  
?>

<!DOCTYPE html>
<html>
<head>
  <title>Item Prices and Discounts</title>
</head>

<body>
  <h1>Select your desired button below:</h1>
  <button>Option 1</button>>
  <button>Option 2</button>>
  <button>Option 3</button>>
</body>
</html>