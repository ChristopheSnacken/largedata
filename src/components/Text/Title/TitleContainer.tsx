import styled from 'styled-components';

import { colors, spacing } from '../../../constants';

export const TitleContainers = styled.div`
    display: flex;
    align-items: center;
    height: ${spacing.md};
    padding: 0 ${spacing.sm};
    border: ${spacing.xxs} solid;
    border-top-color: ${colors.white};
    border-right-color: ${colors.darkBorder};
    border-bottom-color: ${colors.darkBorder};
    border-left-color: ${colors.white};
    background: linear-gradient(
        to right,
        rgba(33, 41, 89, 1) 0%,
        rgba(33, 41, 89, 1) 11%,
        rgba(80, 114, 161, 1) 56%,
        rgba(117, 172, 219, 0.7) 92%,
        rgba(125, 185, 232, 0) 100%
    );
`;
