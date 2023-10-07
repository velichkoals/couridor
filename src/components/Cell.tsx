import cls from 'classnames';
import './Cell.css';
import { Player } from './Player';
import { BoardCell } from '../model';

type CellProps = {
	cell: BoardCell;
	active?: boolean;
	available?: boolean;
	hasChip?: boolean;
	chipColor?: boolean;
	onClick?: (x: number, y: number) => void;
};

export const Cell = (props: CellProps) => {
	const {
		cell: { x, y },
		active,
		available,
		hasChip,
		chipColor,
		onClick
	} = props;
	return (
		<div
			className={cls('cell', {
				placeholder: available,
			})}
			onClick={() => onClick?.(x, y)}
		>
			{hasChip && <Player color={!!chipColor} active={!!active} />}
		</div>
	);
};
