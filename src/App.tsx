import { useState } from "react";
import './App.css';
import { WallsBoxContainer } from './components/WallsBoxContainer';
import { Board } from './components/Board';
import { BoardState } from "./model";
import { Chip } from "./Chip";

function App() {
	const [firstChip, setFirstChip] = useState<Chip>(new Chip(false, 10, "First"))
	const [secondChip, setSecondChip] = useState<Chip>(new Chip(true, 10, "Second"))
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
		borders: []
	})

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
		</div>
	);
}

export default App;
