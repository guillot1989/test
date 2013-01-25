/**
----------------------------------------------------------------------------------
* @copyright : AgencyBlur / QL_appshop
* @date : 23/01/2013
* @Description :
* Fichier contenant les fonctions JS utilisées sur les paramètres des collections
-----------------------------------------------------------------------------------------------------
**/
$(function(){
	$('#nom_collection').click(function(){
		$('#nom_collection').replaceWith('<li class="param" id="nom_collection"><input class="text_infos" type="text"/><input class="valide_infos" type="submit" value=""/></li>');
	});
	
	//Gestion de la description
	$('#text_description').hide();
	$('#valid_description').hide();
	$('#description').click(function(){
		$('#valid_description').show();
		$('#text_description').show();
	});
	
	//Gestion du formulaire
	$('#').click(function(){
		
	});
});