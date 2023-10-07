import cls from 'classnames';
import './Cell.css';
import { Player } from './Player';

type Props = {
	index: string;
	onClick?: () => void;
};

export const Cell = (props: Props) => {
	const { index, onClick } = props;
	return (
		<div
			onClick={onClick}
			className={cls('cell', {
				placeholder: false,
			})}
		>
			<Player active />
		</div>
	);
};

