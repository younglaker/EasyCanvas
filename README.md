# About

A HTML5 canvas library based on pure JavaScript.

Welcome to join us~

# Who use this？

[Pixeler](http://laker.me/pixeler/), an app of designing pixel picture.

    If you use EasyCanvas in your projects too, welcome to show your projects here.

# Documents

## Init

```
    <canvas id="canvasId" width="550" height="500"></canvas>

    var A = new EasyCanvas("canvasId");
```

## Common Style

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| closed | Bool  | false  | Creates a path from the last point back to the starting point<br>(闭合图形)   |
| fillColor  |  Color   |  "transparent" |  Fill Color<br>(填充颜色)  |
| lineCap |  "butt"(平直),<br> "round"(圆形),<br> "square"(正方形) | "butt"  | The style of the end caps for a line<br>(线条结束端点的样式)  |
| lineJoin |  "bevel"(斜角),<br>"round"(圆角),<br>"miter"(尖角) | "miter"  | The type of corner created, when two lines meet<br>(两条线相交时，所创建的拐角类型)  |
| lineWidth  | Number  | 1 | Line width<br>(线条宽度)  |
| shadow  |  [Number, Number, Number, Color] | [1, 1, 1, "#fff"] | Shadow, [shadowX, shadowY, shadowBlur, shadowColor] |
| shadowX |  Number |  | Vertical shadow |
| shadowY |  Number |  | Horizontal shadow |
| shadowBlur |  Number |  | Shadow blur |
| shadowColor |  Color |  | Shadow color |
| strokeColor | Color  |  "#000" |  Outer line color for shape and text<br>(图形或文本描边的颜色)   |
|  |  |  |  |

### Gradient

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| fillLinerGradient | Arrays |  | [x0, y0, x1, y1]<br>x0, y0 and x1, y1: The start and end point of the gradient for fill style<br>x0、y0 和 x1、y1:  填充线性渐变的起始点、结束点 |
| fillRradialGradient | Arrays |  | [x0, y0, r0, x1, y1, r1]<br>x0, y0 and x1,  y1: The starting and end circle of the gradient<br>r0 and r1： The radius of the starting and ending circle for fill style<br>x0, y0 和 x1, y1:  填充圆形渐变的起始、结束点<br>r0 和 r1: 开始和结束的圆的半径 |
| strokeLinerGradient | Arrays |  | [x0, y0, x1, y1]<br>x0, y0 and x1, y1: The start and end point of the gradient for stroke style<br>x0、y0 和 x1、y1:  描边线性渐变的起始点、结束点 |
| strokeRradialGradient | Arrays |  | [x0, y0, r0, x1, y1, r1]<br>x0, y0 and x1,  y1: The starting and end circle of the gradient for stroke style<br>r0 and r1： The radius of the starting and ending circle<br>(x0, y0 和 x1, y1:  描边圆形渐变的起始、结束点)<br>(r0 和 r1: 开始和结束的圆的半径)|
| stop | Arrays | [[0, "black"], [1, "white"]] | [[n1, "color"], [n2, "color"]...[nx, "color"]]<br>n: Between 0.0 and 1.0 that represents the position between start and end in a gradient<br>(n: 在0和1之间，渐变停留的位置) |

- **Example:**



## Variable

| Property | Description | Example |
|---|---|---|
| width | The width of canvas | var w = A.width; |
| height | The height of canvas | var h = A.height; |

## Drawing
### line(): Draw line

- **Usage of 'basic':**

```
    basic: [[x1, y1], [x2, y2], [x3, y3]...]
```

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| [x1, y1] | Number |  | The start coordinate of the line. |

> You can use "basic", "basic1", "basic2"..."basicN" to draw continously, and there is no "basic0".

- **Example:**

```
    A.line({
        basic: [[10, 100], [200, 100], [10, 200]]
        lineCap: "round",
        lineWidth: 10,
        fillColor: "rgb(255,165,0)",
    });

    A.line({
        basic: [[20, 100], [300, 100], [20, 200]],
        basic1: [[10, 100], [200, 100], [10, 200]],
        lineCap: "round",
        lineJoin: "round",
        lineWidth: 10,
        fillColor: "rgb(255, 165, 0)",
        strokeColor: "#00f",
        // strokeLinerGradient: [0, 0, 170, 0],
        // stop: [[0, "black"], [0.5,"blue"], [1,"red"]],
        closed: true
    });
```

### arc(): Draw arc

- **Usage of 'basic':**

```
    basic: [x, y, radius, startAngle, endAngle, ccw]
```

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x, y | Number |  | The coordinate of the center of the circle. |
| radius | Number |  | The radius of the circle. |
| startAngle, endAngle | Radians |  | The starting and ending angle in radians.(起始角/结束角，以弧度计。) |
| acw | "false": clockwise<br>"true": anti-clockwise. | "false" | Anti-clockwise.<br>(规定应该逆时针还是顺时针绘图) |

- **Example:**

```
    b.arc({
        basic: [100, 100, 60, 0, Math.PI],
        basic1: [60, 60, 60, 0, Math.PI],
        shadow: [0, 0, 7, "#f00"],
        strokeColor: "#0000ff"
    });
```

### Quadratic curve: quadratic()

- **Usage of 'basic':**

```
    basic: [startX, startY, controlX, controlY, endX, endY]

    basic: [
                [startX, startY, controlX, controlY, endX, endY],
                [controlX, controlY, endX, endY]
            ]
```

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| startX, startY | Number |  | The coordinate of start point. |
| controlX, controlY | Number |  | The coordinate of control point. |
| endX, endY | Number |  | The coordinate of end point. |

- **Example:**

```
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
```

### bezier(): Draw bezier curve

```
    basic: [startX, startY, control1X, control1Y, control2X, control2Y, endX, endY]
    basic: [
                [startX, startY, control1X, control1Y, control2X, control2Y, endX, endY],
                [control1X, control1Y, control2X, control2Y, endX, endY]
            ]
```

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| startX, startY | Number |  | The coordinate of start point. |
| control1X, control1Y | Number |  | The coordinate of first control point. |
| control2X, control2Y | Number |  | The coordinate of second control point. |
| endX, endY | Number |  | The coordinate of end point. |

- **Example:**

```
    b.bezier({
        color: "#0000ff",
        basic: [25, 50, 175, 50, 25, 150, 175, 150],
        basic1: [
                [25, 80, 175, 50, 25, 150, 275, 150],
                [275, 150, 125, 1, 300, 150]
               ],
        // closed: true
    });
```

### rect(): Draw rectangle

- **Usage of 'basic':**

```
    basic: [x, y, rectWidth, rectHeight]
```

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x, y | Number |  | The coordinate of the upper-left corner of the rectangle. |
| rectWidth, rectHeight | Number |  | The width and height of rectangle. |

- **Example:**

```
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
```

### square(): Draw Foursquare

- **Usage of 'basic':**

```
    basic: [x, y, width]
```

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x, y | Number |  | The coordinate of the upper-left corner of the foursquare |
| width | Number |  | Width of foursquare |

- **Example:**

```
    b.square({
        basic: [40, 80, 100],
        basic1: [50, 90, 100],
        fillColor: "#000"
    });
```

### Text: text()

- **Usage of 'basic':**

```
basic: [x, y, text, maxWidth]
```

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x, y | Number |  | The coordinate where to start painting the text |
| text | String |  | Width of rectangle and foursquare |
| maxWidth | Number | | Optional. The maximum allowed width of the text, in pixels|

- Font Style

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| fontColor  | Color  | "#000" |  Font color   |
| textBaseline | "alphabetic"(普通的字母基线)<br>"top"(em 方框的顶端)<br>"hanging"(悬挂基线)<br>"middle"(em 方框的正中)<br>"ideographic"(表意基线)<br>"bottom"(em 方框的底端) | "alphabetic" | Text baseline.<br>(文本基线)|
| textAlign | "start"(在指定的位置开始)<br>"end"(在指定的位置结束)<br>"center"(文本的中心被放置在指定的位置)<br>"left"(文本左对齐)<br>"right"(文本右对齐) | "start" | Text align.<br>(文本对齐方式) |

- **Example:**

```
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
```

## Layer
### coordinates(grid_width, coodiful, color): Draw reference line

Draw grids of canvas in order to draw canvas more easily.

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| grid_width | Number  | 50  | The width of each grid  |
| coodiful | Bool  | false  | Whether show the coordinate number |
| color | Css color  | "#000"  | The color of line and text  |

- **Example:**

![A.coordinates(100, true);](./doc_img/coordinates.png)

```
    A.coordinates(); // Draw the whole canvas without coordinates bumber

    A.coordinates(20); // Set each grid width as 20px

    A.coordinates(100, true); // Set each grid width as 100px and show coorfinates number

    A.coordinates(100, true, "rgb(255, 165, 0)"); // Show coorfinates number
```

### cleanRect(x, y, width, heigh): Clean canvas in rectangle shape

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| x, y | Number |  | The coordinate of start point |
| width, heigh | Number |  | The width and heigh of the rectangle |

- **Usage**

```
    clean() : Clean the whole canvas
    clean(x, y, width, heigh) : Clean some parts
```

- **Example:**

```
    A.rect({
        basic: [10, 50, 300, 100],
        fillColor: "#000"
    })
    .clean();  // Clean the whole canvas

    A.rect({
        basic: [10, 50, 300, 100],
        fillColor: "#000"
    })
    .clean(20, 20, 100, 100);  // Clean some parts
```


### cleanArc(x, y, radius, startAngle, endAngle, anticlockwise): Clean canvas in arc shape

| Property | Value  | Default  | Required |   Description  |
|---|---|---|---|---|
| x, y | Number | | Y | The coordinate of start point |
| startAngle, endAngle | Radians | | Y | The start and end angle |
| anticlockwise | "false": clockwise<br>"true": anti-clockwise. | false | N | Anti-clockwise |


### toImg(save_btn_id, img_name): Save canvas to image

Save canvas to png image.

| Property | Value  | Default | Required |   Description  |
|---|---|---|---|---|
| save_btn_id | String | | Y | The id of save button( using <a> tag, not <button>) |
| img_name | String | "mypainting" | | The name of saving image |


- **Example:**

```
    <input id="pic_name" type="text">
    <a href="#" id="save_canvas">Save</a>
    // using <a> tag, not <button>

    $("#save_canvas").click(function() {
        A.toImg('save_canvas', $("#pic_name").val());
    });
```


# To-Do

## Functions

- [ ] Pattern stroke and fill style
- [ ] Transformations
- [ ] Draw image,http://www.runoob.com/tags/canvas-drawimage.html
- [x] Save canvas to image
- [ ] copy(),http://www.runoob.com/tags/canvas-putimagedata.html

## Improvements

- [x] Continuously drawing
- [x] clean() function seperate to cleanReact() and cleanArc()

## Bugs
- [ ] Can't set font weight, it doesn't work
