import React from 'react';
import styled, { css } from 'styled-components';

import { spacing, colors } from '../../constants';
import { getTextColor } from '../../utils/style';

interface IProps {
    bgColor?: string;
    className?: string;
    onClick(): void;
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

const BaseButton: React.FC<IProps> = ({ className, onClick, children }) => (
    <div className={className} role="button" onClick={onClick}>
        {children}
    </div>
);

export const Button = styled(BaseButton)<IProps>`
    font-weight: 700;
    display: inline-block;
    margin: ${spacing.md};
    padding: ${spacing.sm};
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: box-shadow, transform;
    text-align: center;
    background-color: ${({ bgColor }) => bgColor};
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);

    ${/* sc-custom */ colorStyle}

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    }
`;
