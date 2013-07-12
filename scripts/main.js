require.config({
	paths:{
		"jquery"	: "vendor/jquery/jquery.min", 
		"creatable"	: "vendor/creatable/index", 
		"codemirror": "vendor/codemirror/lib/codemirror", 
		"codemirrorJavascriptMode": "vendor/codemirror/mode/javascript/javascript", 	
		"codemirrorHTMLMode": "vendor/codemirror/mode/xml/xml", 	
		"codemirrorHTMLMode": "vendor/codemirror/mode/xml/xml", 	
	},
	shim: {
        'codemirrorJavascriptMode': ['codemirror'],
        'codemirrorHTMLMode': ['codemirror'],        
    }
});

require([
	'app',
], function(App){
	App();
});