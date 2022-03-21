import React from "react";
import styled from "styled-components";
import { spin } from "../../Theme/Animations";
import Colors from "../../Theme/Colors";
import Dimensions from '../../Theme/Dimensions';

const Holder = styled.div.attrs({
    'data-layout': 'row',
    'data-layout-align': 'center center'
})`
    width: ${Dimensions.screenWidth}px;
    min-height: ${Dimensions.screenHeight}px;
    background-color: ${Colors.black};
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
`;

const Spinner = styled.div`
    border: 8px solid ${Colors.primary2Color}};
    border-top: 8px solid ${Colors.white};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: ${spin} 2s linear infinite;
`;

const Loader = () => {
    return (
        <Holder>
            <Spinner />
        </Holder>
    );
}

export default Loader;