// Canvas 初始化
var c = document.getElementById('bubbles'),
  ctx = c.getContext('2d'),
  width = window.innerWidth,
  height = window.innerHeight,
  particles = 50,
  minRadius = 1,
  maxRadius = 10,
  speed = 0.00001,
  x = width / particles;

// 气泡
var Bubbles = [];

for (var i = 0; i < particles; i++) {
  Bubbles.push({
    x: i * x,
    y: height * Math.random(),
    r: minRadius + Math.random() * (maxRadius - minRadius),
    speed: 10 * Math.random()
  });
}

function bubble() {

  c.width = width;
  c.height = height;
  for (i = 0; i < Bubbles.length; i++) {
    var b = Bubbles[i];
    //console.log(i, b);
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
    
    b.alpha = .5 * (b.y / height);
    b.speed += speed;
    
    ctx.strokeStyle = "rgba(225, 225, 225, 0.5)";
    ctx.stroke();
    ctx.fillStyle = "hsla(225, 50%, 100%,"+ b.alpha +")";
    ctx.fill();
    b.y -= b.speed;
    if (b.y < 0) {
      b.y = height;
      b.speed = Math.random() * 5;
    }
  }
}

// 描画
function draw() {
  bubble();
  window.requestAnimationFrame(draw);
}

// 画布尺寸
function resizeCanvas() {
  width = window.innerWidth,
  height = window.innerHeight;
  c.width = width;
  c.height = height;
  draw();
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas, false);