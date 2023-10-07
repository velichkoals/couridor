import './Row.css';
import { Wall } from './Wall';
import { Cell } from './Cell';
import { BoardCell, BoardState } from '../model';
import { Chip } from '../Chip';

type RowProps = {
	cells: Array<BoardCell>;
	isHorizontal?: boolean;
	activeChip: Chip;
	firstChip: Chip;
	secondChip: Chip;
	boardState: BoardState;
};

const areChipsEqual = (firstChip: Chip, secondChip: Chip): boolean =>
	firstChip.name === secondChip.name;

export const Row = ({
	boardState,
	cells,
	firstChip,
	secondChip,
	isHorizontal,
	activeChip,
}: RowProps) => {
	const isCellActive = (cell: BoardCell): boolean =>
		(!!cell.hasFirstChip && areChipsEqual(activeChip, firstChip)) ||
		(!!cell.hasSecondChip && areChipsEqual(activeChip, secondChip));

	return (
		<div className={'row'}>
			{cells.map((cell) => {
				return cell.isCell ? (
					<Cell
						key={`${cell.x}-${cell.y}`}
						cell={cell}
						available={!!cell.available}
						active={isCellActive(cell)}
						hasChip={!!cell.hasFirstChip || !!cell.hasSecondChip}
						chipColor={cell.hasFirstChip ? firstChip.color : secondChip.color}
						onClick={(x, y) => {
							console.log('Cell Click', x, y);
						}}
					/>
				) : (
					<Wall
						key={`${cell.x}-${cell.y}`}
						type={isHorizontal ? 'vert' : 'horr'}
						boardState={boardState}
						cell={cell}
						onClick={(x, y) => {
							console.log('Wall click', x, y);
						}}
					/>
				);
			})}
		</div>
	);
};
