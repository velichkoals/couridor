import { BOARD_SIZE } from './consts';
import { BoardState, ChipStep, Chip as ChipType } from './model';

// first/top - false

export class Chip implements ChipType {
	constructor(
		public color: boolean,
		public bordersLeft: number = 10,
		public name: string = 'Player',
	) {}

	calculatePossibleChipMoves(boardState: BoardState): ChipStep[] {
		if (boardState.activeChip.color !== this.color) {
			return [];
		}

		const { first, second, borders } = boardState;
		const currentChipCoords = boardState.activeChip.color ? first : second;
		const otherChipCoords = boardState.activeChip.color ? second : first;

		const possibleChipMoves: ChipStep[] = [];

		if (currentChipCoords.x < BOARD_SIZE) {
			const newX =
				otherChipCoords.x - 2 === currentChipCoords.x
					? currentChipCoords.x + 4
					: currentChipCoords.x + 2;

			if (
				!borders.some(
					(border) =>
						border.indexFrom.x - 1 === newX &&
						border.indexFrom.y === currentChipCoords.y &&
						border.indexTo.x - 1 === newX &&
						border.indexTo.y === currentChipCoords.y,
				)
			) {
				possibleChipMoves.push({
					index: {
						x: currentChipCoords.x + 2,
						y: currentChipCoords.y,
						isCell: true,
					},
				});
			}
		}

		if (currentChipCoords.x > 0) {
			const newX =
				otherChipCoords.x + 2 === currentChipCoords.x
					? currentChipCoords.x - 4
					: currentChipCoords.x - 2;

			if (
				!borders.some(
					(border) =>
						border.indexFrom.x + 1 === newX &&
						border.indexFrom.y === currentChipCoords.y &&
						border.indexTo.x + 1 === newX &&
						border.indexTo.y === currentChipCoords.y,
				)
			) {
				possibleChipMoves.push({
					index: {
						x: currentChipCoords.x - 2,
						y: currentChipCoords.y,
						isCell: true,
					},
				});
			}
		}

		if (currentChipCoords.y < BOARD_SIZE) {
			const newY =
				otherChipCoords.y - 2 === currentChipCoords.y
					? currentChipCoords.y + 4
					: currentChipCoords.y + 2;

			if (
				!borders.some(
					(border) =>
						border.indexFrom.x === currentChipCoords.x &&
						border.indexFrom.y - 1 === newY &&
						border.indexTo.x === currentChipCoords.x &&
						border.indexTo.y - 1 === newY,
				)
			) {
				possibleChipMoves.push({
					index: {
						x: currentChipCoords.x,
						y: currentChipCoords.y + 2,
						isCell: true,
					},
				});
			}
		}

		if (currentChipCoords.y > 0) {
			const newY =
				otherChipCoords.y + 2 === currentChipCoords.y
					? currentChipCoords.y - 4
					: currentChipCoords.y - 2;

			if (
				!borders.some(
					(border) =>
						border.indexFrom.x === currentChipCoords.x &&
						border.indexFrom.y + 1 === newY &&
						border.indexTo.x === currentChipCoords.x &&
						border.indexTo.y + 1 === newY,
				)
			) {
				possibleChipMoves.push({
					index: {
						x: currentChipCoords.x,
						y: currentChipCoords.y - 2,
						isCell: true,
					},
				});
			}
		}

		return possibleChipMoves;
	}
}
