import cls from 'classnames';
import './Wall.css';
import { useState } from 'react';

type Props = {
	x: number;
	y: number;
	type: 'horr' | 'vert';
	onClick: (x: number, y: number) => void;
};

export const Wall = (props: Props) => {
	const { x, y, type, onClick } = props;
	const [isShowWall, setShowWall] = useState(false);

	const onMouseEnter = () => {
		if (y === 8) setShowWall(false);
		else setShowWall(true);
		console.log(x, y);
	};

	const onMouseLeave = () => {
		setShowWall(false);
	};

	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={() => onClick(x, y)}
			className={cls('wall', type, { active: false, show: isShowWall })}
		></div>
	);
};
