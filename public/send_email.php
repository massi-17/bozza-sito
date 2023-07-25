<?php
// Recupera i dati inviati dal form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Valida i dati (puoi aggiungere ulteriori controlli di validazione)

// Componi l'email
$to = 'massimianisilvia@gmail.com'; // L'indirizzo email di destinazione
$subject = 'New Email'; // Oggetto dell'email
$body = "Name: $name\nEmail: $email\nMessage: $message"; // Corpo dell'email

// Imposta gli header dell'email
$headers = "From: $email" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Invia l'email
$mailSent = mail($to, $subject, $body, $headers);

// Verifica se l'invio dell'email è riuscito
if ($mailSent) {
  // Invio riuscito
  echo json_encode(array('success' => true, 'message' => 'Email sent successfully!'));
} else {
  // Invio fallito
  echo json_encode(array('success' => false, 'message' => 'Failed to send email.'));
}
?>
