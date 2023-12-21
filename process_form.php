<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "alek@outerpreneur.com";
    $subject = "New Form Submission";
    $headers = "From: $email";
    
    mail($to, $subject, $message, $headers);
    
    // Optionally, you can redirect the user to a thank you page
    header("Location: thank_you.html");
    exit();
}
?>
