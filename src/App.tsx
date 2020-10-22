import React, { useState, useCallback } from 'react';

import {
    AppContainer,
    Row,
    ImageButton,
    RowsContainer,
    Title,
    Logo,
    TitleContainers,
    InitialModal,
} from './components';
import { updateRows } from './utils/updateRows';
import LOGO from './assets/images/Logo.png';
import RESET from './assets/images/Reset.png';

const GRIDSIZE = 50;
const MINSIZECHECK = 5;
const INITIALROWS = Array.from(Array(GRIDSIZE), () =>
    new Array(GRIDSIZE).fill(0)
);

export const App: React.FC = () => {
    const [rows, setRows] = useState<number[][]>(() => INITIALROWS);
    const [initial, setInitial] = useState(true);

    // added useCallback to make sure th function is not causing a re-render of all cells in the rows
    const handleCellClick = useCallback(
        (rowIndex: number, cellIndex: number) => {
            updateRows(setRows, rowIndex, cellIndex, MINSIZECHECK);
        },
        [setRows]
    );

    return (
        <AppContainer>
            {initial && <InitialModal onClick={setInitial} />}
            <TitleContainers>
                <Logo src={LOGO} />
                <Title>FIBONACCI HUNT</Title>
                <ImageButton src={RESET} onClick={() => setRows(INITIALROWS)} />
            </TitleContainers>
            <RowsContainer>
                {rows.map((cells, index) => (
                    <Row
                        cells={cells}
                        key={`row${index}`}
                        rowIndex={index}
                        onClick={handleCellClick}
                    />
                ))}
            </RowsContainer>
        </AppContainer>
    );
};
