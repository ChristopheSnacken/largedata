import { updateFibonacci, checkForFibonacciSets } from '../utils/fibonacci';

/**
 * Updates the Rows by adding +1 to all items in selected row and +1 to all other rows at the same cellIndex
 * @param {setStateAction(number[][])} setRows - Function to set new state of rows
 * @param {number} rowIndex - index of clicked row
 * @param {number} cellIndex - index of clicked cell
 * @param {number} minSize - Minimal size of array to check for Fibonacci sequence
 */
export const updateRows = (
    setRows: React.Dispatch<React.SetStateAction<number[][]>>,
    rowIndex: number,
    cellIndex: number,
    minSize: number
) => {
    setRows((prevRows) => {
        const newRows = JSON.parse(JSON.stringify(prevRows)) as number[][];
        const selectedRow = newRows[rowIndex];
        selectedRow.forEach((cellValue, i) => {
            const newCellValue = cellValue + 1;
            selectedRow[i] = newCellValue;

            updateFibonacci(newCellValue);
        });

        checkForFibonacciSets(selectedRow, minSize);

        newRows.forEach((row, i) => {
            if (i === rowIndex) return;
            row[cellIndex] += 1;

            updateFibonacci(row[cellIndex]);

            const startIndex =
                cellIndex < minSize + 1 ? 0 : cellIndex - minSize + 1;

            const checkLength =
                row.length - cellIndex - 1 < minSize
                    ? minSize + row.length - cellIndex - 1
                    : minSize * 2 + 1;

            checkForFibonacciSets(row, minSize, startIndex, checkLength);
        });

        return newRows;
    });
};
