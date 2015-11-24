# About

A HTML5 canvas library based on pure JavaScript.

# Documents

## Init

	<canvas id="canvas" width="550" height="500"></canvas>
	
	var A = new EasyCanvas("canvasid");

## Settings

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| closed | Bool  | false  | Creates a path from the last point back to the starting point<br>(闭合图形)   |
| fillColor  |  Hex or RGB   |  "transparent" |  Fill Color<br>(填充颜色)  |
| lineCap |  "butt"(平直),<br> "round"(圆形),<br> "square"(正方形) | "butt"  | The style of the end caps for a line<br>(线条结束端点的样式)  |
| lineJoin |  "bevel"(斜角),<br>"round"(圆角),<br>"miter"(尖角) | "miter"  | The type of corner created, when two lines meet<br>(两条线相交时，所创建的拐角类型)  |
| lineWidth  | Number  | 1 | Line width<br>(线条宽度)  |
| points  |  Arrays  | [[0, 0], [0, 0]]  | Coordinate, [[x1, y1], [x2, y2], [x3, y3]...] <br>([x1, y1]是起始坐标)  |
| shadow  |  [Number, "#FFF"] | [0, "#FFF"]  | Shadow  |
| strokeColor | Hex or RGB  |  "#000" |  Outer line color for shape and text<br>(图形或文本描边的颜色)   |
| strokeText  |  Bool |  false  |  Whether stroke the text<br>(是否开启给文本描边)  |
| text | Sting  | "Test"  |   Text  |
| fontColor  | Hex or RGB  | "#000" |  Font color   |
| linerGradient | Arrays |  | [x0, y0, x1, y1]<br>x0, y0 and x1, y1: The start and end point of the gradient<br>x0、y0 和 x1、y1:	渐变的起始点、结束点 |
| radialGradient | Arrays |  | [x0, y0, r0, x1, y1, r1]<br>x0, y0 and x1,	y1:	The starting and end circle of the gradient<br>r0 and r1： The radius of the starting and ending circle<br>x0, y0 和 x1, y1:	渐变的起始、结束点<br>r0 和 r1: 开始和结束的圆的半径|
| stop | Arrays | [[0, "black"], [1, "white"]] | [[n1, "color"], [n2, "color"]...[nx, "color"]]<br>n: Between 0.0 and 1.0 that represents the position between start and end in a gradient<br>n: 在0和1之间，渐变停留的位置 |
|  |  |  |  |

## Variable

| Property | Description | Example |
|---|---|---|
| width | The width of canvas | var w = A.width |
| height | The height of canvas | var w = A.height |

## Drawing
### Line: drawLine()

Example:

    A.drawLine({
        closed: true,
        lineCap: "round",
        lineWidth: 10,
        filled: true,
        fillColor: "rgb(255,165,0)",
    	points: [[10, 100], [200, 100], [10, 200]]
    });

### Arc: drawArc()

### Rectangle: drawRect()

### Text: drawText()

    A.drawText({
        points: [[00, 100]],
        lineWidth: 10,
        shadow: [7, "#0f0"],
        linerGridient: [0, 0, 170, 0],
        stop: [[0, "black"], [0.3,"magenta"],[0.5,"blue"],[0.6,"green"],[0.8,"yellow"],[1,"red"]],
        font: "30px Arial Black",
        text: "Hello World",
        strokeText: true
    });

## Layer
### Reference line: coordinate(grid_width, coodiful, color)

Draw the coordinate of canvas in order to use canvas easierly.

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| grid_width | Number  | 50  | The width of each grid  |
| coodiful | Bool  | false  | Whether show the coordinate |
| color | Css color  | "#000"  | The color of line and text  |

```
A.coordinate();

A.coordinate(100, true, "rgb(255, 165, 0)");
```