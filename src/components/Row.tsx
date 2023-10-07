import './Row.css';
import { Wall } from './Wall';
import { Cell } from './Cell';
import { BoardCell } from "../model";

type RowProps = {
	cells: Array<BoardCell>
	isHorizontal?: boolean
}

export const Row = ({ cells, isHorizontal }: RowProps) => {
	return (
		<div className={'row'}>
			{cells.map((cell) => {
				return cell.isCell ? (
					<Cell key={`${cell.x}-${cell.y}`} index={`${cell.x}-${cell.y}`} />
				) : (
					<Wall type={isHorizontal ? "vert" : "horr"} />
				);
			})}
		</div>
	);
};
