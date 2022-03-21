import styled from 'styled-components';
import Colors from '../Theme/Colors';
import Dimensions from '../Theme/Dimensions';

export const Logo = styled.div.attrs({
    'data-layout': 'row',
    'data-layout-align': 'center center',
  })`
    background-color: ${props => props.dark ? Colors.primary1Color : Colors.primary2Color};
    color: ${props => props.dark ? Colors.white : Colors.primary1Color};
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
    padding: ${props => props.padded ? '0 40px' : '0'};
  `;

export const Container = styled.div`
    height: auto;
    min-height: ${Dimensions.screenHeight}px;
    background-color: ${props => props.dark ? Colors.primary1Color : Colors.primary2Color};
    padding: 40px 60px;
    color: ${props => props.dark ? Colors.white : Colors.primary1Color};
`;

export const SectionHeading = styled.div.attrs({
  'data-flex': 30
})`
  font-size: 50px;
  font-weight: 900;
  margin: 100px 0;
`;

export const SectionSubHeading = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const SectionText = styled.div.attrs({
  'data-flex': 70
})`
  margin: 100px 0;
`;