import cls from 'classnames';
import './Wall.css';
import { useState } from 'react';
import { Border } from '../Border';
import { BoardCell, BoardState } from '../model';

type Props = {
	cell: BoardCell;
	boardState: BoardState;
	type: 'horr' | 'vert';
	onClick: (x: number, y: number) => void;
};

export const Wall = (props: Props) => {
	const { cell, type, boardState, onClick } = props;
	const [isShowWall, setShowWall] = useState(false);

	const onMouseEnter = () => {
		const nextCell =
			type === 'horr'
				? {
						...cell,
						x: cell.x + 1,
				  }
				: {
						...cell,
						y: cell.y + 1,
				  };
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

	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={() => onClick(cell.x, cell.y)}
			className={cls('wall', type, { active: false, show: isShowWall })}
		/>
	);
};
