//Created by Samuel Simiyu😝😍

mili = `00`;
sec = `00`;
min = `00`;
hour = `0`;
var i = 1;
var counting = setInterval(count, 10);

function count() {
  if (mili == 99) {
    mili = 0;
    sec++;
    if (sec < 10) {
      sec = "0" + sec;
    }
  }
  if (mili < 10) {
    mili = "0" + mili;
  }
  if (sec == 59) {
    sec = 0;
    min++;
    sec = "0" + sec;
    if (min < 10) {
      min = "0" + min;
    }
  }
  if (min == 59) {
    min = 0;
    hour++;
  }
  var time = `${hour}:${min}:${sec}:${mili}`;
  mili++;
  clock.innerText = time;
}

function start() {
  if (i == 0) {
    i++;
    counting = setInterval(count, 10);
    button1.className = "color2";
  } else {
    i--;
    clearInterval(counting);
    button1.className = "color1";
  }
}

function loaded() {
  mili = `00`;
  sec = `00`;
  min = `00`;
  hour = `0`;
  var begin = `${hour}:${min}:${sec}:${mili}`;
  clock.innerText = begin;
}
loaded();
start();
