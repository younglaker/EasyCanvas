# About

A HTML5 canvas library based on pure JavaScript.

Welcome to join us~

# Documents

## Init

    <canvas id="canvasId" width="550" height="500"></canvas>
    
    var A = new EasyCanvas("canvasId");

## Common Style

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| closed | Bool  | false  | Creates a path from the last point back to the starting point<br>(闭合图形)   |
| fillColor  |  Color   |  "transparent" |  Fill Color<br>(填充颜色)  |
| fontColor  | Color  | "#000" |  Font color   |
| fillLinerGradient | Arrays |  | [x0, y0, x1, y1]<br>x0, y0 and x1, y1: The start and end point of the gradient for fill style<br>x0、y0 和 x1、y1:  填充线性渐变的起始点、结束点 |
| fillRradialGradient | Arrays |  | [x0, y0, r0, x1, y1, r1]<br>x0, y0 and x1,  y1: The starting and end circle of the gradient<br>r0 and r1： The radius of the starting and ending circle for fill style<br>x0, y0 和 x1, y1:  填充圆形渐变的起始、结束点<br>r0 和 r1: 开始和结束的圆的半径 |
| lineCap |  "butt"(平直),<br> "round"(圆形),<br> "square"(正方形) | "butt"  | The style of the end caps for a line<br>(线条结束端点的样式)  |
| lineJoin |  "bevel"(斜角),<br>"round"(圆角),<br>"miter"(尖角) | "miter"  | The type of corner created, when two lines meet<br>(两条线相交时，所创建的拐角类型)  |
| lineWidth  | Number  | 1 | Line width<br>(线条宽度)  |
| points  |  Arrays  | [[0, 0], [0, 0]]  | Coordinate, [x1, y1] or [[x1, y1], [x2, y2], [x3, y3]...]. The format depands on particular drawing function.<br>([x1, y1]是起始坐标，坐标具体用法详见每个方法)  |
| shadow  |  [Number, Number, Number, Color] | [1, 1, 1, "#fff"] | Shadow, [shadowX, shadowY, shadowBlur, shadowColor] |
| shadowX |  Number |  | Vertical shadow |
| shadowY |  Number |  | Horizontal shadow |
| shadowBlur |  Number |  | Shadow blur |
| shadowColor |  Color |  | Shadow color |
| strokeColor | Color  |  "#000" |  Outer line color for shape and text<br>(图形或文本描边的颜色)   |
| fontColor  | Color  | "#000" |  Font color   |
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
### Line: line()

- basic: [[x1, y1], [x2, y2], [x3, y3]...]

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| [x1, y1] | Number |  | The start coordinate of the line. |

**Example:**

    A.line({
        basic: [[10, 100], [200, 100], [10, 200]]
        lineCap: "round",
        lineWidth: 10,
        fillColor: "rgb(255,165,0)",
    });

    A.line({
        basic1: [[10, 100], [200, 100], [10, 200]],
        basic: [[20, 100], [300, 100], [20, 200]],
        lineCap: "round",
        lineJoin: "round",
        lineWidth: 10,
        fillColor: "rgb(255, 165, 0)",
        strokeColor: "#00f",
        // strokeLinerGradient: [0, 0, 170, 0],
        // stop: [[0, "black"], [0.5,"blue"], [1,"red"]],
        closed: true
    });

### Arc: arc()

- basic: [x, y, radius, startAngle, endAngle, ccw]

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x | Number |  | The x-coordinate of the center of the circle |
| y | Number |  | The y-coordinate of the center of the circle |
| radius | Number |  | The radius of the circle |
| startAngle | Radians | 0 | The starting angle in radians(起始角，以弧度计。) |
| endAngle | Radians | 2 * Math.PI | The ending  angle in radians(结束角，以弧度计) |
| ccw | "false": clockwise<br>"true": counter-clockwise. | "false" | Counterclockwise<br>(规定应该逆时针还是顺时针绘图) |

**Example:**

    b.arc({
        basic1: [60, 60, 60, 0, Math.PI],
        basic: [100, 100, 60, 0, Math.PI]
        shadow: [0, 0, 7, "#f00"],
        strokeColor: "#0000ff"
    });

### Quadratic curve: quadratic()

**Example:**

    b.quadratic({
        shadow: [1, 1, 7, "#0f0"],
        color: "#0000ff",
        shadowColor: "#000",
        basic: [60, 20, 20, 100, 200, 10],
        basic1: [
                [10, 10, 10, 100, 100, 150],
                [40, 100, 250, 30],
                [50, 120, 300, 60]
               ],
        // closed: true
    });

### Bezier curve: bezier()

**Example:**

    b.bezier({
        color: "#0000ff",
        basic: [25, 50, 175, 50, 25, 150, 175, 150],
        basic1: [
                [25, 80, 175, 50, 25, 150, 275, 150],
                [275, 150, 125, 1, 300, 150]
               ],
        // closed: true
    });

### Rectangle: rect()

- basic: [x, y, rectWidth, rectHeight]

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x | Number |  | The x-coordinate of the upper-left corner of the rectangle |
| y | Number |  | The y-coordinate of the upper-left corner of the rectangle |
| rectWidth | Number |  | Width of rectangle |
| rectHeight | Number |  | Height of rectangle |

**Example:**

    A.rect({
        basic: [10, 50, 300, 100],
        basic1: [40, 80, 300, 100],
        fillRradialGradient: [75, 50, 5, 90, 60, 100]
    });

    for (var i = 10; i < 50; i = i + 10) {
        A.rect({
            basic: [i, i, 300, 100]
        });
    }

### Foursquare: square()

- basic: [x, y, width]

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x | Number |  | The x-coordinate of the upper-left corner of the foursquare |
| y | Number |  | The y-coordinate of the upper-left corner of the foursquare |
| width | Number |  | Width of foursquare |

**Example:**

    b.square({
        basic: [40, 80, 100],
        basic1: [50, 90, 100],
        fillColor: "#000"
    });

### Text: text()
- basic: [x, y, text, maxWidth]

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x | Number |  | The x coordinate where to start painting the text |
| y | Number |  | The y coordinate where to start painting the text |
| text | String |  | Width of rectangle and foursquare |
| maxWidth | Number | | Optional. The maximum allowed width of the text, in pixels|

**Example:**

    A.text({
        basic: [10, 100, "basic"],
        basic1: [10, 130, "basic1"]
        lineWidth: 10,
        shadow: [1, 1, 7, "#0f0"],
        linerGridient: [0, 0, 170, 0],
        stop: [[0, "black"], [0.3,"magenta"],[0.5,"blue"],[0.6,"green"],[0.8,"yellow"],[1,"red"]],
        font: "30px Arial Black",
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

    A.rect({        
        basic: [10, 50, 300, 100],
        fillColor: "#000"
    })
    .clean();  // Clean the whole canvas

    A.rect({
        basic: [10, 50, 300, 100],
        fillColor: "#000"
    })
    .clean(20, 20, 100, 100);  // Clean the some parts

# To-Do

## Functions

- [ ] Pattern stroke and fill style
- [x] Gradient stroke style
- [x] drawRect()
- [x] drawArc()

## Improvements

- [ ] Depart some specific property from basic
- [x] Continuously drawing
- [x] Remove strokeText property

## Bugs