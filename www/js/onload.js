/**
----------------------------------------------------------------------------------
* @copyright : AgencyBlur / QL_appshop
* @date : 21/01/2013
* @Description :
* Fichier contenant les fonctions JS qui sont appel�es d�s le chargement du DOM
* Permet de d�terminer directement la taille de l'�cran et d'inclure automatiquement 
* les diff�rents menus de navigation sur la page d'accueil
-----------------------------------------------------------------------------------------------------
**/
// /!\ FICHIER NON FONCTIONNEL => TOUT EST DANS FUNCTION.JS POUR LE MOMENT /!\
$(function(){
	/******************** GESTION DOSSIER CSS ********************/
	//Par d�faut, le dossier est 'css', au moment du load
	//on regarde si la taille de l'�cran est sup�rieur � 640 auquel cas, on met le dossier 'css_640'
	$("link").each(function(){
		if(($(window).width() >= 640)&& ($(this).attr('href').search('css_640')<0)){
			var temp = $(this).attr('href');
			temp = temp.replace('css', 'css_640');
			$(this).attr('href', temp);
		}
	});
	/******************** FIN ********************/
});