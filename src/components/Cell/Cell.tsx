import React, { useEffect, useState, memo, useRef } from 'react';
import styled from 'styled-components';

import { colors, spacing } from '../../constants';

import { CellHighLight } from './CellHighLight';

interface IProps {
    index: number;
    rowIndex: number;
    empty?: boolean;
    value: number;
    className?: string;
    onClick(rowIndex: number, cellIndex: number): void;
}

const usePrevious = <T extends {}>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};

const BaseCell: React.FC<IProps> = ({
    className,
    value,
    onClick,
    rowIndex,
    index,
}) => {
    const [animate, setAnimate] = useState(false);
    const [reset, setReset] = useState(false);
    const prevValue = usePrevious(value);

    useEffect(() => {
        if (prevValue && prevValue > value) {
            setReset(true);
        }

        if (
            (prevValue && prevValue === 0) ||
            (prevValue !== undefined && prevValue !== value)
        ) {
            setAnimate(true);
        }
    }, [prevValue, value]);

    return (
        <div
            className={className}
            role="button"
            onClick={() => onClick(rowIndex, index)}
        >
            <CellHighLight
                animate={animate}
                reset={reset}
                onAnimationEnd={() => {
                    setReset(false);
                    setAnimate(false);
                }}
            />
            {value}
        </div>
    );
};

export const Cell = memo(styled(BaseCell)<IProps>`
    position: relative;
    display: flex;
    overflow: hidden;
    align-content: center;
    flex: 1;
    justify-content: center;
    width: ${`calc(2% - ${spacing.xxs})`};
    cursor: pointer;
    user-select: none;
    color: ${({ empty }) => empty && 'transparent'};
    border: ${spacing.xxs} solid;
    border-color: ${({ value }) =>
        value === 0
            ? `${colors.white} ${colors.darkBorder} ${colors.darkBorder} ${colors.white}`
            : 'transparent'};
    background-color: ${colors.cellPrimary};
`);
