/**
----------------------------------------------------------------------------------
* @copyright : AgencyBlur / QL_appshop
* @date : 23/01/2013
* @Description :
* Infinite scroll des actualités (appelé dans la page actualites.html)
-----------------------------------------------------------------------------------------------------
**/

//Chargement en ajax des données
function loadMoreContent(){
  $.ajax({
	  type:'GET',
	  url:'http://api.jolielist.com/news-feed', 
	  data: null,
	  complete: function(data) {
		  var products = data.responseXML;
		  var appendHtml = "";
		  $(products).find('api').each(function(){
				var id = $(this).attr('id');
				var titre = $(this).find('title').text();
				var description = $(this).find('description').text();
				var picture_url= $(this).find('picture_url').text();
				var small_picture_url= $(this).find('small_picture_url').text();
				var price = $(this).find('price').text();
				var promotion = $(this).find('promotion').text();
				var final_price = $(this).find('final_price').text();
				var comments_count = $(this).find('comments_count').text();
				var favorite_count = $(this).find('favorite_count').text();
				var shared_cound = $(this).find('shared_cound').text();
				var redirect_url = $(this).find('redirect_url').text();
				appendHtml += "<div id='"+id+"'><p>"+title+"</p><p>"+description+"</p></div>";
			}); 
			$("#global_content").append(appendHtml);
	  },
    timeout: 7000
  });
};

//Au scroll de la barre de défilement, appelle la fonction au dessus
$(window).scroll(function() {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    loadMoreContent();
  }
});