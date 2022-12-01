<?php

class Cconexion{
    static function ConexionBD(){
        $host='localhost';
        $dbname='formulario';
        $usuario='root';
        $contrasena='';

            $conn=mysqli_connect($host, $usuario, $contrasena, $dbname);
        if (!$conn){
	echo "no se pudo conectar";
}else{    
	echo"Se conecto correctamente";
}
        return $conn;
    }


}