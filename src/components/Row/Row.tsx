import React from 'react';
import styled from 'styled-components';

import { Cell } from '../Cell';

interface IProps {
    cells: number[];
    rowIndex: number;
    className?: string;
    onClick(rowIndex: number, cellIndex: number): void;
}

export const BaseRow: React.FC<IProps> = ({
    cells,
    rowIndex,
    className,
    onClick,
}) => (
    <div className={className}>
        {cells.map((cellScore: number, index: number) => (
            <Cell
                empty={cellScore === 0}
                index={index}
                key={`cell${rowIndex}-${index}`}
                rowIndex={rowIndex}
                value={cellScore}
                onClick={onClick}
            />
        ))}
    </div>
);

export const Row = styled(BaseRow)`
    display: flex;
    width: 100%;
`;
