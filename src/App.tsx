import './App.css';
import { Chip } from './model';
import { WallsBoxContainer } from './components/WallsBoxContainer';
import { Board } from './components/Board';

function App() {
	const chip1: Chip & { name: string; walls: number } = {
		color: true,
		bordersLeft: 1,
		name: 'Player 1',
		walls: 10,
	};
	const chip2: Chip & { name: string; walls: number } = {
		color: true,
		bordersLeft: 1,
		name: 'Player 1',
		walls: 10,
	};

	return (
		<div className="wrapper">
			<WallsBoxContainer
				position="left"
				name={chip1.name}
				count={chip1.walls}
			/>
			<Board />
			<WallsBoxContainer
				position="right"
				name={chip1.name}
				count={chip2.walls}
			/>
		</div>
	);
}

export default App;
