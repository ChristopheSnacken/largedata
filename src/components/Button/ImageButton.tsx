import React from 'react';
import styled from 'styled-components';

import { Logo } from '../Logo';

interface IProps {
    src?: string;
    onClick?(): void;
}

const BaseImageButton: React.FC<IProps> = ({ onClick, ...others }) => (
    <Logo role="button" onClick={onClick} {...others} />
);

export const ImageButton = styled(BaseImageButton)`
    font-weight: 700;
    margin-left: auto;
    cursor: pointer;
`;
