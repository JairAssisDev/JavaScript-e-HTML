var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

// cabeça
pincel.fillStyle = 'LightGrey';
pincel.fillRect(0,0,320,320);

// olhos
pincel.fillStyle = 'DarkGray';
pincel.fillRect(0,0, 80, 80);
pincel.fillRect(0,0, 40, 120);
pincel.fillRect(80,40, 40, 40);
pincel.fillRect(0,280, 160, 40);
pincel.fillRect(200,280 ,40 , 40);
pincel.fillRect(280,200 ,40 , 120);
pincel.fillRect(120,200 ,80 , 40);
pincel.fillRect(160,00 ,120 , 40);
pincel.fillRect(280,40, 40, 40);

pincel.fillStyle = '#363636';
pincel.fillRect(200,160, 80, 40);
pincel.fillRect(40,160, 80, 40);
pincel.fillRect(40,240, 240, 40);

pincel.fillStyle = 'Silver';
pincel.fillRect(40,80, 40, 40);

pincel.fillStyle = 'Gainsboro';
pincel.fillRect(40,120, 40, 40);

