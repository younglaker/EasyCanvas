;(function (window) {

	window.EasyCanvas = EasyCanvas = function (selector, root_id, tag) {
		return new CanvasObj(selector, root_id, tag);
	};

	var CanvasObj = function (canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.defaults = {
			basic: false,
			ccw: false,
			closed: false,
			endAngle: 2 * Math.PI,
			fillColor: "transparent",
			fontColor: "#000",
			fontStroke: false,
			lineCap: "butt",
			lineJoin: "miter",
			lineMiterLimit: 100,
			lineWidth: 1,
			fillLinerGradient: false,
			fillRradialGradient: false,
			font: "14px Arial Black",
			points: [[0, 0], [0, 0]],
			shadow: [1, 1, 1, "#fff"],
			shadowX: false,
			shadowY: false,
			shadowBlur: false,
			shadowColor: false,
			startAngle: 0,
			strokeColor: "#000",
			strokeLinerGradient: false,
			strokeRradialGradient: false,
			stop: [[0, "black"], [1, "white"]],
			text: null,
			textBaseline: "alphabetic",
			textAlign: "start"
		};

		/*
		*  Draw
		*/
		this._draw = function () {
			this.ctx.fill();
			this.ctx.stroke();
			this.ctx.closePath();
		}

		/*
		*  Renew defaults with original defaults
		*/
		this._renewDefaults = function () {
			this.defaults = JSON.parse(JSON.stringify(g_defaults));
		}
	};

	var g_defaults = {
		basic: false,
		ccw: false,
		closed: false,
		endAngle: 2 * Math.PI,
		fillColor: "transparent",
		fontColor: "#000",
		fontStroke: false,
		lineCap: "butt",
		lineJoin: "miter",
		lineMiterLimit: 100,
		lineWidth: 1,
		fillLinerGradient: false,
		fillRradialGradient: false,
		font: "14px Arial Black",
		points: [[0, 0], [0, 0]],
		shadow: [1, 1, 1, "#fff"],
		shadowX: false,
		shadowY: false,
		shadowBlur: false,
		shadowColor: false,
		startAngle: 0,
		strokeColor: "#000",
		strokeLinerGradient: false,
		strokeRradialGradient: false,
		stop: [[0, "black"], [1, "white"]],
		text: null,
		textBaseline: "alphabetic",
		textAlign: "start"
	};

	/*
	*  Extend defaults with user options
	*/
	function _extendDefaults (source, settings) {
		var property;
		for (property in settings) {
			if (settings.hasOwnProperty(property)) {
				source[property] = settings[property];
			}
		}
		return source;
	}
	
	/*
	*  Deal with fillStyle for color/gridient/patten
	*/
	function _fillStyle (ctx, opt) {
		if (opt.fillLinerGradient) {
			var parameter = opt.fillLinerGradient;
			var liner_grd = ctx.createLinearGradient(parameter[0], parameter[1], parameter[2], parameter[3]);

			for (var i = 0; i < opt.stop.length; i++) {
				liner_grd.addColorStop(opt.stop[i][0], opt.stop[i][1]);
			}

			return liner_grd;

		} else if (opt.fillRradialGradient) {
			var parameter = opt.fillRradialGradient;
			var radial_grd = ctx.createRadialGradient(parameter[0], parameter[1], parameter[2], parameter[3], parameter[4], parameter[5]);

			for (var i = 0; i < opt.stop.length; i++) {
				radial_grd.addColorStop(opt.stop[i][0], opt.stop[i][1]);
			}

			return radial_grd;

		} else {
			return opt.fillColor;
		}
	}

	/*
	*  Deal with strokeStyle for color/gridient/patten
	*/
	function _strokeStyle (ctx, opt) {
		if (opt.strokeLinerGradient) {
			var parameter = opt.strokeLinerGradient;
			var liner_grd = ctx.createLinearGradient(parameter[0], parameter[1], parameter[2], parameter[3]);

			for (var i = 0; i < opt.stop.length; i++) {
				liner_grd.addColorStop(opt.stop[i][0], opt.stop[i][1]);
			}

			return liner_grd;

		} else if (opt.strokeRradialGradient) {
			var parameter = opt.strokeRradialGradient;
			var radial_grd = ctx.createRadialGradient(parameter[0], parameter[1], parameter[2], parameter[3], parameter[4], parameter[5]);

			for (var i = 0; i < opt.stop.length; i++) {
				radial_grd.addColorStop(opt.stop[i][0], opt.stop[i][1]);
			}

			return radial_grd;

		} else {
			return opt.strokeColor;
		}
	}

	/*
	*  Set basic style
	*/
	function _setOpt (ctx, opt) {
		if (opt.shadowX) opt.shadow[0] = opt.shadowX;
		if (opt.shadowY) opt.shadow[1] = opt.shadowY;
		if (opt.shadowBlur) opt.shadow[2] = opt.shadowBlur;
		if (opt.shadowColor) opt.shadow[3] = opt.shadowColor;

		ctx.fillStyle = _fillStyle(ctx, opt);
		ctx.strokeStyle = _strokeStyle(ctx, opt);
		ctx.lineWidth = opt.lineWidth;
		ctx.lineCap = opt.lineCap;
		ctx.lineJoin = opt.lineJoin;
		ctx.miterLimit = opt.lineMiterLimit;
		ctx.shadowOffsetX = opt.shadow[0];
		ctx.shadowOffsetY = opt.shadow[1];
		ctx.shadowBlur = opt.shadow[2];
		ctx.shadowColor = opt.shadow[3];
		ctx.beginPath();
	}

	CanvasObj.prototype = {
		/*
		*  Draw line
		*/
		drawLine: function (settings) {
			var opt = _extendDefaults(this.defaults , settings);
			var bs = {};
			
			_setOpt(this.ctx, opt);
			
			// 遍历所有设置
			for (var i in opt) {
				// 把 basic 设置放入 bs
				if (!!i.match(/basic/))
					// 给 “baisc” 填充成 “baisc0”，方便后续遍历
					bs[!!i.match(/basic\d+/) ? i : i + "0"] = opt[i];
			}

			for (var i = 0; i < Object.keys(bs).length; i++) {
				var basic = bs["basic" + i];

				this.ctx.moveTo(basic[0][0], basic[0][1]);

				for (var j = 1; j < basic.length; j++) {
					this.ctx.lineTo(basic[j][0], basic[j][1]);
				}

				if (opt.closed) {
					this.ctx.lineTo(basic[0][0], basic[0][1]);
				}
			}

			this._draw();
			this._renewDefaults();

			return this;
		},

		/*
		*  Draw arc
		*/
		drawArc: function (settings) {
			var opt = _extendDefaults(this.defaults, settings);
			
			_setOpt(this.ctx, opt);

			this.ctx.arc(opt.points[0], opt.points[1], opt.radius, opt.startAngle, opt.endAngle, opt.ccw);

			this._draw();
			this._renewDefaults();

			return this;
		},

		/*
		 *  Draw quadratic curve
		 */
		drawQuadratic: function(settings) {
			var opt = _extendDefaults(this.defaults, settings);
			var bs = {};

			_setOpt(this.ctx, opt);

			// 遍历所有设置
			for (var i in opt) {
				// 把 basic 设置放入 bs
				if (!!i.match(/basic/))
					// 给 “baisc” 填充成 “baisc0”，方便后续遍历
					bs[!!i.match(/basic\d+/) ? i : i + "0"] = opt[i];
			}

			for (var i = 0; i < Object.keys(bs).length; i++) {
				var basic = bs["basic" + i];

				for (var j = 0; j < basic.length; j++) {

					if (j === 0) {	// basic0
						this.ctx.moveTo(basic[j][0], basic[j][1]);
						this.ctx.quadraticCurveTo(basic[j][2], basic[j][3], basic[j][4], basic[j][5]);

					} else {	// 其他basic使用上一笔画的结束点作为此笔画的起始点
						this.ctx.moveTo(basic[j - 1][4], basic[j - 1][5]);
						this.ctx.quadraticCurveTo(basic[j][0], basic[j][1], basic[j][2], basic[j][3]);
					}
				}

				if (opt.closed) {
					this.ctx.lineTo(basic[0][0], basic[0][1]);
				}
			}
			
			this._draw();
			this._renewDefaults();
			
			return this;
		},

		/*
		 *  Draw bezier curve
		 */
		drawBezier: function(settings) {
			var opt = _extendDefaults(this.defaults, settings);
			var bs = {};

			_setOpt(this.ctx, opt);
			
			// 遍历所有设置
			for (var i in opt) {
				// 把 basic 设置放入 bs
				if (!!i.match(/basic/))
					// 给 “baisc” 填充成 “baisc0”，方便后续遍历
					bs[!!i.match(/basic\d+/) ? i : i + "0"] = opt[i];
			}

			for (var i = 0; i < Object.keys(bs).length; i++) {
				var basic = bs["basic" + i];

				for (var j = 0; j < basic.length; j++) {

					if (j === 0) {	// basic0
						this.ctx.moveTo(basic[j][0], basic[j][1]);
						this.ctx.bezierCurveTo(basic[j][2], basic[j][3], basic[j][4], basic[j][5], basic[j][6], basic[j][7]);

					} else {	// 其他basic使用上一笔画的结束点作为此笔画的起始点
						this.ctx.moveTo(basic[j - 1][6], basic[j - 1][7]);
						this.ctx.bezierCurveTo(basic[j][0], basic[j][1], basic[j][2], basic[j][3], basic[j][4], basic[j][5]);
					}
				}

				if (opt.closed) {
					this.ctx.lineTo(basic[0][0], basic[0][1]);
				}
			}

			this._draw();
			this._renewDefaults();
			
			return this;
		},

		/*
		*  Draw rectangle
		*/
		drawRect: function (settings) {
			var opt = _extendDefaults(this.defaults , settings);

			_setOpt(this.ctx, opt);

			this.ctx.rect(opt.points[0], opt.points[1], opt.rectWidth, opt.rectHeight);

			this._draw();
			this._renewDefaults();

			return this;
		},

		/*
		*  Draw rectangle
		*/
		drawSquare: function (settings) {
			var opt = _extendDefaults(this.defaults , settings);

			_setOpt(this.ctx, opt);

			this.drawRect({
				points: [opt.points[0], opt.points[1]],
				rectWidth: opt.rectWidth,
				rectHeight: opt.rectWidth,
			});

			this._renewDefaults();

			return this;
		},
		
		/*
		*  Draw text
		*/
		drawText: function (settings) {
			this.defaults.fillColor = "#000";
			this.defaults.strokeColor = "transparent";

			var opt = _extendDefaults(this.defaults, settings);

			_setOpt(this.ctx, opt);

			this.ctx.font = opt.font;
			this.ctx.textBaseline = opt.textBaseline;
			this.ctx.textAlign = opt.textAlign;
			this.ctx.fillText(opt.text, opt.points[0], opt.points[1]);
			this.ctx.strokeText(opt.text, opt.points[0], opt.points[1]);

			this.ctx.closePath();

			this._renewDefaults();

			return this;
		},

		/*
		*  Draw layer coordinate
		*/
		coordinate: function (grid_width, coodiful, color) {
			grid_width = grid_width || 50;
			coodiful = coodiful || false;
			color = color || "#000";

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
				for (var i = 0; i <= x; i++) {  //绘制列
					this.drawLine({
						points: [[i * grid_width, 0], [i * grid_width, y * grid_width]]
				    });
				}

				for (var i = 0; i <= y; i++) {  //绘制行
				    this.drawLine({
				        points: [[0, i * grid_width], [x * grid_width, i * grid_width]]
				    });
				}
			}

			return this;
		},

		/*
		*  Clean the whole or a part of canvas
		*/
		clean: function () {
		    if (arguments[0]) {
		    	this.ctx.clearRect(arguments[0], arguments[1], arguments[2], arguments[3]);
		    } else {
		    	this.ctx.clearRect(0, 0, this.width, this.height);
		    }

			return this;
		}
	};

}(window));
