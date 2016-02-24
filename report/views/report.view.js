sap.ui.jsview("report.views.report", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf report.views.report
	*/ 
	getControllerName : function() {
		return "report.controllers.report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf report.views.report
	*/ 
	createContent : function(oController) {

		var TileContainer = new sap.m.TileContainer("tilecontainer",{
			width: "100%"
		})
		
		//Define a Factory Method for StandardTile elements
		//Bind all properties
		var standardTileFactory = function(sId, oContext){
			var oTile = new sap.m.StandardTile(sId)
			.bindProperty("title",oContext.sPath+"/title")
    		.bindProperty("info",oContext.sPath+"/info")
    		.bindProperty("number",oContext.sPath+"/number")
    		.bindProperty("numberUnit",oContext.sPath+"/numberUnit")
    		.bindProperty("icon",oContext.sPath+"/icon")
    		.attachPress(oController.handlePress)
    		.addCustomData(new sap.ui.core.CustomData({
        		key: "modelId",	
        		value: oContext.oModel.getProperty(oContext.sPath+"/id"),
        		writeToDom: true
			}));
   
			return oTile;
		}
		
		TileContainer.bindAggregation("tiles", "/FarmCollection",standardTileFactory)

 		return new sap.m.Page({
			title: "{i18n>report_title}",
			enableScrolling: false,
			content: [
			          TileContainer
			]
		});
	}

});