sap.ui.controller("report.controllers.report", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf report.report
*/
	onInit: function() {
		var sPath =  jQuery.sap.getModulePath("report.models", "/farm.json")
		var oModel = new sap.ui.model.json.JSONModel(sPath)
		this.getView().setModel(oModel)
		
		// set i18n model on view
         var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleName: "report.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
	},
	handlePress: function (oControlEvent){
        var context = oControlEvent.getSource().getBindingContext().getObject();
		var bindingContext = oControlEvent.getSource().getBindingContext();
		app.to("galpones", bindingContext);
   	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf report.report
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf report.report
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf report.report
*/
//	onExit: function() {
//
//	}

});