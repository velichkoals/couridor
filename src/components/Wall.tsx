import cls from 'classnames';
import './Wall.css';

type Props = {
	type: 'horr' | 'vert';
	onClick?: () => void;
};

export const Wall = (props: Props) => {
	const { type, onClick } = props;
	return (
		<div
			onClick={onClick}
			className={cls('wall', type, { active: false })}
		></div>
	);
};
