import cls from 'classnames';
import './Cell.css';
import { Player } from './Player';

type CellProps = {
	hasChip?: boolean;
	chipColor?: boolean;
	onClick?: () => void;
};

export const Cell = ({ hasChip, chipColor, onClick }: CellProps) => {
	return (
		<div
			className={cls('cell', {
				placeholder: false,
			})}
			onClick={onClick}
		>
			{hasChip && <Player color={!!chipColor} active />}
		</div>
	);
};

