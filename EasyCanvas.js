// 立即执行的匿名函数
// 开头的分号，意在防止与其他js文件合并压缩时，由于上一个文件没有用分号结尾而产生问题
;(function (window) {

	window.EasyCanvas = EasyCanvas = function (selector, root_id, tag) {
		return new CanvasObj(selector, root_id, tag);
	};
	
	var CanvasObj = function (canvasId) {
	    this.canvas = document.getElementById(canvasId);
	    this.ctx = this.canvas.getContext("2d");
	};

	var defaults = {
		color: "#000",
		startPoint: {x: 0, y: 0},
		endPoint: {x: 0, y: 0}
	};

	// Utility method to extend defaults with user options
	function extendDefaults(source, settings) {
		var property;
		for (property in settings) {
			if (settings.hasOwnProperty(property)) {
				source[property] = settings[property];
			}
		}
		return source;
	}

	CanvasObj.prototype = {
		drawLine: function (settings) {
			var opt = extendDefaults({
				color: "#000",
				startPoint: {x: 0, y: 0},
				endPoint: {x: 0, y: 0}
			}, settings);
			// var opt = $.extend(defaults, settings);
// console.log(opt);
			this.ctx.beginPath();
			this.ctx.moveTo(opt.startPoint.x, opt.startPoint.y);
			this.ctx.lineTo(opt.endPoint.x, opt.endPoint.y);
			this.ctx.strokeStyle = opt.color;
			this.ctx.stroke();
			this.ctx.closePath();
			return this;
		},

		drawRect: function (argument) {
			// body...
		}
	}
}(window));