import { useEffect, useState } from 'react';
import './App.css';
import { WallsBoxContainer } from './components/WallsBoxContainer';
import { Board } from './components/Board';
import { BoardState } from './model';
import { Chip } from './Chip';
import StarterModal from './components/starter-modal';
import FinishModal from './components/finish-modal';

function App() {
	const [isStartModalShown, setIsStartModalShown] = useState<boolean>(true);
	const [isFinishModalShown, setIsFinishModalShown] = useState<boolean>(false);

	const [firstChip, setFirstChip] = useState<Chip>(
		new Chip(false, 'white', 10, 'First'),
	);
	const [secondChip, setSecondChip] = useState<Chip>(
		new Chip(true, 'black', 10, 'Second'),
	);
	const [winner, setWinner] = useState<string>('Player');
	const [boardState, setBoardState] = useState<BoardState>({
		activeChip: firstChip,
		first: {
			x: 8,
			y: 0,
		},
		second: {
			x: 8,
			y: 16,
		},
		borders: [],
	});

	useEffect(() => {
		if (boardState.first.y === 16) {
			handleFinishGame(firstChip.name);
		}
		if (boardState.second.y === 0) {
			handleFinishGame(secondChip.name);
		}
	}, [boardState]);

	const handleStartGame = (player1: string, player2: string) => {
		const first = new Chip(false, 'white', 10, player1);
		const second = new Chip(true, 'black', 10, player2);

		setFirstChip(first);
		setSecondChip(second);
		setBoardState((prev) => ({ ...prev, activeChip: first }));

		setIsStartModalShown(false);
	};

	const handleFinishGame = (name: string) => {
		setWinner(name);
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
				setBoardState={setBoardState}
				setFirstChip={setFirstChip}
				setSecondChip={setSecondChip}
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
				winner={winner || 'Player'}
			/>
		</div>
	);
}

export default App;
