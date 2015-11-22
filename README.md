# About

A HTML5 canvas library based on pure JavaScript.

# Documents

## Init

	var a = new EasyCanvas("canvasid");

## Settings

| Property | Value  | Default  |   Description  |
|---|---|---|---|
| closed | Bool  | false  | Creates a path from the last point back to the starting point<br>(闭合图形)   |
| fillColor  |  Hex or RGB   |  "transparent" |  Fill Color<br>(填充颜色)  |
| lineCap |  "butt"(平直),<br> "round"(圆形),<br> "square"(正方形) | "butt"  | The style of the end caps for a line<br>(线条结束端点的样式)  |
| lineJoin |  "bevel"(斜角),<br>"round"(圆角),<br>"miter"(尖角) | "miter"  | The type of corner created, when two lines meet<br>(两条线相交时，所创建的拐角类型)  |
| lineWidth  | Number  | 1 | Line width<br>(线条宽度)  |
| points  |  Arrays  | [[0, 0], [0, 0]]  | Coordinate, [[x1, y], [x2, y2], [x3, y3]...]   |
| strokeColor | Hex or RGB  |  "#000" |  Outer line color<br>(描边颜色)   |
|   |   |   |     |  |

## Line: drawLine()

Example:

    a.drawLine({
        closed: true,
        lineCap: "round",
        lineWidth: 10,
        filled: true,
        fillColor: "rgb(255,165,0)",
    	points: [[10, 100], [200, 100], [10, 200]]
    });