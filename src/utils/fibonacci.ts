/**
 * Create the initial FIBONACCI sequence with a length of fibLength
 * @param {number} fibLength - The length of the to create initial fibonacci sequence
 * @returns {number[]} The initial FIBONACCI array
 */
const createInitialFibonacciSequence = (fibLength: number) => {
    if (fibLength < 2) {
        return [1];
    }

    if (fibLength < 3) {
        return [1, 1];
    }

    const fibSequence: number[] = createInitialFibonacciSequence(fibLength - 1);
    fibSequence.push(fibSequence[fibLength - 2] + fibSequence[fibLength - 3]);

    return fibSequence;
};

const FIBONACCI = createInitialFibonacciSequence(6);

/**
 * Updates the FIBONACCI array if the number parameter is larger than the last item in de array
 * @param {number} number - The number min number value to be in the FIBONACCI array
 */
export const updateFibonacci = (number: number) => {
    if (number <= FIBONACCI[FIBONACCI.length - 1]) return;

    const addFibonacci = () => {
        const newValue =
            FIBONACCI[FIBONACCI.length - 1] + FIBONACCI[FIBONACCI.length - 2];
        FIBONACCI.push(newValue);
        if (newValue > number) return;
        addFibonacci();
    };
    addFibonacci();
};

/**
 * Checks if the whole testArray is part of FIBONACCI array
 * @param {number[]} testArray - The array to be tested
 * @param {number} fibonacciIndex - The start index in the FIBONACCI array
 * @returns {boolean} if it's part of the FIBONACCI array
 */
const FibonacciSequenceCheck = (
    testArray: number[],
    fibonacciIndex: number
) => {
    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] !== FIBONACCI[fibonacciIndex + i]) {
            return false;
        }
    }

    return true;
};

/**
 * Finds the index of a number in the FIBONACCI array
 * @param {number} target - The number to be found in the FIBONACCI array
 * @returns {number} Index of the target in the FIBONACCI array
 */
const binarySearch = (target: number) => {
    let startIndex = 0;
    let endIndex = FIBONACCI.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (target === FIBONACCI[middleIndex]) {
            return middleIndex;
        }

        if (target > FIBONACCI[middleIndex]) {
            startIndex = middleIndex + 1;
        }

        if (target < FIBONACCI[middleIndex]) {
            endIndex = middleIndex - 1;
        }
    }

    return -1;
};

/**
 * Checks if Fibonacci sets of min lenth are in an array and resets to value 0
 * @param {number[]} row - Array to check
 * @param {number} minSize - minimal size of fibonacci check array
 * @param {number} [startIndex=0] - Start index to check in the array. Default is 0.
 * @param {number} [length=row.length] - How far it as to check within the array from the startIndex
 */
export const checkForFibonacciSets = (
    row: number[],
    minSize: number,
    startIndex = 0,
    length = row.length
) => {
    let maxChecklength = FIBONACCI.length;

    if (maxChecklength < minSize) return;

    const resetFibonacciSets = () => {
        for (let i = startIndex; i < startIndex + length; i++) {
            if (i + maxChecklength > startIndex + length) break;

            let skipToIndex = -1;
            if (i < skipToIndex) continue;

            // Added condition to adjust binarySearch result to 0 if the first two numbers are both 1.
            // binarySearch always gives back index 1 if both first numbers are equal to each other
            const fibonacciIndex =
                row[i] === 1 && row[i + 1] === 1 ? 0 : binarySearch(row[i]);

            if (fibonacciIndex !== -1) {
                const testSequence = row.slice(i, i + maxChecklength);

                if (FibonacciSequenceCheck(testSequence, fibonacciIndex)) {
                    // Reset all fibonacci sequences to 0 and skip to loop i after the reset sequence
                    for (
                        let iReset = i;
                        iReset < i + maxChecklength;
                        iReset++
                    ) {
                        row[iReset] = 0;
                        if (iReset === i + maxChecklength - 1)
                            skipToIndex = i + maxChecklength;
                    }
                }
            }
        }

        if (maxChecklength > 5) {
            maxChecklength -= 1;
            resetFibonacciSets();
        }
    };

    resetFibonacciSets();
};
