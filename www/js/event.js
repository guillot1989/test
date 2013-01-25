/**
----------------------------------------------------------------------------------
* @copyright : AgencyBlur / QL_appshop
* @date : 23/01/2013
* @Description :
* Fichier contenant les fonctions JS utilisées uniquement lors de déclenchement d'événements
* tel que les événements liés au clavier ou à la souris ...
-----------------------------------------------------------------------------------------------------
**/
// /!\ FICHIER NON FONCTIONNEL => TOUT EST DANS FUNCTION.JS POUR LE MOMENT /!\
$(function(){

		//permet d'effacer le texte dans la barre de recherche
		$('.cancel_button').click(deleteText('#search_nav')); 
		
		/******************** GESTION DOSSIER CSS ********************/
		//On gère  le dossier dans le cas du redimensionnement du navigateur
		$(window).resize(function(){
			$("link").each(function(){
			//cas ou l'écran était inférieur à 640 et devient supérieur à 640
				if(($(window).width() >= 640) && ($(this).attr('href').search('css_640')<0)){
					var temp = $(this).attr('href');
					temp = temp.replace('css', 'css_640');
					$(this).attr('href', temp);
				}
				// cas ou l'écran était supérieur à 640 et devient inférieur à 640/
				else if(($(window).width() < 640) && ($(this).attr('href').search('css_640')>=0)){
					var temp = $(this).attr('href');
					temp = temp.replace('css_640', 'css');
					$(this).attr('href', temp);
				}
			});
		});
		
		/******************** DISPARITION CLAVIER ********************/
		// /!\ NON FONCTIONNEL /!\
		
		// Fait disparaitre le clavier au clic sur le bouton "annuler"
		 $('[annuler]').click(function(){ 
			$('blabla').remove(); /* NB: PERTE FOCUS + CACHER DEV VIDE ET RECHERCHE */
		 });
		 
		 // Fait disparaitre le clavier au clic dans la partie vide de l'application
		 $('blabla').click(function(){ 
			$('blabla').remove();
		 });
		 
		 /******************** AFFICHAGE FORM. CREATION COLLECTION ********************/
		 
		 $('.new_collection').hide();
		 $('.add_collection').click(function(){			
			$('.new_collection').show('fast');
		 });
			
		 /******************** SOUMISSION FORM. CREATION COLLECTION ********************/
		// /!\ NON FONCTIONNEL /!\	
		 $('.submit_collection').click(function(){
			if($('#type_collection').val()==''){
				alert('champ vide');
			}else{
				$.ajax({
					type:'POST',
					url:'api.jolielist.com/collection/create',
					data:'user_id'+'nom_collection'+'urlImageCouverture',
					success: function(data){
						if(data["success"]==1){
							alert('ok');
						}
					},
					error: function(){
						alert('erreur');
					},
					timeout: 1000,
					dataType:'xml'
				});	
			}
		 });
		
		 /******************** AUTOCOMPLETION ********************/
		// /!\ NON FONCTIONNEL /!\	
		$("#search_nav").keyup(function() {
			var mot_saisi = $(this).val();
			var mot_taille = mot_saisi.length;
			if (mot_taille >= 3){
				$.ajax({
					type: "GET",
						url: "http://api.jolielist.com/search",
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
			});
		
		 /******************** AFFICHAGE SOUS-MENU ********************/
			
		$('.subnavigation').hide();
		$('.open a').css('background-image',' url(../../images/picto_puce_close.jpg)');
		$('.open').click(
				function(){
				if($('.subnavigation:visible').length != 0)
				{
					$('.subnavigation').slideUp("fast");
					$('.open a').css('background-image',' url(../../images/picto_puce_close.jpg)');
					$('.subnavigation a').css('background-image','none');
				}
				else
				{
					$('.subnavigation').slideDown("fast");
					$('.open a').css('background-image',' url(../../images/picto_puce_open.jpg)');
					$('.subnavigation a').css('background-image','none');
				}
		});
		
		/******************** FIN ********************/
});

