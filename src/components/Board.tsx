import './Board.css';
import { Row } from './Row';
import { generateBoard } from "../helpers/board";

export const Board = () => {
	const board = generateBoard();
	return (
		<div className={'board'}>
			{board.map((row, rowIndex) => (
				<Row key={`${rowIndex}`} cells={row} isHorizontal={rowIndex % 2 === 0} />
			))}
		</div>
	);
};
