<?php
session_start();
        if (isset($_POST["current_skin"])) {
            $_SESSION['current_skin']=$_POST["current_skin"];
            echo "la sessione ha la skin".$_SESSION['current_skin'];
        }else echo 'errore';
        ?>