import { keyframes } from 'styled-components';
import Colors from './Colors';


export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const expand = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.85);
  }
  75% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

export const colorPulse = keyframes`
  0% {
    background: #fafafa;
  }
  50% {
    background: #efefef;
  }
  100% {
    background: #fafafa;
  }
`;

export const flowing = keyframes`
  0%{
    left: 0;
  }
  50%{
    left: -100%;
  }
  100%{
    left: 0;
  }
`;

export const slideFromRight = keyframes`
  100% { left: 0; }

`;

export const appearIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  70% {
    opacity: 1;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const blink = keyframes`
  80% {
    transform: none;
  }
  90% {
    transform: translateY(0px) scaleY(0)
  }
`;

export const rotateEye = keyframes`
  0%{
    transform: translateY(5px);
  }
  25%{
    transform: translateY(25px);
  }
  50%{
    transform: translateY(5px);
  }
  75%{
    transform: translateY(25px);
  }
  100%{
    transform: translateY(5px);
  }
`;

export const rotation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const slide = keyframes`
  0% {
    width: 70%;
    left: 0;
  }
  25% {
    width: 100%;
    left: 0;
  }
  50% {
    width: 70%;
    left: 30%;
  }
  75% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 70%;
    left: 0;
  }
`;

export const fill = (p) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${p}%;
  }
`;

export const flash = keyframes`
0% {
  color: white;
}
100% {
  color: ${Colors.primary2Color};
}
`;
