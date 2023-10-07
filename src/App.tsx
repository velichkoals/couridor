import { useState } from 'react';
import './App.css';
import { WallsBoxContainer } from './components/WallsBoxContainer';
import { Board } from './components/Board';
import { BoardState } from './model';
import { Chip } from './Chip';
import StarterModal from './components/starter-modal';

function App() {
	const [firstChip, setFirstChip] = useState<Chip>(new Chip(false, "", 10, "Black"))
	const [secondChip, setSecondChip] = useState<Chip>(new Chip(true, "", 10, "White"))
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
	const [isStartModalShown, setIsStartModalShown] = useState<boolean>(true);

	const handleStartGame = (player1: string, player2: string) => {
		setFirstChip((prev) => ({ ...prev, name: player1 }));
		setSecondChip((prev) => ({ ...prev, name: player2 }));

		setIsStartModalShown(false);
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
		</div>
	);
}

export default App;
