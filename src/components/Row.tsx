import './Row.css';
import { Wall } from './Wall';
import { Cell } from './Cell';
import { BoardCell, BoardState } from '../model';
import { Chip } from '../Chip';
import { Board } from './Board';

type RowProps = {
	cells: Array<BoardCell>;
	isHorizontal?: boolean;
	activeChip: Chip;
	firstChip: Chip;
	secondChip: Chip;
	boardState: BoardState;
	setBoardState: (v: BoardState) => void;
	setFirstChip: (v: Chip) => void;
	setSecondChip: (v: Chip) => void;
};

const areChipsEqual = (firstChip: Chip, secondChip: Chip): boolean =>
	firstChip.name === secondChip.name;

export const Row = ({
	boardState,
	setBoardState,
	cells,
	firstChip,
	secondChip,
	isHorizontal,
	activeChip,
	setFirstChip,
	setSecondChip,
}: RowProps) => {
	const isCellActive = (cell: BoardCell): boolean =>
		(!!cell.hasFirstChip && areChipsEqual(activeChip, firstChip)) ||
		(!!cell.hasSecondChip && areChipsEqual(activeChip, secondChip));

	return (
		<div className="row">
			{cells.map((cell) =>
				cell.isCell ? (
					<Cell
						key={`${cell.x}-${cell.y}`}
						cell={cell}
						available={!!cell.available}
						active={isCellActive(cell)}
						hasChip={!!cell.hasFirstChip || !!cell.hasSecondChip}
						chipColor={cell.hasFirstChip ? firstChip.color : secondChip.color}
						onClick={(x: number, y: number) => {
							const { activeChip: active, first, second, borders } = boardState;
							if (boardState.activeChip) {
								setBoardState({
									activeChip: active,
									first: { x, y },
									second,
									borders,
								});
							} else {
								setBoardState({
									activeChip: active,
									first,
									second: { x, y },
									borders,
								});
							}

							console.log(boardState);

							// setBoardState();

							console.log('Cell Click', x, y);
						}}
					/>
				) : (
					<Wall
						key={`${cell.x}-${cell.y}`}
						type={isHorizontal ? 'vert' : 'horr'}
						boardState={boardState}
						cell={cell}
						onClick={(cell, nextCell) => {
							console.log('Wall click', cell, nextCell);
						}}
					/>
				),
			)}
		</div>
	);
};
