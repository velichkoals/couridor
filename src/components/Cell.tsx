import cls from 'classnames';
import './Cell.css';
import { Player } from './Player';

type CellProps = {
	x: number;
	y: number;
	index: string;
	hasChip?: boolean;
	chipColor?: boolean;
	onClick: (x: number, y: number) => void;
};

export const Cell = (props: CellProps) => {
	const { x, y, hasChip, chipColor, index, onClick } = props;
	return (
		<div
			className={cls('cell', {
				placeholder: false,
			})}
			onClick={() => onClick(x, y)}
		>
			{hasChip && <Player color={!!chipColor} active />}
		</div>
	);
};
