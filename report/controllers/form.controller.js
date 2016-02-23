sap.ui.controller("report.controllers.form", {

	goBack: function(){
        sap.ui.getCore().getElementById("_age").setValue("");
        sap.ui.getCore().getElementById("_mortality").setValue("");
        sap.ui.getCore().getElementById("_discard").setValue("");
        sap.ui.getCore().getElementById("_consumption").setValue("");
		app.back()
	},


/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf report.report
*/
	onInit: function(oEvent) {
  		this.getView().addDelegate({
   			onBeforeShow : function(evt) {
    			evt.to.setModel(evt.data.oModel);
    			evt.to.setBindingContext(evt.data);
    			evt.to.getModel().setProperty("/galpon", evt.to.getModel().getProperty(evt.data.sPath + "/title"))
    			evt.to.getModel().setProperty("/galponNumber", evt.to.getModel().getProperty(evt.data.sPath + "/number"))
    			evt.to.getModel().setProperty("/galponLote", evt.to.getModel().getProperty(evt.data.sPath + "/numberUnit"))
    			//console.log(evt.data)
    			//De esta manera puedo saber que objeto está recibiendo la aplicación.
    			//console.log(evt.to.getModel());
				
   			}
 	 	})

        //SETTING i18n

 	},
    BtnGenerate : function(oEvent) {
        sap.ui.getCore().getElementById("_age").setValue("");
        sap.ui.getCore().getElementById("_mortality").setValue("");
        sap.ui.getCore().getElementById("_discard").setValue("");
        sap.ui.getCore().getElementById("_consumption").setValue("");
        app.back()
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