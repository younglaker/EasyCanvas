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
a.drawText({
    points: [[100,100]],
    lineWidth: 10,
    shadow:[[7,"black"]],
    fillColor: "rgb(255,165,0)",
    font: "50px Arial Black",
    text: "Hello World",
    filled: true
  });
});
