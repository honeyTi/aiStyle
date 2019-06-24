(function() {
    var Cbg = function(options) {
        var _this = this;
        _this.options = $.extend({
            control: "auto",
            container: "",
            type: "color",
            width: $(window).width(),
            height: $(window).height(),
            color: ["#6525EE", "#007AFF", "orange", "orangered"],
            imgUrl: "",
            size: [10, 0.5],
            animation_type: 0,
            speed: 1000,
            x: $(window).width() / 2,
            y: $(window).height() / 2
        }, options)
        if (_this.options.container == "" || _this.options.container == " ") {} else {
            var container = _this.options.container.substr(1);
            if (_this.options.container[0] == ".") {
                c = $("." + container)[0];
            } else if (_this.options.container[0] == "#") {
                c = $("#" + container)[0];
            }
            var c, ctx;
            c.width = _this.options.width;
            c.height = _this.options.height;
            ctx = c.getContext("2d");
            var dian_list = [];
            var dian = function(x, y) {
                this.x = x;
                this.y = y;
                if (_this.options.type === "color") {
                    if (typeof _this.options.color === "string") {
                        this.color = _this.options.color;
                    }
                    if (_this.options.color.constructor === Array) {
                        this.color = _this.options.color[parseInt(Math.random() * _this.options.color.length)];
                    }
                }
                if (_this.options.type === "img") {
                    this.img = new Image();
                    if (typeof _this.options.imgUrl === "string") {
                        this.img.src = _this.options.imgUrl;
                    }
                    if (_this.options.imgUrl.constructor === Array) {
                        this.img.src = _this.options.imgUrl[parseInt(Math.random() * _this.options.imgUrl.length)];
                    }
                }
                this.size = _this.options.size[0];
                switch (_this.options.animation_type) {
                case 0:
                    this.dr_x = Math.random() * 8 - 4;
                    this.dr_y = Math.random() * 8 - 4;
                    break;
                case 1:
                    this.dr_x = Math.random() * 4 - 8;
                    this.dr_y = Math.random() * 8 - 4;
                    break;
                case 2:
                    this.dr_x = Math.random() * (8 - 4) + 4;
                    this.dr_y = Math.random() * 8 - 4;
                    break;
                case 3:
                    this.dr_x = Math.random() * 8 - 4;
                    this.dr_y = Math.random() * (8 - 4) + 4;
                    break;
                case 4:
                    this.dr_x = Math.random() * 8 - 4;
                    this.dr_y = Math.random() * 4 - 8;
                    break;
                default:
                    break;
                }
                dian_list.push(this);
            }
            dian.prototype.render = function() {
                this.x += this.dr_x;
                this.y += this.dr_y;
                this.size -= _this.options.size[1];
                if (this.size <= 0) {
                    this.godie();
                } else {
                    ctx.beginPath();
                    if (_this.options.type === "color") {
                        ctx.fillStyle = this.color;
                        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    if (_this.options.type === "img") {
                        ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
                    }
                }
            }
            dian.prototype.godie = function() {
                for (var j = 0; j < 20; j++) {
                    if (this === dian_list[j]) {
                        dian_list.splice(j, 1);
                    }
                }
            }
            if (_this.options.control == "mouse") {
                $(document).mousemove(function(event) {
                    new dian(event.clientX,event.clientY);
                })
            }
            if (_this.options.control == "auto") {
                setInterval(function() {
                    var x = Math.random() * c.width;
                    var y = Math.random() * c.height;
                    new dian(x,y);
                }, _this.options.speed)
            }
            if (_this.options.control == "coordinate") {
                setInterval(function() {
                    var x = _this.options.x;
                    var y = _this.options.y;
                    new dian(x,y);
                }, _this.options.speed)
            }
            var draw = function() {
                ctx.clearRect(0, 0, c.width, c.height);
                var length = length = dian_list.length
                for (var i = 0; i < 20; i++) {
                    var item = dian_list[i];
                    item && item.render()
                }
                window.requestAnimationFrame(draw);
            }
            window.requestAnimationFrame(draw);
        }
    };
    window.Cbg = Cbg;
}())
