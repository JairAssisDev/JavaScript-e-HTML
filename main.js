var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "green";
pincel.fillRect(0,0 , 800,400);
pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(0,200);
pincel.lineTo(400,0);
pincel.lineTo(400,400);
pincel.fill();
pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(800,200);
pincel.lineTo(400,0);
pincel.lineTo(400,400);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(400,200,160,0,2*3.14);
pincel.fill();