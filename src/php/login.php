<?php
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
//连接数据库$
$conn = mysqli_connecyt('localhost','root','root','user');
//书写sql语句
$sql = "SELECT * FROM `table` WHERE `username`='$username' AND `password`='$password'";
//执行数据库
$result = mysqli_query($conn,$sql);
//解析结果
$data = mysqli_fetch_assoc($result);
if($data){
    $arr = array('code'=>1,'data'=>array('username'=>'$username'));
}else{
    $arr = array('code'=>0,'msg'=>array('用户名或者密码错误'));
}
//断开数据库
echo json_encode($arr);
?>