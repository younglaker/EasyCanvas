# About

A HTML5 canvas library based on pure JavaScript.

# Documents

## Init

	var a = new EasyCanvas("canvasid");

## Line: drawLine()

|  Property | Value  | Default  |   Description  |
|---|---|---|---|
|  color | Hex or RGB  |  "#000" |     |
|  closed | Bool  | false  |     |
| fillColor  |  Hex or RGB   |  "transparent" |     |
|  lineCap |  "butt", "round", "square" |   |     |
| lineWidth  | Number  | 1 |     |
| points  |  Arrays  | [[0, 0], [0, 0]]  |     |
|   |   |   |     |

Example:

    a.drawLine({
        closed: true,
        lineCap: "round",
        lineWidth: 10,
        filled: true,
        fillColor: "rgb(255,165,0)",
    	points: [[10, 100], [200, 100], [10, 200]]
    });