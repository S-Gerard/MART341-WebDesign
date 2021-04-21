var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(100, 100);
ctx.lineTo(300, 100);
ctx.stroke();

ctx.moveTo(300, 100);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.moveTo(300, 300);
ctx.lineTo(100, 300);
ctx.stroke();

ctx.moveTo(100, 300);
ctx.lineTo(100, 100);
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.stroke();
