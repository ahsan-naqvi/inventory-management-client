const headerHeight = 80;
const headerBoxWidth = 200;
const metrics = {
  // GENERAL
  screenWidth: document.getElementById('root').offsetWidth,
  screenHeight: window.innerHeight,
  isMobile: document.getElementById('root').offsetWidth < 900,
  isIpad: window.innerWidth < 1024,
  headerHeight,
  contentHeight: window.innerHeight - headerHeight,
  boxWidth: headerBoxWidth,
};

export default metrics;
