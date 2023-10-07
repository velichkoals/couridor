import cls from 'classnames';
import './WallsBoxContainer.css';

type Props = {
	position: 'left' | 'right';
	name: string;
	count: number;
};

export const WallsBoxContainer = (props: Props) => {
	const { position, count, name } = props;
	return (
		<div
			className={cls('wall-box', position, {
				empty: count === 0,
			})}
		>
			<div className="header">{`Wall for player ${name}`}</div>
			<div className="body">{count}</div>
		</div>
	);
};
