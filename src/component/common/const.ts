function getDetailClient() {
  return navigator.userAgent;
}

function getScreen() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export { getDetailClient, getScreen };
