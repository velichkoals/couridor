import { useMemo } from 'react';
import './Board.css';
import { Row } from './Row';
import { generateBoard } from '../helpers/board';
import { BoardState } from '../model';
import { Chip } from '../Chip';

type BoardProps = {
	firstChip: Chip;
	secondChip: Chip;
	boardState: BoardState;
};

export const Board = ({ boardState, firstChip, secondChip }: BoardProps) => {
	const board = useMemo(
		() => generateBoard(boardState),
		[boardState]
 	);

	return (
		<div className={'board'}>
			{board.map((row, rowIndex) => (
				<Row
					key={`${rowIndex}`}
					cells={row}
					firstChip={firstChip}
					secondChip={secondChip}
					isHorizontal={rowIndex % 2 === 0}
				/>
			))}
		</div>
	);
};
