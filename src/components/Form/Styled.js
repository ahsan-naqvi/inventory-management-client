import styled from 'styled-components';
import Colors from '../../Theme/Colors';


export const Paper = styled.form`
    ${(props) => props.auto ? `
        padding: 10px;
        margin: 10px;
    ` : `
        padding: 100px 50px;
        width: 500px;
    `}
    background: ${Colors.white};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
`;

export const Label = styled.span`
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.primary2Color}; 
`;

export const Input = styled.input`
    ${(props) => props.type === 'file' ? `
        padding: 10px;
        border: 2px solid ${Colors.lightBorder};
        margin-right: 10px;
        border-radius: 6px;
    `:`
        width: 300px;
        height: 40px;
        font-size: 16px;
        border-radius: 4px;
        border: 2px solid ${Colors.lightBorder};
        margin: 10px;
        padding: 0 6px;
    `}

    ${(props) => props.fullWidth ? `
        width: 100%;
    `:``}

    transition: all ease 0.3s;
    &:focus {
        outline: none;
    }

    &:hover {
        transform: scale(1.02);
    }


`;
export const Button = styled.button.attrs({
    'data-layout': 'column',
    'data-layout-align': 'center center'
})`
    background-color: ${Colors.primary2Color};
    color: ${Colors.white};
    min-width: 200px;
    height: 40px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:focus {
        outline: none;
    }
    &:hover {
        transform: scale(1.05);
    }
`;

export const Icon = styled.i.attrs({
    className: 'material-icons'
})`
    color: ${Colors.white};
  `;

export const ButtonLabel = styled.span`
    margin-left: 10px;
`;