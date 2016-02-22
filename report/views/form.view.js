sap.ui.jsview("report.views.form", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf report.views.report
	*/ 
	getControllerName : function() {
		return "report.controllers.form";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf report.views.report
	*/ 
	createContent : function(oController) {

		var simpleForm = new sap.ui.layout.form.SimpleForm({
			editable: true,
			maxContainerCols: 2,
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
			labelSpanL: 4,
			labelSpanM: 4, 
			emptySpanL: 4,
     		columnsL: 4, 
     		columnsM: 4,
			content: [
				new sap.ui.core.Title({ text: "Data" }),

				new sap.m.Label({ design: "Bold", text: "Farm" }),
				new sap.m.Input({ enabled: false, value: "{/title}"}),

				new sap.m.Label({ design: "Bold", text: "Galpón"}),
				new sap.m.Input({ enabled: false, value: "{/galponNumber}"}),

				new sap.m.Label({ design: "Bold", text: "Lot"}),
				new sap.m.Input({ enabled: false, value: "{/galponLote}" }),

				new sap.m.Label({ design: "Bold", text: "Day"}),
				new sap.m.DatePicker({ enabled: true, format: "dd-mm-yyyy", placeholder: "dd-mm-yyyy" }),

				new sap.m.Label({ design: "Bold", text: "Age"}),
				new sap.m.Input({ type: sap.m.InputType.Number, placeholder: "Expressed in days..."}),

				new sap.m.Label({ design: "Bold", text: "Mortality"}),
				new sap.m.Input({ type: sap.m.InputType.Number, placeholder: "Number..."}),

				new sap.m.Label({ design: "Bold", text: "Discard"}),
				new sap.m.Input({ type: sap.m.InputType.Number, placeholder: "Number..."}),

				new sap.m.Label({ design: "Bold", text: "Consumption"}),
				new sap.m.Input({ type: sap.m.InputType.Number, placeholder: "Expressed in lumps..." }),

				new sap.m.Label(),
				new sap.m.FlexBox({
					justifyContent: "Center",
					items: [
						new sap.m.Button({ text: "Generate", type: "Accept", Align: "Center" })
					]
				})
			]
		})

 		return new sap.m.Page({
			title: "Report form",
			content: [
				simpleForm
			],
			showNavButton: true,
   			navButtonPress:  function () {  
          		oController.goBack() 
      		}
		});
	}
});