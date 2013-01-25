/**
----------------------------------------------------------------------------------
* @copyright : AgencyBlur / QL_appshop
* @date : 23/01/2013
* @Description :
* Fichier contenant les fonctions JS utilisées sur les paramètres des collections
-----------------------------------------------------------------------------------------------------
**/
$(document).ready(function(){
	// Initialisation de la page
	// On cache le sous-menu de 'collaborative'
	// On affichera par défaut que la collection n'est PAS collaborative
	$('#slide_collaborative_menu').hide();
	$('#collaborative_menu_yes').hide();
	$('#collaborative_menu_no').show();

	// Change le texte nom de collection en un input pour que l'utilisateur puisse entrer un nom de collection
	$('#collection_name').click(function(){
		$('#collection_name').replaceWith('<li class="param" id="nom_collection"><input class="text_infos" type="text"/><input class="valid_infos" type="submit" value=""/></li>');
		$('.text_infos').focus();
	});
	
	//La description sera geré de la même façon que le nom de collection
	//$('#description').click(function(){
	//	$('#description').replaceWith('<li id="description" class="param"><input type="text" class="area_infos" /><input class="valid_infos" type="submit" value=""/></li>');
	//});
	
	// DEBUT PROBLEME -- jQuery
	// Menu collaborative, affichage lors de l'appui sur le titre
	$('#collaborative').toggle(function(){
		$('#slide_collaborative_menu').slideDown('fast');
		$('#collaborative').css('background','url(./images/picto_puce_open.jpg) no-repeat left #3C3C3C');
	},function(){
		$('#slide_collaborative_menu').slideUp('fast');
		$('#collaborative').css('background','url(./images/picto_puce_close.jpg) no-repeat left #3C3C3C');
	});

	// Changement du sous-menu collaborative en fonction du switch "On"/"Off"
	$('#flip_1').toggle(function(){
		$('#flip_1').css('background','url(./images/bouton_on.png) #3C3C3C no-repeat center');
		$('#collaborative_menu_yes').show();
		$('#collaborative_menu_no').hide();
		},function(){	
		$('#flip_1').css('background','url(./images/bouton_off.png) #3C3C3C no-repeat center');
		$('#collaborative_menu_yes').hide();
		$('#collaborative_menu_no').show();
	}); 
	// FIN PROBLEME
	
	/*Gestion du formulaire
	$('#').click(function(){

	}); */
});
