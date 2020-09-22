<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>parking - login</title>

    <!-- CSS -->
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <!-- JavaScript -->
    <script src="js/script.js"></script>
</head>
<body id="bodyLogin">
    <div class="container" id="divLogin">
        <div>Login</div>
        <form action="" method="post">
            <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" value="" placeholder="Email" required="true">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" required="true">
            </div>
            <input type="submit" name="submit" class="btn btn-success" value="Ingresar">
        </form>
        <div class="text-center">
            <a href="#">Olvide mi contraseña</a>
        </div>
    </div>
</body>
</html>


<?php

    require_once('connection.php');

    if(isset($_POST['submit'])){

        $email = (isset($_POST['email'])) ? $_POST['email'] : '';
        $pass = (isset($_POST['password'])) ? $_POST['password'] : '';

        if($email != '' && $pass != ''){
            $connection = new connection();
            $conn = $connection->connection();

            $sql = "SELECT * FROM users WHERE email = '".$email."' AND password = '".$pass."'";
            var_dump($sql);die;
            /*$result = $conn->query($sql);

            if ($result->num_rows > 0) {
                var_dump(result);die;
            }*/
        }
    }

?>