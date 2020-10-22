import React from 'react';

import { colors } from '../constants';

import { Title, Paragraph, Button, Modal } from '.';

interface IProps {
    className?: string;
    onClick(showModal: boolean): void;
}

export const InitialModal: React.FC<IProps> = ({ onClick }) => (
    <Modal>
        <Title>FIBONACCI HUNT</Title>
        <Paragraph>
            If <br />
            I’d <br />
            Become <br />
            A rabbit <br />
            Instead of a man, <br />
            I’d multiply much faster than <br />
            I now do, especially since I’ve grown so feeble <br />I can no more
            subtract or divide the years I’ve lost not making hay while the sun
            shines.
        </Paragraph>

        <Button bgColor={colors.darkBlue} onClick={() => onClick(false)}>
            START
        </Button>
    </Modal>
);
