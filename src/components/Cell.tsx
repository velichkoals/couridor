import cls from 'classnames';
import './Cell.css';

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
			{index}
		</div>
	);
};
