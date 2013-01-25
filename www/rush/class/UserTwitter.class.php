<?php

class User
{
	var	$Id_users;
	var	$name;
	var	$firstName;
	var	$mail;
	var	$pseudo;
	var	$is_activ;	
	var	$url_avatar;
	var	$description;
	var	$fli_actualite;

	function User(){
	
		$Id_users =(int)0;
		$name = (String)"";
		$firstName = (String)"";
		$mail = (String)"";
		$pseudo = (String)"";
		$is_activ = (Boolean)0;	
		$url_avatar = (String)"";
		$description;
		$fli_actualite;
		
	}
	
	function inscription ($mail ,$pseudo, $password, $password_confirm, $nom=null, $prenom=null)
	{
	
		//ouverture popup
		echo '<script>
				window.open("popup.php","pop_up","width=300, height=200, toolbar=no status=no" );
			</script>';
		/*
		If(Ok) {
			Envoi_mail_confirmation ()	
			return (message confirmation’)
		}
		else
		{
			Return (’message d’erreur lors de l’inscription’)
		}
		*/
	}
	
}

?>

