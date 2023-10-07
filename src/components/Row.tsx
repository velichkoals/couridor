import './Row.css';
import { Wall } from './Wall';
import { Cell } from './Cell';
import { BoardCell } from '../model';
import { Chip } from "../Chip";

type RowProps = {
	cells: Array<BoardCell>
	activeChip: Chip
	firstChip: Chip
	secondChip: Chip
	isHorizontal?: boolean
}

const areChipsEqual = (firstChip: Chip, secondChip: Chip): boolean =>
	firstChip.name === secondChip.name;

export const Row = ({ cells, activeChip, firstChip, secondChip, isHorizontal }: RowProps) => {
	const isCellActive = (cell: BoardCell): boolean =>
		(!!cell.hasFirstChip && areChipsEqual(activeChip, firstChip)) ||
		(!!cell.hasSecondChip && areChipsEqual(activeChip, secondChip))

	return (
		<div className={'row'}>
			{cells.map((cell) => {
				return cell.isCell ? (
					<Cell
						key={`${cell.x}-${cell.y}`}
						index={`${cell.x}-${cell.y}`}
						x={cell.x}
						y={cell.y}
						active={isCellActive(cell)}
						cell={cell}
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
						x={cell.x}
						y={cell.y}
						onClick={(x, y) => {
							console.log('Wall click', x, y);
						}}
					/>
				);
			})}
		</div>
	);
};
