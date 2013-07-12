define([
	'jquery',
	'creatable',
	'try-creatable',
], function($, c, tryCreatable){
	
	var docs = [
	
		['p.centered', 'Creatable allows you to build HTML using Javascript without templates.'],
	
		['.code_sample', [
			['textarea.creatable_code', "['p', 'Hello World']"],
			['span.arrow', { html: true }, '&rarr;'],
			['textarea.html_code', "<p>Hello World</p>"],
			['.clear']
		]],
	
		['p', 'This is another paragraph.']
	
	];
	
	return function() {
		$('.doc_wrapper').html(Creatable.create(docs));
	
		$('.doc_wrapper .code_sample').each(function(){
			
			var el 				= $(this);
			var creatableCodeEl = $('textarea.creatable_code', el)[0];
			var htmlCodeEl 		= $('textarea.html_code', el)[0];
			
			tryCreatable(creatableCodeEl, htmlCodeEl);
			
		});
	};
});
