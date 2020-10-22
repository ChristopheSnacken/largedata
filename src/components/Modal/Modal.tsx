import React from 'react';
import styled from 'styled-components';

import { colors } from '../../constants';

import { ModalTextContainer } from './ModalTextContainer';

interface IProps {
    className?: string;
}

const BaseModal: React.FC<IProps> = ({ className, children }) => (
    <div className={className}>
        <ModalTextContainer bgColor={colors.cellPrimary}>
            {children}
        </ModalTextContainer>
    </div>
);

export const Modal = styled(BaseModal)<IProps>`
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;
