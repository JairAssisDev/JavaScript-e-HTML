function desenhaQuadradoBlack(x,y) {
    y=y*40
    x=x*40
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'Black';
    pincel.fillRect(x, y, 40, 40);


}
function desenhaQuadradogrey21(x,y) {
    y=y*40
    x=x*40
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = '#363636';
    pincel.fillRect(x, y, 40, 40);


}
function desenhaQuadradoMediumOrchid(x,y) {
    y=y*40
    x=x*40
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = '#BA55D3';
    pincel.fillRect(x, y, 40, 40);


}
function desenhaQuadradoDarkOrchid(x,y) {
    y=y*40
    x=x*40
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = '#9932CC';
    pincel.fillRect(x, y, 40, 40);


}

//linha1
var l1 =0;
desenhaQuadradoBlack(l1,0);
desenhaQuadradoBlack(l1,1);
desenhaQuadradogrey21(l1,2);
desenhaQuadradoBlack(l1,3);
desenhaQuadradoMediumOrchid(l1,4);
desenhaQuadradogrey21(l1,5);
desenhaQuadradoBlack(l1,6);
desenhaQuadradogrey21(l1,7);


//linha2
var l2 =1;
desenhaQuadradogrey21(l2,0);
desenhaQuadradogrey21(l2,1);
desenhaQuadradoBlack(l2,2);
desenhaQuadradoBlack(l2,3);
desenhaQuadradoDarkOrchid(l2,4);
desenhaQuadradoBlack(l2,5);
desenhaQuadradogrey21(l2,6);
desenhaQuadradoBlack(l2,7);

//linha3
var l3 =2;
desenhaQuadradoBlack(l3,0);
desenhaQuadradogrey21(l3,1);
desenhaQuadradogrey21(l3,2);
desenhaQuadradogrey21(l3,3);
desenhaQuadradoMediumOrchid(l3,4);
desenhaQuadradoBlack(l3,5);
desenhaQuadradogrey21(l3,6);
desenhaQuadradoBlack(l3,7);

//linha4
var l4 =3;
desenhaQuadradoBlack(l4,0);
desenhaQuadradoBlack(l4,1);
desenhaQuadradogrey21(l4,2);
desenhaQuadradogrey21(l4,3);
desenhaQuadradogrey21(l4,4);
desenhaQuadradogrey21(l4,5);
desenhaQuadradoBlack(l4,6);
desenhaQuadradoBlack(l4,7);

//linha5
var l5 =4;
desenhaQuadradoBlack(l5,0);
desenhaQuadradoBlack(l5,1);
desenhaQuadradogrey21(l5,2);
desenhaQuadradogrey21(l5,3);
desenhaQuadradogrey21(l5,4);
desenhaQuadradogrey21(l5,5);
desenhaQuadradoBlack(l5,6);
desenhaQuadradoBlack(l5,7);

//linha6
var l6 =5;
desenhaQuadradoBlack(l6,0);
desenhaQuadradogrey21(l6,1);
desenhaQuadradogrey21(l6,2);
desenhaQuadradogrey21(l6,3);
desenhaQuadradoMediumOrchid(l6,4);
desenhaQuadradoBlack(l6,5);
desenhaQuadradogrey21(l6,6);
desenhaQuadradoBlack(l6,7);

//linha7
var l7 =6;
desenhaQuadradogrey21(l7,0);
desenhaQuadradogrey21(l7,1);
desenhaQuadradoBlack(l7,2);
desenhaQuadradoBlack(l7,3);
desenhaQuadradoDarkOrchid(l7,4);
desenhaQuadradoBlack(l7,5);
desenhaQuadradogrey21(l7,6);
desenhaQuadradoBlack(l7,7);

//linha8
var l8 =7;
desenhaQuadradoBlack(l8,0);
desenhaQuadradoBlack(l8,1);
desenhaQuadradogrey21(l8,2);
desenhaQuadradoBlack(l8,3);
desenhaQuadradoMediumOrchid(l8,4);
desenhaQuadradogrey21(l8,5);
desenhaQuadradoBlack(l8,6);
desenhaQuadradogrey21(l8,7);

