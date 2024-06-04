<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = 2;
            $mail->isSMTP();
            $mail->Host       = 'smtp-mail.outlook.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = $_ENV['SMTP_USERNAME'];
            $mail->Password   = $_ENV['SMTP_PASSWORD'];
            $mail->SMTPSecure = 'starttls';
            $mail->Port       = 587;

            //Recipients
            $mail->setFrom('gelthemu@outlook.com', 'Mailer');
            $mail->addAddress('gelthemu@gmail.com', 'Gel Muc');

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'New Email Sent In, Check it out!';
            $mail->Body    = 'Howdy. A new email has been submitted through your portfolio: ' . $email;

            $mail->send();
            echo 'Notification email sent successfully.';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Invalid email address.";
    }
}
