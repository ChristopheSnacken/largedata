import styled, { css } from 'styled-components';

import { colors, spacing } from '../../constants';
import { getTextColor } from '../../utils/style';

interface IProps {
    bgColor?: string;
}

const colorStyle = ({ bgColor }: IProps) => {
    const newBgColor = bgColor || colors.lightPurple;
    const textColor = getTextColor(
        newBgColor,
        colors.lightPurple,
        colors.darkGrey
    );

    return css<IProps>`
        color: ${() => textColor};

        background-color: ${() => newBgColor};
    `;
};

export const ModalTextContainer = styled.div`
    padding: ${spacing.sm};
    text-align: center;
    border: ${spacing.sm} solid;
    border-top-color: ${colors.white};
    border-right-color: ${colors.darkBorder};
    border-bottom-color: ${colors.darkBorder};
    border-left-color: ${colors.white};
    background-color: ${colors.cellPrimary};

    ${/* sc-custom */ colorStyle}
`;
