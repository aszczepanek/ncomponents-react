const lastPosition = {
  clientX: 0,
  clientY: 0
}
let isFollowEnabled = false;

export const mouseFollower = {
  startFollowing,
  getLastPosition
}

function startFollowing() {
  if (isFollowEnabled) return;

  isFollowEnabled = true;
  document.addEventListener('mousemove', onMouseMove);
}

function getLastPosition() {
  const { clientX, clientY } = lastPosition;

  return {
    clientX,
    clientY
  };
}

function onMouseMove(ev: MouseEvent) {
  lastPosition.clientX = ev.clientX;
  lastPosition.clientY = ev.clientY;
}