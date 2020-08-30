window.onload = function(){
  init()
  manyRedraw()
}
//初期の黒い背景の描画
function init(){
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  const WINDOW_WIDTH = window.innerWidth;
  const WINDOW_HEIGHT = window.innerHeight;
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
}
//円を描く
function drawCircl(x=10,y=10){
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext( "2d" ) ;
  // パスをリセット
  context.beginPath () ;
  // 円の中心座標: (100,100)
  // 半径: 50
  // 開始角度: 0度 (0 * Math.PI / 180)
  // 終了角度: 360度 (360 * Math.PI / 180)
  // 方向: true=反時計回りの円、false=時計回りの円
  context.arc(x, y, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
  // 塗りつぶしの色
  context.fillStyle = "rgba(255,0,0,0.8)" ;
  // 塗りつぶしを実行
  context.fill() ;
  // 線の色
  // context.strokeStyle = "white";
  // 線の太さ
  // context.lineWidth = 8 ;
  // 線を描画を実行
  context.stroke() ;
}
//多くを再描画
function manyRedraw(){
  for(let x = 1; x < 300; x++){
    drawCircl(x,x)
  }
}