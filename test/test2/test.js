$(document).ready(function() {

	// var a = new EasyCanvas("canvas");
	// a.arc({
	//   points: [[100,100,50], [0,1.5]],
	//     lineWidth: 10,
	//     filled: false,
	//     shadow:[[0, 0, 7,"black"]],
	//     fillColor: "rgb(255,165,0)"
	//   });
	var a = new EasyCanvas("canvas");
	a.quadratic({
        shadow: [0, 0, 7, "#0f0"],
        color: "#0000ff",
        points: [[20, 20], [20, 100], [200, 10]]
    });
});
