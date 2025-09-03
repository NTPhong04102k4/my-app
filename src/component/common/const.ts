import { Platform } from "./enum";

function getDetailClient() {
  return navigator.userAgent;
}
function getDataClient() {
  return {
    data: navigator.userActivation,
  };
}

function getScreen() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

const checkPlatform = () => {
  const platform = navigator.platform;
  if (
    platform.startsWith("Win") ||
    platform.startsWith("Mac") ||
    platform.startsWith("Linux")
  ) {
    return Platform.PC;
  } else {
    return Platform.Mobile;
  }
};

export { getDetailClient, getScreen, getDataClient, checkPlatform };
