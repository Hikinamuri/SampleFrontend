<?php

header('Content-Type: text/html; charset=utf-8');

$servername = "127.0.0.1:3306";
$database = "wiselance";
$username = "root";
$password = "";
$table = "login";

// Устанавливаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);
// Проверяем соединение
if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}
echo "Подключение успешно";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM login WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        $_SESSION['username'] = $username;
        header('Location: dashboard.php');
    } else {
        $error = "Имя пользователя или пароль неверны.";
    }
}

mysqli_close($conn); 
?>