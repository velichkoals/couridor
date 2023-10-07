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
	setBoardState: (v: BoardState) => void;
	setFirstChip: (v: Chip) => void;
	setSecondChip: (v: Chip) => void;
};

export const Board = ({
	boardState,
	setBoardState,
	firstChip,
	secondChip,
	setFirstChip,
	setSecondChip,
}: BoardProps) => {
	const board = useMemo(() => generateBoard(boardState), [boardState]);

	return (
		<div className="board">
			{board.map((row, rowIndex) => (
				<Row
					key={`${rowIndex}`}
					cells={row}
					activeChip={boardState.activeChip}
					firstChip={firstChip}
					secondChip={secondChip}
					setFirstChip={setFirstChip}
					setSecondChip={setSecondChip}
					isHorizontal={rowIndex % 2 === 0}
					boardState={boardState}
					setBoardState={setBoardState}
				/>
			))}
		</div>
	);
};
