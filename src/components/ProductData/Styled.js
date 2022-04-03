import styled from 'styled-components';
import Colors from '../../Theme/Colors';


export const TableHolder = styled.table`
    width: 100%;
    padding: 10px;
    margin: 10px;
    background: ${Colors.white};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    overflow: hidden;
`;

export const TableHeader = styled.thead`
`;

export const TableBody = styled.tbody`
`;

export const Row = styled.tr`
`;

export const Column = styled.td`
    border: 2px solid ${Colors.lightBorder};
    padding: 4px 10px;
    color: ${Colors.primary1Color};
    text-align: ${props => props.left ? 'left' : 'center'};
    width: 15%;
`;

export const Label = styled.span`
    font-weight: bold;
`;

export const Button = styled.button.attrs({
    'data-layout': 'row',
    'data-layout-align': 'center center'
})`
    width: ${props => props.fullWidth ? '100%' : 'auto'};
    border-radius: 4px;
    padding: 4px;
    background-color: transparent;
    border: 0;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    font-size: 16px;
    background: ${Colors.primary2Color};
    color: ${Colors.white};
    transition: all ease 0.3s;
    margin: ${props => props.fullWidth ? '0' : '10px'};
    box-shadow: ${props => props.fullWidth ? 'none' : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'};

    &:focus {
        outline: none;
    }
    &:hover {
        opacity: 0.8;
    }

    ${(props) => {
        if (props.active) { return 'opacity: 0.8; font-weight: bold'}
        else { return 'opacity: 1'}
    }}
`;

export const Icon = styled.i.attrs({
    className: 'material-icons'
})`
    transition: all ease 0.3s;

    ${(props) => {
        if (props.direction === 'DESC') { return 'transform: rotate(90deg)'}
        else if (props.direction === 'ASC') { return 'transform: rotate(270deg)'}
        else { return 'transform: none;'}
    }}

  `;

export const ButtonLabel = styled.div`
    margin: 0 10px;
`;

export const PaginationHolder = styled.div.attrs({
    'data-layout': 'row',
    'data-layout-align': 'center center',
    'data-flex': 100
})`

`;

export const PagesLabel = styled.div`
    color: ${Colors.white};
`;

export const NoDataHolder = styled.div.attrs({
    'data-layout': 'row',
    'data-layout-align': 'center center',
})`
    padding: 10px;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    overflow: hidden;
    min-height: 500px;
    width: 100%;
    text-align: center;
    background: ${Colors.white};
    font-size:24px;
    i {
        margin-right: 20px;
    }
`;