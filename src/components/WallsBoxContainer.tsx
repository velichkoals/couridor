import cls from 'classnames';
import './WallsBoxContainer.css';

type Props = {
	position: 'left' | 'right';
	name: string;
	wallsLeft: number;
};

export const WallsBoxContainer = (props: Props) => {
	const { position, wallsLeft, name } = props;
	return (
		<div
			className={cls('wall-box', position, {
				empty: wallsLeft === 0,
			})}
		>
			<h3>{`Walls for ${name}`}</h3>
			<h1>{wallsLeft}</h1>
		</div>
	);
};
