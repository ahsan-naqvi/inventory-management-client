import styled from 'styled-components';
import Link from '../LinkWrapper';
import Colors from '../../Theme/Colors';


export const FooterHolder = styled.div`
    box-shadow: 0 4px 8px 0 rgba(34, 34, 34, 0.2), 0 6px 20px 0 rgba(34, 34, 34, 0.2);
`;

export const MenuRow = styled.div.attrs({
    'data-layout': 'row',
    'data-layout-align': 'space-between start'

})`

`;

export const MenuItemsHolder = styled.div.attrs({
    'data-flex': '80',
    'data-layout': 'row',
    'data-layout-align': 'end start'

})``;

export const MenuItem = styled(Link).attrs({})`
    padding: 10px;
`;


export const SubMenuItemsHolder = styled.div.attrs({
    'data-layout': 'column',
    'data-layout-align': 'start start'
})`

`;

export const SubMenuItem = styled(Link).attrs({
})`
    font-size: 9px;
    padding-left: 10px;
`;


export const Address = styled.div.attrs({

})`
    text-align: center;
    font-weight: bold;    
    font-size: 16px;
`;

export const ContactNumber = styled.div.attrs({

})`
    text-align: center;
    font-size: 16px;
`;

export const Email = styled.div.attrs({

})`
    text-align: center;
    font-size: 16px;
`;

export const CopyRight = styled.div.attrs({

})`
    text-align: center;
    font-size: 12px;
`;

export const Separator = styled.div.attrs({

})`
    height: 0.5px;
    border-top: 1px solid ${Colors.primary1Color};
    margin 20px 20%;
    opacity: 0.2;
`;