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
| points  |  Arrays  | [[0, 0], [0, 0]]  | Coordinate, [[x1, y1], [x2, y2], [x3, y3]...] <br>([x1, y1]是起始坐标)  |
| shadow  |  [Num,"#FFF"] | [0,"#FFF"]  |   shadow  |
| strokeColor | Hex or RGB  |  "#000" |  Outer line color for shape and text<br>(图形或文本描边的颜色)   |
| strokeText  |  Bool |  false  |  Whether stroke the text<br>(是否开启给文本描边)  |
| text | Sting  | "Test"  |   Text  |
| fontColor  | Hex or RGB  | "#000" |  Font color   |
|   |   |   |     |

# Drawing
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

## Arc: drawArc()

## Rectangle: drawRect()

## Text: drawText()

# Layer
## Reference line: coordinate()