sap.ui.jsview("report.report", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf report.report
	*/ 
	getControllerName : function() {
		return "report.report";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf report.report
	*/ 
	createContent : function(oController) {
		console.log()
		
		var StandardTile = new sap.m.StandardTile({
			icon: "sap-icon://{icon}",
			number: "{number}",
			numberUnit: "{numberUnit}",
			title: "{title}",
			info: "{info}"
		})
		
		var TileContainer = new sap.m.TileContainer("tilecontainer",{
			width: "100%"
		})
		
		var standardTileFactory = function(sId, oContext){
			var oTile = new sap.m.StandardTile(sId)
			.bindProperty("title",oContext.sPath+"/title")
    		.bindProperty("info",oContext.sPath+"/info")
    		.bindProperty("number",oContext.sPath+"/number")
    		.bindProperty("numberUnit",oContext.sPath+"/numberUnit")
    		.bindProperty("icon",oContext.sPath+"/icon")
   
			return oTile;
		}
		
		TileContainer.bindAggregation("tiles", "/FarmCollection",standardTileFactory)
			
 		return new sap.m.Page({
			title: "Daily report",
			enableScrolling: false,
			content: [
			          TileContainer
			]
		});
	}

});