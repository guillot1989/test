/**
----------------------------------------------------------------------------------
* @copyright : AgencyBlur / QL_appshop
* @date : 21/01/2013
* @Description :
* Fichier contenant les fonctions JS qui sont appelées
-----------------------------------------------------------------------------------------------------
**/
// /!\ CE FICHIER CONTIENT L'ENSEMBLE DU JS POUR LE MOMENT /!\

$(function(){
	/******************** GESTION DOSSIER CSS ON LOAD ********************/
	// /!\ PROCHAINEMENT DANS ONLOAD.JS /!\
	//Par défaut, le dossier est 'css', au moment du load
	//on regarde si la taille de l'écran est supérieur à 640 auquel cas, on met le dossier 'css_640'
	$("link").each(function(){
		if(($(window).width() >= 640)&& ($(this).attr('href').search('css_640')<0)){
			var temp = $(this).attr('href');
			temp = temp.replace('css', 'css_640');
			$(this).attr('href', temp);
		}
	});
	
	/******************** GESTION DOSSIER CSS AU RESIZE ********************/
	// /!\ PROCHAINEMENT DANS EVENT.JS /!\
	//On gère  le dossier dans le cas du redimensionnement du navigateur
	$(window).resize(function(){
		$("link").each(function(){
		    //Cas ou l'écran était inférieur à 640 et devient supérieur à 640
			if(($(window).width() >= 640) && ($(this).attr('href').search('css_640')<0)){
				var temp = $(this).attr('href');
				temp = temp.replace('css', 'css_640');
				$(this).attr('href', temp);
			}
			//Cas ou l'écran était supérieur à 640 et devient inférieur à 640/
			else if(($(window).width() < 640) && ($(this).attr('href').search('css_640')>=0)){
				var temp = $(this).attr('href');
				temp = temp.replace('css_640', 'css');
				$(this).attr('href', temp);
			}
		});
	});
	
	/******************** GESTION BARRE DE RECHERCHE ********************/
	// /!\ A METTRE DANS EVENT.JS /!\
	//Clic sur l'icone de la croix on supprime le texte et on fait disparaitre l'icone #icon_clear
	$('#icon_clear').click(function(){
		$('#search_nav').val('');
		$('#icon_clear').hide('fast');
	});
	//Faire apparaitre le bouton de suppression du texte et la zone des reponses
	$("#search_nav").click(function(){
		$('#icon_clear').show('fast');
		$('#dynamic_search_result_container').show('fast');
		$('#design_search_haut').css({width : "305px"});
		$('#design_search_bas').css({width : "305px"});
		$('#menu_left').css({display : "none"});
		 $('#design_search_haut .cancel_button').css({display : "block"});
	});
	// Fait disparaitre le clavier et les résultats de la recherche au clic sur le bouton "Annuler"
	 $('.cancel_button').click(function(){ 
		 $('#dynamic_search_result_container').hide('fast');
		 $('#icon_clear').hide('fast');
		 $('#design_search_haut').css({width : "260px"});
		 $('#design_search_bas').css({width : "260px"});
		 $('#menu_left').css({display : "block"});
		 $('#design_search_haut .cancel_button').css({display : "none"});
	 });
		 
	 /******************** AUTOCOMPLETION ********************/
	// /!\ PROCHAINEMENT DANS EVENT.JS - NON FONCTIONNEL /!\	
		/*$("#search_nav").keyup(function() {
			var mot_saisi = $(this).val();
			var mot_taille = mot_saisi.length;
			if (mot_taille >= 3){
				$.ajax({
					type: "GET",
						url: "http://lyon4.steven-titren.com/search",
						dataType: "xml",
						data:"query="+mot_saisi,
						complete : function(data, status) {
							var products = data.responseXML;
							var appendHtml = "";
							$(products).find('api').each(function(){
								var name = $(this).find('name').text();
								appendHtml += "<strong>"+name+"</strong>";
							}); 
							$("#test_autocompl").append(appendHtml);
						}});
				}
			});*/
		
	 /******************** AFFICHAGE FORM. CREATION COLLECTION ********************/
	 $('.new_collection').hide();
	 $('.add_collection').click(function(){			
		$('.new_collection').show('fast');
	 });
	 
	 /******************** SOUMISSION FORM. CREATION COLLECTION ********************/
	 // /!\ PROCHAINEMENT DANS EVENT.JS - NON FONCTIONNEL /!\	
	 $('.submit_collection').click(function(){
		 if($('#input_new_collection').val()==''){// si le champs est vide, popup negative
			 
			 popup_neg_pos("neg", ".new_collection");

		}else{
			$.ajax({ //appel l'api pour creer la collection
				type:'POST',
				url:'api.jolielist.com/collection/create',
				//data:{'user_id': 1, "nom_collection":$("#input_new_collection").val()},
				data:'user_id=1&nom_collection='+$("#input_new_collection").val(), // user_id=1 a modifier
				success: function(data){// si nous retourne 1 alors popup possitive
					if(data["success"]==1){ 
						popup_neg_pos("pos", ".new_collection");
					}
					else if(data["success"]==0){ //sinon popup negative
						popup_neg_pos("neg", ".new_collection");
					}
				},
				error: function(){
					alert("erreur create");
				},
				dataType:'xml'
			});	
		}
	 });

	 /******************** AFFICHAGE SOUS-MENU ********************/
	 // /!\ PROCHAINEMENT DANS EVENT.JS /!\
	$('.subnavigation').hide();
	$('.open a').css('background-image',' url(./images/picto_puce_close.jpg)');
	$('.open').click(
		function(){
			if($('.subnavigation:visible').length != 0){
				$('.subnavigation').slideUp("fast");
				$('.open a').css('background-image',' url(./images/picto_puce_close.jpg)');
				$('.open .subnavigation a').css('background-image',' url(./images/picto_puce_close.jpg)');
				$('.subnavigation a').css('background-image','block');
			} else {
				$('.subnavigation').slideDown("fast");
				$('.open a').css('background-image',' url(./images/picto_puce_open.jpg)');
				$('.open .subnavigation a').css('background-image',' url(./images/picto_puce_close.jpg)');
				$('.subnavigation a').css('background-image','block');
			}
		});
	
	/******************** FIN DES EVENT JS ********************/
});

/******************** DEBUT DES FONCTIONS ********************/
// /!\ FONCTIONS QUI RESTERONT DANS LE FICHIER FUNCTION.JS /!\ 
/**
 * Description : fonction appelé pour supprimer une collection 
 * Entrée : id_utilisateur(de type inconnu pour l'instant), id_collection(de type inconnu pour l'instant)
 * Retour : 1 si OK ou 0 sinon
 * Nb : NON FONCTIONNEL et NON TESTEE car pas de gestion des user_id  et id_collection pour l'instant
**/
function deleteCollection(id_utilisateur, id_collection) {
	$.ajax({
		type:'GET',
		url:'fichier.php',
		data:"id_utilisateur"+id_utilisateur+"&idCollection="+id_collection,
		success: function(data) { 
			if (data["success"] == 1) {
				alert("Bravo");
			} else {
				alert("Je suis en colere");
			}
		},
		error: function() {
			alert("Je suis en colere aussi");
		}
	});
}

/**
 * Description : Gestions des collections en fonction de "user_id"
 * Entrée : id_utilisateur (de type inconnu pour l'instant)
 * Retour : attribut name d'Objets Collection (flux xml)
 * Nb : NON FONCTIONNEL et NON TESTEE car pas de gestion des user_id pour l'instant
**/
function showCollections(id_utilisateur, name_utilisateur) {
	$.ajax({
		type: "GET",
		url: "http://api.jolielist.com/collections?user_id=1",
		dataType: "xml",
		complete : function(data, status) {
			var produit = data.responseXML;
			var ajoutHtml = "";
			$(produit).find('collection').each(function(){
				var collection_id = $(this).find('collection_id').text();
				//alert(collection_id);
				var nom = $(this).find('name').text();
				var type = $(this).find('collection_type_id').text();
				
				if (type == 1){
					ajoutHtml += "<li><a href='collection-dynamic.html?user_id="+id_utilisateur+"&user_name="+name_utilisateur+"&id_collection="+collection_id+"&name_collection="+nom+"'>"+nom+"</a></li>";
				}else{
					ajoutHtml += "<li class='public_collection'><a href='collection-dynamic.html?user_id="+id_utilisateur+"&user_name="+name_utilisateur+"&id_collection="+collection_id+"&name_collection="+nom+"'>"+nom+"</a></li>";
				}
			});
			$(".navigation").append(ajoutHtml);
		}});
}




/*****************fonction pour afficher la popup negative / positive*****************/
function popup_neg_pos(type, element){ // afficher une popup selon son type (neg ou pos) apres l'element html 
	
if($("#popup").length==0){
	 $(element).after('<li id="popup">test</li>');  // ajoute un li contenant la popup negative
	}
	$("#popup").show();
	switch (type){ //selon le type passé neg/pos //lien a modifier
		case "neg" : lien = "./rush/pop_up_neg.html";
		break;
		case "pos" : lien = "./rush/pop_up_pos.html";
		break;
	}
	 $.ajax({ //appel le lien html a affiché  
			type:'GET',
			url: lien,
			success: function(data){
				$('#popup').html(data);
				setTimeout(function() {
					closePopup("#popup");
				}, 5000);
				
			},
			error: function(){
				alert('erreur popup');
			},
			dataType:'html'
		});
}
/**************************************************************/

/*****************fonction pour fermer une popup ********************/

function closePopup(name_popup) { // fermer une popup
    $(name_popup).html(""); // la vide
    $(name_popup).hide(); // la cache
}



/*******************fonction pour afficher une popup general(affiche sur tous l'ecran)*********************



//affiche une popup dans la div passer en parametre(name_div), 
//lien_afficher est le lien du fichier html a afficher
function openPopup(name_div, lien_afficher){
	if($("#popup").length==0){
		$(name_div).append('<div id="popup"></div>'); // ajoute une div contenant la popup a la fin de la div passer dans la signature
	}
	$("#popup").show();
	
	 //$('#popup').css( { position: "fixed", 
       // left:0, top:0, width: "100%", height: "100%",
        // "padding-top": "30px",'z-index':2000}); // css pour la div #popup
	 $.ajax({ //appel la popup : pop_up_neg.html
			type:'GET',
			url: lien_afficher,
			success: function(data){
				$('#popup').html(data);
				setTimeout(function() {
					closePopup("popup");
				}, 5000);
				
			},
			error: function(){
				alert('erreurpopup');
			},
			dataType:'html'
		});
}*/