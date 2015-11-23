;(function (window) {

	window.EasyCanvas = EasyCanvas = function (selector, root_id, tag) {
		return new CanvasObj(selector, root_id, tag);
	};

	var CanvasObj = function (canvasId) {
	    this.canvas = document.getElementById(canvasId);
	    this.ctx = this.canvas.getContext("2d");
	    this.defaults = {
			closed: false,
			fillColor: "transparent",
			fontColor: "#000",
			fontStrock: false,
			lineCap: "butt",
			lineWidth: 1,
			points: [[0, 0], [0, 0]],
			shadow:[0,"#FFF"],
			strokeText: false,
			strokeColor: "#000",
			text: null
		};
	};

	var g_defaults = {
		closed: false,
		fillColor: "transparent",
		fontColor: "#000",
		fontStrock: false,
		lineCap: "butt",
		lineWidth: 1,
		points: [[0, 0], [0, 0]],
		shadow:[0,"#FFF"],
		strokeText: false,
		strokeColor: "#000",
		text: "Test"
	};

	/*
	*  Extend defaults with user options
	*/
	function extendDefaults(source, settings) {
		var property;
		for (property in settings) {
			if (settings.hasOwnProperty(property)) {
				source[property] = settings[property];
			}
		}
		return source;
	}

	/*
	*  Renew defaults with original defaults
	*/
	function renewDefaults(source, ori_defaults) {
		return source = ori_defaults;
	}

	CanvasObj.prototype = {
		/*
		*  Draw line
		*/
		drawLine: function (settings) {
			var opt = extendDefaults(this.defaults , settings);
			
			this.ctx.strokeStyle = opt.strokeColor;
			this.ctx.lineWidth = opt.lineWidth;
			this.ctx.lineCap = opt.lineCap;
			this.ctx.fillStyle = opt.fillColor;
			this.ctx.moveTo(opt.points[0][0], opt.points[0][1]);
			for (var i = 1; i < opt.points.length; i++) {
				this.ctx.lineTo(opt.points[i][0], opt.points[i][1]);
			}
			if (opt.closed) {
				console.log("close");
				this.ctx.lineTo(opt.points[0][0], opt.points[0][1]);
			}
			if (opt.filled) {
				this.ctx.fill();
			}
			this.ctx.shadowBlur = opt.shadow[0][0];
			this.ctx.shadowColor = opt.shadow[0][1];

			this.ctx.stroke();
			this.ctx.closePath();

			renewDefaults(this.defaults, g_defaults);

			return this;
		},

		/*
		*  Draw arc
		*/
		drawArc: function (settings) {
			var opt = extendDefaults(this.defaults, settings);
			
			this.ctx.strokeStyle = opt.strokeColor;
			this.ctx.lineWidth = opt.lineWidth;
			this.ctx.arc(opt.points[0][0], opt.points[0][1], opt.points[0][2],opt.points[1][0], opt.points[1][1] * Math.PI);

			this.ctx.shadowBlur = opt.shadow[0][0];
			this.ctx.shadowColor = opt.shadow[0][1];
			if (opt.filled) {
				this.ctx.fill();
			}

			this.ctx.stroke();

			return this;
		},

		/*
		*  Draw text
		*/
		drawText: function (settings) {
			var opt = extendDefaults(this.defaults, settings);

			this.ctx.fillStyle = opt.fontColor;
			this.ctx.font = opt.font;
			this.ctx.shadowBlur = opt.shadow[0];
			this.ctx.shadowColor = opt.shadow[1];

			this.ctx.fillText(opt.text, opt.points[0][0], opt.points[0][1]);
			if (opt.strokeText) {
				this.ctx.strokeText(opt.text, opt.points[0][0], opt.points[0][1]);
			}
			
			renewDefaults(this.defaults, g_defaults);

			return this;
		},

		/*
		*  Draw rectangle
		*/
		drawRect: function (argument) {
			// body...
		},

		/*
		*  Draw layer coordinate
		*/
		coordinate: function (grid_width, coodiful, color) {
			var cs_width = this.canvas.width;
			var cs_height = this.canvas.height;
			var x = cs_width / grid_width;
			var y = cs_height / grid_width;

			if (coodiful) {
				for (var i = 0; i <= x; i++) {  //绘制列
					this.drawLine({
						points: [[i * grid_width, 0], [i * grid_width, y * grid_width]]
				    }).drawText({
				    	text: i * grid_width,
				    	points: [[i * grid_width, 10]],
				    	fontColor: color
				    });
				}

				for (var i = 0; i <= y; i++) {  //绘制行
				    this.drawLine({
				        points: [[0, i * grid_width], [x * grid_width, i * grid_width]]
				    }).drawText({
				    	text: i * grid_width,
				    	points: [[0, i * grid_width]]
				    });
				}

			} else {
				for (var i = 0; i <= x; i++) {
				    this.drawLine({
				        points: [[i * grid_width, 0], [i * grid_width, y * grid_width]]
				    });
				}

				for (var i = 0; i <= y; i++) {
				    this.drawLine({
				        points: [[0, i * grid_width], [x * grid_width, i * grid_width]]
				    });
				}
			}

			return this;
		}
	};

}(window));
