import './Row.css';
import { Wall } from './Wall';
import { Cell } from './Cell';
import { BoardCell } from "../model";
import { Chip } from "../Chip";

type RowProps = {
	cells: Array<BoardCell>
	firstChip: Chip
	secondChip: Chip
	isHorizontal?: boolean
}

export const Row = ({ cells, firstChip, secondChip, isHorizontal }: RowProps) => {
	return (
		<div className={'row'}>
			{cells.map((cell) => {
				return cell.isCell ? (
					<Cell
						key={`${cell.x}-${cell.y}`}
						index={`${cell.x}-${cell.y}`}
						hasChip={!!cell.hasFirstChip || !!cell.hasSecondChip}
						chipColor={cell.hasFirstChip ? firstChip.color : secondChip.color}
					/>
				) : (
					<Wall type={isHorizontal ? "vert" : "horr"} />
				);
			})}
		</div>
	);
};
