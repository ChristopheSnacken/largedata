import styled, { keyframes, css } from 'styled-components';

import { colors, spacing } from '../../constants';

interface IProps {
    animate?: boolean;
    reset?: boolean;
}

const flash = () => keyframes`
  from {
    opacity: 1; 
  } 
  to {
    opacity: 0;
  }
`;

export const CellHighLight = styled.div<IProps>`
    position: absolute;
    top: -${spacing.xxs};
    bottom: -${spacing.xxs};
    left: -${spacing.xxs};
    right: -${spacing.xxs};
    background-color: ${({ reset }) =>
        reset ? colors.secondary : colors.primary};
    opacity: 0;
    pointer-events: none;
    animation: ${({ animate }) =>
        animate &&
        css`
            ${flash()} 200ms ease-in-out 1
        `};
`;
