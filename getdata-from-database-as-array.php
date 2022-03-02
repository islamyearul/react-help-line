<?php

// include('database_crud.php');
// $crud = new Database;

include('connection.php');

$query ="SELECT * FROM services";

$Data = mysqli_query($conn, $query);
$result = array();
while($items = mysqli_fetch_assoc($Data)){
    $result[] = $items;
}


 echo json_encode($result);

?>