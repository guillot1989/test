/**
----------------------------------------------------------------------------------
* @copyright : AgencyBlur / QL_appshop
* @date : 23/01/2013
* @Description :
* Gestion ajout/suppression produits
-----------------------------------------------------------------------------------------------------
**/
$(function(){
	$.ajax({
		type:'GET',
		url:'api.jolielist.com/product?user_id=1&product_id=1',
		data: null,
		complete: function(data){
			var prod = data.responseXML;
			var appendHtml = "";
			$(prod).find('api').each(function(){
				var id = $(this).attr('id');
				var title = $(this).find('title').text();
				var description = $(this).find('description').text();
				var picture_url = $(this).find('picture_url').text();
				var small_picture_url = $(this).find('small_picture_url').text();
				var price = $(this).find('price').text();
				var favorite_count = $(this).find('favorite_count').text();
				var shared_cound = $(this).find('shared_cound').text();
				var comments_count = $(this).find('comments_count').text();
				appendHtml += "<div id='"+id+"'><p>"+title+"</p><p>"+description+"</p></div>";
				
			});
			$("#test").add(appendHtml);
		},
		error: function(){
			alert('error');
		},
		dataType: 'xml'
	});
});