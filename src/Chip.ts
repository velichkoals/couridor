import { BOARD_SIZE, STEP } from './consts';
import {
	BoardCell,
	BoardState,
	Border,
	ChipStep,
	Chip as ChipType,
} from './model';

// first/top - false

const makeStep = (currentChipCoords: BoardCell, borders: Border[]) => {
	const steps: ChipStep[] = [];

	if (currentChipCoords.x < BOARD_SIZE - 1) {
		const newX = currentChipCoords.x + STEP;

		if (
			!borders.some(
				(border) =>
					border.indexFrom.x - 1 === newX &&
					border.indexFrom.y === currentChipCoords.y &&
					border.indexTo.x - 1 === newX &&
					border.indexTo.y === currentChipCoords.y,
			)
		) {
			steps.push({
				index: {
					x: newX,
					y: currentChipCoords.y,
					isCell: true,
				},
			});
		}
	}

	if (currentChipCoords.x > 0) {
		const newX = currentChipCoords.x - STEP;

		if (
			!borders.some(
				(border) =>
					border.indexFrom.x + 1 === newX &&
					border.indexFrom.y === currentChipCoords.y &&
					border.indexTo.x + 1 === newX &&
					border.indexTo.y === currentChipCoords.y,
			)
		) {
			steps.push({
				index: {
					x: newX,
					y: currentChipCoords.y,
					isCell: true,
				},
			});
		}
	}

	if (currentChipCoords.y < BOARD_SIZE - 1) {
		const newY = currentChipCoords.y + STEP;

		if (
			!borders.some(
				(border) =>
					border.indexFrom.x === currentChipCoords.x &&
					border.indexFrom.y - 1 === newY &&
					border.indexTo.x === currentChipCoords.x &&
					border.indexTo.y - 1 === newY,
			)
		) {
			steps.push({
				index: {
					x: currentChipCoords.x,
					y: newY,
					isCell: true,
				},
			});
		}
	}

	if (currentChipCoords.y > 0) {
		const newY = currentChipCoords.y - STEP;

		if (
			!borders.some(
				(border) =>
					border.indexFrom.x === currentChipCoords.x &&
					border.indexFrom.y + 1 === newY &&
					border.indexTo.x === currentChipCoords.x &&
					border.indexTo.y + 1 === newY,
			)
		) {
			steps.push({
				index: {
					x: currentChipCoords.x,
					y: newY,
					isCell: true,
				},
			});
		}
	}

	return steps;
};

const makeJump = (
	currentChipCoords: BoardCell,
	otherChipCoords: BoardCell,
	borders: Border[],
) => {
	const steps: ChipStep[] = [];

	if (currentChipCoords.x < BOARD_SIZE - 1) {
		const newX = currentChipCoords.x + STEP * 2;

		if (
			!borders.some(
				(border) =>
					border.indexFrom.x - 1 === newX &&
					border.indexFrom.y === currentChipCoords.y &&
					border.indexTo.x - 1 === newX &&
					border.indexTo.y === currentChipCoords.y,
			)
		) {
			steps.push({
				index: {
					x: newX,
					y: currentChipCoords.y,
					isCell: true,
				},
			});
		}
	}

	if (currentChipCoords.x > 0) {
		const newX = currentChipCoords.x - STEP * 2;

		if (
			!borders.some(
				(border) =>
					border.indexFrom.x + 1 === newX &&
					border.indexFrom.y === currentChipCoords.y &&
					border.indexTo.x + 1 === newX &&
					border.indexTo.y === currentChipCoords.y,
			)
		) {
			steps.push({
				index: {
					x: newX,
					y: currentChipCoords.y,
					isCell: true,
				},
			});
		}
	}

	if (currentChipCoords.y < BOARD_SIZE - 1) {
		const newY = currentChipCoords.y + STEP;

		if (
			!borders.some(
				(border) =>
					border.indexFrom.x === currentChipCoords.x &&
					border.indexFrom.y - 1 === newY &&
					border.indexTo.x === currentChipCoords.x &&
					border.indexTo.y - 1 === newY,
			)
		) {
			steps.push({
				index: {
					x: currentChipCoords.x,
					y: newY,
					isCell: true,
				},
			});
		}
	}

	if (currentChipCoords.y > 0) {
		const newY = currentChipCoords.y - STEP;

		if (
			!borders.some(
				(border) =>
					border.indexFrom.x === currentChipCoords.x &&
					border.indexFrom.y + 1 === newY &&
					border.indexTo.x === currentChipCoords.x &&
					border.indexTo.y + 1 === newY,
			)
		) {
			steps.push({
				index: {
					x: currentChipCoords.x,
					y: newY,
					isCell: true,
				},
			});
		}
	}

	return steps;
};

export class Chip implements ChipType {
	constructor(
		public color: boolean,
		public skinColor: string = 'black',
		public bordersLeft: number = 10,
		public name: string = 'Player',
	) {}

	calculatePossibleChipMoves(boardState: BoardState): ChipStep[] {
		if (boardState.activeChip.color !== this.color) {
			return [];
		}

		const { first, second, borders } = boardState;
		const currentChipCoords = boardState.activeChip.color ? second : first;
		const otherChipCoords = boardState.activeChip.color ? first : second;

		const possibleChipMoves: ChipStep[] = [];

		if (currentChipCoords.x === otherChipCoords.x - 2) {
			possibleChipMoves.push(
				...makeJump(currentChipCoords, otherChipCoords, borders),
			);

			return possibleChipMoves;
		}

		if (currentChipCoords.y === otherChipCoords.y - 2) {
			possibleChipMoves.push(
				...makeJump(currentChipCoords, otherChipCoords, borders),
			);

			return possibleChipMoves;
		}

		if (currentChipCoords.y === otherChipCoords.y + 2) {
			possibleChipMoves.push(
				...makeJump(currentChipCoords, otherChipCoords, borders),
			);

			return possibleChipMoves;
		}

		if (currentChipCoords.x === otherChipCoords.x + 2) {
			possibleChipMoves.push(
				...makeJump(currentChipCoords, otherChipCoords, borders),
			);

			return possibleChipMoves;
		}

		possibleChipMoves.push(...makeStep(currentChipCoords, borders));

		return possibleChipMoves;
	}
}
