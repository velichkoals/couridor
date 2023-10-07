import { useState } from 'react';
import './App.css';
import { WallsBoxContainer } from './components/WallsBoxContainer';
import { Board } from './components/Board';
import { BoardState } from './model';
import { Chip } from './Chip';
import StarterModal from './components/starter-modal';
import FinishModal from './components/finish-modal';

function App() {
	const [isStartModalShown, setIsStartModalShown] = useState<boolean>(true);
	const [isFinishModalShown, setIsFinishModalShown] = useState<boolean>(true);

	const [firstChip, setFirstChip] = useState<Chip>(
		new Chip(false, 'white', 10, 'First'),
	);
	const [secondChip, setSecondChip] = useState<Chip>(
		new Chip(true, 'black', 10, 'Second'),
	);
	const [winner, setWinner] = useState<Chip | null>(null);
	const [boardState, setBoardState] = useState<BoardState>({
		activeChip: firstChip,
		first: {
			x: 0,
			y: 8,
		},
		second: {
			x: 16,
			y: 8,
		},
		borders: [],
	});

	const handleStartGame = (player1: string, player2: string) => {
		const first = new Chip(false, 'white', 10, player1);
		const second = new Chip(true, 'black', 10, player2);

		setFirstChip(first);
		setSecondChip(second);
		setBoardState((prev) => ({ ...prev, activeChip: first }));

		setIsStartModalShown(false);
	};

	const handleFinishGame = () => {
		setIsFinishModalShown(true);
	};

	return (
		<div className="board-wrapper">
			<WallsBoxContainer
				position="left"
				name={firstChip.name}
				wallsLeft={firstChip.bordersLeft}
			/>
			<Board
				firstChip={firstChip}
				secondChip={secondChip}
				boardState={boardState}
			/>
			<WallsBoxContainer
				position="right"
				name={secondChip.name}
				wallsLeft={secondChip.bordersLeft}
			/>
			<StarterModal
				isModalShown={isStartModalShown}
				handleStartGame={handleStartGame}
			/>
			<FinishModal
				isModalShown={isFinishModalShown}
				winner={winner?.name || 'Player'}
			/>
		</div>
	);
}

export default App;
