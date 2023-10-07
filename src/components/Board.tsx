// import cls from 'classnames';
import './Board.css';
import { Wall } from './Wall';
import { Cell } from './Cell';

export const Board = () => {
	const cells1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className={'board'}>
			{cells1.map((cell1, index1) => {
				const odd = !!(index1 % 2);
				console.log(odd);
				return !!odd ? (
					<Wall type="vert" />
				) : (
					<Cell key={`${cell1}`} index={`${cell1}`} />
				);
				// return cells2.map((cell2, index2) => {
				// 	return !!(index1 % 2) || !!(index2 % 2) ?
				// 	<Cell key={`${cell1}-${cell2}`} index={`${cell1}-${cell2}`} />: <Wall/>
				// });
			})}
		</div>
	);
};
