import cls from 'classnames';
import './Player.css';

export const Player = ({ active }: { active: boolean }) => {
	return <div className={cls('player player1', { active })}></div>;
};
