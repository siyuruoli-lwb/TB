<?php

$username = $_POST['username'];
$password = $_POST['password'];
//连接数据库
$conn = mysqli_connect('localhost','root','root','user');
//书写sql语句
$sql = "SELECT * FROM `table` WHERE `username`='$username'";
//执行sql语句
$result = mysqli_query($conn,$sql);
//解析结果
$data = mysqli_fetch_assoc($result);

if($data){
    $arr = array('code'=>0,'msg'=>'用户名已被注册')
}else{
    $sql = "INSERT INTO `table` (`username`,`password`) VALUES ('$username','$password')";
    $result = mysqli_query($conn,$sql);
    //不需要解析，因为值是布尔值
    if($result){
        $arr = array('code'=>1,'data'=>array('username'=>$username));
    }else{
        $arr = array('code'=>0,'msg'=>'后端出错了')；
    }
}


echo json_encode($arr);

?>