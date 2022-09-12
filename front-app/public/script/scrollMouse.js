// @ts-ignore
// const ScrollMouse = () => {

//window.innerHeight = taille fenêtre client
//document.body.clientHeight = taille du body dans la fenêtre client

console.log('roro');

var position = {
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0
};
document.onmousemove = function (event) {
  let pageX = event.pageX
  let pageY = event.pageY
  let clientX = event.clientX
  let clientY = event.clientY
  /* Simulation de latence avec setTimeout */
  //setTimeout(() => {
  position = {
    pageX: pageX,
    pageY: pageY,
    clientX: clientX,
    clientY: clientY
  }
  //}, 2000)
}

if (screen.width > 1600) {
  setInterval(cursorController, 100);
}



function cursorController() {
  let mousePosPercentage = cursorToWindowPercentage(position.clientY, window.innerHeight);

  const maxSpeed = 30;
  const minSpeed = 0;
  const topThreshold = 70;
  const downThreshold = 30;
  let speed = null;

  // down
  if (mousePosPercentage >= topThreshold) {
    let diffTreshold = 100 - topThreshold;
    let ourPos = mousePosPercentage - topThreshold;
    let speedPercent = ourPos * 100 / diffTreshold;
    let speedDiff = maxSpeed - minSpeed;
    speed = (speedDiff / 100) * speedPercent + minSpeed;
    moveCursor(speed);
  }

  //up
  if (mousePosPercentage <= downThreshold) {
    let ourPos = mousePosPercentage - downThreshold;
    let speedPercent = ourPos * 100 / downThreshold;
    let speedDiff = maxSpeed - minSpeed;
    speed = (speedDiff / 100) * speedPercent + minSpeed;
    moveCursor(speed);
  }
}

function moveCursor(speed) {
  window.scroll(position.clientX, window.pageYOffset + speed);
}

function cursorToWindowPercentage(cursor, window) {
  return parseInt(String(cursor * 100 / window), 10);
}

// }

// export default ScrollMouse;