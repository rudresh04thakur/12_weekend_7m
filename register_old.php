<?php

    $data = json_decode(file_get_contents('php://input'));
    //name,email,"contact,contact1,contact2",password
    if($data->email!=''){
        $contactStr = "";
        foreach($data->contact as $c){
            $contactStr.=$c->mobile.',';
        }
        $contactStr = substr($contactStr,0, -1); 

        $con = mysqli_connect("localhost","root","","12_00_7M");
        $str = "insert into users (name,contact,email,password)values('$data->name',
        '$contactStr','$data->email','$data->password')";
        $result = mysqli_query($con,$str) or die(json_encode(['msg'=>'error']));
        echo json_encode(['msg'=>'success']);
    }else{
        echo json_encode(['msg'=>'error']);
    }
 ?> 