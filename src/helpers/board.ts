import { BOARD_SIZE, CELLS_COUNT } from '../consts';
import { Board, BoardCell, BoardState, ChipStep } from '../model';
import { isCell } from './cell';

const EMPTY_BOARD = [
	...new Array(BOARD_SIZE).fill(0).map((row, rowIndex) =>
		new Array(isCell(rowIndex) ? BOARD_SIZE : CELLS_COUNT)
			.fill(0)
			.map((cell, cellIndex) => ({
				x: cellIndex,
				y: rowIndex,
				isCell: isCell(rowIndex) && isCell(cellIndex),
			})),
	),
];

const areCoordinatesEqual = (first: BoardCell, second: BoardCell): boolean =>
	first.x === second.x && first.y === second.y;

const setChips = (board: Board, first: BoardCell, second: BoardCell): Board =>
	board.map((row) =>
		row.map((cell) => ({
			...cell,
			hasFirstChip: areCoordinatesEqual(cell, first),
			hasSecondChip: areCoordinatesEqual(cell, second),
		})),
	);

const setAvailableSteps = (board: Board, steps: Array<ChipStep>): Board =>
	board.map((row) =>
		row.map((cell) => ({
			...cell,
			available: !!steps.find((step) => areCoordinatesEqual(cell, step.index)),
		})),
	);

export const generateBoard = (boardState: BoardState): Board => {
	const boardWithChips = setChips(
		EMPTY_BOARD,
		boardState.first,
		boardState.second,
	);
	const availableSteps =
		boardState.activeChip.calculatePossibleChipMoves(boardState);

	return setAvailableSteps(boardWithChips, availableSteps);
};
