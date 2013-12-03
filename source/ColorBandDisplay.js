enyo.kind({
	name: "ColorBandDisplay",
	kind: "onyx.MenuItem",
	classes: "center",
	published: {
		color: "",
		content: "",
		value: "",
		tolerance: "",
		multiplier: ""
	},
	components: [
		{
			name: "box",
			classes: "color-box"
		},
		{
			name: "colorName"
		}
	],
	rendered: function() {
		this.inherited(arguments);
		this.$.colorName.setContent(this.content);
		this.$.box.applyStyle("background", this.color);
	},
	getInfo: function() {
		var obj = {
			content: this.content,
			color: this.color,
			value: this.value,
			tolerance: this.tolerance,
			multiplier: this.multiplier
		};

		return obj;
	}

});