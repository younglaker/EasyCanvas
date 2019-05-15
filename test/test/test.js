// $(document).ready(function() {
/*    var a = new EasyCanvas("canvas");
    a.line({
        color: "#f00",
        startPoint: {x: 20, y: 20},
        endPoint: {x: 50, y: 50}
    }).line({
        color: "#00f",
        startPoint: {x: 50, y: 50},
        endPoint: {x: 0, y: 60}
    });*/
// console.log("====");
var b = new EasyCanvas("canvas2");

/*b.rect({
    basic: [10, 50, 300, 200],
    fillColor: "#000"
})
.cleanArc(100, 100, 60, 0, Math.PI);*/







    b.bezier({
        color: "#0000ff",
        // basic: [25, 50, 175, 50, 25, 150, 175, 150],
        lineWidth:3,
        basic: [
                [40, 80, 175, 50, 25, 150, 100, 150],
                [150, 150, 125, 1, 300, 150]
               ],
               strokeColor:"#3D34CF"
});







/*$("#save_canvas").click(function() {

  b.toImg('save_canvas', $("#pic_name").val());
});*/



/*    b.line({
        basic: [[20, 100], [200, 160]],
        basic1: [[200, 100], [200, 100]],
        // lineCap: "round",
        // lineJoin: "round",
        lineWidth: 5,
        // fillColor: "rgb(255, 165, 0)",
        strokeColor: "#000",
        // strokeLinerGradient: [0, 0, 170, 0],
        // stop: [[0, "black"], [0.5,"blue"], [1,"red"]],
        closed: true
    });*/

/*    b.text({
        points: [[00, 100]],
        lineWidth: 1,
        // shadow: [1, 1, 7, "#0f0"],
        // strokeLinerGradient: [0, 0, 170, 0],
        // stop: [[0, "black"], [0.5,"blue"], [1,"red"]],
        font: "50px Arial Black",
        text: "Hello"
    });
*/
/*    b.text({
        points: [00, 100],
        shadow: [1, 1, 7, "#0f0"],
        fillRradialGradient: [75, 50, 5, 90, 60, 100],
        stop: [[0, "black"], [0.5,"blue"], [1,"red"]],
        strokeColor: "#fff",
        font: "50px Arial Black",
        text: "Hello",
        strokeText: true
    });*/

/*    b.rect({
        // basic: [10, 50, 200, 100],
        basic: [10, 50, 200, 150],
        lineWidth: 3,
        strokeColor: '#34CFA9',
        // fillColor: "#6DCF34",
        // basic1: [40, 80, 300, 100],
        // points: [10, 50],
        // rectWidth: 300,
        // rectHeight: 200,
        // fillRradialGradient: [75, 50, 5, 90, 60, 100]
    });*/

/*    for (var i = 10; i < 50; i = i + 10) {
        b.rect({
            basic: [i, i, 300, 100]
        });
    }*/

/*    b.square({
        basic: [40, 80, 100],
        lineWidth:10,
        strokeColor: '#349BCF',
        // basic1: [50, 90, 100],
        // fillColor: "#000"
        // points: [80, 60],
        // rectWidth: 300
    });*/

/*    b.rect({
        fillColor: "#000"
    })
    .clean(20, 20, 100, 100);*/

/*b.text({
  basic: [10, 100, "basic"],
  basic1: [10, 130, "basic1"]
  points: [[0, 100]],
  text: "alphabetic",
});*/

/*    b.line({
        points: [[150, 20], [150, 170]]
    })
    .text({
        points: [[150, 60]],
        text: "test test",
        textAlign: "start",
    })
    .text({
        points: [[150, 80]],
        text: "test test",
        textAlign: "end",
    })
    .text({
        points: [[150, 100]],
        text: "test test",
        textAlign: "center",
    })
    .text({
        points: [[150, 120]],
        text: "test test",
        textAlign: "left",
    })
    .text({
        points: [[150, 140]],
        text: "test test",
        textAlign: "right",
    });*/

/*    b.line({
        points: [[0, 100], [500, 100]]
    })
    .text({
        points: [[0, 100]],
        text: "alphabetic",
        textBaseline: "alphabetic",
    })
    .text({
        points: [[90, 100]],
        text: "top",
        textBaseline: "top",
    })
    .text({
        points: [[130, 100]],
        text: "hanging",
        textBaseline: "hanging",
    })
    .text({
        points: [[200, 100]],
        text: "middle",
        textBaseline: "middle",
    })
    .text({
        points: [[270, 100]],
        text: "ideographic",
        textBaseline: "ideographic",
    })
    .text({
        points: [[380, 100]],
        text: "bottom",
        textBaseline: "bottom",
    });*/
/*
b.arc({
  shadow: [0, 0, 7, "#f00"],
  strokeColor: "#00f",
  lineWidth: 5,
  // basic: [50, 50, 50, 0, Math.PI],
  // basic1: [60, 60, 60, 0, Math.PI],
  basic: [100, 100, 60, 0, 2*Math.PI],
  // basic1: [220, 100, 60, Math.PI, 2*Math.PI],
  // points: [],
  // radius: 50,
  // startAngle: 50,
  // endAngle: Math.PI,
  // ccw: false
});*/
/*
b.quadratic({
  // shadow: [1, 1, 7, "#0f0"],
  color: "#0000ff",
  shadowColor: "#000",
  lineWidth: 3,
  basic: [60, 120, 20, 10, 200, 50],
  fillColor: "#FFA833"
  // basic1: [
  //   [10, 10, 10, 100, 100, 150],
  //   [40, 100, 250, 30],
  //   [50, 120, 300, 60]
  // ],
  // closed: true
});*/

// b.cleanArc(100, 100, 30, 0, Math.PI * 2);

/*    b.bezier({
        color: "#0000ff",
        basic: [25, 50, 175, 50, 25, 150, 175, 150],
        basic1: [
                [25, 80, 175, 50, 25, 150, 275, 150],
                [275, 150, 125, 1, 300, 150]
               ],
        // closed: true
    });*/

// });