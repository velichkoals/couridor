import cls from 'classnames';
import './Wall.css';
import { useState } from 'react';
import { Border } from '../Border';
import { BoardCell, BoardState } from '../model';

type Props = {
	cell: BoardCell;
	boardState: BoardState;
	type: 'horr' | 'vert';
	onClick: (cell: BoardCell, nextCell: BoardCell) => void;
};

export const Wall = (props: Props) => {
	const { cell, type, boardState, onClick } = props;
	const [isShowWall, setShowWall] = useState(false);

	const genNextCell = () => {
		return type === 'horr'
			? {
					...cell,
					x: cell.x + 1,
			  }
			: {
					...cell,
					y: cell.y + 1,
			  };
	};

	const onMouseEnter = () => {
		const nextCell = genNextCell();
		const isShowWallCheck = Border.isBorderStepPossible(
			cell,
			nextCell,
			boardState,
		);
		if (isShowWallCheck) setShowWall(true);
		else setShowWall(false);
	};

	const onMouseLeave = () => {
		setShowWall(false);
	};

	const handleClick = () => {
		const nextCell = genNextCell();
		onClick(cell, nextCell);
	};

	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={handleClick}
			className={cls('wall', type, { active: cell.filled, show: isShowWall })}
		/>
	);
};
