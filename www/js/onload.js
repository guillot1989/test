/**
----------------------------------------------------------------------------------
* @copyright : AgencyBlur / QL_appshop
* @date : 21/01/2013
* @Description :
* Fichier contenant les fonctions JS qui sont appelées dès le chargement du DOM
* Permet de déterminer directement la taille de l'écran et d'inclure automatiquement 
* les différents menus de navigation sur la page d'accueil
-----------------------------------------------------------------------------------------------------
**/
// /!\ FICHIER NON FONCTIONNEL => TOUT EST DANS FUNCTION.JS POUR LE MOMENT /!\
$(function(){
	/******************** GESTION DOSSIER CSS ********************/
	//Par défaut, le dossier est 'css', au moment du load
	//on regarde si la taille de l'écran est supérieur à 640 auquel cas, on met le dossier 'css_640'
	$("link").each(function(){
		if(($(window).width() >= 640)&& ($(this).attr('href').search('css_640')<0)){
			var temp = $(this).attr('href');
			temp = temp.replace('css', 'css_640');
			$(this).attr('href', temp);
		}
	});
	/******************** FIN ********************/
});