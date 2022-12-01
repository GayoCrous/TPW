<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="apoyo.css">
    <title>Document</title>
</head>
<?php 
    include_once ("conexion.php");
    $conn=Cconexion::ConexionBD();
    ?>
<body>
    <div class="container">
        <h2>¿Tienes Alguna duda?</h2>
        <h3>Llena este formulario</h3>
        <form action="" method="POST">
            <input style="text-transform: capitalize" type="text" class="controls"  name="Nombre"  placeholder="Nombre completo" id="Nombre" autocomplete="off" required>
            <input style="text-transform: capitalize" type="text" class="controls" name="Codigo"  placeholder="Codigo UTP" id="Codigo" autocomplete="off" maxlength="9" required>
            <input type="email" class="controls"  name="Email" placeholder="Ingresar Correo" id="Email" autocomplete="off" required>
            <input type="number" class="controls"  name="Numero"  placeholder="Numero de celular" id="Numero" autocomplete="off">
            <select name="Asunto" class="controls1">
                <option>Reclamo</option>
                <option>Soporte</option>
                <option>Sugerencia</option>
            </select>
            <textarea name="Mensaje" class="controls3" placeholder="Mensaje" required></textarea>
            <button class="button" type="submit">Enviar</button>
        </form>
    <?php
	if(!empty($_POST)){
        $nombre=$_POST['Nombre'];
        $codigo=$_POST['Codigo'];
        $email=$_POST['Email'];
        $numero=$_POST['Numero'];
        $asunto=$_POST['Asunto'];
        $mensaje=$_POST['Mensaje'];
        $sql = "INSERT INTO formula (nombre, codigo, email, numero, asunto, mensaje) VALUES ('$nombre', '$codigo', '$email', '$numero', '$asunto', '$mensaje')";
        if (mysqli_query($conn, $sql)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        mysqli_close($conn);
}
    ?>
    </div>
    
</body>
</html>