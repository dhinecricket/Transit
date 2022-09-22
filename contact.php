<?php

#ini_set('display_errors', 1);
#ini_set('display_startup_errors', 1);
#error_reporting(E_ALL);
         #$to = "valli.training@gmail.com";
	 $to = "vhelp.td@transitiondoor.com";
	 #$to = "coach.td@transitiondoor.com";
	 #$to = "guhan.ragu@gmail.com";

 if($_POST['type'] == 'contact'){
	 $subject = "Contact Us - Transition Door";

	 $message = "<table style='font-family: arial, sans-serif; border-collapse: collapse; width: 100%;'>";
	 $message .= "<tr > <th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Name  </th>";

	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['name']." </td> </tr>";
	 $message .= "<tr><th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Email  </th>";
	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['email']." </td> </tr>";
	 $message .= "<tr> <th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Subject  </th>";
	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['subject']." </td></tr>";
	 $message .= "<tr > <th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Message  </th>";
	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['message']."<td></tr>  ";
	 $message .= "</table>  ";

 }else if($_POST['type'] == 'vhelp'){
	 $subject = "VHELP-Transition Door";

	 $message = "<table style='font-family: arial, sans-serif; border-collapse: collapse; width: 100%;'>";
	 $message .= "<tr> 
		 	<th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Name  </th>";

	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['name']." </td> 
		      </tr>";
	 $message .= "<tr> <th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Phone Number </th>";

	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['pn']." </td> </tr>";
	 $message .= "<tr> <th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Company </th>";

	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['cname']." </td> </tr>";
	 $message .= "<tr><th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Email  </th>";
	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['email']." </td> </tr>";
	 $message .= "<tr> <th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Service Area  </th>";
	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['service_area']." </td></tr>";
	 
	 $message .= "<tr> <th style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>Message  </th>";
	 $message .= "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;'>".$_POST['message']." </td></tr>";

	 $message .= "</table>  ";

	 //echo $message;
 }

/*	    $headers = array('Content-Type: text/plain; charset="UTF-8";',
	        'From: ' . $from,
        	'Reply-To: ' . $from,
	        'Return-Path: ' . $from,
	    );

	 mail($sendTo, $subject, $emailText, implode("\n", $headers));*/
 
	 $header = "From:coach.td@transitiondoor.com\r\n";
	 $header .= "Reply-To: Transition Door <coach.td@transitiondoor.com>\r\n";
	 $header .= "Return-Path: Transition Door <coach.td@transitiondoor.com>\r\n";
	 $header .= "MIME-Version: 1.0\r\n";
	 $header .= 'Content-type: text/html; charset=iso-UTF-8' . "\r\n";
	 #$header .= 'Content-type: text/plain; charset=iso-UTF-8' . "\r\n";

         
	 $retval = mail($to,$subject,$message,$header);
	 #$retval = mail($to,'test','message',$header,'coach.td@transitiondoor.com');


	 //var_dump($retval);
         if( $retval == true ) {
            echo "1";
         }else {
            echo "0";
         }
      ?>
