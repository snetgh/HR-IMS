<?php

$conn = mysqli_connect("localhost","admin","presby2018","family_hospital");

if(isset($_POST["item_details"])){

    $selected_id = $_POST["item_id"];

    $get_details = mysqli_query($conn,"SELECT * FROM `leave_forms` WHERE `staff_category_id` = '$selected_id' ");
    $get_details_array = mysqli_fetch_array($get_details);

    $response["id"] = $get_details_array["staff_category_id"];
    $response["name"] = $get_details_array["category_name"];
    $response["days"] = $get_details_array["category_days"];
	$response["salary_level"] = $get_details_array["category_salary"];

    $response["done"] = true;

    echo json_encode($response);

}

if(isset($_POST["truncate_me"])){
	
	$run_query_1 = mysqli_query($conn,"TRUNCATE TABLE `leave_requests`");

	if($run_query_1){
     $response["done"] = true;
    }

    echo json_encode($response);

}




?>
