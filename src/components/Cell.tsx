import cls from 'classnames';
import './Cell.css';
import { Player } from './Player';

type Props = {
	x: number;
	y: number;
	index: string;
	onClick: (x: number, y: number) => void;
};

export const Cell = (props: Props) => {
	const { x, y, index, onClick } = props;
	return (
		<div
			onClick={() => onClick(x, y)}
			className={cls('cell', {
				placeholder: false,
			})}
		>
			{index}
			{/* <Player active /> */}
		</div>
	);
};
