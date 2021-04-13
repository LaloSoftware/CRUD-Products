/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"localsap/crud/products2/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});