$(document).ready(function() {
/*    var a = new EasyCanvas("canvas");
    a.drawLine({
        color: "#f00",
        startPoint: {x: 20, y: 20},
        endPoint: {x: 50, y: 50}
    }).drawLine({
    	color: "#00f",
    	startPoint: {x: 50,	y: 50},
        endPoint: {x: 0, y: 60}
    });*/
// console.log("====");
    var b = new EasyCanvas("canvas2");
    /*b.drawLine({
        points: [[10, 100], [200, 100], [10, 200]],
        lineCap: "round",
        lineWidth: 10,
        filled: true,
        fillColor: "rgb(255, 165, 0)",
        closed: true
    });*/
/*
    b.drawText({
        points: [[00, 100]],
        lineWidth: 10,
        shadow: [7, "#0f0"],
        linerGradient: [0, 0, 170, 0],
        stop: [[0, "black"], [0.3,"magenta"],[0.5,"blue"],[0.6,"green"],[0.8,"yellow"],[1,"red"]],
        font: "50px Arial Black",
        text: "Hello World",
        strokeText: true
    }).clear();*/

/*    b.drawRect({
        points: [[20,20],[150,100]],
        linerGridient: [0, 0, 170, 0]
    });*/

    b.drawRect({
        fillColor: "#000"
    })
    .clear(20, 20, 100, 100);
});
