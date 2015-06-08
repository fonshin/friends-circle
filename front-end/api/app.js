/**
 * Main Angular Module
 */
var app = angular.module("app", ['ui.router','ngCookies','btford.socket-io']);


	/*
		Cache the templete before load it .
	 */
	app.run(function ($templateCache) {
		$templateCache.put('header.html','../views/templates/header.html');
		$templateCache.put('footer.html','../views/templates/footer.html');
	});


