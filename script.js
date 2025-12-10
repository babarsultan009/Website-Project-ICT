let firstsong=document.getElementById("firstsong");
let playicon=document.getElementById('playicon');
let action=document.getElementsByClassName('action');

action=0;
playicon.onclick=function () {
  if (firstsong.paused) {
    firstsong.play();
    playicon.src="pausebutton.png";
    action=1;
  }else {
    firstsong.pause();
    playicon.src="playbutton.png";
  }
}


