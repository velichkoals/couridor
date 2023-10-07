import cls from 'classnames';
import './Player.css';

type PlayerProps = {
	active: boolean
	color: boolean
}

export const Player = ({ color, active }: PlayerProps) => {
	return <div className={cls('player', { player1: color, player2: !color, active })}></div>;
};
