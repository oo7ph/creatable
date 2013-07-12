$(function() {

	prettyPrint();

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

	$('.doc_wrapper').html(Creatable.create(docs));

});