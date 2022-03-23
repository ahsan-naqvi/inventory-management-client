import styled from 'styled-components';
import Colors from '../../Theme/Colors';

export const Header = styled.div.attrs({
    'data-layout':"row",
    'data-layout-align': "end center"
})`
    width: 100%;
    padding-bottom: 20px;
    margin: 0 20px;
`;

export const Button = styled.button.attrs({
    'data-layout': 'row',
    'data-layout-align': 'center center'
})`
    width: auto;
    border-radius: 4px;
    padding: 4px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-size: 16px;
    background: ${Colors.primary2Color};
    color: ${Colors.white};
    transition: all ease 0.3s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:focus {
        outline: none;
    }
    &:hover {
        opacity: 0.8;
    }
`;

export const Icon = styled.i.attrs({
    className: 'material-icons'
})`
    transition: all ease 0.3s;
    transform: rotate(180deg);
  `;

export const ButtonLabel = styled.div`
    margin: 0 10px;
`;
