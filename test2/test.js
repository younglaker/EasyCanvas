$(document).ready(function() {

	// var a = new EasyCanvas("canvas");
	// a.drawArc({
	//   points: [[100,100,50], [0,1.5]],
	//     lineWidth: 10,
	//     filled: false,
	//     shadow:[[7,"black"]],
	//     fillColor: "rgb(255,165,0)"
	//   });
	var a = new EasyCanvas("canvas");
	a.drawQuadratic({
		shadow: [7, "#0f0"],
		strokeColor: "#0000ff",
		points: [
			[20, 20],
			[20,100,200,10]
		]
	});
});