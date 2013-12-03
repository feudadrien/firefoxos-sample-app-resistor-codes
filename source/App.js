enyo.kind({
	name: "App",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", components: [
			{content: "Resistor Codes"}
			]
		},
		{kind: "enyo.Scroller", fit: true, components: [
			{
				kind: "FittableColumns",
				classes: "center some-padding",
				components: [
					{
						name: "band1",
						title: "Band 1",
						kind: "BandColorSelector"
					},
					{
						name: "band2",
						title: "Band 2",
						kind: "BandColorSelector"
					},
					{
						name: "band3",
						title: "Band 3",
						kind: "BandColorSelector"
					},
					{
						name: "band4",
						title: "Band 4",
						kind: "BandColorSelector"
					}
				]
			},
			{
				name: "main",
				classes: "nice-padding center",
				allowHtml: true
			}
			
		]},
		{kind: "onyx.Toolbar", components: [
			{kind: "onyx.Button", content: "Calculate", ontap: "helloWorldTap"}
		]}
	],
	getColorSelection: function() {
		var color = [
			this.$.band1.getInfo(),
			this.$.band2.getInfo(),
			this.$.band3.getInfo(),
			this.$.band4.getInfo()
		]
		return color;
	},
	formatResistorValue: function(value, precision) {  
        var kiloohm = 1000;
        var megaohm = kiloohm * 1000;
        var gigaohm = megaohm * 1000;
        var teraohm = gigaohm * 1000;
       
        if ((value >= 0) && (value < kiloohm)) {
            return value + ' &ohm;';
     
        } else if ((value >= kiloohm) && (value < megaohm)) {
            return (value / kiloohm).toFixed(precision) + ' K&ohm;';
     
        } else if ((value >= megaohm) && (value < gigaohm)) {
            return (value / megaohm).toFixed(precision) + ' M&ohm;';
     
        } else if ((value >= gigaohm) && (value < teraohm)) {
            return (value / gigaohm).toFixed(precision) + ' G&ohm;';
     
        } else if (value >= teraohm) {
            return (value / teraohm).toFixed(precision) + ' T&ohm;';
     
        } else {
            return value + ' &ohm;';
        }
    },
	helloWorldTap: function(inSender, inEvent) {
		var selected = this.getColorSelection();
		var multiplier = Math.pow(10, selected[2].multiplier);
		var tolerance = selected[3].tolerance || 0;
		var resistorValue = selected[0].value + "" + selected[1].value;
		resistorValue = resistorValue * multiplier;
		this.log("Value", resistorValue);
		this.log("Tolerance:", tolerance);
		this.$.main.setContent("<h3>Value: " + this.formatResistorValue(resistorValue,1) + " &plusmn;" + tolerance + "%" +  "</h3>");
	}
});
