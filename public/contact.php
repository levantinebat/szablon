<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;
ini_set('display_errors', 'on');
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.zenbox.pl';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'formularz@loggermts.pl';                 // SMTP username
$mail->Password = 'Pb5wZWgi';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->CharSet = 'UTF-8';
$mail->setFrom('formularz@loggermts.pl', 'FORMULARZ ZE STRONY');
$mail->addAddress('biuro@loggermts.pl');
$mail->AddBCC('dk@dkcomm.dk');


// vars

$selected_option = $_POST['select-option'];
$sender_name    = $_POST["name"]; //sender name
$reply_to_email = $_POST["mail"]; //sender email used in "reply-to" header
$subject        = "Zapytanie od " . filter_var($_POST["name"], FILTER_SANITIZE_STRING); //get subject from HTML form
$phone        = filter_var($_POST["telefon"], FILTER_SANITIZE_STRING); //get subject from HTML form
$wiadomosc = "Otrzymałeś wiadomość od $sender_name,\nnumer kontaktowy: $phone\nponiżej treść wiadomości:\n\n\n";
$msg        =$wiadomosc . filter_var($_POST["Text1"], FILTER_SANITIZE_STRING); //message
$mail->AddReplyTo($reply_to_email, $sender_name);
$mail->Subject  = $subject;
$mail->Body     = $msg;

if ($selected_option === 'aplikacja' && isset($_FILES['cv_file'])) {
    $subject        = "Aplikacja o pracę od " . filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $mail->Subject  = $subject;
    $mail->AddAttachment($_FILES['cv_file']['tmp_name'],
                         $_FILES['cv_file']['name']);
			if (isset($_FILES['letter_file'])) {
						$mail->AddAttachment($_FILES['letter_file']['tmp_name'],
				                         $_FILES['letter_file']['name']);
                                 if(!$mail->send()) {
                                     echo 'Message could not be sent.';
                                     echo 'Mailer Error: ' . $mail->ErrorInfo;
                                 } else {
                                     echo 'Message has been sent';
                                 }

					}
			else{
        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Message has been sent';
        }

			}

	 }
	 else {
     if(!$mail->send()) {
         echo 'Message could not be sent.';
         echo 'Mailer Error: ' . $mail->ErrorInfo;
     } else {
         echo 'Message has been sent';
     }

	 }
