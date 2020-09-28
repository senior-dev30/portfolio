<?php
exit('asdasdasd');
// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("yamamoto.ichiro92@gmail.com","My subject",'asdasdasd');
?>