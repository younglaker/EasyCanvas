# About

A HTML5 canvas library based on pure JavaScript.

Welcome to join us~

# Documents

## Init

    <canvas id="canvasId" width="550" height="500"></canvas>
    
    var A = new EasyCanvas("canvasId");

## Settings

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| closed | Bool  | false  | Creates a path from the last point back to the starting point<br>(闭合图形)   |
| fillColor  |  Hex or RGB   |  "transparent" |  Fill Color<br>(填充颜色)  |
| fontColor  | Hex or RGB  | "#000" |  Font color   |
| fillLinerGradient | Arrays |  | [x0, y0, x1, y1]<br>x0, y0 and x1, y1: The start and end point of the gradient for fill style<br>x0、y0 和 x1、y1:  填充线性渐变的起始点、结束点 |
| fillRradialGradient | Arrays |  | [x0, y0, r0, x1, y1, r1]<br>x0, y0 and x1,  y1: The starting and end circle of the gradient<br>r0 and r1： The radius of the starting and ending circle for fill style<br>x0, y0 和 x1, y1:  填充圆形渐变的起始、结束点<br>r0 和 r1: 开始和结束的圆的半径|
| lineCap |  "butt"(平直),<br> "round"(圆形),<br> "square"(正方形) | "butt"  | The style of the end caps for a line<br>(线条结束端点的样式)  |
| lineJoin |  "bevel"(斜角),<br>"round"(圆角),<br>"miter"(尖角) | "miter"  | The type of corner created, when two lines meet<br>(两条线相交时，所创建的拐角类型)  |
| lineWidth  | Number  | 1 | Line width<br>(线条宽度)  |
| points  |  Arrays  | [[0, 0], [0, 0]]  | Coordinate, [x1, y1] or [[x1, y1], [x2, y2], [x3, y3]...]. The format depands on particular drawing function.<br>([x1, y1]是起始坐标)  |
| rectWidth | Number |  | Width of rectangle and Foursquare |
| rectHeight | Number |  | Height of rectangle and Foursquare |
| shadow  |  [Number, "#FFF"] | [0, "#FFF"]  | Shadow  |
| strokeColor | Hex or RGB  |  "#000" |  Outer line color for shape and text<br>(图形或文本描边的颜色)   |
| fontColor  | Hex or RGB  | "#000" |  Font color   |
| strokeLinerGradient | Arrays |  | [x0, y0, x1, y1]<br>x0, y0 and x1, y1: The start and end point of the gradient for stroke style<br>x0、y0 和 x1、y1:  描边线性渐变的起始点、结束点 |
| strokeRradialGradient | Arrays |  | [x0, y0, r0, x1, y1, r1]<br>x0, y0 and x1,  y1: The starting and end circle of the gradient for stroke style<br>r0 and r1： The radius of the starting and ending circle<br>(x0, y0 和 x1, y1:  描边圆形渐变的起始、结束点)<br>(r0 和 r1: 开始和结束的圆的半径)|
| text | Sting  | "Test"  |   Text  |
| textBaseline | "alphabetic"(普通的字母基线)<br>"top"(em 方框的顶端)<br>"hanging"(悬挂基线)<br>"middle"(em 方框的正中)<br>"ideographic"(表意基线)<br>"bottom"(em 方框的底端) | "alphabetic" | Text baseline.<br>(文本基线)|
| textAlign | "start"(在指定的位置开始)<br>"end"(在指定的位置结束)<br>"center"(文本的中心被放置在指定的位置)<br>"left"(文本左对齐)<br>"right"(文本右对齐) | "start" | Text align.<br>(文本对齐方式) |
| stop | Arrays | [[0, "black"], [1, "white"]] | [[n1, "color"], [n2, "color"]...[nx, "color"]]<br>n: Between 0.0 and 1.0 that represents the position between start and end in a gradient<br>(n: 在0和1之间，渐变停留的位置) |
|  |  |  |  |

## Variable

| Property | Description | Example |
|---|---|---|
| width | The width of canvas | var w = A.width; |
| height | The height of canvas | var h = A.height; |

## Drawing
### Line: drawLine()

**Example:**

    A.drawLine({
        closed: true,
        lineCap: "round",
        lineWidth: 10,
        filled: true,
        fillColor: "rgb(255,165,0)",
    	points: [[10, 100], [200, 100], [10, 200]]
    });

### Arc: drawArc()

### Quadratic: drawQuadratic()

**Example:**

    A.drawQuadratic({
		shadow: [7, "#0f0"],
		color: "#0000ff",
		points: [[20, 20],[20,100,200,10]]
	});

### Rectangle: drawRect()

### Foursquare: drawSquare()

**Example:**

    A.drawSquare({
        points: [20, 60],
        rectWidth: 300  
    });

### Text: drawText()

**Example:**

    A.drawText({
        points: [10, 100],
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

**Example:**

	A.coordinate(); // Draw the whole canvas

	A.coordinate(100, true, "rgb(255, 165, 0)");

### Clean canvas: clean(x, y, width, heigh);

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x, y | Number |  | The coordinate of start point |
| width, heigh | Number |  | The width and heigh of the rectangle |

**Example:**

    b.drawRect({
        fillColor: "#000"
    })
    .clean();  // Clean the whole canvas

    b.drawRect({
        fillColor: "#000"
    })
    .clean(20, 20, 100, 100);  // Clean the some parts

# To-Do

## Functions
- [x] Gradient stroke style
- [ ] Pattern stroke and fill style
- [ ] drawRect()
- [ ] drawArc()

## Improvements

- [x] Remove strokeText property

## Bugs