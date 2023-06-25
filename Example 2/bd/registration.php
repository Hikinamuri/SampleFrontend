<?php

header('Content-Type: text/html; charset=utf-8');
// Подключаемся к базе данных
$servername = "127.0.0.1:3306";
$database = "wiselance";
$username = "root";
$password = "";
$table = "registration";

// Устанавливаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

// Обработка формы
if (isset($_POST['submit'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];
	$confirm_password = $_POST['confirm_password'];
	$email = $_POST['email'];
	
	// Проверяем, что поля заполнены
	if (empty($username) || empty($password) || empty($confirm_password) || empty($email)) {
		echo "Заполните все поля";
		exit();
	}
	
	// Проверяем, что пароль и подтверждение пароля совпадают
	if ($password !== $confirm_password) {
		echo "Пароли не совпадают";
		exit();
	}
	
	// Проверяем, что пользователь с таким именем не существует
	$stmt = mysqli_prepare($conn, "INSERT INTO $table (username, password, email) VALUES (?, ?, ?)");
	mysqli_stmt_bind_param($stmt, "sss", $username, $password, $email);
	if (mysqli_stmt_execute($stmt)) {
		echo "Вы успешно зарегистрировались";
	} else {
		echo "Ошибка: " . mysqli_error($conn);
	}
	mysqli_stmt_close($stmt);

	
	if (mysqli_num_rows($result) > 0) {
		echo "Пользователь с таким именем уже существует";
		exit();
	}
	
	// Добавляем нового пользователя в базу данных
	$sql = "INSERT INTO $table (username, password, email) VALUES ('$username', '$password', '$email')";
	
	if (mysqli_query($conn, $sql)) {
		echo "Вы успешно зарегистрировались";
	} else {
		echo "Ошибка: " . mysqli_error($conn);
	}
}
mysqli_close($conn);
?>
