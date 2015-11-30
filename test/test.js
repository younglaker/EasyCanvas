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

    b.drawLine({
        points: [[10, 100], [200, 100], [10, 200]],
        lineCap: "round",
        lineJoin: "round",
        lineWidth: 10,
        fillColor: "rgb(255, 165, 0)",
        strokeColor: "#00f",
        // strokeLinerGradient: [0, 0, 170, 0],
        // stop: [[0, "black"], [0.5,"blue"], [1,"red"]],
        closed: true
    });

/*    b.drawText({
        points: [[00, 100]],
        lineWidth: 1,
        // shadow: [7, "#0f0"],
        // strokeLinerGradient: [0, 0, 170, 0],
        // stop: [[0, "black"], [0.5,"blue"], [1,"red"]],
        font: "50px Arial Black",
        text: "Hello"
    });
*/
    b.drawText({
        points: [[00, 100]],
        shadow: [7, "#0f0"],
        fillRradialGradient: [75, 50, 5, 90, 60, 100],
        stop: [[0, "black"], [0.5,"blue"], [1,"red"]],
        strokeColor: "#fff",
        font: "50px Arial Black",
        text: "Hello",
        strokeText: true
    });

    b.drawRect({
        points: [[20, 20]],
    });

/*    b.drawRect({
        fillColor: "#000"
    })
    .clean(20, 20, 100, 100);*/

/*    b.drawLine({
        points: [[150, 20], [150, 170]]
    })
    .drawText({
        points: [[150, 60]],
        text: "test test",
        textAlign: "start",
    })
    .drawText({
        points: [[150, 80]],
        text: "test test",
        textAlign: "end",
    })
    .drawText({
        points: [[150, 100]],
        text: "test test",
        textAlign: "center",
    })
    .drawText({
        points: [[150, 120]],
        text: "test test",
        textAlign: "left",
    })
    .drawText({
        points: [[150, 140]],
        text: "test test",
        textAlign: "right",
    });*/

/*    b.drawLine({
        points: [[0, 100], [500, 100]]
    })
    .drawText({
        points: [[0, 100]],
        text: "alphabetic",
        textBaseline: "alphabetic",
    })
    .drawText({
        points: [[90, 100]],
        text: "top",
        textBaseline: "top",
    })
    .drawText({
        points: [[130, 100]],
        text: "hanging",
        textBaseline: "hanging",
    })
    .drawText({
        points: [[200, 100]],
        text: "middle",
        textBaseline: "middle",
    })
    .drawText({
        points: [[270, 100]],
        text: "ideographic",
        textBaseline: "ideographic",
    })
    .drawText({
        points: [[380, 100]],
        text: "bottom",
        textBaseline: "bottom",
    });*/

});
