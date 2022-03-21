import React from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Logo } from '../../Theme/Styled';
import * as Styled from './Styled';
import Header from '../Header';
import Footer from '../Footer';

const Layout = (props) => {

  /* const menu = useSelector((state) => state.menu);

  if (menu.length === 0) {
    return (
    <Styled.Holder data-layout="column" data-layout-align="center center">
      <Container data-layout="row" data-layout-align="center center" dark>
        <Logo dark padded>FastCo</Logo></Container>
    </Styled.Holder>);
  } */
  return (
    <Styled.Holder>
      {/* <Header menu={menu} />
      {props.children}
      <Footer menu={menu} /> */}
      <Header />
      {props.children}
      <Footer />
    </Styled.Holder>
  );
}

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.any,
};

Layout.defaultProps = {
  location: {},
  children: null,
};

export default Layout;
