import styled from 'styled-components';
import Colors from '../../Theme/Colors';
import Dimensions from '../../Theme/Dimensions';
import Link from '../LinkWrapper';


export const Holder = styled.div.attrs({
    'data-layout': 'row',
    'data-layout-align': 'center center',
  })`
    width: 100%;
    height: ${Dimensions.headerHeight}px;
    background-color: ${Colors.primary1Color};
    color: ${Colors.white};
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(255,255,255, 0.2), 0 6px 20px 0 rgba(255,255,255, 0.19);
  `;

  export const MenuItemLink = styled(Link).attrs({
  })`
    padding: 10px;
    font-weight: 400;
  `;


  export const MenuItemDD = styled.div.attrs({
  })`
    padding: 10px;
    font-weight: 400;
    position: relative;
    margin-right: 24px;
    cursor: pointer;
  `;

  export const ArrowIcon = styled.i.attrs({
    className: 'material-icons'
  })`
    position: absolute;
    transition: all ease 0.6s;
    transform: ${props => props.open ? 'rotate(0)': 'rotate(180deg)'};

  `;


  export const DDMenu = styled.div.attrs({
    className: 'ddMenu'
  })`
    padding: 4px 16px;
    font-weight: 400;
    position: absolute;
    top: 40px;
    background-color: ${Colors.primary1Color};
    width: max-content;
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
    border-radius: 8px;
    transform: ${props => props.show ? 'scale(1,1)': 'scale(0,0)'};
    transform-origin: 0 0;
    transition: all ease 0.6s;

  `;

  export const DDMenuItem = styled(Link).attrs({
  })`
    padding: 4px 0;
    font-weight: 400;
    cursor: pointer;
    & div {
      padding: 6px 0;
    }
  `;


