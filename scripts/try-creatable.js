define([
	'jquery',
	'creatable',
	'codemirrorJavascriptMode',
	'codemirrorHTMLMode',
	'codemirror-formatting'

], function(){
	function renderCodeMirror(creatableEl, htmlEl){
		var creatableCodeMirror = CodeMirror.fromTextArea(creatableEl, {
			theme: 'blackboard',
		    autoMatchParens: true,
			mode: {
				name: 'javascript',
				json: true,
				typescript: true
			}
		});
		var htmlCodeMirror = CodeMirror.fromTextArea(htmlEl, {
			theme: 'blackboard',
			height: "350px",
		    autoMatchParens: true,
			mode: {
				name: 'xml',
				htmlMode: true
			}
		});
		
		creatableCodeMirror.on('change', function(el){
			try{
				Creatable.setDocument(Creatable.emulatedDocument)
				htmlCodeMirror.setValue(Creatable.create(eval(el.getValue())).toString());
				htmlCodeMirror.autoFormatRange({line:0, ch:0}, {line: htmlCodeMirror.lineCount(), ch:htmlCodeMirror.getValue().length});
			}
			catch(error){
				htmlCodeMirror.setValue('Enter Valid Creatable Array Syntax...');
			}
		});
		
	};
	
	return renderCodeMirror
});
