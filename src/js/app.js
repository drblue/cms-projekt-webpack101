var jQuery = require("./jquery-3.3.1.min");

jQuery(document).ready(function($){
	$('#kittenPlz').click(function(){
		$('#kitten').toggleClass('show');
	});
});
