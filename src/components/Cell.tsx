import cls from 'classnames';
import './Cell.css';
import { Player } from './Player';

type CellProps = {
	x: number;
	y: number;
	active?: boolean;
	hasChip?: boolean;
	chipColor?: boolean;
	cell?: any;
	onClick?: (x: number, y: number) => void;
};

export const Cell = ({ x, y, cell, active, hasChip, chipColor, onClick }: CellProps) => {
	return (
		<div
			className={cls('cell', {
				placeholder: false,
			})}
			onClick={() => onClick(x, y)}
		>
			{hasChip && <Player color={!!chipColor} active={!!active} />}
		</div>
	);
};
