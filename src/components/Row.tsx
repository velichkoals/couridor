import './Row.css';
import { Wall } from './Wall';
import { Cell } from './Cell';
import { BoardCell, BoardState } from '../model';
import { Chip } from '../Chip';

type RowProps = {
	cells: Array<BoardCell>;
	isHorizontal?: boolean;
	firstChip: Chip;
	secondChip: Chip;
	boardState: BoardState;
};

export const Row = ({
	boardState,
	cells,
	firstChip,
	secondChip,
	isHorizontal,
}: RowProps) => {
	return (
		<div className={'row'}>
			{cells.map((cell) => {
				return cell.isCell ? (
					<Cell
						key={`${cell.x}-${cell.y}`}
						cell={cell}
						onClick={(x, y) => {
							console.log('Cell Click', x, y);
						}}
						hasChip={!!cell.hasFirstChip || !!cell.hasSecondChip}
						chipColor={cell.hasFirstChip ? firstChip.color : secondChip.color}
					/>
				) : (
					<Wall
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
