import { BoardCell, BoardState } from './model.ts';

export class Border {
	public static isSingleBorderCollide(
		indexFrom1: BoardCell,
		indexTo1: BoardCell,
		indexFrom2: BoardCell,
		indexTo2: BoardCell,
	): boolean {
		if (indexFrom2.y === 8 || indexFrom2.x === 16) return false;

		const denominator =
			(indexTo1.x - indexFrom1.x) * (indexTo2.y - indexFrom2.y) -
			(indexTo1.y - indexFrom1.y) * (indexTo2.x - indexFrom2.x);
		const numerator1 =
			(indexFrom1.y - indexFrom2.y) * (indexTo2.x - indexFrom2.x) -
			(indexFrom1.x - indexFrom2.x) * (indexTo2.y - indexFrom2.y);
		const numerator2 =
			(indexFrom1.y - indexFrom2.y) * (indexTo1.x - indexFrom1.x) -
			(indexFrom1.x - indexFrom2.x) * (indexTo1.y - indexFrom1.y);

		if (denominator === 0) return numerator1 === 0 && numerator2 === 0;

		const r = numerator1 / denominator;
		const s = numerator2 / denominator;

		return r >= 0 && r <= 1 && s >= 0 && s <= 1;
	}

	public static isBorderStepPossible(
		indexFrom: BoardCell,
		indexTo: BoardCell,
		boardState: BoardState,
	): boolean {
		const { borders } = boardState;

		return !borders.every((border) =>
			this.isSingleBorderCollide(
				border.indexFrom,
				border.indexTo,
				indexFrom,
				indexTo,
			),
		);
	}
}
