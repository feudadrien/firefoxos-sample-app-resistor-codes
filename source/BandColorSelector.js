enyo.kind({
	name: "BandColorSelector",
	kind: "Control",
	handlers: {
		onSelect: "colorSelected"
	},
	components: [
		{name: "header", classes: "center", content: "Band"},
		{kind: "onyx.PickerDecorator",  components: [
				{classes: "band-selector-wrapper"},
				{kind: "onyx.Picker",  components: [
					{
						name: "first",
						kind: "ColorBandDisplay", 
						content: "Black", 
						color: "black",
						value: 0,
						multiplier: 0,
						active: true
					},
					{
						kind: "ColorBandDisplay", 
						content: "Brown", 
						color: "brown",
						value: 1,
						tolerance: 1,
						multiplier: 1
					},
					{
						kind: "ColorBandDisplay", 
						content: "Red", 
						color: "red",
						value: 2,
						tolerance: 2,
						multiplier: 2
					},
					{
						kind: "ColorBandDisplay", 
						content: "Orange", 
						color: "orange",
						value: 3,
						multiplier: 3
					},
					{
						kind: "ColorBandDisplay", 
						content: "Yellow", 
						color: "yellow",
						value: 4,
						tolerance: 5,
						multiplier: 4
					},
					{
						kind: "ColorBandDisplay", 
						content: "Green", 
						color: "green",
						value: 5,
						tolerance: 0.5,
						multiplier: 5
					},
					{
						kind: "ColorBandDisplay", 
						content: "Blue", 
						color: "blue",
						value: 6,
						tolerance: 0.25,
						multiplier: 6
					},
					{
						kind: "ColorBandDisplay", 
						content: "Violet", 
						color: "violet",
						tolerance: 0.1,
						value: 7,
						multiplier: 7

					},
					{
						kind: "ColorBandDisplay", 
						content: "Grey", 
						color: "grey",
						value: 8,
						tolerance: 0.05,
						multiplier: 8
					},
					{
						kind: "ColorBandDisplay",
						 content: "White", 
						 color: "white",
						 value: 9,
						 multiplier: 9
					},
					{
						kind: "ColorBandDisplay", 
						content: "Gold", 
						color: "gold",
						tolerance: 5,
						multiplier: -1
					},
					{
						kind: "ColorBandDisplay", 
						content: "Silver", 
						color: "silver",
						tolerance: 10,
						multiplier: -2
					}
				]
			}
		]}
	],
	published: {
		color: "",
		title: ""
	},
	create: function() {
		this.inherited(arguments);
		this.$.header.setContent(this.title);
		this.info = this.$.first.getInfo();
	},
	colorSelected: function(inSender, inEvent) {
		this.info = inEvent.selected.getInfo();
	},
	getInfo: function() {
		return this.info;
	}

})