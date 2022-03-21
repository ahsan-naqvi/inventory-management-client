import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Material Icons fonts load */
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v29/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2) format('woff2');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  .material-icons.md-14 { font-size: 14px; }
  .material-icons.md-18 { font-size: 18px; }
  .material-icons.md-24 { font-size: 24px; }
  .material-icons.md-36 { font-size: 36px; }
  .material-icons.md-48 { font-size: 48px; }

  /** App Fonts Loading */

html {
  min-height:  100%;
  scroll-behavior: smooth;
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(http://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wWw.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: italic;
  font-weight: 200;
  src: local('Muli ExtraLight Italic'), local('Muli-ExtraLightItalic'), url(http://fonts.gstatic.com/s/muli/v11/7Au9p_0qiz-afTf-4CPGzWQN.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: italic;
  font-weight: 300;
  src: local('Muli Light Italic'), local('Muli-LightItalic'), url(http://fonts.gstatic.com/s/muli/v11/7Au9p_0qiz-afTf-hCDGzWQN.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: italic;
  font-weight: 400;
  src: local('Muli Italic'), local('Muli-Italic'), url(http://fonts.gstatic.com/s/muli/v11/7Au-p_0qiz-afTf2LwLW.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: italic;
  font-weight: 600;
  src: local('Muli SemiBold Italic'), local('Muli-SemiBoldItalic'), url(http://fonts.gstatic.com/s/muli/v11/7Au9p_0qiz-afTf-8CbGzWQN.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: italic;
  font-weight: 700;
  src: local('Muli Bold Italic'), local('Muli-BoldItalic'), url(http://fonts.gstatic.com/s/muli/v11/7Au9p_0qiz-afTf-lCfGzWQN.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: italic;
  font-weight: 800;
  src: local('Muli ExtraBold Italic'), local('Muli-ExtraBoldItalic'), url(http://fonts.gstatic.com/s/muli/v11/7Au9p_0qiz-afTf-iCTGzWQN.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: italic;
  font-weight: 900;
  src: local('Muli Black Italic'), local('Muli-BlackItalic'), url(http://fonts.gstatic.com/s/muli/v11/7Au9p_0qiz-afTf-rCXGzWQN.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 200;
  src: local('Muli ExtraLight'), local('Muli-ExtraLight'), url(http://fonts.gstatic.com/s/muli/v11/7Au_p_0qiz-adf3nOCX2yg.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 300;
  src: local('Muli Light'), local('Muli-Light'), url(http://fonts.gstatic.com/s/muli/v11/7Au_p_0qiz-adZnkOCX2yg.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  src: local('Muli Regular'), local('Muli-Regular'), url(http://fonts.gstatic.com/s/muli/v11/7Auwp_0qiz-afTLGKA.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 600;
  src: local('Muli SemiBold'), local('Muli-SemiBold'), url(http://fonts.gstatic.com/s/muli/v11/7Au_p_0qiz-ade3iOCX2yg.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 700;
  src: local('Muli Bold'), local('Muli-Bold'), url(http://fonts.gstatic.com/s/muli/v11/7Au_p_0qiz-adYnjOCX2yg.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 800;
  src: local('Muli ExtraBold'), local('Muli-ExtraBold'), url(http://fonts.gstatic.com/s/muli/v11/7Au_p_0qiz-adZXgOCX2yg.ttf) format('truetype');
}
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 900;
  src: local('Muli Black'), local('Muli-Black'), url(http://fonts.gstatic.com/s/muli/v11/7Au_p_0qiz-adbHhOCX2yg.ttf) format('truetype');
}


body {
  margin: 0;
  font-family: "Muli", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height:  100%;
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus {
  color: inherit;
  text-decoration: none;
}

`;


export default GlobalStyles;
