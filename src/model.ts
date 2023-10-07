import { Chip as ChipInstance } from "./Chip";
export type Chip = {
	color: boolean;
	bordersLeft: number;
	// left(): void;
	// right(): void;
	// up(): void;
	// down(): void;
};

export type BoardCell = {
	x: number;
	y: number;
	isCell?: boolean;
	hasFirstChip?: boolean;
	hasSecondChip?: boolean;
};

export type Border = {
	indexFrom: BoardCell;
	indexTo: BoardCell;
};

export type Board = Array<Array<BoardCell>>

export type BoardState = {
	activeChip: ChipInstance;
	first: BoardCell;
	second: BoardCell;
	borders: Array<Border>;
};

export type BorderStep = {
	border: Border;
};

export type ChipStep = {
	index: BoardCell;
};

export type Step = ({ color: Chip } & BorderStep) | ChipStep;
