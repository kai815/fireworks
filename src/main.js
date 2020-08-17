window.onload = function(){
  init()
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