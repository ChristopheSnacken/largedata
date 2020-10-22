import styled from 'styled-components';

import { colors, spacing } from '../constants';

export const AppContainer = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 1000px;
    margin: auto;
    padding: 4px;
    color: ${colors.darkGreen};
    border: ${spacing.xxs} solid ${colors.darkGrey};
    background-color: ${colors.cellPrimary};
`;
